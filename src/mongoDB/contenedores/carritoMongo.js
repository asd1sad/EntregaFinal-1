const Carrito= require('../daos/carritoMongo');

// const connectDB = require('../connection/mongoDb')

class CartController {

  constructor (db) {
      this.db = db /* connect() */
  }
 
  async find() {
    try {
      // const carrito = await Carrito.find(); return carrito;
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

  async save(obj) {
    try {
      const agregar = await Carrito.save(obj) 
      return agregar
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      // const eliminaPorId = await Carrito.findByIdAndDelete(id)
      const eliminaPorId = await Carrito.findByIdAndDelete(id)
      return eliminaPorId 
    } catch (error) {
      console.log(error);
    }
  }
//     async save(obj){
//         try{
//           if(obj.producto && obj.precio /* && obj.thumbnail && obj.idUser && obj.idProducto */){
//               let carritos =  await this.db.create({
//                   producto: obj.producto,
//                   precio: obj.precio,
//                  /*  thumbnail: obj.thumbnail,
//                   idProducto: obj.idProducto,
//                   idUser: obj.idUser, */
//               });
//               carritos.save();
//               return carritos
//           }else{
//               return {error: "no tiene elementos"}
//           }
//       }catch(error){
//           console.warm('hay un error ', error)
//           return {error: error.message}
//       }
//   }
//   async getById(id){
//       try{
//           let getall =  await this.db.find({id: _id})
//           return getall; 
//       }catch(error){
//           return {error: error.message}
//       }
//   }
//   async getAll(){
//       try{
//           let getall =  await this.db.find({})
//           return getall; 
//       }catch(error){
//           return {error: error.message}
//       }
//   }
//   async updateById(id, obj) {
//       try{
//           if(obj.producto && obj.precio && obj.thumbnail){
//               let carritos =  await this.db.findOneAndUpdate(
//                   {_id: id},
//                   {
//                   producto: obj.producto,
//                   precio: obj.precio,
//                   thumbnail: obj.thumbnail
//               });
//               carritos.save();
//               return carritos
//           }else{
//               return {error: "no tiene elementos"}
//           }
//       }catch(error){
//           console.warm('hay un error ', error)
//           return {error: error.message}
//       }
//   }
//   async deleteById(id){
//       try{
//           let getall =  await this.db.deleteOne({ _id: id });
//           return getall; 
//       }catch(error){
//           return {error: error.message}
//       }
//   }
//   async deleteAll(){
//       try {
//           await fs.promises.writeFile(this.archivo, '[]' ,'utf8')   
//       } catch (error) {
//           console.error('El archivo no se pudo grabar ', error)

//       }
//   }
}

module.exports =  CartController;