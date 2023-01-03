import React from 'react'
import Subtitle from './Subtitle'
import ArrowLink from './ArrowLink'
import ContactB from './ContactB'
// import LocationPin from './LocationPin'
import Image from 'next/image'


// let location = {
//   address: 'Chem. des Crêtes 2, 1936 Verbier, Switzerland',
//   lat: 46.099977,
//   lng: 7.211931, 
// }

// let zoomLevel = 12

const Map = () => {
  return (
    <section className='my-24'>
      <Subtitle name='Contact' title={'Here are the details'} span={'details'} position={'left'} first={true}/>
      
      <div className='grid grid-cols-3 gap-6 h-2/3 '>
        <div className='flex col-start-1 col-span-2 '>
          <div className=' w-full h-full rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-700 ease-out'>
            <Image className='object-cover' src={'/images/map3.svg'} alt='map showing the location of ywdesign company' fill />
            <Image className='object-cover' src={'/images/map3.svg'} alt='map showing the location of ywdesign company' fill />
          </div>
        </div>

        <div className='col-start-3'>
          <h4 className='font-semibold text-lg my-4 text-primary'>Get in touch</h4>
          <p className='font-light text-justify' >Do not hesitate to contact me, especially not for a question. And if you already have an idea or project in mind, then I am happy to learn what you’ve got!</p>
          <ArrowLink text={'Share your idea'} to={'/'}/>

          <h4 className='font-semibold text-lg my-4 text-primary'>Address</h4>
          <p className='font-light ' >
            Chem. des Crêtes 2,<br/>
            1936 Verbier<br/>
            Switzerland
          </p>

          <ArrowLink text={'contact@ywdesign.co'} to={''}/>
          <ArrowLink text={'+32 4 71 12 45 25'} to={''}/>
          <ContactB/>
        
        
        </div>

      </div>    
      
    </section>
  )
}

export default Map