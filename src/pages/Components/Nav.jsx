import React, { useState, useEffect } from "react";
import { get } from "../../services/api";
import styles from "./styles/navstyle.module.css"

const Nav = ({ onLogout, navName, type }) => {
	const [name, setname] = useState("");

	const loadData = async () => {
		try {
			const response = await get(navName?.id, type);
			setname(response.data.username);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		(async () => await loadData())();
	}, []);

	return (
		<div className={styles.nav}>
			<h1 className={styles.logo}>Test Automation - {name}</h1>
			<button className={styles.button} onClick={onLogout}>Sair</button>
		</div>
	);
};
export default Nav;
