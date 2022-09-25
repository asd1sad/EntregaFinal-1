const express = require('express'); 
const app     = express();  
const router  = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//!ELEGI TU DATABASE
const database = 'firebase'

if(database === 'mongodb') {
    const cartControllerMongoDb  = require('../src/mongoDB/contenedores/carritoMongo.js');
    const carritoMongoDb         = new cartControllerMongoDb();

    router.get('/', async (req, res) => {   
        const rta = await carritoMongoDb.find()
        res.json({rta})
    });
    
    router.get('/:id', async (req, res) => {  
        const rta = await carritoMongoDb.findById(req.params.id)
        res.json({rta})
    });
    
    router.post('/', async (req, res) => {  
        const rta = await carritoMongoDb.guardar(req.body);
        res.json(rta)
    });
    
    router.delete('/:id', async (req, res) => {  
        const rta = await carritoMongoDb.deleteById(req.params.id);
        res.json(rta)
    });
     
    module.exports = router;
}
else if(database === 'firebase'){
    const cartControllerFirebase = require('../src/firebase/contenedores/carritoFB.js')
    const carritoFirebase        = new cartControllerFirebase()

    router.get('/:id' , async (req,res) => {
            const idReq = req.params.id
            const produtoId = await carritoFirebase.getById(idReq);
            res.send(produtoId);
        })
        
    router.get('/' , async (req,res) => {
        await carritoFirebase.getAll()
        res.json('ok')
    })
    
    router.post('/' , async (req,res) => {
        const productoCreado = await carritoFirebase.addToCart(req.body);
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
        const carritoCreado = await carritoFirebase.update(req.params.id, req.body);
        if (!carritoCreado?.error){
            res.json({
                ok: true,
                mensaje: 'El Post se edito correctamente',
                id: carritoCreado
            })
        }else {
            res.json({
                ok: false,
                mensaje: 'El post no se pudo editar ',
                error: carritoCreado?.error,
            })
        }
    })
    
    router.delete('/:id' , async (req,res) => {
        await carritoFirebase.delete(req.params.id)
        res.json('eliminado')
    })
    module.exports = router;
}
else{
    const carritoControllerTxt   = require('../src/txtFiles/dao/carritoTxt.js')
    const carritoTxt             = new carritoControllerTxt()
    module.exports = router;
} 