import React, { useContext, useState, useEffect } from "react";
import Loading from "../../Components/Loading"
import { useLocation, useNavigate } from "react-router-dom";
import { getUser, getUserResult } from "../../../services/api";
import { AuthContextUser } from "../../../contexts/User/auth";



const UserResultPage = () => {
    const { user } = useContext(AuthContextUser);

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    const { state } = useLocation();
    const { taskId, userId } = state

    const [result, setResult] = useState();

    const loadData = async () => {

        try {
            setLoading(true);
            const response = await getUserResult(user.id, taskId)
            console.log(response.data)
            setResult(response.data.result)
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
            <label htmlFor="">{result}</label>
        </div>
    );
};

export default UserResultPage;
