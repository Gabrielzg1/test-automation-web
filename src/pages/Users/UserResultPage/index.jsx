import React, { useContext, useState, useEffect } from "react";
import Loading from "../../Components/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser, getUserResult, deleteResult } from "../../../services/api";
import { AuthContextUser } from "../../../contexts/User/auth";
import Result from "./Result";
import styles from "./resultUserStyle.module.css";

const UserResultPage = () => {
	const { user } = useContext(AuthContextUser);

	const navigate = useNavigate();
	const [id, setId] = useState();
	const [loading, setLoading] = useState(true);
	const [loadingError, setLoadingError] = useState(false);
	const { state } = useLocation();
	const { taskId, task_name, subject_id, subject_name } = state;

	const [result, setResult] = useState();

	const back = () => {
		deleteResult(taskId, user.id);
		navigate("/user/subject/task", {
			state: {
				task_id: taskId,
				task_name: task_name,
				subject_id,
				subject_name,
			},
		});
	};

	const loadData = async () => {
		try {
			setLoading(true);
			console.log(taskId);

			const response = await getUserResult(user.id, taskId);
			setId(response.data.id);
			setResult(response.data.result);
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
		<div className={styles.main}>
			<div className={styles.nav}>
				<button className={styles.button} onClick={back}>
					Voltar
				</button>
			</div>
			<h2 className={styles.title}>Result: </h2>
			<Result result={result}></Result>
		</div>
	);
};

export default UserResultPage;
