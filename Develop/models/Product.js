// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model

// Most of what we have done below is fairly straightforward in the sense that
// we are defining the specific data type, auto-increment, whether it can be
// null or not, etc... There are a few things to point out. In the "price" and
// "stock" attributes we are calling a predefined method that lets us validate
// whether or not the data entered is what we expect to be entered. 
// Reference: https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/

// The other thing to point out if that we are referencing "Category" as part of this
// model. 

/* Requested reference:
    Product
      id
        Integer.
        Doesn't allow null values.
        Set as primary key.
        Uses auto increment.

      product_name
        String.
        Doesn't allow null values.

      price
        Decimal.
        Doesn't allow null values. 
        Validates that the value is a decimal.

      stock
        Integer.
        Doesn't allow null values.
        Set a default value of 10.
        Validates that the value is numeric.

      category_id
        Integer.
        References the Category model's id.
*/
Product.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
