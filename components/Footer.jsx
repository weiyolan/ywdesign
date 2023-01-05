import Link from "next/link"
import AccentTitle from "./AccentTitle"
import YW from "../public/images/logo_ywd_w.svg"
import Image from "next/image";
import { useState, useEffect } from "react";

import {motion} from 'framer-motion'

const designList = [{text:'Logo',link:'/services/#Logo'},{text:'Website',link:'/services/#Website'},{text:'e-Commerce',link:'/services/#e-Commerce'},{text:'Analysis',link:'/services/#Analysis'}];
const supportList = [{text:'FAQ',link:''},{text:'T&C',link:''},{text:'Workflow',link:''},{text:'Simulation',link:''}];
const linksList = [{text:'Home',link:'/'},{text:'Services',link:'/services'},{text:'About me',link:'/aboutme'},{text:'Contact',link:'/contact'}];
const contactList = [
  {text:'Call', ext:false, link:'tel:+32471124525'},
  {text:'Whatsapp',ext:true, link:'https://wa.me/32471124525?text=Hi+Yolan%2C+%0D%0AI+got+your+WhatsApp+from+your+website+ywdesign.co.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A'},
  {text:'Email', ext:true, link:"mailto:contact@ywdesign.co?subject=Website%20Project&body=Hi%20Yolan%2C%0A%0AI%20have%20a%20website%20that%20needs%20an%20update.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A"},
  {text:'Form', ext:false, link:'/contact/#Form'},
];


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
          <Link href='/'><Image src="/images/logo_ywd_w.svg" width={60} height={60*92/112} alt="ywdesign logo"/></Link>
        
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
              if (item.ext) {
              return <li key={i} className='text-white font-light my-3 cursor-alias' ><Link href={item.link}  target='_blank' className='text-white font-light my-3 cursor-alias' rel="noopener noreferrer" >{item.text}</Link></li>}
              else { return <li key={i} className='text-white font-light my-3' ><Link href={item.link}>{item.text}</Link></li>}
            })}
          </ul>
        </div>
      </div>

    </motion.section>

  )


}