import React, { useState } from "react";
import Cookies from "universal-cookie";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
const Header = ({changeLoginState,isLoggedIn})=>{

    const [nameGlow,setNameGlow] = useState("Home");
    const [openmenu,setOpenMenu] = useState(false);
    const cookie = new Cookies();
    const navigate = useNavigate();

    const loginHandler = ()=>{
        navigate("/login");
    }
    const logoutHandler = ()=>{
        cookie.remove('access_token');
        cookie.remove('date');
        cookie.remove('displayName');
        cookie.remove('uid');
        changeLoginState(false);
        navigate("/");
    }
    const menuHandler = ()=>{
        setOpenMenu(!openmenu);
    }

    console.log("da")
    const handleGlowNavName = (name,e)=>{
        e.preventDefault();
        if(name==="Home"){
            setNameGlow("Home")
            navigate("/");
        }
        else if(name==="Services"){
            setNameGlow("Services");
            navigate("/");
        }
        else if(name==="About"){
            setNameGlow("About");
            navigate("/");
        }
        else if(name==="Contact"){
            setNameGlow("Contact");
            navigate("/");
        }
    }

    return(
        <header className="grid grid-cols-3 sm:grid-cols-[15%_70%_15%]  border-b-2 bg-white z-50 border-gray-300 bg-white/60 px-4 py-2 fixed w-full ">
            <div className="order-2 sm:order-none grid grid-cols-1 place-content-center ">
                <img src="" alt="LOGO" onClick={()=>navigate("/")} className="cursor-pointer"></img>
            </div>
            
            <div className="sm:grid sm:grid-cols-1 sm:place-content-evenly">
                {
                    openmenu?
                    <button onClick={menuHandler}><IoCloseOutline  className="mt-1 w-8 h-8 sm:hidden "></IoCloseOutline ></button>
                    :
                    <button onClick={menuHandler} ><HiOutlineMenuAlt1 className="mt-1 w-8 h-8 sm:hidden " /></button>
                }
                <div className={`${openmenu?"":"hidden"} grid grid-flow-row sm:grid sm:grid-cols-4 sm:place-content-center md:px-10 lg:px-24 2xl:px-44`}>
                    <Link to="home" smooth={true} duration={500} offset={-100} className={`cursor-pointer hover:text-indigo-500 ${nameGlow==="Home"?"text-indigo-500":""}`} onClick={(e)=>handleGlowNavName("Home",e)}>Home</Link>
                    <Link to="services" smooth={true} duration={500} offset={-50} className={`cursor-pointer hover:text-indigo-500 ${nameGlow==="Services"?"text-indigo-500":""}`} onClick={(e)=>handleGlowNavName("Services",e)}>Services</Link>
                    <Link to="about" smooth={true} duration={500} className={`cursor-pointer hover:text-indigo-500 ${nameGlow==="About"?"text-indigo-500":""}`} onClick={(e)=>handleGlowNavName("About",e)}>About</Link>
                    <Link to="contact" smooth={true} duration={500} className={`cursor-pointer hover:text-indigo-500 ${nameGlow==="Contact"?"text-indigo-500":""}`} onClick={(e)=>handleGlowNavName("Contact",e)}>Contact</Link>
                </div>
            </div>
            
            
            {
                isLoggedIn?
                <button onClick={logoutHandler} className=" order-3 sm:order-none mx-auto h-min px-2 py-1 border-2 border-indigo-400 active:focus:border-indigo-300 rounded-lg ">Log out</button>
                :
                <button onClick={loginHandler} className="order-3 sm:order-none mx-auto h-min px-2 py-1 border-2 border-indigo-400 active:focus:border-indigo-300 rounded-lg ">Login</button>
            }

           

        </header>
    )
}

export default Header;