import React from 'react'

function TaskContainerFooter({openModal}) {
  
  
  return (
    <div className='flex justify-around items-center text-indigo-400  text-lg   p-4 border-t-2 border-indigo-50'>
        <div className='text-indigo-300/80'>TASKS</div>
        <button onClick={openModal}>ADD NEW +</button>
    </div>
  )
}

export default TaskContainerFooter