import { useState, useEffect } from "react"

import Subtitle from "./Subtitle";
import SpecialtyCard from "./SpecialtyCard";
import LayoutSection from "./LayoutSection";
import {motion} from 'framer-motion'

const specialities = [
    {title:'Web Dev', text:'I build websites, e-commerces and online tools to boost your brand.'},
    {title: 'Redesign', text: 'Uplift your current logo or website with a modern design and color palette.'},
    {title: 'Prototyping', text: 'I help start-ups build a prototype app and website.'},
    {title: 'Analysis', text: 'Get insights on your current website and branding performance.'},
  ]

export default function Specialities (noBlur) {
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

  const parent = {
    visible: {
      opacity: 1,
      scale:1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  return (
    <LayoutSection>
    
      <Subtitle first={true} name='Solutions' title='Our in-house specialities' span={'specialities'} position='center'/>
    
      <motion.div initial='hidden' viewport={{once:true}} whileInView='visible' variants={parent} 
        className='inline-flex justify-between w-full mx-auto mt-10'>
      
        {specialities.map((specialty,i)=>{
          return (
            <SpecialtyCard noBlur={noBlur} className={``}
            key={specialty.title} title={specialty.title} clicked={clicked[i]} setClicked={(newVal)=>handleClick(newVal,i)} text={specialty.text} />
            )})
        }

      </motion.div>
    </LayoutSection>
    
    
    
        
    )

}