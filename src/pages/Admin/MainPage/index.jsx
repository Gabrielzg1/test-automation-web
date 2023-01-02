import React, {useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../contexts/Admin/auth";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { getAdmin, getSubjects } from "../../../services/api";
import Nav from "../../Components/Nav";
import './styles.css'
import Subjects from "./Subjects";


const AdminMainPage = () => {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    const [name, setName] = useState()

    const {authenticated, logout ,admin} = useContext(AuthContext)
    const loadData = async () => {
        try {
            setLoading(true)
            const response = await getSubjects(admin?.id);
            const responseAdmin = await getAdmin(admin?.id)
            setSubjects(response.data)
            setName(responseAdmin.data.username)
            setLoading(false)
        } catch (err) {
            console.error(err)
            setLoadingError(true);
        }
    }
    useEffect(() => {
        (async () => await loadData())();
    }, [])

    if(!authenticated)
    return <Navigate to="/adminLogin" />

    if (loading) {
        return (
            <div className="loading">
                Loading...
            </div>
        )
    }
    if (loadingError) {
        return (
            <div className="loading">
                Loading Error <Link to='/login'>Back</Link>
            </div>
        )
    }

    const handleLogout = () => {
        console.log('logout')
        logout();
    }

    return (
    <div id="main"> 
        <Nav onLogout={handleLogout} admin = {admin}/>
        <Subjects subjects_ = {subjects}/>
    </div>
       
    )
}


export default AdminMainPage