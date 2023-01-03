import { useState, useEffect } from "react"
import {motion} from 'framer-motion'




export default function Logo ({color, white ,link}) {
let [click, setClick] = useState(false)
let [hovering,setHovering] = useState(false)

let logoVariant={
    visible: {
        y:0,
        opacity: 1,
        // scale:1, No scale here
        transition:{type:'spring', bounce: 0.4, duration:0.8},
    },
    hidden: {
        y: 30,
        // scale:1, No scale here
        opacity: 0,
    },   
}

return (
    <motion.div variants={logoVariant} whileHover={{scale:1.1}} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>{setHovering(false)}} className='relative flex w-full lg:h-[14vh] p-2' onClick={()=>setClick(oldState=>!oldState)}>
      <a className=' cursor-alias ' href={link}>
        <div className={`flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-700 ${hovering?'opacity-0':'opacity-100'}`}>{white}</div>
        <div className={`flex absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 duration-700 ${hovering?'opacity-100':'opacity-0'}`}>{color}</div>

      </a>
        {/* {click?color:''} */}
        {/* <div className={`relative mx-auto w-full inline-block h-auto z-10`}>{}</div> */}
    </motion.div>
)

}