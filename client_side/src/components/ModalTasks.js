import {React,useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
const ModalTasks = ({setData,isOpen,openModal})=>{
    
    const [imp,setImp] = useState(1)
    const cookies = new Cookies();
    const uid = cookies.get("uid");
    const [token,] = useState(cookies.get("access_token"))
    const impClickHandler = (e,val)=>{
       e.preventDefault();
        setImp((prev)=>prev=val);
    }
    const handleSameDayFetchData = ()=>{
        setImp(1);
        openModal();
        if(getValues("date")===""){
            const id = cookies.get("uid");
            const day = cookies.get("date");
            fetch(`http://localhost:3001/data?day=${day}`,{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${id} ${token}`,
                            
                    },
              }).then(response => {
                    response.json().then((res)=>setData(res.data))
                })
                .catch(error =>{
                    console.log(error)
                })
        }
    }

    useEffect(()=>{
        if(getValues("id")!==uid)
            setValue("id",uid);
        setValue("importance",imp);
    },[imp])
    
    const {register,handleSubmit,setValue,reset, getValues} = useForm({
        defaultValues:{
            title:"",
            description:"",
            date:"",
            time:"",
            isComplete:false,
            importance:1,
        }
    });
    const modifyDataDateMonth = (val)=>{
        if(val===""||undefined)
            return ""
        const dataSpliceArr = val.split("-");
        const month = Number(dataSpliceArr[1])-1;
        const day=Number(dataSpliceArr[2]);

        return `${dataSpliceArr[0]}-${month}-${day}`;
    }
    return(   
        <div className={`absolute  w-3/5 p-2 transition-all duration-500 border-l-2 border-indigo-200 text-indigo-400 text-lg ${isOpen?"right-0 top-0":" right-0 -top-full"} `}>
            <div className="flex justify-between ">
                <h2 className="mx-auto">Add new Task</h2>
                <button onClick={openModal} className="mr-2 active:text-indigo-300/80">x</button>
            </div>
            <form onSubmit={handleSubmit((data)=>{
                console.log(data);
                data.date=modifyDataDateMonth(data.date);
                
                fetch('http://localhost:3001/data',{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${uid} ${token}`,
                    },
                    body: JSON.stringify(data)
                }).then(response => {
                        console.log(response)
                    })
                    .catch(error =>{
                        console.log(error)
                    })
                reset();
            })}
            className="flex flex-col gap-4">
                <div className="flex items-center flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <label>Title</label>
                        <input type="text" {...register("title")} className="border-2 border-indigo-300 rounded-lg px-2 focus:outline-none focus:border-indigo-500 "/>
                    </div>
                    <div className="flex items-center gap-2">
                        <label>Description</label>
                        <textarea {...register("description")} className="border-2 border-indigo-300 rounded-lg px-2 focus:outline-none focus:border-indigo-500 resize-none"></textarea>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2">
                        <h3>Select Date and Time: </h3>
                        <input type="date" autoComplete="" {...register("date")} className="focus:outline-none "/>
                        <input type="time" autoComplete="" {...register("time")} />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="self-center">Importance</h3>
                    <div className="flex justify-between">
                        <button  onClick={(e)=>impClickHandler(e,1)} className={`w-16 h-7 ${imp===1?"bg-indigo-500":"bg-indigo-300"} rounded-full `}>!</button>
                        <button  onClick={(e)=>impClickHandler(e,2)} className={`w-16 h-7 ${imp===2?"bg-indigo-500":"bg-indigo-300"} rounded-full`}>!!</button>
                        <button  onClick={(e)=>impClickHandler(e,3)} className={`w-16 h-7 ${imp===3?"bg-indigo-500":"bg-indigo-300"} rounded-full`}>!!!</button>
                        <button  onClick={(e)=>impClickHandler(e,4)} className={`w-16 h-7 ${imp===4?"bg-indigo-500":"bg-indigo-300"} rounded-full`}>!!!!</button>
                        <button  onClick={(e)=>impClickHandler(e,5)} className={`w-16 h-7 ${imp===5?"bg-indigo-500":"bg-indigo-300"} rounded-full`}>!!!!!</button>
                    </div>
                </div>
                <div className="flex justify-center items-center py-2">
                    <button onClick={handleSameDayFetchData} type="submit">Add new Task</button>
                </div>
            </form>
        </div>
        
    )
}

export default ModalTasks