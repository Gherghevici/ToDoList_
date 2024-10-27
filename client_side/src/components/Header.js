import React, { useState } from "react";
import Cookies from "universal-cookie";
import { Link } from "react-scroll";
import { Navigate } from "react-router-dom";
const Header = ({changeLoginState})=>{
    const [nameGlow,setNameGlow] = useState("Home");
    const cookie = new Cookies();
    const logoutHandler = ()=>{
        cookie.remove('access_token');
        cookie.remove('date');
        cookie.remove('displayName');
        cookie.remove('uid');
        changeLoginState(false);    
    }
    console.log("da")
    const handleGlowNavName = (name,e)=>{
        e.preventDefault();
        if(name==="Home")
            setNameGlow("Home");
        else if(name==="Services")
            setNameGlow("Services");
        else if(name==="About")
            setNameGlow("About");
        else if(name==="Contact")
            setNameGlow("Contact");
    }

    return(
        <div className="grid grid-cols-3  border-b-2 border-gray-300 bg-white/60 px-4 py-2 fixed w-full ">
            <div>
                
            </div>
            <div className="grid grid-cols-4 place-content-center ">
                <Link to="home" smooth={true} duration={500} offset={-100} className={`cursor-pointer hover:text-indigo-500 ${nameGlow==="Home"?"text-indigo-500":""}`} onClick={(e)=>handleGlowNavName("Home",e)}>Home</Link>
                <Link to="services" smooth={true} duration={500} offset={-50} className={`cursor-pointer hover:text-indigo-500 ${nameGlow==="Services"?"text-indigo-500":""}`} onClick={(e)=>handleGlowNavName("Services",e)}>Services</Link>
                <Link to="about" smooth={true} duration={500} className={`cursor-pointer hover:text-indigo-500 ${nameGlow==="About"?"text-indigo-500":""}`} onClick={(e)=>handleGlowNavName("About",e)}>About</Link>
                <Link to="contact" smooth={true} duration={500} className={`cursor-pointer hover:text-indigo-500 ${nameGlow==="Contact"?"text-indigo-500":""}`} onClick={(e)=>handleGlowNavName("Contact",e)}>Contact</Link>

            </div>
            
            <button onClick={logoutHandler} className=" place-items-center place-self-end px-2 py-1 border-2 border-indigo-400 active:focus:border-indigo-300 rounded-lg ">Log out</button>

           

        </div>
    )
}

export default Header;