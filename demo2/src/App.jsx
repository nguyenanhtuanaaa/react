import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './component/content'
import Side from './component/aside'

function App() {

  return (
    <>
   <div className='container' style={{ marginTop:'70px'}}>
      <div className='row'>
      <Content/>
      <Side />
     
      </div>
   </div>
    </>
  )
}


export default App
