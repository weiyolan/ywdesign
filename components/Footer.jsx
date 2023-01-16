import Link from "next/link"
import AccentTitle from "./AccentTitle"
import YWD from "../public/images/logo_ywd_w.svg"
import Image from "next/image";
import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";
import {motion} from 'framer-motion'
import { useAppContext } from "./Context";

const designList = [{text:'Logo',link:'/services/#Logo'},{text:'Website',link:'/services/#Website'},{text:'e-Commerce',link:'/services/#e-Commerce'},{text:'Analysis',link:'/services/#Analysis'}];
const supportList = [{text:'FAQ',link:'/contact/#Form',disabled:false},{text:'Roadmap',link:'/roadmap'},{text:'T&C',link:'',disabled:true},{text:'Simulation',link:'',disabled:true}];
const linksList = [{text:'Home',link:'/'},{text:'Services',link:'/services'},{text:'About me',link:'/aboutme'},{text:'Contact',link:'/contact'}];
const contactList = [
  {text:'Call', ext:false, link:'tel:+32471124525'},
  {text:'Whatsapp',ext:true, link:'https://wa.me/32471124525?text=Hi+Yolan%2C+%0D%0AI+got+your+WhatsApp+from+your+website+ywdesign.co.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A'},
  {text:'Email', ext:true, link:"mailto:contact@ywdesign.co?subject=Website%20Project&body=Hi%20Yolan%2C%0A%0AI%20have%20a%20website%20that%20needs%20an%20update.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A"},
  {text:'Form', ext:false, link:'/contact/#Form'},
];


export default function Footer() {
  let {width, breakPointSmall, scrolled} = useAppContext();
  // let [style,setStyle] = useState({transform: 'translateY(100%) ', opacity:0 })
  // let [appeared,setAppeared] = useState(false)

  // useEffect(()=>{console.log(breakPointSmall)})

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
      initial={{y: `${width<breakPointSmall?100:200}` }} 
      whileInView={{y: 0, transition: {type:'spring', stiffness: 200, damping:25}}} 
      viewport={{once : true}}
      className={`backdrop-blur bg-white/10 rounded-t-2xl sm:rounded-t-[2rem] mt-12 p-10 pb-0 sm:p-8 lg:p-16 bottom-0 relative w-full`}>
      
      <div className='flex flex-wrap sm:flex-nowrap justify-between  max-w-4xl mx-auto items-start sm:items-center '>
        
        {/* {width<breakPointSmall && <div className="mb-4 w-full sm:w-fit">
          <div className='mx-auto w-fit'><Link href='/'><YWD className='w-8 sm:w-14' alt='ywdesign logo in white'/></Link></div>
        </div>} */}

        <Links text='Design' list={designList} position={width<breakPointSmall?'center':'left'} />
        <Links text='Support' list={supportList} position={width<breakPointSmall?'center':'left'} />

        <div className="mb-4 w-full sm:w-fit">
          <div className='mx-auto w-fit'><Link href='/' title='Homepage'><YWD className='w-8 sm:w-14' alt='ywdesign logo in white'/></Link></div>
        </div>

        <Links text='Links' list={linksList} position={width<breakPointSmall?'center':'right'} />
        <Links text='Contact' list={contactList} position={width<breakPointSmall?'center':'right'} />

      </div>

    </motion.section>
  )
}

function Links ({position, text, list}) {
  return (
    <div className={`${position==='center'?'text-center':position==='left'?'text-left':'text-right'} px-0 mb-4 w-[49%] sm:w-fit`}>
          <AccentTitle text={text}/>
          <List list={list}/>
    </div>
  )
}

function List ({list}) {

  return (
    <ul>
      {list.map((item, i)=>{
        if (item.ext) {
          return (
            <li key={i} 
            className={`text-white font-light whitespace-nowrap
            my-3 sm:my-3
            text-base sm:text-sm`} >
              <Link href={item.link} target='_blank' className='cursor-alias' rel="noopener noreferrer" >
                {item.text}
              </Link>
            </li>
        )} 
        else { return (
          <li key={i} 
          className={`${item.disabled?'text-primary/90':'text-white'} font-light whitespace-nowrap
          my-3 sm:my-3
          text-base sm:text-sm`} >
            {item.disabled?item.text:<Link href={item.link}>
              {item.text}
            </Link>}
          </li>)}
      })}
    </ul>

  )
}

