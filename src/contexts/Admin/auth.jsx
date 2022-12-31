import React, { createContext, useState, useEffect} from "react";
import { createAdminSession, api } from "../../services/api";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate('')
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
       const user = localStorage.getItem('user')
       const token = localStorage.getItem('token')

       if(user && token){
            setUser(JSON.parse(user))
            api.defaults.headers.Authorization = `Bearer ${token}`
       }
    }, []) 

    const login = async (email, password) => {
       const response = await createAdminSession(email, password);
       localStorage.setItem('user', JSON.stringify(response.data.user))
       localStorage.setItem('token', response.data.token)

       api.defaults.headers.Authorization = `Bearer ${response.data.token}`
       setUser(response.data.user)
       navigate('/adminHome')
    }
    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = null
        setUser(null)
        navigate('/adminLogin')

    }
    
    return(
        <AuthContext.Provider
            value={{
                authenticated: Boolean(user),
                user,
                loading,
                login,
                logout
    
            }}
    > {children}
    </AuthContext.Provider>
    )
}