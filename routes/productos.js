const express = require('express'); 
const app = express();  

app.use(express.json())
 
const router = express.Router();
const contenedor = require('../controllers/productosTxt');
const funciones = new contenedor('./db.txt')
// router
//   .route('/')
//   .get(productController.getProducts)
//   .post(productController.isAdmin, productController.createProduct);
// router
//   .route('/:id')
//   .get(productController.getProduct)
//   .put(productController.isAdmin, productController.updateProduct)
//   .delete(productController.isAdmin, productController.deleteProduct);

router.get('/:id', async (req, res) => {  
    const {id} = req.params
    const idParseado = parseInt(id)
    const archivo = await funciones.leerElementoDeArchivoPorId(idParseado)
    res.send(archivo)
});

router.post('/', async (req, res) => {  
    const data = req.query
    console.log(data)
    await funciones.agregarElemento(data)

    res.json({
        msg:'¡Agregado exitosamente!',
        data
    })
});

router.put('/:id', async (req, res) => { 
    const { id }= req.params 
    const dataNueva = req.query 
    const archivo = await funciones.actualizarElementoDeArchivoPorId( {id: parseInt(id) , ...dataNueva} )
    res.send(archivo);
})
router.delete('/:id', async (req, res) => { 
    const { id } = req.params

    await funciones.eliminar(id)

    res.json({
        msj:'deleted',
    })
})

module.exports = router;
