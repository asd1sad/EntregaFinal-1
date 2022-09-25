const express = require('express'); 

const productRouter = require('./routes/productos');
const cartRouter = require('./routes/carrito');

const app = express();  

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/products', productRouter); 
app.use('/api/cart', cartRouter);

module.exports = app;