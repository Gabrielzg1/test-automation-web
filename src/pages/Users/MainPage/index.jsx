import React, { useContext, useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { get } from "../../../services/api";
import Nav from "../../Components/Nav";
import "./styles.css";
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
			setSubjects(response.data.subjects);
			console.log(response.data);
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
		return <div className="loading">Loading...</div>;
	}
	if (loadingError) {
		return (
			<div className="loading">
				Loading Error <Link to="/login">Back</Link>
			</div>
		);
	}

	const handleLogout = () => {
		console.log("logout");
		logout();
	};

	return (
		<div id="main">
			<Nav onLogout={handleLogout} navName={user} type="users" />
			<Subjects subjects_={subjects} />
		</div>
	);
};

export default UserMainPage;
