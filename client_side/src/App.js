import React,{useState} from 'react';
import { BrowserRouter, Routes, Route,redirect,Navigate } from "react-router-dom";
import TaskContainer from './pages/TaskContainer';
import Login from './pages/Login';
import Header from './components/Header'
import Loading from './pages/Loading';
import Home from './pages/Home';
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const changeLoginState = (val)=>{
    setIsLoggedIn(prev=>prev=val);
  }
 
  
  return (
    <BrowserRouter >
      <Header changeLoginState={changeLoginState}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login changeLoginState={changeLoginState}/>}/>
        <Route path='/dashboard' element={<TaskContainer isLoggedIn={isLoggedIn}/>}/>
        <Route path='/loading' element={<Loading/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
