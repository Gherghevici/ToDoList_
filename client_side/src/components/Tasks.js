import {React,useEffect,useState} from 'react'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'
import Cookies from "universal-cookie";
function Tasks({data,setData}) {
  

const cookies = new Cookies();
const [id,setId]=useState(cookies.get("uid"));
const [day,setDay] = useState(cookies.get("date"));
const [token,] = useState(cookies.get("access_token"))
  
useEffect(()=>{
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
    console.log(data);
},[day])

useEffect(()=>{
      const fetchOnCookieChange = (name,value)=>{
        if(name.name==="date")
          setDay(name.value)
        if(name.name==="uid")
          setId(name.value);
      }
      cookies.addChangeListener(fetchOnCookieChange);

      return () => {
        cookies.removeChangeListener(fetchOnCookieChange);
      }    
  },[])

  const HandleDragEnd = (result)=>{
    if(!result.destination) return;
    const items = Array.from(data);
    const [reorderItems] = items.splice(result.source.index,1);
    items.splice(result.destination.index,0,reorderItems);

    setData(items);
  }
  return (
    
    <>
    <DragDropContext onDragEnd={HandleDragEnd}>
      <Droppable droppableId='data'>
        {(provided)=>(
          <ul className='text-indigo-400 ' {...provided.droppableProps} ref={provided.innerRef}> 
            {data?.map((val,index)=>{
              return(
                <Draggable index={index} draggableId={val.id+index} key={val.id+index} >
                  {(prov)=>(
                    <li  className='flex justify-between items-center py-2 px-4 select-none ' {...prov.draggableProps}  ref={prov.innerRef}>
                      <div {...prov.dragHandleProps}>&#10303;</div>
                      <div className='flex gap-2 justify-center items-center '>
                        <input type='checkbox' className='w-4 h-4 cursor-pointer'/>
                        <label>{val.title}</label>
                      </div>
                      <div className='select-none'>ora</div>
                    </li>
                  )}
                  
                </Draggable>
              )}
            )}
            {provided.placeholder}
          </ul>
        )}     
           
      </Droppable>
    </DragDropContext>
    </>
  )
}

export default Tasks