const mongoose = require('mongoose')

// mongodb+srv://silvestre:chiveria12!@cluster0.nzjdktb.mongodb.net/test

const connectDB = async () => {
    try {
        // const url = 'mongodb://localhost:27017/ecommerce'
        const url ='mongodb://localhost:27017/ecommerce'
        // const url = process.env.MONGODB_CONNECT
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDb conectado');
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB



// import * as Mongoose from 'mongoose';
// import * as dotenv from 'dotenv'
// import {productosModel, carritosModel} from '../model/all.model.js';
// dotenv.config()

// let database;
// export const connect = () => {
//     // Add your own uri below, here my dbname is UserDB
//     // and we are using the local mongodb
//     const url = process.env.MONGO_URI;
    
  
//     if (database) {
//         return;
//     }
//     // In order to fix all the deprecation warnings, 
//     // below are needed while connecting
//     Mongoose.connect(url);
  
//     database = Mongoose.connection;
  
  
//     return {
//         productosModel,
//         carritosModel
//     };
// };
  
// // Safer way to get disconnected
// export const disconnect = () => {
//     if (!database) {
//         return;
//     }
  
//     Mongoose.disconnect();
// };

