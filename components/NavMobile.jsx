import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./NavbarToggle";
import Navigation from "./NavbarNavigation";
import useWindowSize from "./useWindowSize";
import Button from "./Button";
import { useDimensions } from "./useDimension";





export default function NavMobile ({from}) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { width } = useDimensions(containerRef);

  let [selectedB,setSelectedB] = useState(from);

  function selectButton (selection) {
    setSelectedB(selection)
  }

  useEffect(()=>{
    setSelectedB(from)
  },[from])


// useEffect(()=>{
//   console.log(width)
//   console.log(height)
// },[width, height])

const sidebar = {
  open: {
    clipPath: `circle(${1000 * 2 + 200}px at ${width-40}px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
  }
  },
  closed: {
    clipPath: `circle(30px at ${width-40}px 40px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
  }
  }
};


  return (
  <motion.nav className='fixed top-0 z-[30] bottom-0 right-0 w-full sm:w-[30vw] overflow-hidden'
    initial={false}
    animate={isOpen ? "open" : "closed"}
    variants={sidebar}
    ref={containerRef}
  >
    <motion.div className="bg-white/20 backdrop-blur-sm fixed top-0 bottom-0 right-0 w-full sm:w-[30vw]" variants={sidebar} />
    
    <Navigation>
      <Button className='' to="" title="Home" text="Home" mode={selectedB==='Home'?'selected':'unselected'} handleClick={selectButton}/>
      <Button className='' to="services" title="Services" text="Services" mode={selectedB==='Services'?'selected':'unselected'} handleClick={selectButton}/>
      <Button className='' to="aboutme" title="About Me" text="About Me" mode={selectedB==='About Me'?'selected':'unselected'} handleClick={selectButton}/>
      <Button className='' to="contact" title="Contact"  text="Contact" mode={selectedB==='Contact'?'selected':'unselected'} handleClick={selectButton}/>

    </Navigation>
    
    <MenuToggle toggle={() => toggleOpen()} />
  
  </motion.nav>
  );
};
