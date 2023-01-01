import React from "react";
import { useLocation } from "react-router-dom";

const AdminSubjectPage = () => {
    const {state} = useLocation();
    const { subject } = state;
    
    return (
    <div> 
        <h1>Admin {subject} Page</h1>
    </div>  
    )
}


export default AdminSubjectPage