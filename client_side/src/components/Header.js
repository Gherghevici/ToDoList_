import React from "react";
import Cookies from "universal-cookie";
import { Link } from "react-scroll";
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
        <div className="border-b-2 border-gray-300 flex bg-white/60 px-4 py-2 fixed w-full">
            <div className="flex gap-2">
                <Link to="home" smooth={true} duration={500} offset={-100} className="cursor-pointer">Home</Link>
                <Link to="services" smooth={true} duration={500} offset={-50} className="cursor-pointer">Services</Link>
                <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>

            </div>
            <button onClick={logoutHandler} className="px-2 py-1 border-2 border-indigo-400 active:focus:border-indigo-300 rounded-lg ">Log out</button>

        </div>
    )
}

export default Header;