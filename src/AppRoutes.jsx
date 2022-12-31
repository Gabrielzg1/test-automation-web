import React, {useContext } from "react";
import { AuthProvider, AuthContext} from "./contexts/Admin/auth";
import { Navigate } from "react-router-dom";



import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

//importong the pages
import LoginPage from "./pages/Admin/LoginPage";
import MainPage from "./pages/Admin/MainPage";

const AppRoutes = () => {

    const Private = ({children}) => {
         const {authenticated, loding} = useContext(AuthContext)
        if(loding){
            return (
                <div className="loading">
                    Loading....
                </div>
            )
        }
        if(!authenticated){
            console.log(authenticated);
            return <Navigate to="/adminLogin" />
        }
        return children;
    }
    return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route exact path = "/adminLogin" element = {<LoginPage/>}/>
                <Route exact path = "/adminHome" element = {<Private><MainPage/></Private>}/>
            </Routes>
        </AuthProvider>
    </Router>)
}
export default AppRoutes