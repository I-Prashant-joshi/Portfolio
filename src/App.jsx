import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './component/Navbar'
import CoverPage from './component/CoverPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
  <div className="mainDiv" >
    <div className='coverPage'>
          <Navbar />
          <CoverPage />
    </div>
  </div> 
    </BrowserRouter>
  )
}

export default App
