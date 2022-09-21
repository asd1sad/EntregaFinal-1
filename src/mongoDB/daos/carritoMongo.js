const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  name: { type: String, required: true} 
  // products: [
  //   {
  //     productId: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'Product',
  //       required: [true, 'Product ID is required'],
  //     },
  //     quantity: {
  //       type: Number,
  //       required: [true, 'Quantity is required'],
  //     },
  //   },
  // ],
});

const Cart = mongoose.model('Carrito', cartSchema);

module.exports = Cart;