import { Productos } from "../Productos/Productos.js"
import { Carrito } from "../Carrito/Carrito.js"
import { Routes, Route, Navigate  } from 'react-router-dom'


export const PrivateRoutes = () => {

    return (
        <>
            <Routes>  
                <Route path='/api/productos'        element={<Productos /> } />
                <Route path='/api/carrito' element={<Carrito/> } />
                <Route path='*'        element={ <Navigate to={'/api/productos'}/> } />
            </Routes>
        </>
    )
}