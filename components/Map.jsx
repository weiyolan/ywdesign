import React from 'react'
import Subtitle from './Subtitle'
import ArrowLink from './ArrowLink'
import ContactB from './ContactB'
// import LocationPin from './LocationPin'
import Image from 'next/image'
import Link from 'next/link'
import { useAppContext } from './Context'


// let location = {
//   address: 'Chem. des Crêtes 2, 1936 Verbier, Switzerland',
//   lat: 46.099977,
//   lng: 7.211931, 
// }

// let zoomLevel = 12

const Map = () => {
  const {locale} = useAppContext()

  return (
    <section id='informations' className=''>
      <Subtitle realFirst={true} name='Contact' title={`${locale==='en'?'Here are the details':"Voici les détails"}`} span={`${locale==='en'?'details':"détails"}`} position={'left'} first={true}/>
      
      <div className='flex flex-col md:grid md:grid-cols-3 md:gap-6 '>
        <div className='flex min-[460px]:mr-6 md:m-0 md:col-start-1 md:row-span-2 row-start-1 md:col-span-2 '>
            <div className='h-[50vw] w-full md:h-full rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden relative transition-all cursor-pointer ease-out focus-within:scale-[1.01] border-2 border-transparent hover:scale-[1.01] focus-within:border-primary/50 hover:border-primary/50 duration-300'>
              <Link className='flex h-full relative' href={'https://goo.gl/maps/nnpsGodtMEFbugn57'} rel="noopener noreferrer" target='_blank'>
                <Image priority className='object-cover left-0' src={'/images/map4.png'} alt={`${locale==='en'?'Map showing the location of ywdesign company':"Une carte de verbier qui montre la location de l'entreprise YWDESIGN.CO"}`} fill sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 80vw,
                90vw"/>
              {/* <Image className='object-cover' src={'/images/map3.svg'} alt='map showing the location of ywdesign company' fill /> */}
              </Link>
            </div>
        </div>

        <div className=' flex flex-col min-[460px]:flex-row md:flex-col md:col-start-3 md:row-start-1 row-start-2'>
          <div className='flex-1 min-[460px]:pr-4 md:p-0'>
            <h4 className='font-semibold text-lg mt-4 text-primary'>{`${locale==='en'?'Get in touch':"Prendre contact"}`}</h4>
            <p className='font-light text-sm sm:text-base text-justify' >{`${locale==='en'?'Do not hesitate to contact me, especially not for a question. If you already have an idea or project in mind, then I am happy to learn what you’ve got.':"N'hésitez pas à me contacter, surtout pour une question. Si vous avez déjà une idée ou un projet en tête, je serai heureux d'apprendre ce que vous avez en tête."}`}</p>
            <ArrowLink text={`${locale==='en'?'Share your idea':"Partagez votre idée"}`} to={'#Form'}/>
            
          </div>
          <div className='flex-1 flex min-[460px]:pl-4 md:p-0 flex-col'>
            
            <h4 className='font-semibold text-lg mt-4 text-primary'>{`${locale==='en'?'Address':"Adresse"}`}</h4>
            <p className='font-light text-sm sm:text-base ' >
              Chem. des Crêtes 2,<br/>
              1936 Verbier<br/>
              Switzerland<br/>
              <span className='text-primary inline-block font-semibold min-[460px]:whitespace-pre-wrap sm:whitespace-nowrap text-sm pt-4' >{`${locale==='en'?'VAT':'TVA'}: BE0794.586.584`}</span> 
            
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