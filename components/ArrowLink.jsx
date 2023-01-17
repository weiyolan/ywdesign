import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const ArrowLink = ({text,to,ext,inherit, inText, tabIndex}) => {
  let [hovering,setHovering] = useState(false)


  if (ext) {
    return (
      <Link tabIndex={tabIndex} className={`${inherit?'text-inherit':'text-primary'} font-semibold min-[460px]:whitespace-pre-wrap sm:whitespace-nowrap text-sm cursor-alias`} 
      href={to} rel="noopener noreferrer" target='_blank'>
      
      <span className={`inline-flex items-center ${inText?'mt-0':'mt-4'} relative`}
      onMouseEnter={()=>setHovering(true)}
      onMouseLeave={()=>setHovering(false)}>
        {text}
        <Arrow inherit={inherit} hovering={hovering} />
      </span>
      </Link>
    )
  }

  return (
    <Link tabIndex={tabIndex} className={` ${inherit?'text-inherit font-medium':'text-primary font-semibold'} min-[460px]:whitespace-pre-wrap sm:whitespace-nowrap text-sm  `} 
    href={to}>
      <span className='inline-flex items-center mt-4 relative'
      onMouseEnter={()=>setHovering(true)}
      onMouseLeave={()=>setHovering(false)}>
        {text}
        <Arrow inherit={inherit} hovering={hovering} />
      </span>
    </Link>
  )
}

export default ArrowLink

function Arrow ({hovering, inherit}) {
  return (
    <span className='block duration-300 relative w-10 h-5 overflow-hidden '>
      <span className={`absolute duration-300 top-1/2 left-0 -translate-y-1/2 ${hovering?'translate-x-1/4 scale-125 ':'-translate-x-[100%] opacity-0'}`}>
      <BsArrowRightShort className={`${inherit?'text-inherit fill-inherit':'fill-primary'} text-xl`}/>
      </span>
      <span className={`absolute duration-300 top-1/2 left-0 -translate-y-1/2 ${hovering?'translate-x-full scale-105 opacity-0':''}`}>
      <BsArrowRightShort className={`${inherit?'text-inherit fill-inherit':'fill-primary'} text-xl`}/>
      </span>
    </span>
  )
}