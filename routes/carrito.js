const express = require('express'); 
const app = express();  
app.use(express.json())
app.use(express.urlencoded({extended:true}))
 
const router = express.Router()

// switch(process.env.NODE_ENV) {
//     case 'mongodb':
//         cartController = require('../controllers/carritoMongo');
//       break;
//     // case y:
//       // code block
//     //   break;
//     default:
//         cartController = require('../controllers/carritoTxt')
//   }

// aguanta
// switch (process.env.NODE_ENV) {
//     case 'mongodb':
//       cartController = require('../controllers/cartControllerMongoDB');
//       break;
    // case 'firebase':
    //   cartController = require('../controllers/cartControllerFirebase');
    //   break;
    // default:
    //   cartController = require('../controllers/cartControllerFile');
//   }

// router.route('/').post(cartController.createCart);
// router.route('/:id').delete(cartController.deleteCart);
// router
//   .route('/:id/products')
//   .post(cartController.addProductToCart)
//   .get(cartController.getProductsFromCart);
// router
//   .route('/:id/products/:productId')
//   .delete(cartController.deleteProductFromCart);

// const funcionesCarritoMongodb = new contenedorCarrito ('./carrito.txt')
// const contenedorCarrito = require('../controllers/carritoTxt');
// const funcionesCarrito = new contenedorCarrito ('./carrito.txt')

const cartController  = require('../src/mongoDB/contenedores/carritoMongo.js')
const connectDB = require('../src/mongoDB/connection/mongoDb')
const Producto = require('../src/mongoDB/daos/carritoMongo');

connectDB()

router.get('/', async (req, res) => {  
    // cartController.createCart 
    // res.json('Carrito Creado');  
    const productos = await Producto.find();
    res.json({productos});
});

router.get('/:id', async (req, res) => {  
    const buscaPorId = await Producto.findById(req.params.id)
    res.json({buscaPorId});
});

router.post('/', async (req, res) => {  
    const creacionProducto = req.body
 
    const newProducto = new Producto(creacionProducto);
    await newProducto.save()
    res.json({
        newProducto
    })

/*     const agregoProducto = await cartController.save(producto)  */

    // res.json({
    //     msg:`Producto agregado ${producto}`/* ,
    //     obj:agregoProducto */
    // });  
});

router.delete('/:id', async (req, res) => {  
    const elimina = await Producto.findByIdAndDelete(req.params.id)
    res.json({elimina})
});

 
module.exports = router;