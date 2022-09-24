const express = require('express'); 
const app = express();  
app.use(express.json())
app.use(express.urlencoded({extended:true}))
 
const router = express.Router()

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








/* -------------------------------------------------------------------------- */
/*                                   MONGODB                                  */
/* -------------------------------------------------------------------------- */
// const connectDB = require('../src/mongoDB/connection/mongoDb')

// const cartController  = require('../src/mongoDB/contenedores/carritoMongo.js');
// const carrito = new cartController(connectDB());
// ___________________________________________
// router.get('/', async (req, res) => {   
//     const rta = await carrito.find()
//     res.json({rta})
// });

// router.get('/:id', async (req, res) => {  
//     const rta = await carrito.findById(req.params.id)
//     res.json({rta})
// });

// router.post('/', async (req, res) => {  
//     const rta = await carrito.guardar(req.body);
//     res.json(rta)
// });

// router.delete('/:id', async (req, res) => {  
//     const rta = await carrito.deleteById(req.params.id);
//     res.json(rta)
// });
 
module.exports = router;