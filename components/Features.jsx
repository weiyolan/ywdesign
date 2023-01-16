import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LayoutSection from './LayoutSection'
import Subtitle from './Subtitle'
import {IoMdSpeedometer} from 'react-icons/io'
import {IoFingerPrint} from 'react-icons/io5'
import Feature from './Feature'
import { motion } from 'framer-motion'
import {MdAutoAwesome} from 'react-icons/md'
import { HiPhoto } from 'react-icons/hi2'
import IconGraph from '../public/images/icon_graph.svg'
import IconScreen from '../public/images/icon_screen.svg'
import { MdSpeed } from 'react-icons/md'
import { SlSpeedometer } from 'react-icons/sl'
import { useAppContext } from './Context'

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

  let myfeatures = [{
    title:'Responsiveness',text:`Beautiful layout on\nall screen sizes`, icon: <IconScreen className=' flex w-full p-0.5 sm:p-1 text-white' alt='Computer screen size icon'/>,
  },
  {
    title:'Animations ',text:`Dynamic interactions that\nbring your website alive`, icon: <MdAutoAwesome className=' text-xl sm:text-2xl flex w-full text-white' alt='Beautiful sparkles icon'/>,
  },
  {
    title:'Performance',text:`Tell you story using\nfast internet technology`, icon: <SlSpeedometer className=' text-xl sm:text-2xl flex w-full text-white' alt='Velocity meter icon showing a high speed'/>,
  },{
     title:'UX/UI Focused', text:`Users love an easy to use\nand lightweight design`, icon: <IoFingerPrint className='  text-xl sm:text-2xl flex w-full  text-white' alt='Fingerprint icon'/>,
   },{
    title:'CMS',text:`You can manage\nthe content yourself`, icon: <HiPhoto className=' text-xl sm:text-2xl flex w-full  text-white' alt='Structured database icon'/>,
  },{
    title:'SEO Optimisation',text:`Organically reach\nnew customers`, icon: <IconGraph className=' flex w-full  p-0.5 sm:p-1  text-white' alt='Curve icon showing increasing statistics'/>,
  },]

export default function Features () {
  let {width, breakPointSmall} = useAppContext();
  let [offsets, setOffsets] = useState([])

  useEffect(()=>{
    // console.log(`width= ${width}`)
    // console.log(`breakPointSmall= ${breakPointSmall}`)
    setOffsets(width<breakPointSmall?[1,0,1,0,1,0]:[-1, 0, 1, -1, 0, 1])
  },[width, breakPointSmall])

 

  return (
    <LayoutSection>
      <Subtitle name='Features' first={true}  title={'What makes a\nbetter website'} span={'better'} position='right'/>

      <motion.div initial={false} animate='hidden' viewport={{once:true}} whileInView='visible' variants={parent} 
      className={`grid relative grid-cols-10 select-none grid-rows-6 grid-flow-row sm:grid-rows-2 sm:grid-cols-3 
       w-full gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-12 sm:mt-24 lg:px-12`}>
        {myfeatures.map((feature,i)=>{

          return <Feature key={feature.title} offset={offsets[i]} title={feature.title} text={feature.text} icon={feature.icon}/>
        })}

      </motion.div>

    </LayoutSection>

  )
}

