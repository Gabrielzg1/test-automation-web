import React, { useState, useContext } from "react";
import "./styles.css"
import { AuthContext } from "../../../contexts/Admin/auth";
import { Navigate, useLocation } from "react-router-dom";

const AdminLoginPage = () => {
    const {state} = useLocation();
    const {authenticated, login} = useContext(AuthContext)
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const hadleLogin = async () => {
        console.log(email);
        console.log(password)
        login(email, password)
    }

    if(authenticated)
    return <Navigate to="/adminHome" />

    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="actions">
                    <button onClick={hadleLogin}>Entrar</button>
                </div>
            </div>

        </div>
    )
}
export default AdminLoginPage