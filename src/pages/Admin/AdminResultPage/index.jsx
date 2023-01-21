import React, { useContext, useState, useEffect } from "react";
import Loading from "../../Components/Loading"
import { useLocation, useNavigate } from "react-router-dom";
import { getTask, getUsersResult } from "../../../services/api";
import { AuthContext } from "../../../contexts/Admin/auth";
import Results from "./Results";
import styles from "./resultstyle.module.css"



const AdminResultPage = () => {
    const { admin } = useContext(AuthContext);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [taskName, setTaskName] = useState("")
    const { state } = useLocation();
    const { taskId, subjectId } = state
    const [results, setResults] = useState([]);


    const loadData = async () => {

        try {
            setLoading(true);
            const task = await getTask(subjectId, taskId)
            setTaskName(task.data.name)
            const response = await getUsersResult(taskId)
            console.log(response.data)
            setResults(response.data)
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
        <div id={styles.body}>
            <h1 id={styles.titulo}>{taskName}</h1>
            <Results results={results} />
        </div>
    );
};

export default AdminResultPage;
