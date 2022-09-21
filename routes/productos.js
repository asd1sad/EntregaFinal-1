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

const productController  = require('../src/mongoDB/contenedores/productoMongo.js')

const connectDB = require('../src/mongoDB/connection/mongoDb')
const Producto = require('../src/mongoDB/daos/productoMongo');

connectDB()

router.get('/', async (req, res) => {  
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
});

router.delete('/:id', async (req, res) => {  
    const elimina = await Producto.findByIdAndDelete(req.params.id)
    res.json({elimina})
});

module.exports = router;
