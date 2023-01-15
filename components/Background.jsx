import { useState, useEffect } from "react"
import { useAppContext } from "./Context"


export default function Background ({scrolled}) {
  const [myWidth, setMyWidth] = useState(0)
  let {width, breakPointSmall} = useAppContext();

  let blurOn = true

  useEffect(()=>{
    setMyWidth(width)
  },[width])

  // function handleScroll () {
  //   let ratio = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
  //   setScrolled(ratio)
  // }
  // let [scrolled, setScrolled] = useState(0)

  // useEffect(()=>{
  //   let ratio = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
  //   setScrolled(ratio)

  //   window.addEventListener('scroll', handleScroll, {passive:true})

  //   return () => {window.removeEventListener('scroll',handleScroll)}
  // },[])


  return (
    <div className={`-z-[50] w-full fixed top-0 h-screen overflow-hidden filter bg-blue`} >

        <div className={`bg-green ${myWidth<640?'':'animate-blob'} animation-delay-2000   
          h-[200vh] w-[66vw] 
          -left-[40vw] -bottom-[100vh] 
          transition-all duration-400 rounded-full filter absolute ${blurOn?`blur-[200px]`:''} `}
          /> 
        <div className={`bg-blue ${myWidth<640?'':'animate-blob2'} animation-delay-4000   
          h-[200vh] w-[66vw] 
          right-[25vw] -top-[33vh] 
          transition-all duration-400 rounded-full filter absolute ${blurOn?`blur-[200px]`:''} `}
          />
        <div style={myWidth<640?{top:0,left:0}:{top:`${-60+25*scrolled}vh`, left:`${-33+30*scrolled}vw`}} 
        className={`bg-green ${myWidth<640?'':'animate-blob'} animation-delay-6000   
          h-[100vh] w-[66vw] 
          -left-[33vw] -top-[60vh] 
          transition-all ease-in-out duration-1000 rounded-full filter absolute ${blurOn?`blur-[100px] sm:blur-[200px]`:''} `}
          /> 
        <div className={`bg-green ${myWidth<640?'':'animate-blob2'} animation-delay-2000  
          h-[200vh] w-[66vw] 
          right-[0] -bottom-[60vh]
          transition-all duration-400 rounded-full filter absolute ${blurOn?`blur-[200px]`:''} `}
          /> 

        {/* height:`${200-80*scrolled}vh`, width:`${66-20*scrolled}vw`} */}

        <div style={myWidth<640?{}:{bottom:`${-100+20*scrolled}vh`, right:`${-25+50*scrolled}vw`}}
        className={`bg-blue ${myWidth<640?'':'animate-blob'} animation-delay-4000    
         -right-[25vw]  -bottom-[100vh]
         h-[150vh] w-[50vw]
          transition-all ease-in-out duration-1000 rounded-full filter absolute ${blurOn?`blur-[200px]`:''} `}
          />
        <div className={`bg-green ${myWidth<640?'top-0 right-0':'animate-blob'} animation-delay-0000   
          h-[200vh] w-[66vw] 
          -right-[33vw] -top-[150vh]
          transition-all duration-400 rounded-full filter absolute ${blurOn?`blur-[100px] sm:blur-[200px]`:''} `}
          /> 

    </div>
  )
}

