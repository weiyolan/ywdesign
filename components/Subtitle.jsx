import { useState,useEffect } from "react"
import AccentTitle from "./AccentTitle"
import {useAppContext } from './Context'
let draft= {name: 'SOLUTIONS', title: "Our in-house specialities", span: 'specialities', text: 'The roadmap allows us to find the best solution for you, every time. You want to try it out.' }


export default function Subtitle({name, title, span, text, position, first}) {
// position is left, center or right
  let [style, setStyle] = useState('text-center')

  function getStyle (position) {
    switch (position) {
      case 'left':
        return ('text-left')
      case 'right':
        return ('text-right') 
      default :
        return ('text-center')
    }
  }

  useEffect(()=>{
    setStyle(getStyle(position))
  },[position])
  

  return (
      <div className={`w-full select-none whitespace-pre-wrap ${first?'mt-12 sm:mt-24':'mt-42 sm:mt-48'} `+ style}>
        <AccentTitle text={name}/>

        <h2 className='text-primary font-normal text-3xl select-none sm:text-4xl lg:text-5xl my-6 sm:my-10 '>

          {title.split(span)[0]}
      
          <span className='text-white font-[550]'>
            {span}
          </span> 

          {title.split(span)[1]}
        </h2>

        {text.length>0 && <div className='text-primary select-text font-light text-sm sm:text-base lg:font-normal'
        >{text}</div>}
      </div>

  )
}

Subtitle.defaultProps = {
  text:''
}
