import React, {useState,useEffect} from 'react'
import Link from 'next/link';
import ArrowLink from './ArrowLink';
import { useAppContext } from './Context'

export default function Number ({n, title, text, link, unit}) {
  let {width,breakPointSmall} = useAppContext();
  let [hovering,setHovering] = useState(false)

  return(
    <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className='flex sm:flex-col w-full min-[420px]:px-8 sm:px-0 items-center md:whitespace-pre mx-auto text-left sm:text-center cursor-default'>
      
      {/* <MyLink link={link}> */}
        <div className='flex font-sans items-end text-primary w-[50vw] min-[420px]:w-[40vw] sm:w-full justify-start sm:justify-center mb-2 sm:mb-4 font-light sm:font-extralight text-6xl sm:text-8xl md:text-9xl'>
          {n}
          <span className='text-2xl sm:text-3xl font-light'>{unit}</span>
        </div>
      {/* </MyLink> */}

        <div className='flex sm:flex-col h-[90px] font-sans transition-all duration-300 w-full relative text-primary font-light lg:text-base text-sm '>
          <div className={`absolute transition-all text-white font-extralight w-full duration-700 left-1/2 top-1/2 -translate-y-1/2 sm:-translate-y-0 sm:top-[0%] -translate-x-1/2 ${hovering?'opacity-100':'opacity-0'}`}><p className=''>{text}{width<breakPointSmall?' ':`\n`} {width<breakPointSmall && <span className={``}><ArrowLink text='Source' to={link} ext={true} inText={true}/></span>} </p></div>
          <div className={`absolute transition-all w-full duration-700 left-1/2 top-1/2 -translate-y-1/2 sm:-translate-y-0 sm:top-[0%] -translate-x-1/2 ${hovering?'opacity-0':'opacity-100'}`}><p>{title}{width<breakPointSmall?' ':`\n`} {width<breakPointSmall && <span className={``}><ArrowLink text='Source' to={link} ext={true} inText={true}/></span>} </p></div>
          {width>breakPointSmall && <span className={`ml-4 absolute w-fit left-1/2 -translate-x-1/2 bottom-0`}><ArrowLink text='Source' to={link} ext={true}/></span>}
        </div>

    </div>

  )
}

function MyLink ({link,children}) {
  if (link.length>0) {
    return (
      <Link className='cursor-alias' href={link} target='_blank' rel="noopener noreferrer" >{children}</Link>
    )
  } else {
    return (<div>{children}</div>)
  }
}

Number.defaultProps = {
  link:''
}