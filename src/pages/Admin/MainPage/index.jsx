import React, {useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../contexts/Admin/auth";
import { Navigate, Link } from "react-router-dom";
import { getSubjects } from "../../../services/api";

const AdminMainPage = () => {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    const [name, setName] = useState('teste')

    const {authenticated, admin} = useContext(AuthContext)
    const loadData = async () => {
        try {
            setLoading(true)
            const response = await getSubjects(admin?.id);
            setSubjects(response.data.subjects)
            
            setName(response.data.username)
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

    return (
    <div> 
        <h1>  Olá, {name} </h1>
       <h2>Subjects: </h2>
        
        {
                subjects.map((subject) => (
                    <button className="item"  key={subject._id}>
                    <div className="info">
                        <div className="owner">
                            {subject}
                        </div>
                       
                    </div>
                    
                </button>
                ))
            }

    </div>
       
    )
}


export default AdminMainPage