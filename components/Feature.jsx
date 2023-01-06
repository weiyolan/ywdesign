import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from './Context';

const Feature = ({offset, title, text, icon}) => {
  let {width,breakPointSmall} = useAppContext()
  // let [style,setStyle] = useState(' hover:translate-y-1 ');
  let [xOffset,setXOffset] = useState(0)
  let [yOffset,setYOffset] = useState(200)
  // let [style, setStyle] = useState({visible:{x:0, y:0 , opacity:1, transition:{type:'spring', bounce: 0.4, duration:0.8}}, hidden:{x: small? offset? -100 : 100 :0, y:100, opacity:0}});


  useEffect(()=>{
    if (width<520) {
      setXOffset(offset? -100: 100)
    } else {
      switch(offset) {
        case -1:
          setYOffset(width>1024?'-4rem':'-4rem')
          break
        case 1: 
          setYOffset(width>1024?'4rem':'4rem')
          break
        default : 
          break
      }
    }
  },[offset, width]) 


  useEffect(()=>{
    // console.log(title)
    // console.log(offset)
  },[title,offset])

  // useEffect(()=>{

  // },[xOffset,xOffset])

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

  let styleVariant = {
    visible:{x:0, y:0, opacity:1, transition:{type:'spring', bounce: 0.4, duration:0.8}}, 
    hidden:{x: xOffset, y:yOffset, opacity:0}
  }
  

  return (
  //   <div className={`flex flex-col text-center relative justify-start items-center p-4 outline-none -outline-offset-2 cursor-default  
  //   backdrop-blur-md bg-white/10 hover:outline-white/20 hover:animate-outlinePulse rounded-3xl whitespace-pre-wrap duration-200
  //   ${style}
  //   shadow-xl hover:backdrop-blur-sm hover:shadow-sm  hover:scale-[0.98] 
  //  `
  //   }>
    // <motion.div initial={{y: 300 , opacity:0}} whenInView={style}
    <motion.div variants={styleVariant} whileHover={{scale:1.02}} whileTap={{scale:1.02}}
      // viewport={{once:true}}

      className={`flex w-full ${offset?'flex-row text-left':'flex-row-reverse text-right'} min-[520px]:flex-col min-[520px]:text-center relative justify-start  items-start min-[520px]:items-center p-2 md:p-4 outline-none -outline-offset-2 cursor-default  
      backdrop-blur-md bg-white/10 hover:outline-white/10 hover:animate-outlinePulse rounded-3xl 
      shadow-md sm:shadow-xl 
      ${width<520?` col-span-9 min-[420px]:col-span-8 ${offset?' col-start-1 min-[420px]:col-start-1 ':' col-start-2 min-[420px]:col-start-3'}`:''}
    `
    }>

{/* w-5 h-5 sm:w-8 sm:h-8
w-5 h-5 sm:w-8 sm:h-8
w-5 h-5 sm:w-8 sm:h-8
w-5 h-5 sm:w-8 sm:h-8
w-5 h-5 sm:w-8 sm:h-8
w-5 h-5 sm:w-8 sm:h-8 */}

      <motion.div variants={iconVariant}
      className={`w-8 h-8 sm:w-10 sm:h-10 p-1 flex ${width<520?offset?'mr-2 ':'ml-2 ':''} aspect-square sm:my-4 justify-center items-center rounded-lg sm:rounded-xl outline-none -outline-offset-2 sm:outline-white  `}>
        {icon}
      </motion.div>
      <div>
        <motion.h4 variants={iconVariant} className='text-white font-sans font-light text-xl lg:text-2xl sm:pb-2 whitespace-nowrap md:whitespace-pre-wrap'>
          {title}
        </motion.h4>
          
        <motion.p variants={iconVariant} className='text-white font-extralight font-sans text-sm pb-2 md:whitespace-pre-wrap'>
          {text}
        </motion.p>
      </div>
        
    </motion.div>
    // </motion.div>
  )
}

export default Feature