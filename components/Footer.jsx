import Link from "next/link"
import AccentTitle from "./AccentTitle"
import YWD from "../public/images/logo_ywd_w.svg"
import Image from "next/image";
import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";
import {motion} from 'framer-motion'
import { useAppContext } from "./Context";

const designList = {en:[{text:'Logo',link:'/services/#Logo'},{text:'Website',link:'/services/#Website'},{text:'e-Commerce',link:'/services/#e-Commerce'},{text:'Analysis',link:'/services/#Analysis'}],
fr:[{text:'Logo',link:'/services/#Logo'},{text:'Site web',link:'/services/#Website'},{text:'e-Commerce',link:'/services/#e-Commerce'},{text:'Analyse',link:'/services/#Analysis'}]};
const supportList = {en:[{text:'Roadmap', link:'/roadmap'},{text:'FAQ',link:'/contact/#Form',disabled:false},{text:'T&C',link:'',disabled:true},{text:'Simulation',link:'',disabled:true}],
fr:[{text:'Votre Chemin', link:'/roadmap',disabled:false},{text:'QFP',link:'/contact/#Form',disabled:true},{text:'T&C',link:'',disabled:true},{text:'Simulation',link:'',disabled:true}]};
const linksList = {en:[{text:'Home',link:'/'},{text:'Services',link:'/services'},{text:'About me',link:'/aboutme'},{text:'Contact',link:'/contact'}], 
fr: [{text:'Accueil',link:'/'},{text:'Services',link:'/services'},{text:'A Propos',link:'/aboutme'},{text:'Contact', link:'/contact'}]};
const contactList = {en:[
  {text:'Whatsapp',ext:true, link:'https://wa.me/32471124525?text=Hi+Yolan%2C+%0D%0AI+got+your+WhatsApp+from+your+website+ywdesign.co.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A'},
  {text:'+33 6 38 56 53 02', ext:false, link:'tel:+33638565302'},
  {text:'contact@ywdesign.co', ext:true, link:"mailto:contact@ywdesign.co?subject=Website%20Project&body=Hi%20Yolan%2C%0A%0AI%20have%20a%20website%20that%20needs%20an%20update.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A"},
  {text:'VAT: BE0794.586.584', ext:false, link:'/contact/#informations'},
],fr:[
  {text:'Whatsapp',ext:true, link:'https://wa.me/32471124525?text=Hi+Yolan%2C+%0D%0AI+got+your+WhatsApp+from+your+website+ywdesign.co.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A'},
  {text:'+33 6 38 56 53 02', ext:false, link:'tel:+33638565302'},
  {text:'contact@ywdesign.co', ext:true, link:"mailto:contact@ywdesign.co?subject=Website%20Project&body=Hi%20Yolan%2C%0A%0AI%20have%20a%20website%20that%20needs%20an%20update.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A"},
  {text:'TVA: BE0794.586.584', ext:false, link:'/contact/#informations'},
]};


export default function Footer() {
  let {width, breakPointSmall, scrolled, locale} = useAppContext();
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
      
      <div className='flex flex-wrap sm:flex-nowrap justify-between max-w-4xl mx-auto items-start sm:items-center '>
        
        {/* {width<breakPointSmall && <div className="mb-4 w-full sm:w-fit">
          <div className='mx-auto w-fit'><Link href='/'><YWD className='w-8 sm:w-14' alt='ywdesign logo in white'/></Link></div>
        </div>} */}

        <Links text='Design' list={designList[locale]} position={width<breakPointSmall?'center':'left'} />
        <Links text='Navigation' list={linksList[locale]} position={width<breakPointSmall?'center':'left'} />

        <div className="mb-4 w-full sm:w-fit">
          <div className='mx-auto w-fit text-center'><Link href='/' title='Go to homepage'><YWD className='w-8 sm:w-14' alt='ywdesign logo in white'/></Link>
          </div><p className='text-white text-center text-xs font-extralight' ><br/></p>
        </div>

        <Links text='Support' list={supportList[locale]} position={width<breakPointSmall?'center':'right'} />
        <Links text='Contact' list={contactList[locale]} position={width<breakPointSmall?'center':'right'} />

      </div>

    </motion.section>
  )
}

function Links ({position, text, list}) {
  return (
    <div className={`${position==='center'?'text-center ':position==='left'?'text-left ':'text-right '}  align-start px-0 mb-4 w-[49%] sm:w-[25%]`}>
          <AccentTitle text={text}/>
          <List list={list}/>
    </div>
  )
}

function List ({list}) {

  return (
    <ul className='flex-1 '>
      {list.map((item, i)=>{
        if (item.ext) {
          return (
            <li key={i} 
            className={`text-white font-light whitespace-nowrap 
            my-3 sm:my-3
            text-sm sm:text-sm focus-within:scale-110 duration-200 focus-within:text-primary hover:text-primary hover:scale-110 `} >
              <Link href={item.link} target='_blank' className='focus:outline-none cursor-alias' rel="noopener noreferrer" >
                {item.text}
              </Link>
            </li>
        )} 
        else { return (
          <li key={i} 
          className={`${item.disabled?'text-primary/90':'text-white'} font-light whitespace-nowrap 
          my-3 sm:my-3
          text-sm sm:text-sm focus-within:scale-110 duration-200 focus-within:text-primary hover:text-primary hover:scale-110`} >
            {item.disabled?item.text:<Link className='focus:outline-none ' href={item.link}>
              {item.text}
            </Link>}
          </li>)}
      })}
    </ul>

  )
}

