import { useState } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './component/Navbar'
import CoverPage from './component/CoverPage'
import AboutME from './component/AboutME'
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const [count, setCount] = useState(0)
  const {scrollY}= useScroll()
  const opacity= useTransform(scrollY,[100,600],[1,0])
  return (
    <BrowserRouter>
  <div className="mainDiv" >
    <motion.div className='coverPage' style={{opacity}}>
          <Navbar />
          <CoverPage />
    </motion.div>

          <AboutME />

  </div> 
    </BrowserRouter>
  )
}

export default App
