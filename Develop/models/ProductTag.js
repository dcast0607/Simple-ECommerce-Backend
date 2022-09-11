const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}


// Similar to the "Category" and "Product" models, we start off by
// declaring a few key properties for this model. The big takeaway here
// is that this model will be referencing the "product" and "tag" models.

/*
  Requested reference: 
    ProductTag
      id
        Integer.
        Doesn't allow null values.
        Set as primary key.
        Uses auto increment.

      product_id
        Integer.
        References the Product model's id.

      tag_id
        Integer.
        References the Tag model's id.
*/

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
