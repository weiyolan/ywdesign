import Image from 'next/image';
import Button from './Button';
import React,{ useEffect, useState } from 'react';
import SkillsMoving from './SkillsMoving';
import { useAppContext } from './Context';
import { useRouter } from 'next/router';

export default function Title({type}) {
  
  let {breakPointSmall} = useAppContext();
  // useEffect(()=>{
  //   console.log(breakPointSmall)
  // })


  return (
      <section className='text-center w-full px-5'>
          <GetTitle type={type}/>
       
        <SkillsMoving breakPointSmall={breakPointSmall}/>

      </section>

  )
}

let heroTitleStyle = 'text-primary whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap text-4xl sm:text-6xl font-medium mt-12 mb-6 sm:mt-24 sm:mb-12';


function GetTitle({type}) {
  const router = useRouter()
  const { locale } = router
  let [ loadStyle, setLoadStyle] = useState(' ');


  useEffect(()=>{
    setLoadStyle(' text-white font-semibold ')
  },[])

  switch (type) {
    case 'home':
     return (<h1 className={heroTitleStyle}>{home[locale].pre}<span className={'transition-all duration-700 delay-500 default:font-medium' + 
      loadStyle }>{home[locale].span}</span>{home[locale].post}</h1>)
      
    case 'services':
      return (<h1 className={heroTitleStyle}>{services[locale].pre} <span className={ 
      ' transition-all duration-700 delay-500 default:font-medium ' + loadStyle }>{services[locale].span}</span>{services[locale].post}</h1>)
    case 'aboutme':
      return (<h1 className={heroTitleStyle}>{aboutme[locale].pre}<span className={' transition-all duration-700 delay-500 default:font-medium' + 
      loadStyle  }>{aboutme[locale].span}</span></h1>)

    case 'contact':
      return (<h1 className={heroTitleStyle}>{contact[locale].pre}<span className={' transition-all duration-700 delay-500 default:font-medium' + 
      loadStyle  }>{contact[locale].span}</span>{contact[locale].post}</h1>)

    case 'roadmap':
    return (<h1 className={heroTitleStyle}>{roadmap[locale].pre}<span className={' transition-all duration-700 delay-500 default:font-medium' + 
    loadStyle  }>{roadmap[locale].span}</span>{roadmap[locale].post}</h1>)
  }
}


let home = { 
  en: {
    pre:'Your ',
    span:'Digital',
    post:`\nPartner`,
  },
  fr :{
    pre:'Votre Partenaire\n',
    span:'Digital',
    post:``,
  }
}
let services = {
  en: {
    pre:'Discover our\n',
    span:'Services',
    post:'',
  },
  fr :{
    pre:'Découvrez nos ',
    span:'Services',
    post:'',
  }
}
let aboutme = {
  en: {
    pre:'Hi, I am ',
    span:'Yolan',
    post:'',
  },
  fr :{
    pre:'Salut, je\nsuis ',
    span:'Yolan',
    post:'',
  }
}
let contact = {
  en: {
    pre:`You can\n`,
    span:'contact',
    post:' me',
  },
  fr :{
    pre:'',
    span:'Contactez',
    post:' moi',
  }
}
let roadmap = {
  en: {
    pre:'',
    span:'Scroll',
    post:' Down',
  },
  fr :{
    pre:'',
    span:'Défilez',
    post:' vers\nle bas',
  }
}