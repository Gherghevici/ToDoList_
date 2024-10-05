import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Loading = ()=>{
    const navigate = useNavigate();

    useEffect(()=>{
       const wait= setTimeout(()=>{
            navigate('/dashboard')
        },2000)
        return ()=> clearTimeout(wait);
    },[])
    return (
        <p>Loading</p>
    )
}

export default Loading