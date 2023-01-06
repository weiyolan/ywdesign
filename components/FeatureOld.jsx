import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from './Context';

const Feature = ({offset, title, text, icon, small}) => {
  let {width} = useAppContext()
  // let [style,setStyle] = useState(' hover:translate-y-1 ');
  let [style, setStyle] = useState({visible:{x:0, y:0 , opacity:1, transition:{type:'spring', bounce: 0.4, duration:0.8}}, hidden:{x: small? offset? -100 : 100 :0, y:100, opacity:0}});


  useEffect(()=>{
    if (small) {
      setStyle({visible:{x:0, y:0, opacity:1, transition:{type:'spring', bounce: 0.4, duration:0.8}}, hidden:{x: offset? -100: 100, y:100, opacity:0}})
    } else {
      switch(offset) {
        case -1:
          // setStyle(' -translate-y-12 hover:-translate-y-11 ')
          // setStyle(' -translate-y-12 ')
          setStyle({visible:{y:width>1024?'-4rem':'-4rem', opacity:1, transition:{type:'spring', bounce: 0.4, duration:0.8}},hidden:{y: 150, opacity:0}})
          break
        case 1: 
          // setStyle(' translate-y-12 hover:translate-y-[52px] ')
          // setStyle(' translate-y-12  ')
          setStyle({visible:{y:width>1024?'4rem':'4rem', opacity:1, transition:{type:'spring', bounce: 0.4, duration:0.8}},hidden:{y: 150, opacity:0}})
          break
        default : 
          break
      }
    }
  },[offset, small, width]) 


  useEffect(()=>{
    // console.log(title)
    // console.log(offset)
  },[title,offset])

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

      className={`flex w-full ${offset?'flex-row text-left':'flex-row-reverse text-right'} sm:flex-col sm:text-center relative justify-start items-start sm:items-center p-2 sm:p-4 outline-none -outline-offset-2 cursor-default  
      backdrop-blur-md bg-white/10 hover:outline-white/10 hover:animate-outlinePulse rounded-3xl 
      shadow-md sm:shadow-xl 
      ${small?`col-span-8 ${offset?'col-start-1':'col-start-2'}`:''}
    `
    }>

{/* w-5 h-5 sm:w-8 sm:h-8
w-5 h-5 sm:w-8 sm:h-8
w-5 h-5 sm:w-8 sm:h-8
w-5 h-5 sm:w-8 sm:h-8
w-5 h-5 sm:w-8 sm:h-8
w-5 h-5 sm:w-8 sm:h-8 */}

      <motion.div variants={iconVariant}
      className={`w-8 h-8 sm:w-10 sm:h-10 p-1 flex ${offset?'mr-2 ':'ml-2 '} aspect-square sm:my-4 justify-center items-center rounded-lg sm:rounded-xl outline-none -outline-offset-2 sm:outline-white  `}>
        {icon}
      </motion.div>
      <div>
      <motion.h4 variants={iconVariant} className='text-white font-sans font-extralight text-lg sm:text-xl sm:pb-2 whitespace-nowrap sm:whitespace-pre-wrap'>
        {title}
      </motion.h4>
        
      <motion.p variants={iconVariant} className='text-white font-extralight font-sans text-xs sm:text-sm pb-2 sm:whitespace-pre-wrap'>
        {text}
      </motion.p>
      </div>
        
    </motion.div>
    // </motion.div>
  )
}

export default Feature