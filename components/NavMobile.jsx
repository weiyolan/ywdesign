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
  const { width, height } = useDimensions(containerRef);
  const [state, setState] = useState(false)

  let [selectedB,setSelectedB] = useState(from);

  function selectButton (selection) {
    setSelectedB(selection)
    toggleOpen()
  }

  useEffect(()=>{
    setSelectedB(from)
  },[from])

  useEffect(()=>{
    setState('update')
  },[])

//  BIG CIRCLE
// const sidebar = {
//   open: {
//     clipPath: `circle(${530 * 2 + 200}px at ${width-40}px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2
//   }
//   },
//   closed: {
//     clipPath: `circle(30px at ${width-40}px 40px)`,
//     transition: {
//       delay: 0.2,
//       type: "spring",
//       stiffness: 400,
//       damping: 40
//   }
//   }
// };

const sidebar = {
  open: {
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      restDelta: 2,
      damping:40
  }
  },
  closed: {
    // y: -490,
    // x: 160,
    x: width - 70,
    y: -460,
    opacity: state?1:0,
    transition: {
      delay: 0.2,
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
  <motion.nav className={`fixed top-0 h-0 w-[100%] z-[51] sm:w-[40vw]`}
    initial={false}
    animate={isOpen ? "open" : "closed"}
    custom={height}
    ref={containerRef}
    key={width}
    >

    <motion.div className={`bg-white/10 backdrop-blur-md z-[51] absolute top-0 forward fill-mode rounded-b-[40px] rounded-tl-[40px] h-[530px] right-0 w-[100%] sm:w-[40vw]`} variants={sidebar} />
    {/* <motion.div className={`${isOpen?'bg-white':'bg-white/10'} fixed duration-700 top-0 rounded-b-[30px] rounded-tl-[30px] h-[530px] right-0 w-[100%] sm:w-[40vw]`} variants={sidebar} /> */}
    
    <motion.div 
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='absolute inline-flex rounded-full w-fit top-[16px] z-[51] left-[16px]'>
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
      <Button  mobile={true} className='' to="" title="Home" text="Home" mode={selectedB==='Home'?'selected':'unselected'} handleClick={selectButton}/>
      <Button  mobile={true} className='' to="services" title="Services" text="Services" mode={selectedB==='Services'?'selected':'unselected'} handleClick={selectButton}/>
      <Button  mobile={true} className='' to="aboutme" title="About Me" text="About Me" mode={selectedB==='About Me'?'selected':'unselected'} handleClick={selectButton}/>
      <Button  mobile={true} className='' to="contact" title="Contact"  text="Contact" mode={selectedB==='Contact'?'selected':'unselected'} handleClick={selectButton}/>
      <Button  mobile={true} className='' to="contact/#Form" title="Contact" text="Ask a quote" handleClick={selectButton}  mode={'dark'}/>
    </Navigation>
    
    <MenuToggle open={isOpen} toggle={() => toggleOpen()} />
  
  </motion.nav>
  );
};
