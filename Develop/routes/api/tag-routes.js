const router = require('express').Router();
const { request } = require('express');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// This get route is used to get all of the tags that exist in our database,
// we do this by leveraging the "findAll" method. We also insert the "Product"
// data for the corresponding tag as part of the data that we return to the user.
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(tagsData);
  }
  catch (err) {
    res.status(400).json(err);
  };
});

// This get route allows the user to retrieve a tag by it's given ID. We do this
// by leveraging the "findByPk" method. We supply an ID that is used to identify 
// the given record in our database. The record is then returned and we also add
// product data as part of the data we return.
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    if (tagsData) {
      res.status(200).json(tagsData);
    } else {
      res.status(400).json("Please make sure you enter a valid Tag ID.");
    }
  }
  catch (err) {
    res.status(400).json(err);
  };
});

// This post route is used to create a new entry in our database. We do add some
// validation here to ensure that the user is providing a tag name so that we can
// create the new entry. If we don't validate for this, it is possible that the user
// may enter a null entry.
router.post('/', async (req, res) => {
  // create a new tag
  if (req.body.tag_name) {
    try {
      const addTag = await Tag.create({
        tag_name: req.body.tag_name,
      });
      if (addTag) {
        res.status(200).json(addTag);
      } else {
        res.status(400).json("Please make sure you enter a valid tag name!");
      };
    }
    catch (err) {
      res.status(400).json(err);
    };
  } else {
    res.status(400).json("Please make sure you include a valid tag name!");
  }
});

// This put route is used to update an existing tag entry. We do this by leveraging
// the update method. We first identify the given tag by it's ID and then we update 
// said tag with the data that is sent as part of the request body.
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updateTag) {
      res.status(200).json("Tag has been updated successfully!");
    } else {
      res.status(400).json("Please make sure that you enter a valid tag ID!");
    }
  }
  catch (err) {
    res.status(400).json(err);
  };
});

// This delete route allow the user to delete an existing tag from the database. We
// do this by leveraging the destroy method. 
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const removeTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (removeTag) {
      res.status(200).json("Tag data has been deleted!");
    } else {
      res.status(400).json("Please make sure you include a valid tag ID!");
    }
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
