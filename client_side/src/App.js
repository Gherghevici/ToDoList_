import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskContainer from './pages/TaskContainer';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<TaskContainer/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
