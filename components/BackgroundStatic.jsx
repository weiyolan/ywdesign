import Image from "next/image";
import { useState, useEffect } from "react"
import { useAppContext } from "./Context"


export default function BackgroundStatic() {
  // const [myWidth, setMyWidth] = useState(0)
  // let {width, breakPointSmall} = useAppContext();

  // let blurOn = true

  // useEffect(()=>{
  //   setMyWidth(width)
  // },[width])

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

  // bg-cover bg-[url('/images/backgroundpng.png')
  return (
    <div role='presentation' className={`-z-[50] w-full fixed top-0 h-screen overflow-hidden  `} >
      <Image priority role='presentation' src='/images/backgroundpng.png' alt='' fill sizes='120vw' quality={100} className='object-cover object-center' />
    </div>
  )
}

