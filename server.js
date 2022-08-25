const contenedor = require('./contenedor');
const contenedorCarrito = require('./contenedorCarrito');
const funciones = new contenedor('./db.txt')
const funcionesCarrito = new contenedorCarrito('./carrito.txt')
// funciones.leerArchivoPorId(23)

const express = require('express'); 
const app = express();  
app.use(express.json())
// app.use(express.urlencoded({ extended: true}))  
const port = process.env.PORT || 5000; 
// const multer = require('multer')
// app.use(express.static(__dirname + 'client'))
const { Router } = express
const routerProductos = Router()
const routerCarrito   = Router()

app.listen(port, () => console.log(`Listening on port ${port}`));  
let admin = true;
/* -------------------------------------------------------------------------- */
/*                                    RUTAS                                   */
/* -------------------------------------------------------------------------- */
// routerProductos.get('/', (req, res) => {  
    //   res.send({ express: 'PESTAÑA PRODUCTOS' });  
    // });
if(admin){
    routerProductos.get('/', async (req, res) => {  
        const archivo = await funciones.leerArchivo()
        res.send(archivo);  
    });

    routerProductos.get('/:id', async (req, res) => {  
        const {id} = req.params
        const idParseado = parseInt(id)
        const archivo = await funciones.leerElementoDeArchivoPorId(idParseado)
        res.send(archivo)
    });

    routerProductos.post('/', async (req, res) => {  
        const data = req.query
        console.log(data)
        await funciones.agregarElemento(data)

        res.json({
            msg:'¡Agregado exitosamente!',
            data
        })
    });

    routerProductos.put('/:id', async (req, res) => { 
        const { id }= req.params 
        const dataNueva = req.query 
        const archivo = await funciones.actualizarElementoDeArchivoPorId( {id: parseInt(id) , ...dataNueva} )
        res.send(archivo);
    })
    routerProductos.delete('/:id', async (req, res) => { 
        const { id } = req.params

        await funciones.eliminar(id)

        res.json({
            msj:'deleted',
        })
    })
    routerCarrito.get('/', async (req, res) => {  
        const archivo = await funcionesCarrito.leerArchivo()
        res.send(archivo);  
    });

    routerCarrito.get('/:id', async (req, res) => {  
        const {id} = req.params
        const idParseado = parseInt(id)
        const archivo = await funcionesCarrito.leerElementoDeArchivoPorId(idParseado)
        res.send(archivo)
    });

    routerCarrito.post('/', async (req, res) => {  
        const data = req.query
 
        await funcionesCarrito.agregarElemento(data)

        res.json({
            msg:'¡Agregado exitosamente!',
            data
        })
    });

    routerCarrito.put('/:id', async (req, res) => { 
        const { id }= req.params 
        const dataNueva = req.query 
        const archivo = await funcionesCarrito.actualizarElementoDeArchivoPorId( {id: parseInt(id) , ...dataNueva} )
        res.send(archivo);
    })
    routerCarrito.delete('/:id', async (req, res) => { 
        const { id } = req.params

        await funcionesCarrito.eliminar(id)

        res.json({
            msj:'deleted',
        })
    })
} else {
    console.log('no admin = no access')
}

/* -------------------------------------------------------------------------- */
/*                                   ROUTERS                                  */
/* -------------------------------------------------------------------------- */
app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)
/* --------------------------------- MULTER --------------------------------- */
// const storage = multer.diskStorage({
//     destination: (req, _file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req,file,cb) => {
//         cb(null, `${Date.now()} -${file.originalname}`)
//     }
// })

// const upload = multer({ storage })
// app.post('/uploadFile', upload.single('myFile'), (req, res, next)  => {
//     const { file } = req
//     if(!file) {
//         const error = new Error('Por favor suba un archivo')
//         error.httpStatusCode = 400
//         return next(error)
//     }
//     res.send({
//         id:1,
//         file
//     })
// })
// app.post('/uploadFiles', upload.array('myFiles'), (req, res, next)  => {
//     const { files } = req
//     if(!files || files.length === 0) {
//         const error = new Error('Por favor suba un archivo')
//         error.httpStatusCode = 400
//         return next(error)
//     }
//     res.send(files)
// })