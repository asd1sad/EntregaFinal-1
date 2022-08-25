import { createContext, useState, useContext } from "react"
 
const users = [
    {email: 'silvestre@bosch.com', pass: 'coderhouse'} 
]

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({
        loggedIn: true,
        userId:'silvestre@bosch.com'
    })

    const [error, setError] = useState({})

    const login = (values) => {
        const {email, password} = values
        
        setError({})

        const match = users.find((user) => user.email === email )

        if (match) {
           if (match.pass === password) {
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else {
                setError({
                    password:'Password incorrecto'
                })
            } 
        } else {
            setError({
                email:'Usuario no encontrado'
            })
        }  
    }
    

    const logout = () => {
        setAuth({
            loggedIn: false,
            userId:null
        })
    }

    return (
        <AuthContext.Provider value={{auth, error, login, logout}}>
                {children}
        </AuthContext.Provider>  
    )
}