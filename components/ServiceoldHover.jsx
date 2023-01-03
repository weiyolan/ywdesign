import Image from "next/image"
import Subtitle from "./Subtitle"
import ServiceCard from "./ServiceCard"
import { useState,useEffect } from "react"


export default function Service({name, title, span, text, position, icons}) {
  let [visibleItem, setVisibleItem] = useState(new Array(icons.length).fill(false))
  // let [globalClick,setGlobalClick] = useState(false)
  // let [serviceText,setServiceText] = useState('')

  // function handleVisibility(newVal,i) {
  //   setVisibleItem(old => {
  //     let newVisibility = old.map((oldVal, index)=>index===i?newVal:oldVal)
  //     return newVisibility 
  //   })
  // }

  useEffect(()=>{
    console.log(visibleItem)
  })

  if (position === 'right') {
    return (
    <section className='grid grid-cols-2 w-full px-42 '>

      <div className='col-start-1 w-full'>
        
      </div>
    
      <div className=' col-start-2 w-full'>
        <Subtitle className='' name={name} title={title} span={span} 
        text={text} 
        position={position}/>

        <div className='flex flex-row-reverse'>
          {icons.map((icon,i)=>{
          return <ServiceIcon src={icon.src} name={icon.name} key={i*Math.random()*10000}/>
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
{/* handleVisibility={(newval)=>handleVisibility(newval,i)} */}
        <div className='flex flex-row mt-4 '>
          {icons.map((icon,i)=>{
            return <ServiceIcon src={icon.src} name={icon.name} key={i*Math.random()*10000} setVisibleItem={setVisibleItem} />
            })}
        </div>

      </div>
      
      <div className=' col-start-2 w-full relative'>
        {icons.map((icon,i)=>{
          return (
            <ServiceCard icon={icon} key={i*Math.random()*10000} visible={visibleItem[i]}/>
          )
        })/* <SpecialtyCard 
        className = 'mt-36' title={'Roadmap'} text={'gliding and animated'} /> */}  
      </div>

    </section>)
}

function ServiceIcon ({src, name, setVisibleItem}) {
  let [clicked, setClicked] = useState(false)
  let [hovering, setHovering] = useState(false)

  function handleEnter () {
    setHovering(true)
  }

  function handleLeave () {
    setHovering(false);
  }

  // useEffect(()=>{
  //   console.log(hovering)
  // })

  return (
    <div className={'flex bg-white/10 duration-200 m-3 w-16 h-16 rounded-xl'+ 
    (hovering||clicked?' backdrop-blur-sm shadow-md ':' backdrop-blur-md shadow-2xl ')}
    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}
    onClick={()=>setClicked(clicked=>!clicked)}
    >

      <Image className='mx-auto' src={src} width={30} height={30} alt={name}/>

    </div>
  )
}