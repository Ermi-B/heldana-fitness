const db = require("../models");

const Product = db.Product;
const Order = db.Order;
const User = db.User;
const ProductOrder = db.ProductOrder;

exports.getAllOrder = async (req, res) => {
  try {
    const order = await Order.findAll({
      include: [{ model: Product,as:'products' }, { model: User }],
    });
    if (!order) {
      return res.status(404).json({ message: "No Order found" });
    }
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id, {
      include: [{ model: Product,as:'products'}, { model: User }],
    });
    if (!order) {
      return res.status(404).json({ message: "no order found with this id" });
    }
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const {
      status,
      total_price,
      shipping_address,
      billing_address,
      payment_method,
    } = req.body;
    const order = await Order.create({
      status,
      total_price,
      shipping_address,
      billing_address,
      payment_method,
    });
    if (order) {
      res
        .status(201)
        .json({ order, message: "order created successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOrder = async (req, res) => {
  const {
    status,
    total_price,
    shipping_address,
    billing_address,
    payment_method,
  } = req.body;

  try {
    const order = await Order.findByPk(req.params.id);

    if (order) {
      // Update the blog record
      await order.update({
        status,
        total_price,
        shipping_address,
        billing_address,
        payment_method,
      });

      res
        .status(200)
        .json({ order, message: "order updated successfully" });
    } else {
      res.status(404).json({ message: "product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);

    if (order) {
      // Delete the blog record
      await order.destroy();

      res.status(201).json({order, message: "order deleted successfully" });
    } else {
      res.status(404).json({ message: "order not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
