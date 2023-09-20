import { useState } from 'react'
import './App.css'
import {Routes,Route, NavLink} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ul className="nav-bar">

      <li><NavLink to="/"  > Login </NavLink></li>
      <li><NavLink to="/login"  > Home</NavLink></li>
    </ul>

    <Routes>
<Route  path='/'  element={<Login/>}   />
<Route  path='/login'  element={<Home/>}   />

    </Routes>
    
    </>
  )
}

export default App
