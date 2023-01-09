import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./NavbarToggle";
import Navigation from "./NavbarNavigation";
import useWindowSize from "./useWindowSize";
import Button from "./Button";
import { useDimensions } from "./useDimension";
import Link from "next/link";
import YW from "../public/images/logo_yw_b.svg";




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
    clipPath: `circle(${530 * 2 + 200}px at ${width-40}px 40px)`,
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

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


  return (
  <motion.nav className='fixed top-0 z-[30] h-[530px] rounded-b-[30px] rounded-tl-[30px] right-0 w-[100%] sm:w-[30vw] overflow-hidden'
    initial={false}
    animate={isOpen ? "open" : "closed"}
    variants={sidebar}
    ref={containerRef}
  >
    <motion.div className="bg-white/20 backdrop-blur-md fixed top-0 rounded-b-[30px] rounded-tl-[30px] h-[530px] right-0 w-[100%] sm:w-[30vw]" variants={sidebar} />
    
      <motion.div 
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='absolute inline-flex rounded-full w-fit p-2 top-[16px] z-[51] left-[16px]'>
              <Link  href={`/`} onClick={()=>selectButton('Home')}>
              {/* <YW
                width='40'
                className='m-2'
                alt="ywdesign svg-logo"
                onClick={()=>selectButton('Home')}/> */}
                <YW className='w-10 h-10' lt="ywdesign logo" />
              </Link> 
      </motion.div>

    <Navigation>
      <Button onClick={() => toggleOpen()} mobile={true} className='' to="" title="Home" text="Home" mode={selectedB==='Home'?'selected':'unselected'} handleClick={selectButton}/>
      <Button onClick={() => toggleOpen()} mobile={true} className='' to="services" title="Services" text="Services" mode={selectedB==='Services'?'selected':'unselected'} handleClick={selectButton}/>
      <Button onClick={() => toggleOpen()} mobile={true} className='' to="aboutme" title="About Me" text="About Me" mode={selectedB==='About Me'?'selected':'unselected'} handleClick={selectButton}/>
      <Button onClick={() => toggleOpen()} mobile={true} className='' to="contact" title="Contact"  text="Contact" mode={selectedB==='Contact'?'selected':'unselected'} handleClick={selectButton}/>
      <Button onClick={() => toggleOpen()} mobile={true} className='' to="contact/#Form" title="Contact" text="Ask a quote" handleClick={selectButton}  mode={'dark'}/>

    </Navigation>
    
    <MenuToggle toggle={() => toggleOpen()} />
  
  </motion.nav>
  );
};
