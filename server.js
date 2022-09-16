const app = require('./app')

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Listening on port ${port}`));  


































// funciones.leerArchivoPorId(23)
// app.use(express.urlencoded({ extended: true}))  
// const multer = require('multer')
// app.use(express.static(__dirname + 'client'))
// let admin = true;
/* -------------------------------------------------------------------------- */
/*                                    RUTAS                                   */
/* -------------------------------------------------------------------------- */
// routerProductos.get('/', (req, res) => {  
    //   res.send({ express: 'PESTAÑA PRODUCTOS' });  
    // });
    
// if(admin){
//     routerProductos.get('/', async (req, res) => {  
//         const archivo = await funciones.leerArchivo()
//         res.send(archivo);  
//     });

   
  
// } else {
//     console.log('no admin = no access')
// }

 
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