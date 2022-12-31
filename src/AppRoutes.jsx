import React, {useContext } from "react";
import { AuthProvider, AuthContext} from "./contexts/Admin/auth";
import { AuthProviderUser, AuthContextUser } from "./contexts/User/auth";

import { Navigate } from "react-router-dom";



import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

//importong the pages
import AdminLoginPage from "./pages/Admin/LoginPage";
import AdminMainPage from "./pages/Admin/MainPage";

import UserLoginPage from "./pages/Users/LoginPage";
import UserMainPage from "./pages/Users/MainPage";

import MainPage from "./pages/Main";

const AppRoutes = () => {

    const PrivateAdmin = ({children}) => {
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
    const PrivateUser = ({children}) => {
        const {authenticated, loding} = useContext(AuthContextUser)
       if(loding){
           return (
               <div className="loading">
                   Loading....
               </div>
           )
       }
       if(!authenticated){
           console.log(authenticated);
           return <Navigate to="/userLogin" />
       }
       return children;
   }
    return (
    <Router>
        <Routes>
            <Route exact path = "/" element = {<MainPage/>}/>
        </Routes>
        <AuthProvider>
            <Routes>
                <Route exact path = "/adminLogin" element = {<AdminLoginPage/>}/>
                <Route exact path = "/adminHome" element = {<PrivateAdmin><AdminMainPage/></PrivateAdmin>}/>
            </Routes>
        </AuthProvider>
        <AuthProviderUser>
            <Routes>
                <Route exact path = "/userLogin" element = {<UserLoginPage/>}/>
                <Route exact path = "/userHome" element = {<PrivateUser><UserMainPage/></PrivateUser>}/>
            </Routes>
        </AuthProviderUser>
        
    </Router>)
}
export default AppRoutes