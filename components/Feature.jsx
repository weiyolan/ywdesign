import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';


const Feature = ({offset, title, text, icon}) => {
  
  // let [style,setStyle] = useState(' hover:translate-y-1 ');
  let [style, setStyle] = useState({visible:{y:0, opacity:1, transition:{type:'spring', bounce: 0.4, duration:0.8}},hidden:{y: 150, opacity:0}});


  useEffect(()=>{
    switch(offset) {
      case -1:
        // setStyle(' -translate-y-12 hover:-translate-y-11 ')
        // setStyle(' -translate-y-12 ')
        setStyle({visible:{y:'-4rem', opacity:1, transition:{type:'spring', bounce: 0.4, duration:0.8}},hidden:{y: 150, opacity:0}})
        break
      case 1: 
        // setStyle(' translate-y-12 hover:translate-y-[52px] ')
        // setStyle(' translate-y-12  ')
        setStyle({visible:{y:'4rem', opacity:1, transition:{type:'spring', bounce: 0.4, duration:0.8}},hidden:{y: 150, opacity:0}})
        break
      default : 
        break
    }
  },[]) 


  let iconVariant={
    hidden: {
      opacity:0
    },
    visible: {
      opacity:1,
      transition:{
        duration:0.8,
      }
    }
  }
  
  return (
  //   <div className={`flex flex-col text-center relative justify-start items-center p-4 outline-none -outline-offset-2 cursor-default  
  //   backdrop-blur-md bg-white/10 hover:outline-white/20 hover:animate-outlinePulse rounded-3xl whitespace-pre-wrap duration-200
  //   ${style}
  //   shadow-xl hover:backdrop-blur-sm hover:shadow-sm  hover:scale-[0.98] 
  //  `
  //   }>
    // <motion.div initial={{y: 300 , opacity:0}} whenInView={style}
    <motion.div variants={style} whileHover={{scale:1.02}}
      // viewport={{once:true}}

      className={`flex flex-col text-center relative justify-start items-center p-4 outline-none -outline-offset-2 cursor-default  
      backdrop-blur-md bg-white/10 hover:outline-white/10 hover:animate-outlinePulse rounded-3xl whitespace-pre-wrap 
      shadow-xl 
    `
    }>

      <motion.div variants={iconVariant}
      className='my-4 p-2 rounded-xl outline-none -outline-offset-2 outline-white'>
        {icon}
      </motion.div>

      <h4 className='text-white font-sans font-light text-xl pb-2'>
        {title}
      </h4>
        
      <p className='text-white font-extralight font-sans text-sm pb-2 '>
        {text}
      </p>
        
    </motion.div>
    // </motion.div>
  )
}

export default Feature