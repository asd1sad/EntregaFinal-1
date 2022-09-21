// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });

// switch (process.env.NODE_ENV) {
//   case 'mongodb':
//     const mongoose = require('mongoose');

//     const DB = process.env.DATABASE.replace(
//       '<PASSWORD>',
//       process.env.DATABASE_PASSWORD
//     );

//     mongoose
//       .connect(DB, {
//         useNewUrlParser: true,
//       })
//       .then(() => console.log('DB connection successful!'));

//     console.log('Using MongoDB!');
//     break;
// //   case 'firebase':
// //     const admin = require('firebase-admin');
// //     const serviceAccount = require('./ch-ecommerce-api-firebase-adminsdk-wb3pi-b93aee5864.json');

// //     admin.initializeApp({
// //       credential: admin.credential.cert(serviceAccount),
// //     });

// //     console.log('Using Firebase!');
// //     break;
//   default:
//     console.log('Using File System!');
// }

const app = require('./app')

const port = /* process.env.PORT || */ 5000; 

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