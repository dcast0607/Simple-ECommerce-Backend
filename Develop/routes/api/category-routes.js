// We bring in the necessary packages and dependencies.
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// This endpoint is used to retrieve all of the categories that currently
// exist in our database. We do this by calling the "findAll" method which
// should return all the categories that currently exist in our database. 
// We also add the "Product" model as part of the data we return as a response.
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoriesData = await Category.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(categoriesData);
  }
  catch (err) {
    res.status(400).json(err);
  };
});

// This get route is doing a few things, the first thing we do is we use
// the "findByPk" method to identify the category based on the id that is 
// passed as a query parameter. We add the "Product" model as part of the
// data that we return to the user. 
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Product,
          },
        ],
      });
      if (categoryData) {
        res.status(200).json(categoryData);
      } else {
        res.status(400).json("Please make sure you add a valid category ID.");
      };
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// This post route is used to create a new category entry in our database
// we take the "category_name" that's passed as part of the request body and
// use this data to create a new category entry in our database. Once the 
// category has been created, we then return the new category data to the user.

// We also do some basic validation to verify that the user has entered a 
// "category_name".
router.post('/', async (req, res) => {
  // create a new category
  try {
    if (req.body.category_name) {
      const newCategory = await Category.create({
        category_name:  req.body.category_name,
      })
      res.status(200).json(newCategory);
    } else {
      res.status(400).json("Please enter a category name");
    }
  }
  catch (err) {
    res.status(400).json(err);
  };
});


// This put route allows us to update an existing category entry in our database.
// We do this by using the "update" method which requires that we pass both our
// new data and a parameter that allows us to identify the entry to be updated. 
// If we are not able to update the category due to no category ID or an invalid
// category ID, we present the user with an error message. 
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }, 
    });
    if (updateCategory) {
      console.log(updateCategory);
      res.status(200).json("Category has been updated!");
    } else {
      res.status(400).json("Please make sure you enter a valid category ID.");
    }
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// This delete route will allow us to remove an existing category entry from our
// database. We accomplish this by using the "destroy" method which allows us to
// remove an entry from the database by providing a unique ID of that entry.

// If an invalid ID is provided or no ID is provided, we present the user with
// an error message. 
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const removeData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (removeData) {
      res.status(200).json("Category has been removed successfully!");
    } else {
      res.status(400).json("Please make sure you have a valid category ID!");
    }
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
