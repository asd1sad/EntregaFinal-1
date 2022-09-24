const express = require('express'); 
const app = express();  

app.use(express.json({ extended: true }))
 
const router = express.Router();
// const contenedor = require('../bdd/txtFiles/controllers/productosTxt.js');
// const funciones = new contenedor('./db.txt')

// router
//   .route('/')
//   .get(productController.getProducts)
//   .post(productController.isAdmin, productController.createProduct);
// router
//   .route('/:id')
//   .get(productController.getProduct)
//   .put(productController.isAdmin, productController.updateProduct)
//   .delete(productController.isAdmin, productController.deleteProduct);

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

// const productController  = require('../src/mongoDB/contenedores/productoMongo.js')

// const productController1 = new productController
const connectDB = require('../src/mongoDB/connection/mongoDb')

const productController = require('../src/mongoDB/daos/productoMongo');
const producto = new productController(connectDB());

const Producto = require('../src/mongoDB/daos/productoMongo');

router.get('/', async (req, res) => {  
    // const productos = await Producto.find(); res.json({productos});
    const rta = await productController.find()
    res.json({rta})
});

router.get('/:id', async (req, res) => {  
    const rta = await productController.findById(req.params.id)
    res.json({rta})
});

router.post('/', async (req, res) => {  
    const creacionProducto = req.body

    const newProducto = new Producto(creacionProducto);
    await newProducto.save()
    res.json({
        newProducto
    })
    // console.log(creacionProducto);
    // res.end()
    // const rta = await productController.guardar(creacionProducto)
    // res.json(rta)
});

router.delete('/:id', async (req, res) => {  
    const elimina = await productController.findByIdAndDelete(req.params.id)
    res.json({elimina})
});

module.exports = router;

// router.get('/', async (req, res) => {   
//     // const productos = await Cart.find(); res.json({productos});
//     const rta = await carrito.find()
//     res.json({rta})
// });

// router.get('/:id', async (req, res) => {  
//     // const buscaPorId = await Producto.findById(req.params.id);res.json({buscaPorId});
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