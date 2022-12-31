import React, {useContext } from "react";
import { AuthContext } from "../../../contexts/Admin/auth";
import { Navigate } from "react-router-dom";

const AdminMainPage = () => {
    const {authenticated, admin} = useContext(AuthContext)
   

    if(!authenticated)
    return <Navigate to="/adminLogin" />

    return (<div> <h1>  Main Page</h1>
        <h2>{admin.id}</h2></div>
       
    )
}


export default AdminMainPage