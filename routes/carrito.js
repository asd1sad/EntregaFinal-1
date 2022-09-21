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

const connectDB = require('../src/mongoDB/connection/mongoDb')

const cartController  = require('../src/mongoDB/contenedores/carritoMongo.js');
const carrito = new cartController(connectDB());

router.get('/', async (req, res) => {   
    // const productos = await Cart.find(); res.json({productos});
    const rta = await carrito.find()
    res.json({rta})
});

router.get('/:id', async (req, res) => {  
    // const buscaPorId = await Producto.findById(req.params.id);res.json({buscaPorId});
    const rta = await carrito.findById(req.params.id)
    res.json({rta})
});

//save no es una funcion (?)
router.post('/', async (req, res) => {  
    const creacionProducto = req.body
    // const newProducto = new Producto(creacionProducto);
    // await newProducto.save()
    // res.json({newProducto})

    // const rta = await carrito.save(req.body);
    // res.json(rta)
    
    const carrito = new carrito(creacionProducto);
    await carrito.save()
    res.json({carrito})

    ///
    // const creacionProducto = req.body
 
    // const newProducto = new Producto(creacionProducto);
    // await newProducto.save()
    // res.json({
    //     newProducto
    // })
});

router.delete('/:id', async (req, res) => {  
    const rta = await carrito.deleteById(req.params.id);
    res.json(rta)
});

 
module.exports = router;