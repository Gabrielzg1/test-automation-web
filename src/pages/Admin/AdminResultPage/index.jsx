import React, { useContext, useState, useEffect } from "react";
import Loading from "../../Components/Loading"
import { useLocation, useNavigate } from "react-router-dom";
import { getUsersResult } from "../../../services/api";
import { AuthContext } from "../../../contexts/Admin/auth";



const AdminResultPage = () => {
    const { admin } = useContext(AuthContext);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const { state } = useLocation();
    const { taskId } = state

    const loadData = async () => {

        try {
            setLoading(true);
            const response = await getUsersResult(taskId)
            console.log(response.data)
            setLoading(false);
        } catch (err) {
            console.error(err);


        }
    };
    useEffect(() => {
        (async () => await loadData())();
    }, []);


    if (loading) {
        return <Loading />;
    }


    return (
        <div id="main">
            <label htmlFor="">teste</label>
        </div>
    );
};

export default AdminResultPage;
