import React, {useEffect, useState} from 'react'
import Yolan from '../public/images/yolan.svg'

const YolanPhoto = () => {
  let [loaded,setLoaded] = useState(false)

  useEffect(()=>{
    setLoaded(true)

  },[])


  return (
    <section className='relative flex flex-col w-full '>
      <Yolan className={`duration-700 transition-all delay-1000 mx-auto mt-24 mb-6 ${loaded?'opacity-100':'opacity-0'}`}  width='200' alt='Picture of Yolan Weiler' />
          
 
      <h1 className='text-right mx-auto my-8 font-sans font-normal text-2xl text-primary'>
         
            {/* <RiDoubleQuotesL className='inline-block -translate-y-3' fill='white'/> */}
            As a passionate biomedical engineer and surfer, 
            I am dedicated to having a 
            <span className='text-white font-medium'> global positive impact</span>
            {/* <RiDoubleQuotesR className='inline-block relative -right-2 -translate-y-3' fill=''/> */}

      </h1>
    </section>
  )
}

export default YolanPhoto