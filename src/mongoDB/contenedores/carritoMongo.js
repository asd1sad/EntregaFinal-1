const Carrito = require('../daos/carritoMongo');
// const connectDB = require('../connection/mongoDb')
const connectDB = require('../connection/mongoDb.js');

class CartController{

  constructor (db) {
      // this.db = db /* connect() */
        this.db = connectDB()
  }
 
  async find() {
    try {
      const productos = await Carrito.find();
      return productos
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id) {
    try {
      const buscaPorId = await Carrito.findById(id)
      return buscaPorId
    } catch (error) {
      console.log(error);
    }
  }

  async guardar(obj) {
    try {
      const okey = await Carrito.create({name:obj.name})
      const agregar = await okey.save() 
      return agregar
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      const eliminaPorId = await Carrito.findByIdAndDelete(id)
      return eliminaPorId 
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports =  CartController;