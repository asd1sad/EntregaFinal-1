const express = require('express'); 
const app = express();  
app.use(express.json())
 
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

const cartController  = require('../controllers/carritoMongo')
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

router.get('/', async (req, res) => {  
    cartController.createCart 
    // const archivo = await funcionesCarrito.leerArchivo()
    // res.send(archivo);  
});

// router.get('/:id', async (req, res) => {  
//     const {id} = req.params
//     const idParseado = parseInt(id)
//     const archivo = await funcionesCarrito.leerElementoDeArchivoPorId(idParseado)
//     res.send(archivo)
// });

// router.post('/', async (req, res) => {  
//     const data = req.query

//     await funcionesCarrito.agregarElemento(data)

//     res.json({
//         msg:'¡Agregado exitosamente!',
//         data
//     })
// });

// router.put('/:id', async (req, res) => { 
//     const { id }= req.params 
//     const dataNueva = req.query 
//     const archivo = await funcionesCarrito.actualizarElementoDeArchivoPorId( {id: parseInt(id) , ...dataNueva} )
//     res.send(archivo);
// })

// router.delete('/:id', async (req, res) => { 
//     const { id } = req.params

//     await funcionesCarrito.eliminar(id)

//     res.json({
//         msj:'deleted',
//     })
// })
 
module.exports = router;