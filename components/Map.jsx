import React from 'react'
import Subtitle from './Subtitle'
import ArrowLink from './ArrowLink'
import ContactB from './ContactB'
// import LocationPin from './LocationPin'
import Image from 'next/image'
import Link from 'next/link'


// let location = {
//   address: 'Chem. des Crêtes 2, 1936 Verbier, Switzerland',
//   lat: 46.099977,
//   lng: 7.211931, 
// }

// let zoomLevel = 12

const Map = () => {
  return (
    <section className=''>
      <Subtitle realFirst={true} name='Contact' title={'Here are the details'} span={'details'} position={'left'} first={true}/>
      
      <div className='flex flex-col md:grid md:grid-cols-3 md:gap-6 '>
        <div className='flex min-[460px]:mr-6 md:m-0 md:col-start-1 md:row-span-2 row-start-1 md:col-span-2 '>
            <div className='h-[50vw] w-full md:h-full rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden relative transition-all cursor-pointer ease-out focus-within:scale-[1.01] border-2 border-transparent hover:scale-[1.01] focus-within:border-primary/50 hover:border-primary/50 duration-300'>
              <Link href={'https://goo.gl/maps/nnpsGodtMEFbugn57'} rel="noopener noreferrer" target='_blank'>
                <Image priority className='object-cover left-0' src={'/images/map4.png'} alt='map showing the location of ywdesign company' fill sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 80vw,
                90vw"/>
              {/* <Image className='object-cover' src={'/images/map3.svg'} alt='map showing the location of ywdesign company' fill /> */}
              </Link>
            </div>
        </div>

        <div className=' flex flex-col min-[460px]:flex-row md:flex-col md:col-start-3 md:row-start-1 row-start-2'>
          <div className='flex-1 min-[460px]:pr-4 md:p-0'>
            <h4 className='font-semibold text-lg mt-4 text-primary'>Get in touch</h4>
            <p className='font-light text-sm sm:text-base text-justify' >Do not hesitate to contact me, especially not for a question. And if you already have an idea or project in mind, then I am happy to learn what you’ve got!</p>
            <ArrowLink text={'Share your idea'} to={'#Form'}/>
            
          </div>
          <div className='flex-1 flex min-[460px]:pl-4 md:p-0 flex-col'>
            
            <h4 className='font-semibold text-lg mt-4 text-primary'>Address</h4>
            <p className='font-light text-sm sm:text-base ' >
              Chem. des Crêtes 2,<br/>
              1936 Verbier<br/>
              Switzerland
            </p>

            <ArrowLink ext={true} text={`contact\n@ywdesign.co`} to={"mailto:contact@ywdesign.co?subject=Website%20Project&body=Hi%20Yolan%2C%0A%0AI%20have%20a%20website%20that%20needs%20an%20update.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A"}/>
            <ArrowLink text={`+33 6 38\n56 53 02`} to={'tel:+33638565302'}/>
          </div>
        
        </div>
        <div className='row-start-3 pt-4 md:p-0 md:row-start-2 md:col-start-3'>
          <ContactB/>
        </div>
      </div>    
      
    </section>
  )
}

export default Map