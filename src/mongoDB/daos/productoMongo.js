const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  name: {type: String, required: true}
  /* ,
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required'],
  }, */
  // thumbnail: {
  //   type: String,
  //   required: [true, 'Thumbnail is required'],
  // },
});

const Product = mongoose.model('Producto', productSchema);

module.exports = Product;


// import * as Mongoose from "mongoose";
  
// const ProductosSchema = new Mongoose.Schema({
//     producto: String,
//     thumbnail: String,
//     precio: Number,
//     dateOfJoining: {
//         type: Date,
//         default: new Date(),
//     },
//     lastUpdated: {
//         type: Date,
//         default: new Date(),
//     },
// });
  
// export default ProductosSchema;