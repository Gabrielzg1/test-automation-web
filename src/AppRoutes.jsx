import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "./contexts/Admin/auth";
import { AuthProviderUser, AuthContextUser } from "./contexts/User/auth";

import { Navigate } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importong the pages
import AdminLoginPage from "./pages/Admin/LoginPage";
import AdminMainPage from "./pages/Admin/MainPage";

import UserLoginPage from "./pages/Users/LoginPage";
import UserMainPage from "./pages/Users/MainPage";

import MainPage from "./pages/Main";
import AdminSubjectPage from "./pages/Admin/SubjectPage";

import TaskPage from "./pages/TaskPage";
import CreateTaskPage from "./pages/Admin/CreateTaskPage";

const AppRoutes = () => {
	const PrivateAdmin = ({ children }) => {
		const { authenticated, loding } = useContext(AuthContext);
		if (loding) {
			return <div className="loading">Loading....</div>;
		}
		if (!authenticated) {
			return <Navigate to="/admin/login" />;
		}
		return children;
	};
	const PrivateUser = ({ children }) => {
		const { authenticated, loding } = useContext(AuthContextUser);
		if (loding) {
			return <div className="loading">Loading....</div>;
		}
		if (!authenticated) {
			console.log(authenticated);
			return <Navigate to="/user/login" />;
		}
		return children;
	};
	return (
		<Router>
			<AuthProvider>
				<AuthProviderUser>
					<Routes>
						<Route exact path="/" element={<MainPage />} />

						<Route exact path="/admin/login" element={<AdminLoginPage />} />
						<Route
							exact
							path="/admin/home"
							element={
								<PrivateAdmin>
									<AdminMainPage />
								</PrivateAdmin>
							}
						/>
						<Route
							exact
							path="/admin/subject"
							element={
								<PrivateAdmin>
									<AdminSubjectPage />
								</PrivateAdmin>
							}
						/>

						<Route
							exact
							path="/subject/task"
							element={
								<PrivateAdmin>
									<TaskPage />
								</PrivateAdmin>
							}
						/>
						<Route
							exact
							path="/admin/subject/createTask"
							element={
								<PrivateAdmin>
									<CreateTaskPage />
								</PrivateAdmin>
							}
						/>

						<Route exact path="/user/login" element={<UserLoginPage />} />
						<Route
							exact
							path="/user/home"
							element={
								<PrivateUser>
									<UserMainPage />
								</PrivateUser>
							}
						/>
					</Routes>
				</AuthProviderUser>
			</AuthProvider>
		</Router>
	);
};
export default AppRoutes;
