const Product = require('../daos/productoMongo');
// const connectDB = require('../connection/mongoDb')

//!ADMIN
// exports.isAdmin = (req, res, next) => {
//   const isAdmin = true;

//   if (!isAdmin) {
//     return res.status(403).json({
//       status: 'fail',
//       message: 'You are not an admin',
//     });
//   }
//   next();
// };

class ProductController {

  constructor (db) {
      this.db = db;
  }
 
  async find() {
    try {
      const productos = await Product.find();
      return productos
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id) {
    try {
      const buscaPorId = await Product.findById(id)
      return buscaPorId
    } catch (error) {
      console.log(error);
    }
  }

  async guardar(obj) {
    try {
      const agregar = await new Product({name:obj.name}).save() 
      return agregar
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      const eliminaPorId = await Product.findByIdAndDelete(id)
      return eliminaPorId 
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProductController;