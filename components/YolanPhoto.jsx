import React, {useEffect, useState} from 'react'
import Yolan from '../public/images/yolan.svg'
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri'

const YolanPhoto = () => {
  let [loaded,setLoaded] = useState(false)

  useEffect(()=>{
    setLoaded(true)

  },[])


  return (
    <section className='relative flex flex-col max-w-3xl w-full mx-auto cursor-default'>
      <Yolan className={`duration-700 transition-all delay-1000 mx-auto mt-24 mb-6 ${loaded?'opacity-100':'opacity-0'}`}  width='200' alt='Picture of Yolan Weiler' />
          
      <div className='flex flex-row mx-auto whitespace-pre-wrap'>
        <h2 className='text-center my-8 font-sans font-light text-2xl text-primary'>
          <span className='inline-block flex-none '><RiDoubleQuotesL  fill='rgb(23 27 77)'/></span>
          {` As a passionate biomedical engineer and surfer, I am dedicated to having a `}
          <span className='text-white font-medium'>global positive impact </span>
          <span className='inline-block flex-none '><RiDoubleQuotesR  fill='rgb(23 27 77)'/></span>
        </h2>
      </div>
    </section>
  )
}

export default YolanPhoto