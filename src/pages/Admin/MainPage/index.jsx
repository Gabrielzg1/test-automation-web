import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../contexts/Admin/auth";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { get, getSubjects } from "../../../services/api";
import Nav from "../../Components/Nav";
import Loading from "../../Components/Loading";
import styles from "./style.module.css";
import Subjects from "./Subjects";

const AdminMainPage = () => {
	const [subjects, setSubjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loadingError, setLoadingError] = useState(false);
	const [name, setName] = useState();

	const { authenticated, logout, admin } = useContext(AuthContext);
	const loadData = async () => {
		try {
			setLoading(true);
			const response = await getSubjects(admin?.id);
			const responseAdmin = await get(admin?.id, "admin");
			setSubjects(response.data);
			setName(responseAdmin.data.username);
			setLoading(false);
		} catch (err) {
			console.error(err);
			setLoadingError(true);
		}
	};
	useEffect(() => {
		(async () => await loadData())();
	}, []);

	if (!authenticated) return <Navigate to="/adminLogin" />;

	if (loading) {
		return <Loading />;
	}
	if (loadingError) {
		logout();
	}

	const handleLogout = () => {
		console.log("logout");
		logout();
	};

	return (
		<div className={styles.bodysubjects}>
			<Nav onLogout={handleLogout} navName={admin} type="admin" />
			<div className={styles.bodysubjects}>
				<Subjects subjects_={subjects} />
			</div>
		</div>
	);
};

export default AdminMainPage;
