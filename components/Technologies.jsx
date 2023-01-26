import Subtitle from './Subtitle'
import Logo from './Logo'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Fauna from '../public/images/logo_fauna_w.svg'
import Github from '../public/images/logo_github_w.svg'
import Figma from '../public/images/logo_figma_w.svg'
import MongoDB from '../public/images/logo_mongoDB_w.svg'
import Nextjs from '../public/images/logo_nextjs_w.svg'
import Nodejs from '../public/images/logo_nodejs_w.svg'
import Octopusdo from '../public/images/logo_octopusdo_w.svg'
import Reactjs from '../public/images/logo_react_w.svg'
import Redux from '../public/images/logo_redux_w.svg'
import Sanity from '../public/images/logo_sanity_w.svg'
import Stripe from '../public/images/logo_stripe_w.svg'
import Tailwind from '../public/images/logo_tailwind_w.svg'

import FaunaC from '../public/images/logo_fauna_c.svg'
import GithubC from '../public/images/logo_github_c.svg'
import FigmaC from '../public/images/logo_figma_c.svg'
import MongoDBC from '../public/images/logo_mongoDB_c.svg'
import NextjsC from '../public/images/logo_nextjs_c.svg'
import NodejsC from '../public/images/logo_nodejs_c.svg'
import OctopusdoC from '../public/images/logo_octopusdo_c.svg'
import ReactjsC from '../public/images/logo_react_c.svg'
import ReduxC from '../public/images/logo_redux_c.svg'
import SanityC from '../public/images/logo_sanity_c.svg'
import StripeC from '../public/images/logo_stripe_c.svg'
import TailwindC from '../public/images/logo_tailwind_c.svg'
import { useAppContext } from './Context'


export default function Technologies ({breakPointSmall}) {
 let {width,locale} = useAppContext() ;

 let logos = [
    {white: <Nextjs className='w-full' fill='white' alt={`Nextjs logo ${locale==='en'?'in white':'en blanc'}`} />, color: <NextjsC alt={`Nextjs logo ${locale==='en'?'in color':'en couleur'}`}  className={` w-full `} />, link:'https://nextjs.org/'},
    {white: <Redux className='w-full max-h-[10vh]' fill='white' alt={`Redux logo ${locale==='en'?'in white':'en blanc'}`} />, color: <ReduxC alt={`Redux logo ${locale==='en'?'in color':'en couleur'}`}  className={` w-full max-h-[10vh]`} />, link:'https://redux.js.org/'},
    {white: <Figma className='w-full max-h-[8vh]' fill='white' alt={`Figma logo ${locale==='en'?'in white':'en blanc'}`} />, color: <FigmaC alt={`Figma logo ${locale==='en'?'in color':'en couleur'}`}  className={` w-full max-h-[8vh]`} />, link:'https://www.figma.com/'},
    {white: <Tailwind className='w-full max-h-[10vh]' fill='white' alt={`Tailwind logo ${locale==='en'?'in white':'en blanc'}`}/>, color: <TailwindC  alt={`Tailwind logo ${locale==='en'?'in color':'en couleur'}`} className={'w-full max-h-[10vh]'} />, link:'https://tailwindcss.com/'},
    {white: <Reactjs className='w-full max-h-[10vh]' fill='white' alt={`Reactjs logo ${locale==='en'?'in white':'en blanc'}`} />,color: <ReactjsC alt={`Reactjs logo ${locale==='en'?'in color':'en couleur'}`}  className={` w-full max-h-[10vh]`} />, link:'https://reactjs.org/'},
    {white: <Octopusdo className='w-full max-h-[9vh]' fill='white' alt={`Octopusdo logo ${locale==='en'?'in white':'en blanc'}`}/>, color: <OctopusdoC alt={`Octopusdo logo ${locale==='en'?'in color':'en couleur'}`} className={` w-full max-h-[9vh]`} />, link:'https://octopus.do/'},
    {white: <Fauna className='w-full max-h-[10vh]' fill='white' alt={`FaunaDB logo ${locale==='en'?'in white':'en blanc'}`} />, color: <FaunaC alt={`FaunaDB logo ${locale==='en'?'in color':'en couleur'}`}  className={` w-full max-h-[10vh]`} />, link:'https://fauna.com/'},
    {white: <Github className='w-full max-h-[10vh]' fill='white' alt={`Github logo ${locale==='en'?'in white':'en blanc'}`}  />, color: <GithubC alt={`Github logo ${locale==='en'?'in color':'en couleur'}`}   className={` w-full max-h-[10vh]`} />, link:'https://github.com/'},
    {white: <MongoDB className='w-full max-h-[10vh]' fill='white' alt={`MongoDB logo ${locale==='en'?'in white':'en blanc'}`} />, color: <MongoDBC  alt={`MongoDB logo ${locale==='en'?'in color':'en couleur'}`}  className={` w-full max-h-[10vh]`} />, link:'https://www.mongodb.com/'},
    {white: <Nodejs className='w-full max-h-[10vh]' fill='white' alt={`Nodejs logo ${locale==='en'?'in white':'en blanc'}`} />, color: <NodejsC  alt={`Nodejs logo ${locale==='en'?'in color':'en couleur'}`}  className={` w-full max-h-[10vh]`} />, link:'https://nodejs.org/'},
    {white: <Sanity className='w-full max-h-[10vh]' fill='white' alt={`Sanity logo ${locale==='en'?'in white':'en blanc'}`} />, color: <SanityC  alt={`Sanity logo ${locale==='en'?'in color':'en couleur'}`}  className={` w-full max-h-[10vh]`} />, link:'https://www.sanity.io/'},
    {white: <Stripe className='w-full max-h-[10vh]' fill='white' alt={`Stripe logo ${locale==='en'?'in white':'en blanc'}`} />, color: <StripeC  alt={`Stripe logo ${locale==='en'?'in color':'en couleur'}`}  className={` w-full max-h-[10vh]`} />, link:'https://stripe.com/'}]

 let variant = {
  visible: {
    opacity:1,
    scale:1, //Only in parent variant
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    }
  },
  hidden: {
    opacity:0,
    scale:1, //Only in parent variant
    transition: {
      when: 'afterChildren',
    }}
 }

  return (
    <section>
      <Subtitle name={`${locale==='en'?'Technology':'Technologie'}`} first={width<breakPointSmall?true:false} text={`${locale==='en'?'Using the latest technology we ensure high speed\nand great user experiences on all devices':"Grâce aux technologies les plus récentes, nous garantissons une vitesse\nélevée et une expérience utilisateur exceptionnelle sur tous les appareils."}`} title={`${locale==='en'?'In-house technology\nfrom the newest generation':"Notre technologie de\nla dernière génération"}`} 
      span={`${locale==='en'?'technology':'technologie'}`} position='center'/>

      <motion.div initial='hidden' whileInView='visible' variants={variant} viewport={{once:true}} 
      className={`w-full my-6 sm:my-10 grid gap-4 grid-flow-row relative 
      grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
      
      `}>
        {/* {logos.map((logo,i)=><div key={i}>{logo}</div>)} */}

        {logos.map((logo,i)=>{
          return <Logo key={i} color={logo.color} link={logo.link} white={logo.white}/>
        })}
      </motion.div>

    </section>)
}