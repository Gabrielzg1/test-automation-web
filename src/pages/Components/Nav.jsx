import React, { useState, useEffect } from "react";
import { getAdmin } from "../../services/api";

const Nav = ({ onLogout, admin }) => {
	const [name, setname] = useState("");

	const loadData = async () => {
		try {
			const response = await getAdmin(admin?.id);
			setname(response.data.username);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		(async () => await loadData())();
	}, []);

	return (
		<div className="nav">
			<h1 className="logo">Test Automation - {name}</h1>
			<button onClick={onLogout}>Sair</button>
		</div>
	);
};
export default Nav;
