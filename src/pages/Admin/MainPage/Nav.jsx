import React from "react";

const Nav = ({ onLogout, name }) => {
    return (
        <div className="nav">
            <h1 className="logo">Test Automation - {name}</h1>
            <button onClick={onLogout}>Sair</button>
        </div>
    )
}
export default Nav