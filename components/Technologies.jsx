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

let logos = [
  {white: <Nextjs fill='white' alt='Nextjs logo in white' />, color: <NextjsC alt='Nextjs logo in color' />},
  {white: <Redux fill='white' alt='Redux logo in white' />, color: <ReduxC alt='Redux logo in color' />},
  {white: <Figma fill='white' alt='Figma logo in white' />, color: <FigmaC alt='Figma logo in color' />},
  {white: <Tailwind fill='white' alt='Tailwind logo in white'/>, color: <TailwindC alt='Tailwind logo in color'/>},
  {white: <Reactjs fill='white' alt='Reactjs logo in white' />,color: <ReactjsC alt='Reactjs logo in color' />},
  {white: <Octopusdo fill='white' alt='Octopusdo logo in white'/>, color: <OctopusdoC alt='Octopusdo logo in color'/>},
  {white: <Fauna fill='white' alt='FaunaDB logo in white' />, color: <FaunaC alt='FaunaDB logo in color' />},
  {white: <MongoDB fill='white' alt='MongoDB logo in white' />, color: <MongoDBC  alt='MongoDB logo in color' />},
  {white: <Github fill='white' alt='Github logo in white'  />, color: <GithubC alt='Github logo in color'  />},
  {white: <Nodejs fill='white' alt='Nodejs logo in white' />, color: <NodejsC  alt='Nodejs logo in color' />},
  {white: <Sanity fill='white' alt='Sanity logo in white' />, color: <SanityC  alt='Sanity logo in color' />},
  {white: <Stripe fill='white' alt='Stripe logo in white' />, color: <StripeC  alt='Stripe logo in color' />}]


export default function Technologies () {
  
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
      <Subtitle name='Technology' title={`In-house technology\nfrom the newest generation`} span={'technology'} position='center'/>

      <motion.div initial='hidden' whileInView='visible' variants={variant} viewport={{once:true}} className='w-full mt-20 grid grid-cols-6 gap-4 grid-flow-row relative'>
        {/* {logos.map((logo,i)=><div key={i}>{logo}</div>)} */}

        {logos.map((logo,i)=>{
          return <Logo key={i} color={logo.color} white={logo.white}/>
        })}
      </motion.div>

    </section>)
}