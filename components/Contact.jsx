import { useEffect, useState } from 'react'
import ContactB from '../components/ContactB'
import AccentTitle from './AccentTitle'
import Button from './Button'
import { useAppContext } from './Context'

export default function Contact ({first}) {
  let {width, breakPointSmall} = useAppContext()

  // useEffect(()=>{
  //   console.log('FROM CONTACT:')
  //   console.log(`width= ${width}`)
  //   console.log(`breakPointSmall= ${breakPointSmall}`)
  // },[width])


  return (
    <section className={`flex text-left select-none whitespace-pre-wrap
    ${first?' mt-12 sm:mt-24 ':' mt-42 sm:mt-48 '}
    ${width<breakPointSmall?' flex-col items-start  ':' justify-between items-end '} `}>

      <div className='flex-1 lg:flex-0'>
        <AccentTitle text='Contact' />
        <h2 className={` text-primary font-normal text-3xl sm:text-4xl lg:text-5xl mt-6 sm:mt-10 `}>
          {'I can '}

          <span className='text-white font-[550]'>
          {`help `}
          </span> 

          {"\nJust get in "} 

          <span className='text-white font-[550]'>
          touch
          </span> 
        </h2>
      </div>
      <div className='flex flex-row w-full lg:w-fit flex-1 lg:flex-0 justify-start sm:justify-between'>
        <div className='mt-6 sm:mt-10 flex '>
          <ContactB />
        </div>
        <div className='mt-6 sm:mt-10 ml-8 sm:ml-0 flex lg:mr-16'>
          <Button to="contact" title="Contact" text="Ask a quote" mode={'white'} handleClick={()=>''}/>
        </div>
      </div>

      
    </section>
  )
}


