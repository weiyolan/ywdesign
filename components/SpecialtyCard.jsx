import {useEffect, useState} from 'react'
import Image from 'next/image'

export default function SpecialtyCard({title, text, clicked, setClicked, noBlur}) {

    return (
      // variants={cardMotion}
      <div className={`flex w-full flex-col relative aspect-square p-6 sm:p-2 bg-white/10 
      duration-1000 overflow-hidden transition-all
      text-white text-center justify-center cursor-pointer
      outline-2 outline -outline-offset-2 hover:outline-white/30 ` + (
        clicked?` ${noBlur?'':'backdrop-blur-md'} shadow-2xl outline-white/30 animate-outlinePulse 
        rounded-[1.75rem] min-[500px]:rounded-[2.5rem] sm:rounded-[1.75rem] lg:rounded-[40px]   `:` rounded-[2.25rem] min-[500px]:rounded-[3rem] sm:rounded-[2rem] lg:rounded-[50px] 
         outline-none ${noBlur?'':'backdrop-blur-sm'} shadow-md translate-y-1 scale-95 `)}
      // onMouseEnter={()=>setHovering(true)}
      // onMouseLeave={()=>setHovering(false)}
      onClick={()=>setClicked(!clicked)}>

        <h4 className={`absolute duration-1000 text-xl min-[400px]:text-2xl min-[500px]:text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 whitespace-nowrap ` + (clicked?`scale-110 font-light left-1/2 top-0 -translate-x-1/2 mt-3 min-[350px]:mt-6 sm:mt-4 lg:mt-6 xl:mt-8`:`font-thin left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`)}>
            {title}
            </h4>
        <p className={`absolute duration-1000 w-full px-4 lg:px-6 font-extralight text-xs min-[400px]:text-sm  ` + (clicked?` text-white visible left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/3 `:` top-40 translate-y-full left-1/2 -translate-x-1/2 invisible  text-transparent`)}>
            {text}
        </p>
      </div>
  
    )
  }