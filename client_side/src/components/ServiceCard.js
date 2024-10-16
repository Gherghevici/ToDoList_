import React from "react";

const ServiceCard = ({icon,color,title,p})=>{
    return (
        <div className=" shadow-indigo-300 custom_shadow  w-64 h-40 rounded-lg ">
            <div className={`${color} text-white text-4xl pl-4 py-2 pr-2 rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl w-min `}>{icon}</div>
            <h3 className="px-5 text-xl font-semibold">{title}</h3>
            <p className="px-5 text-sm text-black/60">{p}</p>

        </div>
    )
}

export default ServiceCard;