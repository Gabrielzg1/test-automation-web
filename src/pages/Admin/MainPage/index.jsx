import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/Admin/auth";

const MainPage = () => {
   
    const { user, logout } = useContext(AuthContext)

    return (<div> <h1>  Main Page</h1>
        <h2>{user.email}</h2></div>
       
    )
}


export default MainPage