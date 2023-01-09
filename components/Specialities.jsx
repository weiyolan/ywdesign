import { useState, useEffect } from "react"

import Subtitle from "./Subtitle";
import SpecialtyCard from "./SpecialtyCard";
import LayoutSection from "./LayoutSection";
import {motion} from 'framer-motion'

const specialities = [
    {title:'Websites', text:'I build websites and online tools to boost your brand.'},
    {title: 'Branding', text: 'Uplift your current logo or website with a modern design and color palette.'},
    {title: 'Web Shop', text: 'I help companies and artists getting their products online.'},
    {title: 'Analysis', text: 'Get insights on your current website and branding performance.'},
  ]

export default function Specialities ({noBlur}) {
  let [clicked, setClicked] = useState({... new Array(specialities.length).fill(false)})


  useEffect(()=>{
    let timer = setTimeout(()=>{handleClick(true, 0)}, 1000)
    return ()=>clearTimeout(timer)
  },[])

  function handleClick (newVal,i) {
    // console.log('Clicked with current state:')
    // console.log(visibleItem)
    // console.log('next state:')

    let newClicked = {... new Array(specialities.length).fill(false)};

    if (newVal===true) {
      newClicked[i]=newVal;
      setClicked(newClicked)
    } else if (newVal === false) {
      setClicked(newClicked)
    }     
  
  }

  // const parent = {
  //   visible: {
  //     opacity: 1,
  //     scale:1,
  //     transition: {
  //       when: "beforeChildren",
  //       staggerChildren: 0.08,
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     transition: {
  //       when: "afterChildren",
  //     },
  //   },
  // }

  return (
    <LayoutSection>
    
      <Subtitle first={true} name='Solutions' title='Our in-house specialities' span={'specialities'} position='center'/>
    
      {/* <div initial='hidden' viewport={{once:false}} whileInView='visible' variants={parent}  */}

      <div className='grid grid-cols-2 sm:grid-cols-4 w-full gap-4 min-[500px]:gap-8 sm:gap-2 md:gap-6 lg:gap-8 min-h-fit mx-auto '>
      
        {specialities.map((specialty,i)=>{
          return (
            <SpecialtyCard noBlur={noBlur} className={``}
            key={specialty.title} title={specialty.title} clicked={clicked[i]} setClicked={(newVal)=>handleClick(newVal,i)} text={specialty.text} />
            )})
        }

      </div>
    </LayoutSection>
    
    
    
        
    )

}