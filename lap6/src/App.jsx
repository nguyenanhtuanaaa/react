import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import Header from './header'
 import Footer from './footer'
  import HomePage from './component/home'
  import { Outlet } from "react-router-dom";

 function App() {

  return (
    <>
   <Header />
      
      <main >
     
        <Outlet />
      </main>
      <Footer />



    </>
  )
}

export default App
