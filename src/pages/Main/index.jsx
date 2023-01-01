import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate()
    return (
    <div>
        <h1>Main page</h1>
        <button onClick={()=>navigate("/user/login")}>Logar Como Usuário</button>
        <br />
        <button onClick={()=>navigate('/admin/login')}>Logar Como Admin</button>

    </div>
  
)}
        
export default MainPage