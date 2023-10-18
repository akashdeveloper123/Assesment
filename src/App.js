import { useState } from 'react'
import './App.css'
import Header from "./component/Header"
import Sidebar from "./component/Sidebar"
import Home from "./component/Home"
import Prod from './component/Prod'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
       <Prod/>
    </div>
  )
}

export default App