import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Secret from "./Secret";
import MyAccount from "./MyAccount";

const Logout = () => {
    const { logout , isAuthenticated } = useAuth0();

    return(
        isAuthenticated && (
    <div>
    <button  onClick={() => logout()}>Log Out</button>
    <Secret/>
    <MyAccount/>
    </div>

    ))
}

export default Logout;