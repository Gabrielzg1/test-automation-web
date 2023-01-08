import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/Admin/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { getTasks } from "../../../services/api";
import Tasks from "./Tasks";
import Nav from "../../Components/Nav";
import "./styles.css";

const AdminSubjectPage = () => {
	const navigate = useNavigate("/admin/home");
	const [tasks, setTasks] = useState([]);
	const { state } = useLocation();
	const [loading, setLoading] = useState(true);
	const [loadingError, setLoadingError] = useState(false);
	const { subject_id, subject_name } = state;
	const { logout, admin } = useContext(AuthContext);

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

	return (
		<div id="main">
			<Nav navName={admin} onLogout={logout} type="admin" />
			<h1>Subject: <i>{subject_name}</i></h1>
			<button
				onClick={() => {
					navigate("/admin/subject/createTask", { state: { subject_id, subject_name } });
				}}
			>Criar nova task</button>
			<Tasks tasks_={tasks} subjectId={subject_id} />
		</div>
	);
};

export default AdminSubjectPage;
