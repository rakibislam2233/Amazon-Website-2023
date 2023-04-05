import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Shop from './Component/Shop/Shop'
import Home from './Component/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Outlet></Outlet>
    </div>
  )
}

export default App
