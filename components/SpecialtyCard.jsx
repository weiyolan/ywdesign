import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ArrowLink from './ArrowLink'
import { useRouter } from 'next/router'

export default function SpecialtyCard({ title, text, clicked, setClicked, noBlur, link, linkText }) {

  const { locale } = useRouter()
  // after:outline-none after:-outline-offset-2  after:bg-red-400/20 after:filter 
  // after:top-0 after:left-0 after:absolute after:z-[10] after:w-full after:h-full after:transition-all after:duration-1000 after:flex

  return (
    // variants={cardMotion}
    <div tabIndex={0} className={`flex absolute h-full w-full flex-col select-none bg-white/10 
      duration-1000 overflow-hidden transition-all
      text-white text-center justify-center cursor-pointer
      border-2 hover:border-white/30 focus:border-white/30 outline-none focus:outline-none
      
        ${clicked ?
        `${noBlur ? '' : 'backdrop-blur-md'} shadow-2xl animate-borderPulse border-white/30
        after:rounded-[1.75rem] rounded-[1.75rem] min-[500px]:rounded-[2.5rem] sm:rounded-[1.75rem] lg:rounded-[40px] `
        : ` shadow-md  rounded-[2.25rem] min-[500px]:rounded-[3rem] sm:rounded-[2rem] lg:rounded-[50px] 
        border-transparent ${noBlur ? '' : 'backdrop-blur-sm'} focus-within:border-white/20 focus-within:scale-[1.02] translate-y-1 scale-95`}`
    }
      // onMouseEnter={()=>setHovering(true)}
      // onMouseLeave={()=>setHovering(false)}
      onClick={() => setClicked(!clicked)} onKeyDown={(e) => { if (e.code === 'Enter') { setClicked(!clicked) } }}>

      <h3 className={`absolute duration-1000 text-xl min-[400px]:text-2xl min-[500px]:text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 whitespace-nowrap ` + (clicked ? `scale-110 font-light left-1/2 top-0 -translate-x-1/2 mt-2 min-[350px]:mt-4 min-[450px]:mt-6 sm:mt-1 min-[700px]:mt-4 lg:mt-6 xl:mt-8` : `font-thin left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`)}>
        {title}
      </h3>
      <p className={`absolute duration-1000 w-full  ${locale === 'fr' ? 'px-1 sm:px-1 md:px-1' : 'px-2 sm:px-2 md:px-2'} min-[500px]:px-6  min-[700px]:px-4  lg:px-6 font-extralight text-xs min-[400px]:text-sm sm:text-xs lg:text-sm` + (clicked ? ` text-white visible left-1/2 -translate-x-1/2 top-1/2 -translate-y-[40%]  md:-translate-y-1/3  lg:-translate-y-[40%]` : ` top-40 translate-y-full left-1/2 -translate-x-1/2  text-transparent`)}>
        {text}
      </p>
      <div onClick={(e) => e.stopPropagation()} className={`absolute w-full font-extralight text-xs min-[400px]:text-sm transition-all left-1/2 -translate-x-1/2 ml-[15px] text-white fill-white bottom-0 mb-1 min-[400px]:mb-2 sm:mb-1 md:mb-2 lg:mb-6 ` + (clicked ? ` opacity-100 visible ease-in duration-[3s]` : ` opacity-0  pointer-events-none ease-out duration-[0.5s] `)} >
        <ArrowLink tabIndex={clicked ? 0 : -1} text={`${locale === 'en' ? 'Features' : 'Savoir plus'}`} inherit={true} to={link} ext={false} />
      </div>
    </div>

  )
}