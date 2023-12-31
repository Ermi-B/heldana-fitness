'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User,{foreignKey:'user_id'})
      Order.belongsToMany(models.Product, {
        through:models.OrderProduct,
        foreignKey: 'order_id',
        as:'products'
        
      });
    }
  }
  Order.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    total_price: DataTypes.DECIMAL,
    shipping_address: DataTypes.STRING,
    billing_address: DataTypes.STRING,
    payment_method: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};