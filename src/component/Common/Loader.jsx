import gsap from "gsap";
import { useEffect, useRef } from "react";
import RingLoader from "react-spinners/RingLoader";
function Loader() {
  const text = "Portfolio";
  const headingRef = useRef(null);
  useEffect(() => {
    const letters = headingRef.current.querySelectorAll(".letter");
  gsap.fromTo(
    letters,
    { opacity: 0, y: -50 },  // Starting state: invisible & below
    {
      opacity: 1,
      y: 0,                  // End state: visible & in position
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.2,          // Delay between each letter
    }
  )
}, [])

  return (
    <div className='bg-gradient-to-br from-[#4b1c80c2] to-[#0200037f] h-screen w-full flex justify-center items-center text-[white] flex-col gap-10'>
       <h1 ref={headingRef} id="name" className="text-[2.5rem] font-mono flex gap-1">
      {text.split("").map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
    </h1>
      <RingLoader color='white' loading={true} size={90}  aria-label="Loading Spinner" />
    </div>
  )
}

export default Loader