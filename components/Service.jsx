import Image from "next/image"
import Subtitle from "./Subtitle"
import ServiceCard from "./ServiceCard"
import { useState,useEffect, useCallback } from "react"
import LayoutSection from "./LayoutSection"
import { motion } from "framer-motion"
import ArrowLink from "./ArrowLink"
import useWindowSize from "./useWindowSize"



export default function Service({name, title, span, text, position, first, noBlur, icons, breakPointSmall}) {
  // create object with key-value pairs of index-false
  let [visibleItem, setVisibleItem] = useState(new Array(icons.length).fill(false))
  let [clicked,setClicked] = useState(false)
  let window = useWindowSize()
  // let [visibleItem, setVisibleItem] = useState(Object.fromEntries(new Array(icons.length).fill(false).map((val,i)=>[i,val])))
  // let [globalClick,setGlobalClick] = useState(false)
  // let [serviceText,setServiceText] = useState('')

  useEffect(()=> {
    handleVisibility(true, Math.floor(Math.random()*icons.length))
  },[icons])

  useEffect(()=>{
    let interval = setInterval(() => {
      if (!clicked) {nextVisibility(visibleItem)}
    }, 10000)
    
    return () => clearInterval(interval)

  }, [visibleItem, clicked])

  function handleVisibility(newVal,i) {
    let newVisibility = new Array(icons.length).fill(false);
    if (newVal===true) {
      newVisibility[i]=newVal;
      setVisibleItem(newVisibility)
    } else if (newVal === false) {
      setVisibleItem(newVisibility)
    }     
  }

  function nextVisibility(visibleItems) {
    let currentItem = visibleItems.indexOf(true);
    if (currentItem === -1) {
      handleVisibility(true, 0)
    } else {
      let nextItem = currentItem===visibleItems.length-1?0:currentItem+1; 
      handleVisibility(true, nextItem)
    }    
  }

  // useEffect(()=>{
  //   console.log(breakPointSmall)
  // })

  let cards = (
    // <div className={`relative w-full sm:h-full min-h-[75vw] min-[350px]:min-h-[75vw] min-[400px]:min-h-[60vw] min-[500px]:min-h-[45vw] `}>
    <div className={`relative w-full sm:h-full min-h-[75vw] min-[350px]:min-h-[60vw] min-[400px]:min-h-[50vw] min-[500px]:min-h-[40vw] `}>
      {icons.map((icon,i)=>{
        return (
          <ServiceCard icon={icon} noBlur={noBlur} first={window.width<breakPointSmall?true:first} key={i} position={position} breakPointSmall={breakPointSmall} visible={visibleItem[i]}/>
        )
      })}  
    </div>
  )

  let info = (
    <div className='cursor-default'>
      <Subtitle className=''
          name={name}   
          title={title} 
          span={span} 
          text={text}
          first={window.width<breakPointSmall?true:first} 
          position={position}
        />
{/* initial={'hidden'} whileInView={"visible"} variants={parent} */}
      <div className= {`flex ${position==='left'?'':'justify-end'} `}>
        <ArrowLink text={'Ask for it'} to={'/contact/#Form'} ext={false}/>
        </div>
      <div className= {`flex mt-8 ${position==='left'?'':'justify-end'} `}>
        {icons.map((icon,i)=>{
          // console.log('i and visibility of service icon is:' )
          // console.log(i)
          // console.log(visibleItem[i])
          return <ServiceIcon left={position==='left'} noBlur={noBlur} icon={icon.icon} key={i} clicked={visibleItem[i]} handleClick={(newVal)=>{handleVisibility(newVal,i);setClicked(true)}} />
          })}
      </div>
    </div>
  )




  return(
      <div id={name} className={`flex w-full ${window.width<breakPointSmall?'flex-col':''} `}>

          <div className={`flex-1`}>
            {window.width<breakPointSmall?info:position==='left'?info:cards}
          </div>
          
          <div className='flex-1'>
            {window.width<breakPointSmall?cards:position==='left'?cards:info}
          </div>

      </div>
    )
}

// const parent = {
//   visible: {
//     opacity: 1,
//     scale:1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.05,
//     },
//   },
//   hidden: {
//     opacity: 0,
//     // transition: {
//     //   when: "afterChildren",
//     // },
//   },
//   tap: {scale:1}
// }

function ServiceIcon ({icon, clicked, handleClick, noBlur, left}) {
  // let window = useWindowSize()

  // const iconAnimation = {
  //   visible: clicked => ({
  //     opacity:1,
  //     y: clicked?4:0,
  //     scale:clicked?0.95:1,
  //     transition: {
  //       duration: 0.2
  //     },
  //   }),
  
  //   hidden: {
  //     opacity:0,
  //     y: 20,
  //   },
  
  //   tap: {y : 4, scale: 0.95},
  // }

  return (
    // <motion.div variants={iconAnimation} initial='hidden' custom={clicked} whileTap='tap' whileInView='visible'
    <div
    className={`flex ${noBlur?'':'backdrop-blur-md'} justify-center select-none cursor-pointer items-center duration-200 bg-white/10 filter 
    ${!left?'ml-2 min-[350px]:ml-3 lg:ml-4 ':' mr-2 min-[350px]:mr-3 lg:mr-4 '}
      w-9 h-9 sm:mt-2  min-[350px]:w-10 min-[350px]:h-10
      sm:w-10 sm:h-10 md:h-12 md:w-12 rounded-lg md:rounded-xl lg:h-14 lg:w-14
     p-2
    outline-2 outline -outline-offset-2 hover:outline-white/30 
    `+ 
    (clicked?` outline-white/30 focus:outline-white/30 animate-outlinePulse shadow-md scale-95 translate-y-1 `:`hover:scale-[1.08] shadow-2xl focus:outline-none focus:scale-[1.08] outline-white/0 `)}
    onClick={()=>handleClick(!clicked)}
    >

      {icon}

      {/* <Image className='mx-auto' src={src} width={30} height={30} alt={name}/> */}

    </div>
  )
}