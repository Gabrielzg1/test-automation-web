import React, { useContext, useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import { get, getSubjectsUser, showSubjects } from "../../../services/api";
import Nav from "../../Components/Nav";
import styles from "./mainuserstyle.module.css";
import Subjects from "./Subjects";
import { AuthContextUser } from "../../../contexts/User/auth";

const UserMainPage = () => {
	const [subjects, setSubjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loadingError, setLoadingError] = useState(false);
	const [name, setName] = useState();

	const { authenticated, logout, user } = useContext(AuthContextUser);

	const loadData = async () => {
		try {
			setLoading(true);
			const response = await get(user?.id, "users");
			setName(response.data.username);
			setSubjects(await showSubjects(user.id));
			setLoading(false);
		} catch (err) {
			console.error(err);
			setLoadingError(true);
		}
	};
	useEffect(() => {
		(async () => await loadData())();
	}, []);

	if (!authenticated) return <Navigate to="/user/login" />;

	if (loading) {
		return <Loading />;
	}

	if (loadingError) {
		return (
			<div className="loading">
				Loading Error <Link to="/user/login">Back</Link>
			</div>
		);
	}

	const handleLogout = async () => {
		await logout();
	};

	return (
		<div className={styles.bodysubjects}>
			<Nav onLogout={handleLogout} navName={user} type="users" />
			<Subjects subjects_={subjects.data} />
		</div>
	);
};

export default UserMainPage;
