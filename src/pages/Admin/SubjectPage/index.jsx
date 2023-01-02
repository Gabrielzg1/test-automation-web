import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/Admin/auth";
import { useLocation } from "react-router-dom";
import { getTasks } from "../../../services/api";
import Tasks from "./Tasks";
import Nav from "../../Components/Nav";
import "./styles.css";

const AdminSubjectPage = () => {
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
			<Nav admin={admin} onLogout={logout} />

			<h1>{subject_name} Page</h1>

			<Tasks tasks_={tasks} subjectId={subject_id} />
		</div>
	);
};

export default AdminSubjectPage;
