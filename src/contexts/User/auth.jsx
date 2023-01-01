import React, { createContext, useState, useEffect} from "react";
import {api, createUserSession } from "../../services/api";
import { useNavigate } from "react-router-dom";


export const AuthContextUser = createContext()

export const AuthProviderUser = ({children}) => {
    const navigate = useNavigate('/user/login')
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
        setLoading(true)
       const response = await createUserSession(email, password);
       localStorage.setItem('user', JSON.stringify(response.data.user))
       localStorage.setItem('token', response.data.token)

       api.defaults.headers.Authorization = `Bearer ${response.data.token}`
       setUser(response.data.user)
       setLoading(false)
       navigate('/user/home')
    }
    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = null
        setUser(null)
        navigate('/user/login')

    }
    
    return(
        <AuthContextUser.Provider
            value={{
                authenticated: Boolean(user),
                user,
                loading,
                login,
                logout
    
            }}> 
            {children}
        </AuthContextUser.Provider>
    )
}
