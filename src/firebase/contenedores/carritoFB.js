const connectDB = require('../connection/firebase.js')
connectDB()
const { getFirestore } = require('firebase-admin/firestore'); 

const admin      = require('firebase-admin')

const db         = admin.firestore();  
const query      = db.collection('carrito');



class CarritoFB {
    
    constructor (db) {  
        this.db = getFirestore().collection('carrito'); 
    }
     
    async getById (id) {
        try{
            const getall = this.db.doc(id);
            const doc    = await getall.get();
            if (!doc.exists) {
                console.log('No existe ese documento!');
            } else {
                return doc.data(); 
            }
        }catch(error){
            return {error: error.message}
        }    
    }
 
    async getAll () {
        try{
            const queryRead = await query.get()
            const rta       = queryRead.docs.map(doc => ({ id:doc.id, ...doc.data()})) 
            console.log(rta);   
        }catch(error){
            return {error: error.message}
        }     
    }
  
    async addToCart(obj) {
        try{
            if(obj.nombre){
                let carritos =  await this.db.add(obj);
                return carritos
            }else{
                return {error: "no tiene elementos"}
            }
        }catch(error){
            console.warn('hay un error ', error)
            return {error: error.message}
        }
    }
   
    async update(id,obj) {
        try{
            if(obj.nombre){
                let carritos =  await this.db.doc(id).set(obj);
                return carritos
            }else{
                return {error: "no tiene elementos"}
            }
        }catch(error){
            console.warn('hay un error ', error)
            return {error: error.message}
        }  
    }

    async delete(id) {
        try{
            let carritos =  await this.db.doc(id).delete();
            return carritos
        }catch(error){
            return {error: error.message}
        }
    }
}

module.exports = CarritoFB