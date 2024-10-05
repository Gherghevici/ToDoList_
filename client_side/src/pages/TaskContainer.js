import React, { useState } from 'react'
import DaysMenu from '../components/DaysMenu'
import TaskContainerFooter from '../components/TaskContainerFooter'
import Tasks from '../components/Tasks'
import ModalTasks from '../components/ModalTasks';

function TaskContainer() {
    const [isOpen,setIsOpen] = useState(false);
    const [dataTask,setDataTask] = useState([]);
    
    const dataChange=(val) =>{
        setDataTask(prev=>prev=val);
    }
    const OpenModalContainerHandler = ()=>{
        setIsOpen((prev)=>prev=!isOpen);
    }
  
    return (
    <>  
        <div>
            <div className='flex flex-col w-2/5'>
                <DaysMenu/>
                <Tasks data={dataTask} setData={dataChange}/>
                <TaskContainerFooter openModal={OpenModalContainerHandler}/>
            </div>
            <div>

            </div>
        </div>
        
        <ModalTasks setData={dataChange} isOpen={isOpen} openModal={OpenModalContainerHandler}/>
    </>
  )
}

export default TaskContainer