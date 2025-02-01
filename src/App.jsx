import { useCallback} from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './component/Navbar'
import CoverPage from './component/CoverPage'
import AboutMe from './component/AboutME'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Particles from "react-tsparticles";
import partcleConfig from "./component/AboutmeConfig";
import { loadSlim } from "tsparticles-slim";
function App() {
    const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <BrowserRouter>
        <Particles
        loaded={particlesLoaded}
        id="tsparticles"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
        options={partcleConfig}
        init={particlesInit}
      ></Particles>

        <div className="mainDiv" >
          <Navbar />
          <CoverPage />
          <AboutMe />
          <Projects />
          <Contact />
  </div> 
    </BrowserRouter>
  )
}

export default App
