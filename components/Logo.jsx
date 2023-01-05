import { useState, useEffect } from "react"
import {motion} from 'framer-motion'
import Link from "next/link"




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
    <motion.div variants={logoVariant} whileHover={{scale:1.1}} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>{setHovering(false)}} 
    className='relative flex w-full h-[14vh] ' onClick={()=>setClick(oldState=>!oldState)}>
      <Link className=' cursor-alias w-full ' target='_blank' rel='noopener noreferrer' href={link}>
        <div className={`flex absolute w-full p-4 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 duration-700 ${hovering?'opacity-100':'opacity-0'}`}>{color}</div>
        <div className={`flex absolute w-full p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-700 ${hovering?'opacity-0':'opacity-100'}`}>{white}</div>
      </Link>
        {/* {click?color:''} */}
        {/* <div className={`relative mx-auto w-full inline-block h-auto z-10`}>{}</div> */}
    </motion.div>
)

}