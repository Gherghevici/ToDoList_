import React, { useState } from 'react'
import DaysMenu from '../components/DaysMenu'
import TaskContainerFooter from '../components/TaskContainerFooter'
import Tasks from '../components/Tasks'
import ModalTasks from '../components/ModalTasks';
import { Navigate } from 'react-router-dom';
function TaskContainer({isLoggedIn}) {
    const [isOpen,setIsOpen] = useState(false);
    const [dataTask,setDataTask] = useState([]);
    console.log(dataTask)
    const dataChange=(val) =>{
        setDataTask(prev=>prev=val);
    }
    const OpenModalContainerHandler = ()=>{
        setIsOpen((prev)=>prev=!isOpen);
    }
   
    if(!isLoggedIn)
        return <Navigate to='/login'/>
    return (
    <>  
        <main className='pt-16'>
            <div className='flex flex-col w-2/5'>
                <DaysMenu/>
                <Tasks data={dataTask} setData={dataChange}/>
                <TaskContainerFooter openModal={OpenModalContainerHandler}/>
            </div>
            <div>
                
            </div>
        </main>
        
        <ModalTasks setData={dataChange} isOpen={isOpen} openModal={OpenModalContainerHandler}/>
    </>
  )
}

export default TaskContainer