import React, { useState,useEffect } from 'react'
import Cookies from "universal-cookie";
function DaysMenu() {
  
  const [dayData,setDayData] = useState({});
  const [differenceBetweenDays,setDifferenceBetweenDays] = useState(1);
  const cookies = new Cookies();
  const a = async(link)=>{
    const resp = await fetch(link,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}});
    const data = await resp.json();
    setDayData((prev)=>prev=data);
  }
  useEffect(()=>{
    try{
      var day = new Date();
      day.setDate(day.getUTCDate()+differenceBetweenDays-1)
      a(`http://localhost:3001/anyDay?day=${day}`);
      
    }catch(err){
      console.log(err);
    }
  },[differenceBetweenDays])
  useEffect(()=>cookies.set("date",dayData.fullDay),[dayData])

  const prevDayHandler = ()=>setDifferenceBetweenDays((prev)=>prev-=1);
  const nextDayHandler = ()=>setDifferenceBetweenDays((prev)=>prev+=1);
  
  return (
    <div className='flex justify-around items-center font-bold text-indigo-400 text-2xl p-4 border-indigo-50 border-solid border-b-2'>
        <button onClick={prevDayHandler}>&#706;</button>
        <div className='px-2'>{dayData.day} , <span className='text-indigo-300/80 text-xl font-medium'>{dayData.month} {dayData.dayNumber}</span> </div>
        <button onClick={nextDayHandler}>&#707;</button>  
    </div>
  )
}

export default DaysMenu;