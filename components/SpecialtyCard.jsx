import {useEffect, useState} from 'react'
import Image from 'next/image'
import ArrowLink from './ArrowLink'

export default function SpecialtyCard({title, text, clicked, setClicked, noBlur, link, linkText}) {

    return (
      // variants={cardMotion}
      <div className={`flex w-full flex-col relative aspect-square select-none p-6 sm:p-2 bg-white/10 
      duration-1000 overflow-hidden transition-all z-10 min-h-fit
      text-white text-center justify-center cursor-pointer
      outline-2 outline -outline-offset-2 hover:outline-white/30 focus:outline-white/30
      shadow-md after:shadow-black
      after:shadow-2xl after:top-0 after:left-0 after:absolute after:z-[-1] after:w-full after:h-full after:transition-all after:duration-1000 
        ${clicked? 
          `${noBlur?'':'backdrop-blur-md'} after:opacity-100  outline-white/30 focus:outline-white/30 animate-outlinePulse 
        rounded-[1.75rem] min-[500px]:rounded-[2.5rem] sm:rounded-[1.75rem] lg:rounded-[40px]`
        :` after:opacity-0  rounded-[2.25rem] min-[500px]:rounded-[3rem] sm:rounded-[2rem] lg:rounded-[50px] 
         outline-none ${noBlur?'':'backdrop-blur-sm'}  focus:outline-none translate-y-1 scale-95`}`
        }
      // onMouseEnter={()=>setHovering(true)}
      // onMouseLeave={()=>setHovering(false)}
      onClick={()=>setClicked(!clicked)}>

        <h4 className={`absolute duration-1000 text-xl min-[400px]:text-2xl min-[500px]:text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 whitespace-nowrap ` + (clicked?`scale-110 font-light left-1/2 top-0 -translate-x-1/2 mt-2 min-[350px]:mt-6 sm:mt-4 lg:mt-6 xl:mt-8`:`font-thin left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`)}>
            {title}
            </h4>
        <p className={`absolute duration-1000 w-full px-2 lg:px-6 font-extralight text-xs min-[400px]:text-sm  ` + (clicked?` text-white visible left-1/2 -translate-x-1/2 top-1/2 -translate-y-[40%] sm:-translate-y-1/3 `:` top-40 translate-y-full left-1/2 -translate-x-1/2  text-transparent`)}>
            {text}
        </p>
        <div onClick={(e)=>e.stopPropagation()} className={`absolute w-full font-extralight text-xs min-[400px]:text-sm transition-all left-1/2 -translate-x-1/2 ml-[15px] text-white fill-white bottom-0 mb-1 min-[400px]:mb-2 sm:mb-1 md:mb-2 lg:mb-6 ` + (clicked?` opacity-100 visible ease-in duration-[3s]`:` opacity-0 ease-out duration-[0.5s] `)} >
          <ArrowLink text='More' inherit={true} to={link} ext={false}/>
        </div>
      </div>
  
    )
  }