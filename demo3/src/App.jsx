import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './component/content'
import Sidebar from './component/sidebar'

function App() {

  return (
    <>
      <div className='container' style={{ marginTop:'70px'}}>
        <div className='row'>
        <Sidebar/>
          <Content/>
          
        </div>
      </div>
    </>
  )
}

export default App
