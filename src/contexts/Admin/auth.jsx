import React, { createContext, useState, useEffect} from "react";
import { createAdminSession, api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate('/adminLogin')
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

       const admin = localStorage.getItem('admin')
       const token = localStorage.getItem('Admintoken')

       if(admin && token){
            setAdmin(JSON.parse(admin))
            api.defaults.headers.Authorization = `Bearer ${token}`
       }
    }, []) 

    const login = async (email, password) => {
        setLoading(true)
       const response = await createAdminSession(email, password);
       localStorage.setItem('admin', JSON.stringify(response.data.admin))
       localStorage.setItem('Admintoken', response.data.token)

       api.defaults.headers.Authorization = `Bearer ${response.data.token}`
       setAdmin(response.data.admin)
       setLoading(false)
       navigate('/adminHome')
    }
    const logout = () => {
        localStorage.removeItem("admin")
        localStorage.removeItem('Admintoken')
        api.defaults.headers.Authorization = null
        setAdmin(null)
        navigate('/adminLogin')

    }
    
    return(
        <AuthContext.Provider
            value={{
                authenticated: Boolean(admin),
                admin,
                loading,
                login,
                logout
    
            }}
    > {children}
    </AuthContext.Provider>
    )
}