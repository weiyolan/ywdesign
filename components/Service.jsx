import Image from "next/image"
import Subtitle from "./Subtitle"
import ServiceCard from "./ServiceCard"
import { useState,useEffect } from "react"
import LayoutSection from "./LayoutSection"
import { motion } from "framer-motion"


export default function Service({name, title, span, text, position, noBlur, icons}) {
  // create object with key-value pairs of index-false
  let [visibleItem, setVisibleItem] = useState(new Array(icons.length).fill(false))
  let [clicked,setClicked] = useState(false)
  // let [visibleItem, setVisibleItem] = useState(Object.fromEntries(new Array(icons.length).fill(false).map((val,i)=>[i,val])))
  // let [globalClick,setGlobalClick] = useState(false)
  // let [serviceText,setServiceText] = useState('')

  useEffect(()=> {
    handleVisibility(true, Math.floor(Math.random()*icons.length))
  },[icons, handleVisibility])

  useEffect(()=>{
    let interval = setInterval(() => {
      if (!clicked) {nextVisibility(visibleItem)}
    }, 10000)
    
    return () => clearInterval(interval)

  }, [visibleItem, clicked, nextVisibility])

  function handleVisibility(newVal,i) {
    // console.log('Clicked with current state:')
    // console.log(visibleItem)
    // console.log('next state:')

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
    // console.log(currentItem)
    // console.log(visibleItem)

    if (currentItem === -1) {
      handleVisibility(true, 0)
    } else {
      let nextItem = currentItem===visibleItems.length-1?0:currentItem+1; 
      handleVisibility(true, nextItem)

    }    
  }

  let cards = (
    <div>
    {icons.map((icon,i)=>{
      return (
        <ServiceCard icon={icon} noBlur={noBlur} key={i} position={position} visible={visibleItem[i]}/>
      )
    })}  
    </div>
  )

  



  let info = (
    <div>
      <Subtitle className=''
          name={name} 
          title={title} 
          span={span} 
          text={text} 
          position={position}
        />
{/* initial={'hidden'} whileInView={"visible"} variants={parent} */}
        <div className= {`flex flex-row mt-4 ${position==='left'?'':'justify-end'} `}>
          {icons.map((icon,i)=>{
            // console.log('i and visibility of service icon is:' )
            // console.log(i)
            // console.log(visibleItem[i])
            return <ServiceIcon noBlur={noBlur} icon={icon.icon} key={i} clicked={visibleItem[i]} handleClick={(newVal)=>{handleVisibility(newVal,i);setClicked(true)}} />
            })}
        </div>
    </div>
  )

  return(
  
      <div className='grid grid-cols-2 w-full'>

        <div className={`col-start-1 w-full relative`}>
          {position==='left'?info:cards}
        </div>
        
        <div className=' col-start-2 w-full relative'>
          {position==='left'?cards:info}
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

function ServiceIcon ({icon, clicked, handleClick, noBlur}) {

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
    className={`flex ${noBlur?'':'backdrop-blur-md'} justify-center cursor-pointer items-center duration-200 bg-white/10 filter m-3 w-16 h-16 rounded-xl outline-2 outline -outline-offset-2 hover:outline-white/30 `+ 
    (clicked?` outline-white/30 animate-outlinePulse shadow-md scale-95 translate-y-1 `:` shadow-2xl outline-white/0 `)}
    onClick={()=>handleClick(!clicked)}
    >

      {icon}

      {/* <Image className='mx-auto' src={src} width={30} height={30} alt={name}/> */}

    </div>
  )
}