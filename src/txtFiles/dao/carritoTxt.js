const fs = require ('fs')

class ContenedorCarrito {

    constructor (ruta) {
        this.ruta = ruta;
    }

    async leerArchivo () {
        const lectura = await fs.promises.readFile(this.ruta,(error,data) => {
            if(data) return data;
            if(error) return error; 
        })
        const lecturaParseada = JSON.parse(lectura)
        if(lecturaParseada.length) return lecturaParseada
        else return console.log(null)
    }

    async leerElementoDeArchivoPorId (id) {
        const lectura = await fs.promises.readFile(this.ruta,(error,data) => {
            if(data) return data;
            if(error) return error; 
        })
        const lecturaParseada = JSON.parse(lectura)
        const producto = lecturaParseada.find(p => p.id === id);
        producto ? console.log(producto) : console.log(`No existe producto con id = ${id}`) 
    }

    async agregarElemento (obj) {
        try{
            let timestamp = Date.now()
            const lectura = await fs.promises.readFile(this.ruta,(error,data) => {
                if(data) return data;
                if(error) return error; 
            })
            const lecturaParseada = JSON.parse(lectura)

            if (lecturaParseada.length) {
                await fs.promises.writeFile(this.ruta, JSON.stringify( [...lecturaParseada, {...obj, timestamp, id: lecturaParseada[lecturaParseada.length-1].id + 1} ], null, 2))
            }
            else {
                await fs.promises.writeFile(this.ruta, JSON.stringify( [{...obj, id: 1}], null, 2))
            }
            console.log(`El archivo tiene el id ${ lecturaParseada[lecturaParseada.length-1].id + 1} `)
        } catch (error) {
            console.log(error)
        }
    }
    async actualizarElementoDeArchivoPorId (obj) {
        try{
            const lectura = await fs.promises.readFile(this.ruta,(error,data) => {
                if(data) return data;
                if(error) return error; 
            })
            const lecturaParseada = JSON.parse(lectura) //array
            const productoIndexado = lecturaParseada.findIndex(producto => producto.id === obj.id) //index en array

            if (productoIndexado !== -1) {
                lecturaParseada[productoIndexado] = obj
                await fs.promises.writeFile(this.ruta, JSON.stringify( lecturaParseada, null, 2))
                console.log('okey el put')
            }
            else{
                console.log(`No existe el producto con ese id ${obj.id}`)
            }
        } catch (error) {
                console.log(`Hubo error, status : ${error}`)
            }
    }

    async eliminar (id) {
        try {
            let data = await fs.promises.readFile( this.ruta,'utf-8')
            let dataParse = JSON.parse(data)

            let producto = dataParse.find(p => p.id == id)
            
            if(producto) {
                let eliminado = dataParse.filter(p => p.id != id)
                await fs.promises.writeFile(this.ruta, JSON.stringify( eliminado , null, 2))
                console.log('Eliminado correctamente')
            }else{
                console.log('NO PRODUCT FOR SUCH ID')
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ContenedorCarrito