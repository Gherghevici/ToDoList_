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
    <main className="w-1/2 h-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black p-2">
        <div className=" h-1/5 flex gap-2 justify-between">
            <button className="w-1/2" onClick={isLoginHandler}>Login</button>
            <button className="w-1/2" onClick={isRegisterHandler}>Register</button>
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
            })} className="h-4/5 flex flex-col justify-between">
                <div>
                    <label>Email: </label>
                    <input type="text" {...register("email")} className="border-b-2 border-red-600 focus:outline-none"></input>
                </div>
                <div>
                    <label>Pass: </label>
                    <input type="password" {...register("password")} className="border-b-2 border-red-600 focus:outline-none"></input>
                </div>
                <div className="flex justify-center items-center">
                    <button>Login</button>
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