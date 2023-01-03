import { useState,useEffect } from "react"
import AccentTitle from "./AccentTitle"

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
      <div className={`w-full ${first?'mt-24':'mt-48'} `+ style}>
        <AccentTitle text={name}/>

        <h2 className='text-primary font-normal text-5xl my-10 whitespace-pre-wrap'>

          {title.split(span)[0]}
      
          <span className='text-white font-[550]'>
            {span}
          </span> 

          {title.split(span)[1]}
        </h2>

        {text.length>0 && <div className='text-black font-extralight'
        >{text}</div>}
      </div>

  )
}

Subtitle.defaultProps = {
  text:''
}