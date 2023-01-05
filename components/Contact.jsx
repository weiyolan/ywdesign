import { useEffect, useState } from 'react'
import ContactB from '../components/ContactB'
import AccentTitle from './AccentTitle'
import Button from './Button'
import useWindowSize from './useWindowSize'

export default function Conctact ({first, breakPointSmall}) {
  let {width} = useWindowSize()


  return (
    <section className={`flex text-left whitespace-pre-wrap
    ${first?' mt-24 ':' mt-48 '}
    ${width<breakPointSmall?' flex-col items-start  ':' justify-between items-end '} `}>

      <div>
        <AccentTitle text='Contact' />
        <h2 className={` text-primary font-normal text-5xl mt-10`}>
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
        <ContactB />
      <Button to="quote" title="Contact" text="Ask a quote" mode={'white'}/>
    </section>
  )
}


