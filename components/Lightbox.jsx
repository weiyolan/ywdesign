import React, { useEffect, useState } from 'react'
import YW from '../public/images/logo_yw_b.svg'
import {FaTimes} from 'react-icons/fa'
import ArrowLink from './ArrowLink'
import Link from 'next/link'

const Lightbox = ({lightbox, setLightbox}) => {
  let [style, setStyle] = useState({opacity:1, visibility:'hidden'})

  useEffect(()=>{
    setStyle({opacity:lightbox?1:0, visibility:lightbox?'visible':'hidden'})
    // console.log(style)
    // console.log(lightbox)
  },[lightbox])

  return (
    <div style={style} id='lightboxBackground' className='fixed bg-white/5 z-[50] backdrop-blur-lg min-[350px]:p-6 top-0 left-0 w-full h-full duration-700'>
        <div className='text-primary hover:scale-[1.01] duration-300 bg-white/20 backdrop-blur-lg outline-none shadow-xl hover:shadow-2xl -outline-offset-2  outline-white/10 animate-outlinePulse relative top-1/2 left-1/2 min-[350px]:rounded-3xl 
        sm:w-2/3 md:w-1/2 -translate-x-1/2 -translate-y-1/2 p-5 pt-10'>
          <h4 className='text-2xl text-primary font-normal'><span className='font-medium text-white md:whitespace-pre-wrap'>{`Thanks.\n`}</span> Your message was sent succesfully.</h4> 
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1 flex flex-col md:text-lg justify-end'>
              <p className='font-light mt-4'>
              I will get back to you by tomorrow.
              </p>
              <p className=' font-light mt-2'>
              Kind Regards,</p>
              <p className='mt-2 font-light '>Yolan Weiler,
              <br/>
              <span className='font-medium'>
                YWDESIGN
              </span>
              </p>
            </div>
            <div className='flex-1 flex flex-col justify-end'>
              <span onClick={()=>setLightbox(false)}><ArrowLink text={'Back to the homepage'} to='/'/></span>
              <span onClick={()=>setLightbox(false)}><ArrowLink text={'Check out the services'} to='/services'/></span>
            </div>
          </div>

          <Link href='/'><YW className='relative w-10 fill-white' /></Link>
          <span className='absolute top-0 right-0 mt-4 mr-4 cursor-pointer hover:rotate-180 text-white duration-300 hover:scale-110' onClick={()=>setLightbox(false)}><FaTimes/></span>
        </div>
    </div>
  )
}

export default Lightbox