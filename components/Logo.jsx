import { useState, useEffect } from "react"
import {motion} from 'framer-motion'




export default function Logo ({color, white}) {
let [click, setClick] = useState(false)

let logoVariant={
    visible: {
        y:0,
        opacity: 1,
        // scale:1,
        transition:{type:'spring', bounce: 0.4, duration:0.8},
    },
    hidden: {
        y: 30,
        // scale:1,
        opacity: 0,
    },   
}

return (
    <motion.div variants={logoVariant} whileHover={{scale:1.1}} className='relative flex max-h-20 p-2' onClick={()=>setClick(oldState=>!oldState)}>
        {white}
        {/* {click?color:''} */}
        {/* <div className={`relative mx-auto w-full inline-block h-auto z-10`}>{}</div> */}
    </motion.div>
)

}