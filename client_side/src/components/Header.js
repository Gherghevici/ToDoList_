import React from "react";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";
const Header = ({changeLoginState})=>{

    const cookie = new Cookies();
    const logoutHandler = ()=>{
        cookie.remove('access_token');
        cookie.remove('date');
        cookie.remove('displayName');
        cookie.remove('uid');
        changeLoginState(false);
    }
    return(
        <div className="border-b-2 border-gray-300 flex justify-end px-4 py-2">
            <button onClick={logoutHandler} className="px-2 py-1 border-2 border-indigo-400 active:focus:border-indigo-300 rounded-lg">Log out</button>

        </div>
    )
}

export default Header;