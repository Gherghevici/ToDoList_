import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Login = ({changeLoginState})=>{
    const [isLogin,setIsLogin] = useState(true);
    const cookies = new Cookies();
    const navigate = useNavigate();

    const {register,handleSubmit,setValue,reset} = useForm();

    const isLoginHandler = ()=>{
        if(!isLogin)
            setIsLogin(prev=>prev=true);
    }
    const isRegisterHandler = ()=>{
        if(isLogin)
            setIsLogin(prev=>prev=false);
    }
    return(
    <main className="w-2/5 h-2/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="px-2 py-1.5 flex gap-2 justify-between bg-indigo-200 rounded-lg ">
            <button className={`w-1/2 px-2 py-2 rounded-md transition-all ${isLogin?"bg-indigo-500":"bg-none text-black/60"}  `} onClick={isLoginHandler}>Login</button>
            <button className={`w-1/2 px-2 py-2 rounded-md transition-all ${isLogin?"bg-none text-black/60":"bg-indigo-500"}`} onClick={isRegisterHandler}>Register</button>
        </div>
        {isLogin?
            <form onSubmit={handleSubmit((data)=>{
                console.log(data);
                fetch('http://localhost:3001/login',{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                                'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }).then(response => {
                        if(response.status===200){
                            response.json().then((res)=>{cookies.set("access_token",res.token); cookies.set("displayName",res.user.displayName);cookies.set("uid",res.user.uid)})
                            
                            navigate('/loading')
                            changeLoginState(true);
                        }
                        
                    })
                    .catch(error =>{
                        console.log(error)
                    })
                reset();
            })} className="h-4/5 flex flex-col justify-between bg-indigo-200 rounded-lg mt-2 p-4">
                <div>
                    <h1 className="text-4xl">Welcome to Tasky</h1>
                    <p>Welcome back! Log in to access your personalized dashboard—let's get started!</p>
                </div>
                <div className="flex flex-col">
                    <label>Email: </label>
                    <input type="text" {...register("email")} className="border-2 bg-indigo-200 rounded-md focus:outline-none"></input>
                </div>
                <div className="flex flex-col">
                    <label>Pass: </label>
                    <input type="password" {...register("password")} className="border-2 bg-indigo-200 rounded-md focus:outline-none"></input>
                </div>
                <div className="flex justify-center items-center">
                    <button className="bg-red-900 px-4 py-1 rounded-md">Login</button>
                </div>
            </form>
        :
        <form onSubmit={handleSubmit((data)=>{
            console.log(data);
            fetch('http://localhost:3001/register',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                            'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(response => {
                    response.json().then(res=>console.log(res))
                })
                .catch(error =>{
                    error.json().then(res=>console.log(res))
                })
            reset();
        })}
        className="h-4/5 flex flex-col justify-between">
                <div>
                    <label>Email: </label>
                    <input {...register("email")} type="text"></input>
                </div>
               
                <div>
                    <label>First name: </label>
                    <input {...register("displayName")} type="text"></input>
                </div>

                 <div>
                    <label>Pass: </label>
                    <input {...register("password")} type="password"></input>
                </div>

                <div className="flex justify-center items-center">
                    <button>Register</button>
                </div>
            </form>
        }
    </main>
)
}

export default Login;