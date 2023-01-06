import React, { useState, useContext } from "react";
import styles from "./mystyle.module.css"
import { AuthContextUser } from "../../../contexts/User/auth";
import { Navigate } from "react-router-dom";


const UserLoginPage = () => {
	const { authenticated, login } = useContext(AuthContextUser);
	const [email, setEmail] = useState(" ");
	const [password, setPassword] = useState(" ");
	const hadleLogin = async () => {
		console.log(email);
		console.log(password);
		await login(email, password);
	};

	if (authenticated) return <Navigate to="/user/home" />;

	return (
		<div className={styles.body}>
			<nav className={styles.nav}>
				<div className={styles.container}>
					<h2 className={styles.Logo}>Nome <span>Logo</span></h2>
				</div>
			</nav>
			<div className={styles.login}>
				<h1 className={styles.title}>Login</h1>
				<div className={styles.form}>

					<div className={styles.field}>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className={styles.caixa}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<br />

					<div className={styles.field}>
						<input
							className={styles.caixa2}
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>


					<div className={styles.field}>
						<button className={styles.button} onClick={hadleLogin}>Entrar</button>
					</div>
				</div>
			</div>
		</div>


	);
};


export default UserLoginPage;
