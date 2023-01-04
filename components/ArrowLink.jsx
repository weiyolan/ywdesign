import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const ArrowLink = ({text,to,ext}) => {
  let [hovering,setHovering] = useState(false)


  if (ext) {
    return (
      <Link className={``} href={to} target='_blank' hrefPass legacyBehavior>
      <a className={`text-primary font-semibold text-sm cursor-alias
      `} 
      href={to} 
      target='_blank'
      >
      <div className='inline-flex items-center my-4 relative'
      onMouseEnter={()=>setHovering(true)}
      onMouseLeave={()=>setHovering(false)}>
        {text}
        <Arrow hovering={hovering} />
      </div>
      </a>
      </Link>
    )
  }

  return (
    <Link className={` text-primary font-semibold text-sm 
    `} 
    href={to}>
      <div className='inline-flex items-center my-4 relative'
      onMouseEnter={()=>setHovering(true)}
      onMouseLeave={()=>setHovering(false)}>
        {text}
        <Arrow hovering={hovering} />
      </div>
    </Link>
  )
}

export default ArrowLink

function Arrow ({hovering}) {
  return (
    <div className='block duration-300 relative w-10 h-5 overflow-hidden '>
      <span className={`absolute duration-300 top-1/2 left-0 -translate-y-1/2 ${hovering?'translate-x-1/4 scale-125 ':'-translate-x-[100%] opacity-0'}`}>
      <BsArrowRightShort className='fill-primary text-xl'/>
      </span>
      <span className={`absolute duration-300 top-1/2 left-0 -translate-y-1/2 ${hovering?'translate-x-full scale-105 opacity-0':''}`}>
      <BsArrowRightShort className='fill-primary text-xl'/>
      </span>
    </div>
  )
}