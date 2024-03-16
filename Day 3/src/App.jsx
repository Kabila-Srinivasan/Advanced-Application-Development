//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'

import Login from './pages/Login';
import LoginPage from './pages/LoginPage';


function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
   <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/log" element={<LoginPage/>}/>
    </Routes>
    </> 


  )
}

export default App
