import React, { useContext, useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { get, getSubjectsUser } from "../../../services/api";
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
	const handleSubjects = async (value) => {
		const response = await getSubjectsUser(value)
		console.log(response.data._id)
		subjects.push(response.data)
	}



	const loadData = async () => {
		try {
			setLoading(true);
			const response = await get(user?.id, "users");
			setName(response.data.username);
			//console.log(response.data.subjects[0]);
			for (let i = 0; i < response.data.subjects.length; i++) {
				await handleSubjects(response.data.subjects[i])
			}

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
