import {useEffect, useState} from 'react'
import Image from 'next/image'

export default function SpecialtyCard({title, text, clicked, setClicked, noBlur}) {

    return (
      // variants={cardMotion}
      <div  className={`flex flex-col aspect-square basis-56 h-1/2 p-5 m-2 bg-white/10 rounded-[45px] 
      duration-1000 overflow-hidden transition-all flex-nowrap
      text-white text-center justify-center cursor-pointer 
      outline-2 outline -outline-offset-2 hover:outline-white/30 ` + (clicked?` ${noBlur?'':'backdrop-blur-md'} shadow-2xl outline-white/30 animate-outlinePulse `:` outline-none ${noBlur?'':'backdrop-blur-sm'} shadow-md translate-y-1 scale-95 `)}
      // onMouseEnter={()=>setHovering(true)}
      // onMouseLeave={()=>setHovering(false)}
      onClick={()=>setClicked(!clicked)}>

        <h4 className={`duration-1000 text-3xl mb-4 ` + (clicked?`font-light`:`font-thin translate-y-11`)}>
            {title}
            </h4>
        <p className={`duration-1000 font-thin text-base ` + (clicked?`translate-y-0 text-white visible`:`translate-y-20 invisible text-transparent`)}>
            {text}
        </p>
      </div>
  
    )
  }