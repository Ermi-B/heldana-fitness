'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category,{foreignKey: 'category_id'});
      Product.belongsToMany(models.Order, {
        through: models.OrderProduct,
        foreignKey: 'product_id',
        as:'orders'
        
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    color: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};