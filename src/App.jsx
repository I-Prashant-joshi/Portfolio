import { lazy, Suspense, useCallback} from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Particles from "react-tsparticles";
import partcleConfig from "./component/AboutmeConfig";
import { loadSlim } from "tsparticles-slim";
import Loader from './component/Common/Loader';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const withDelay = (importFunc, delayTime = 2000) => {
  return lazy(() => delay(delayTime).then(importFunc));
};
const Navbar = withDelay(() => import('./component/Navbar'));
const CoverPage = withDelay(() => import('./component/CoverPage'));
const AboutMe = withDelay(() => import('./component/AboutME'));
const Project = withDelay(() => import('./component/Projects'));
const ContactPage = withDelay(() => import('./component/Contact'));
function App() {
    const particlesInit = useCallback(async (engine) => {
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
        <Suspense fallback={<Loader />}>
          <Navbar />  
          <CoverPage />
          <AboutMe />
          <Project />
          <ContactPage />
          </Suspense>
  </div> 
    </BrowserRouter>
  )
}

export default App
