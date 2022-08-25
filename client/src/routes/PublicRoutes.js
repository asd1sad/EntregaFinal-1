import { Routes, Route, Navigate } from "react-router-dom"
import { Login } from "../Login/Login"

 
export const PublicRoutes = () =>{

    return (
        <Routes>
              <Route path='/login' element={ <Login/> } />
              <Route path='*' element={ <Navigate to='/login'/> } />
        </Routes>
    )
}