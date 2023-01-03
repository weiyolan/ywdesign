import Image from "next/image"
import Subtitle from "./Subtitle"
import ServiceCard from "./ServiceCard"
import { useState,useEffect } from "react"


export default function Service({name, title, span, text, position, icons}) {
  // create object with key-value pairs of index-false
  let [visibleItem, setVisibleItem] = useState({... new Array(icons.length).fill(false)})
  let [clicked,setClicked] = useState(false)
  // let [visibleItem, setVisibleItem] = useState(Object.fromEntries(new Array(icons.length).fill(false).map((val,i)=>[i,val])))
  // let [globalClick,setGlobalClick] = useState(false)
  // let [serviceText,setServiceText] = useState('')

  useEffect(()=> {
    handleVisibility(true, Math.floor(Math.random()*icons.length))
  },[])

  useEffect(()=>{

    let interval = setInterval(() => {
      nextVisibility()
    }, 1000)

    if (clicked) {
      clearTimeout(interval)
    }

    return () => clearTimeout(interval)

  },[clicked])

  function handleVisibility(newVal,i) {
    // console.log('Clicked with current state:')
    // console.log(visibleItem)
    // console.log('next state:')

    let newVisibility = {... new Array(icons.length).fill(false)};

    if (newVal===true) {
      newVisibility[i]=newVal;
      setVisibleItem(newVisibility)
    } else if (newVal === false) {
      setVisibleItem(newVisibility)
    }     
  
  }

  function nextVisibility() {
    let currentItem = visibleItem.indexOf(true);

    if (currentItem === -1) {
      handleVisibility(true, 0)
    } else {
      let nextItem = currentItem===visibleItem.length-1?0:currentItem+1 
      handleVisibility(true, nextItem)
    }    
  }


  if (position === 'right') {
    return (
    <section className='grid grid-cols-2 w-full px-42 '>

      <div className=' col-start-1 w-full relative'>
        {icons.map((icon,i)=>{
          return (
            <ServiceCard icon={icon} key={i} position={position} visible={visibleItem[i]}/>
          )
        })/* <SpecialtyCard 
        className = 'mt-36' title={'Roadmap'} text={'gliding and animated'} /> */}  
      </div>
    
      <div className=' col-start-2 w-full'>
        <Subtitle className=''
          name={name} 
          title={title} 
          span={span} 
          text={text} 
          position={position}
        />

        <div className='flex flex-row-reverse mt-4 '>
          {icons.map((icon,i)=>{
            // console.log('i and visibility of service icon is:' )
            // console.log(i)
            // console.log(visibleItem[i])
            return <ServiceIcon icon={icon.icon} key={i} clicked={visibleItem[i]} setClicked={(newVal)=>{handleVisibility(newVal,i);setClicked(true)}} />
            })}
        </div>

      </div>
   </section>
   )}

  return(
    <section className='grid grid-cols-2 w-full px-42'>

      <div className='col-start-1 w-full'>
        <Subtitle className=''
          name={name} 
          title={title} 
          span={span} 
          text={text} 
          position={position}
        />

        <div className='flex flex-row mt-4 '>
          {icons.map((icon,i)=>{
            // console.log('i and visibility of service icon is:' )
            // console.log(i)
            // console.log(visibleItem[i])
            return <ServiceIcon icon={icon.icon} key={i} clicked={visibleItem[i]} handleClick={(newVal)=>{handleVisibility(newVal,i);setClicked(true)}} />
            })}
        </div>

      </div>
      
      <div className=' col-start-2 w-full relative'>
        {icons.map((icon,i)=>{
          return (
            <ServiceCard icon={icon} key={i} position={position} visible={visibleItem[i]}/>
          )
        })/* <SpecialtyCard 
        className = 'mt-36' title={'Roadmap'} text={'gliding and animated'} /> */}  
      </div>

    </section>)
}

function ServiceIcon ({icon, clicked, handleClick}) {

  // useEffect(()=>{
  //   console.log(clicked)
  // })

  return (
    <div className={'flex justify-center cursor-pointer items-center bg-white/10 duration-300  m-3 w-16 h-16 rounded-xl outline-2 outline -outline-offset-2 hover:outline-white/30 '+ 
    (clicked?' outline-white/30 animate-outlinePulse backdrop-blur-sm shadow-md translate-y-1 scale-95  ':' outline-white/0 backdrop-blur-md shadow-2xl ')}
    onClick={()=>handleClick(!clicked)}
    >

      {icon}

      {/* <Image className='mx-auto' src={src} width={30} height={30} alt={name}/> */}

    </div>
  )
}