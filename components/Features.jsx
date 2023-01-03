import React from 'react'
import Image from 'next/image'
import LayoutSection from './LayoutSection'
import Subtitle from './Subtitle'
import {IoMdSpeedometer} from 'react-icons/io'
import {IoFingerPrint} from 'react-icons/io5'
import Feature from './Feature'
import { motion } from 'framer-motion'

let myfeatures = [{
  offset:-1, title:'Responsiveness',text:`Beautiful layout on\nall screen sizes`, icon: <Image width={32} height={32} src='/images/icon_screen.svg' alt='Computer screen size icon'/>,
},{
  offset:0, title:'Animations & Effects',text:`Dynamic interactions that\nbring your website alive`, icon: <Image width={32} height={32} alt='Beautiful sparkles icon' src='/images/icon_spark.svg'/>,
},{
  offset:1, title:'Performance',text:`Tell you story using\nfast internet technology`, icon: <IoMdSpeedometer className='w-8 text-3xl text-white' alt='Velocity meter icon showing a high speed'/>,
},{
  offset:-1,  title:'UX/UI Focused', text:`Users love an easy to use\nand lightweight design`, icon: <IoFingerPrint className='w-8 text-3xl text-white' alt='Fingerprint icon'/>,
 },{
  offset:0, title:'CMS',text:`You can manage\nthe content yourself`, icon: <Image width={32} height={32} alt='Structured database icon' src='/images/icon_database.svg'/>,
},{
  offset:1, title:'SEO Optimisation',text:`Organically reach\nnew customers`, icon: <Image width={32} height={32} alt='Curve icon showing increasing statistics' src='/images/icon_graph.svg'/>,
},]


const parent = {
    visible: {
      opacity: 1,
      scale:1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }



export default function Features () {
  return (
    <LayoutSection>
      <Subtitle name='Features' title={'What makes a\nbetter website'} span={'better'} position='right'/>

      <motion.div initial='hidden' viewport={{once:false}} whileInView='visible' variants={parent} className='grid relative grid-cols-3 w-full gap-12 grid-flow-row mt-28'>

        {myfeatures.map((feature,i)=>{

          return <Feature key={feature.title} offset={feature.offset} title={feature.title} text={feature.text} icon={feature.icon}/>
        })}

      </motion.div>

    </LayoutSection>

  )
}

