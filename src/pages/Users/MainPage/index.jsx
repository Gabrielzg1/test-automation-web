import React, {useContext } from "react";
import { AuthContextUser } from "../../../contexts/User/auth";
import { Navigate } from "react-router-dom";

const UserMainPage = () => {
    const {authenticated, user} = useContext(AuthContextUser)
   

    if(!authenticated)
    return <Navigate to="/userLogin" />

    return (<div> <h1>  User Main Page</h1>
        <h2>{user.id}</h2></div>
       
    )
}


export default UserMainPage