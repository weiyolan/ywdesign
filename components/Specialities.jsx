import { useState, useEffect } from "react"

import Subtitle from "./Subtitle";
import SpecialtyCard from "./SpecialtyCard";
import LayoutSection from "./LayoutSection";
import {motion} from 'framer-motion'
const designList = [{text:'Logo',link:'/services/#Logo'},{text:'Website',link:'/services/#Website'},{text:'e-Commerce',link:'/services/#e-Commerce'},{text:'Analysis',link:'/services/#Analysis'}];

const specialities = [
    {title:'Websites', text:'I build websites and online tools to boost your brand.', link:'/services/#Website'},
    {title: 'Branding', text: 'Uplift your current logo or website with a modern design and color palette.',link:'/services/#Logo'},
    {title: 'Web Shop', text: 'I help companies and artists getting their products online.',link:'/services/#e-Commerce'},
    {title: 'Analysis', text: 'Get insights on your current website and branding performance.',link:'/services/#Analysis'},
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
      newClicked[i]=true;
      setClicked(newClicked)

    } else if (newVal === false) {
      let indexes = [0,1,2,3].filter((index)=> index !== i)
      let randomIndex = indexes[Math.floor(Math.random()*3)];
      // console.log(randomIndex)
      newClicked[randomIndex] = true;
      setClicked(newClicked)
    }     
  
  }

  // useEffect(()=>{
  //   console.log(clicked)
  // },[clicked])

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
    
      <Subtitle first={true} realFirst={true} name='Solutions' title='Our in-house specialities' span={'specialities'} position='center'/>
    
      {/* <div initial='hidden' viewport={{once:false}} whileInView='visible' variants={parent}  */}

      <div className='grid grid-cols-2 grid-rows-2 sm:grid-rows-1 sm:grid-cols-4 w-full gap-4 min-[500px]:gap-8 sm:gap-2 md:gap-6 lg:gap-8 mx-auto'>
        {specialities.map((specialty,i)=>{
          return (
            <div key={specialty.title} className={`relative mx-auto w-[40vw] h-[40vw] sm:w-[20vw] sm:h-[20vw] lg:w-[230px] lg:h-[230px]`}>
            <SpecialtyCard noBlur={noBlur} className={``}
            title={specialty.title} clicked={clicked[i]} setClicked={(newVal)=>handleClick(newVal,i)} text={specialty.text} link={specialty.link}/>
            </div>
            )
          })
        }
      </div>
    </LayoutSection>
    
    
    
        
    )

}