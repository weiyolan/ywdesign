import Link from "next/link"
import AccentTitle from "./AccentTitle"
import YW from "../public/images/logo_ywd_w.svg"
import Image from "next/image";
import { useState, useEffect } from "react";

import {motion} from 'framer-motion'

const designList = [{text:'Logo',link:''},{text:'Website',link:''},{text:'Branding',link:''},{text:'Analysis',link:''}];
const supportList = [{text:'FAQ',link:''},{text:'T&C',link:''},{text:'Workflow',link:''},{text:'Simulation',link:''}];
const linksList = [{text:'Home',link:'/'},{text:'Services',link:'/services'},{text:'About me',link:'/aboutme'},{text:'Contact',link:'/contact'}];
const contactList = [{text:'Call',link:''},{text:'Whatsapp',link:''},{text:'Email',link:''},{text:'Form',link:''}];


export default function Footer({scrolled}) {
  // let [style,setStyle] = useState({transform: 'translateY(100%) ', opacity:0 })
  // let [appeared,setAppeared] = useState(false)

  // useEffect(()=>{
  
  //   if (!appeared && scrolled>0.85) {
  //     setStyle({transform: 'translateY(0) ', opacity:1})
  //     setAppeared(true)
  //   } else if (appeared && scrolled<0.85) {
  //     setStyle({transform: 'translateY(100%) ', opacity:0})
  //     setAppeared(false)
  //   }


  // },[appeared, scrolled]) 

  return (
    <motion.section 
      initial={{y: 200 }} 
      whileInView={{y: 0, transition: {type:'spring', stiffness: 200, damping:25}}} 
      viewport={{once : true}}
      className={`backdrop-blur bg-white/10 rounded-t-[2rem] bottom-0 relative p-16 mt-10 w-full`}>
      
      <div
      className='flex justify-between max-w-4xl mx-auto items-start '>
        <div>
          <AccentTitle text={'Design'}/>
          <ul>
            {designList.map((item, i)=>{
              return <li key={i} className='text-white font-light my-3' ><Link href={item.link} >{item.text}</Link></li>
            })}
          </ul>
        </div>
        <div className=''>
          <AccentTitle text={'Support'}/>
          <ul>
            {supportList.map((item, i)=>{
              return <li key={i} className='text-white font-light my-3' ><Link href={item.link} >{item.text}</Link></li>
            })}
          </ul>
        </div>    
        <div className="my-auto">
          {/* <YW alt='ywdesign logo' width="60" fill='white'/> */}
          <Image src="/images/logo_ywd_w.svg" width={60} height={60*92/112} alt="ywdesign logo"/>
        
        </div>
        <div className='text-right'>
          <AccentTitle text={'Links'}/>
          <ul>
            {linksList.map((item, i)=>{
              return <li key={i} className='text-white font-light my-3' ><Link href={item.link} >{item.text}</Link></li>
            })}
          </ul>
        </div>
        <div className='text-right'>
          <AccentTitle text={'Contact'}/>
          <ul>
            {contactList.map((item, i)=>{
              return <li key={i} className='text-white font-light my-3' ><Link href={item.link} >{item.text}</Link></li>
            })}
          </ul>
        </div>
      </div>

    </motion.section>

  )


}