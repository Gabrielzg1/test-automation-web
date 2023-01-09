import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getTasks } from "../../../services/api";
import Tasks from "./Tasks";
import Nav from "../../Components/Nav";
import Loading from "../../Components/Loading";
import "./styles.css";
import { AuthContextUser } from "../../../contexts/User/auth";

const UserSubjectPage = () => {
	const navigate = useNavigate("/user/home");
	const [tasks, setTasks] = useState([]);
	const { state } = useLocation();
	const [loading, setLoading] = useState(true);
	const [loadingError, setLoadingError] = useState(false);
	const { subject_id, subject_name } = state;
	const { logout, user } = useContext(AuthContextUser);

	const loadData = async () => {
		try {
			setLoading(true);
			const response = await getTasks(subject_id);
			setTasks(response.data);
			setLoading(false);
		} catch (err) {
			console.error(err);
			setLoadingError(true);
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
			<Nav navName={user} onLogout={logout} type="users" />
			<h1>
				Subject: <i>{subject_name}</i>
			</h1>
			<Tasks tasks_={tasks} subjectId={subject_id} />
		</div>
	);
};

export default UserSubjectPage;
