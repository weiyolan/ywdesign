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
import { useRouter } from 'next/router'

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

  let myfeatures = { en: [{
    title:'Responsiveness',text:`Beautiful layout on\nall screen sizes.`, icon: <IconScreen className=' flex w-full p-0.5 sm:p-1 text-white' alt='Computer screen size icon'/>,
  },
  {
    title:'Animations',text:`Dynamic interactions that\nbring your website alive.`, icon: <MdAutoAwesome className=' text-xl sm:text-2xl flex w-full text-white' alt='Beautiful sparkles icon'/>,
  },
  {
    title:'Performance',text:`Tell you story using\nfast internet technology.`, icon: <SlSpeedometer className=' text-xl sm:text-2xl flex w-full text-white' alt='Velocity meter icon showing a high speed'/>,
  },{
     title:'UX/UI Focused', text:`Users love an easy to use\nand lightweight design.`, icon: <IoFingerPrint className='  text-xl sm:text-2xl flex w-full  text-white' alt='Fingerprint icon'/>,
   },{
    title:'CMS',text:`You can manage\nthe content yourself.`, icon: <HiPhoto className=' text-xl sm:text-2xl flex w-full  text-white' alt='Structured database icon'/>,
  },{
    title:'SEO Optimisation',text:`Organically reach\nnew customers.`, icon: <IconGraph className=' flex w-full  p-0.5 sm:p-1  text-white' alt='Chart icon showing increasing statistics'/>,
  },],

  fr :[{
    title:'Responsive',text:`Une belle mise en page\nsur toutes les tailles d'??cran.`, icon: <IconScreen className=' flex w-full p-0.5 sm:p-1 text-white' alt="Ic??ne d'une taille d'??cran adaptable"/>,
  },
  {
    title:'Animations',text:`Interactions dynamiques qui\ndonnent vie ?? votre site web.`, icon: <MdAutoAwesome className=' text-xl sm:text-2xl flex w-full text-white' alt='Ic??ne de jolis scintilles'/>,
  },
  {
    title:'Performances',text:`Racontez votre histoire en\nutilisant des technologies rapides.`, icon: <SlSpeedometer className=' text-xl sm:text-2xl flex w-full text-white' alt='Capteurs de vitesse qui montre une haute vitesse'/>,
  },{
     title:"Ax?? sur l'UX/UI", text:`Les utilisateurs appr??cient un\ndesign l??ger et facile ?? utiliser.`, icon: <IoFingerPrint className='  text-xl sm:text-2xl flex w-full  text-white' alt="ic??ne d'empreinte digitale"/>,
   },{
    title:'CMS',text:`G??rez vous-m??me le\ncontenu de votre site web.`, icon: <HiPhoto className=' text-xl sm:text-2xl flex w-full  text-white' alt="Ic??ne d'une base de donn??es structur??e"/>,
  },{
    title:'R??f??rencements',text:`Atteignez de nouveaux clients\nde mani??re organique.`, icon: <IconGraph className=' flex w-full  p-0.5 sm:p-1  text-white' alt="Ic??ne montrant des statistiques croissants"/>,
  },]
}

export default function Features () {
  let {width, breakPointSmall} = useAppContext();
  let {locale} = useRouter();


  let [offsets, setOffsets] = useState([])

  useEffect(()=>{
    // console.log(`width= ${width}`)
    // console.log(`breakPointSmall= ${breakPointSmall}`)
    setOffsets(width<breakPointSmall?[1,0,1,0,1,0]:[-1, 0, 1, -1, 0, 1])
  },[width, breakPointSmall])

 

  return (
    <LayoutSection>
      <Subtitle name={`${locale==='en'?'Features':'Caract??ristiques'}`} first={true}  title={`${locale==='en'?'What makes a\nbetter website':'Ce qui fait un\nmeilleur site web'}`} span={`${locale==='en'?'better':'meilleur'}`} position='right'/>

      <motion.div initial={false} animate='hidden' viewport={{once:false}} whileInView='visible' id={`${locale}Features`} variants={parent} 
      className={`grid relative grid-cols-10 select-none grid-rows-6 grid-flow-row sm:grid-rows-2 sm:grid-cols-3 
       w-full gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-12 sm:mt-24 lg:px-12`}>
        {myfeatures[locale].map((feature,i)=>{

          return <Feature key={feature.title} offset={offsets[i]} title={feature.title} text={feature.text} icon={feature.icon}/>
        })}

      </motion.div>

    </LayoutSection>

  )
}

