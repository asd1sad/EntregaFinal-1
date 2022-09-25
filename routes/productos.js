const express = require('express'); 
const app = express();  

app.use(express.json({ extended: true }))
 
const router = express.Router();

// const contenedor = require('../bdd/txtFiles/controllers/productosTxt.js');
// const funciones = new contenedor('./db.txt')

//!ELEGI TU DATABASE
const database = 'firebase'

if(database === 'mongodb'){
    const productControllerMongoDB  = require('../src/mongoDB/contenedores/productoMongo.js')

    const productController = new productControllerMongoDB()
    const connectDB = require('../src/mongoDB/connection/mongoDb')
    
    const Producto          = require('../src/mongoDB/daos/productoMongo');
    
    router.get('/', async (req, res) => {  
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
    });
    
    router.delete('/:id', async (req, res) => {  
        const elimina = await productController.findByIdAndDelete(req.params.id)
        res.json({elimina})
    });
    
    module.exports = router;
}
else if(database === 'firebase'){
    const productControllerFirebase = require('../src/firebase/contenedores/productosFB.js') ;
    const productController         = new productControllerFirebase()

    router.get('/:id' , async (req,res) => {
        const produtoId = await productController.getById(req.params.id);
        res.send(produtoId);
    })

    router.get('/' , async (req,res) => {
        await productController.getAll()
        res.json('ok')
    })

    router.post('/' , async (req,res) => {
        const productoCreado = await productController.addToCart(req.body);
        if (!productoCreado?.error){
            res.json({
                ok: true,
                mensaje: 'El Post se agrego correctamente',
                id: productoCreado
            })
        }else {
            res.json({
                ok: false,
                mensaje: 'El post no se agrego por que el objeto esta vacio',
                error: productoCreado?.error,
            })
        }
    })

    router.put('/:id' , async (req,res) => {
        const productoCreado = await productController.update(req.params.id, req.body);
        if (!productoCreado?.error){
            res.json({
                ok: true,
                mensaje: 'El Post se edito correctamente',
                id: productoCreado
            })
        }else {
            res.json({
                ok: false,
                mensaje: 'El post no se pudo editar ',
                error: productoCreado?.error,
            })
        }
    })

    router.delete('/:id' , async (req,res) => {
        await productController.delete(req.params.id)
        res.json('eliminado')
    })

    module.exports = router;
}
else{
    console.log('hola');
}

/* -------------------------------------------------------------------------- */
/*                                  FIREBASE                                  */
/* -------------------------------------------------------------------------- */
// const contenedor        = require('../src/firebase/contenedores/productosFB.js') ;
// const productController = new contenedor()

// router.get('/:id' , async (req,res) => {
//     const produtoId = await productController.getById(req.params.id);
//     res.send(produtoId);
// })

// router.get('/' , async (req,res) => {
//     await productController.getAll()
//     res.json('ok')
// })

// router.post('/' , async (req,res) => {
//     const productoCreado = await productController.addToCart(req.body);
//     if (!productoCreado?.error){
//         res.json({
//             ok: true,
//             mensaje: 'El Post se agrego correctamente',
//             id: productoCreado
//         })
//     }else {
//         res.json({
//             ok: false,
//             mensaje: 'El post no se agrego por que el objeto esta vacio',
//             error: productoCreado?.error,
//         })
//     }
// })

// router.put('/:id' , async (req,res) => {
//     const productoCreado = await productController.update(req.params.id, req.body);
//     if (!productoCreado?.error){
//         res.json({
//             ok: true,
//             mensaje: 'El Post se edito correctamente',
//             id: productoCreado
//         })
//     }else {
//         res.json({
//             ok: false,
//             mensaje: 'El post no se pudo editar ',
//             error: productoCreado?.error,
//         })
//     }
// })

// router.delete('/:id' , async (req,res) => {
//     await productController.delete(req.params.id)
//     res.json('eliminado')
// })

/* -------------------------------------------------------------------------- */
/*                                   MONGODB                                  */
/* -------------------------------------------------------------------------- */
// const productController  = require('../src/mongoDB/contenedores/productoMongo.js')

// const productController1 = new productController
// const connectDB = require('../src/mongoDB/connection/mongoDb')

// // const producto          = new productController(connectDB());

// const Producto          = require('../src/mongoDB/daos/productoMongo');

// router.get('/', async (req, res) => {  
//     const rta = await productController.find()
//     res.json({rta})
// });

// router.get('/:id', async (req, res) => {  
//     const rta = await productController.findById(req.params.id)
//     res.json({rta})
// });

// router.post('/', async (req, res) => {  
//     const creacionProducto = req.body
//     const newProducto = new Producto(creacionProducto);
//     await newProducto.save()
//     res.json({
//         newProducto
//     })
// });

// router.delete('/:id', async (req, res) => {  
//     const elimina = await productController.findByIdAndDelete(req.params.id)
//     res.json({elimina})
// });

// module.exports = router;