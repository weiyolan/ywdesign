import Image from 'next/image';
import Button from './Button';
import React,{ useEffect, useState } from 'react';
import SkillsMoving from './SkillsMoving';
import { useAppContext } from './Context';

export default function Title({type}) {
  let {breakPointSmall} = useAppContext();
  // useEffect(()=>{
  //   console.log(breakPointSmall)
  // })


  return (
      <section className='text-center w-full mt-16 md:mt-0'>
          <GetTitle type={type}/>
       
        <SkillsMoving breakPointSmall={breakPointSmall}/>

      </section>

  )
}

let heroTitleStyle = 'text-primary  text-4xl  sm:text-6xl font-medium my-12 sm:my-24 px-4';

function GetTitle({type}) {
  let [ loadStyle, setLoadStyle] = useState(' ');

  useEffect(()=>{
    setLoadStyle(' text-white font-semibold ')
  },[])

  switch (type) {
    case 'home':
      return (<h1 className={heroTitleStyle}> Your <span className={' transition-all duration-700 delay-500 default:font-medium' + 
      loadStyle  }>Digital</span> Partner</h1>)

    case 'services':
      return (<h1 className={heroTitleStyle}> Discover our <span className={ 
      ' transition-all duration-700 delay-500 default:font-medium ' + loadStyle }>Services</span></h1>)
    case 'aboutme':
      return (<h1 className={heroTitleStyle}> Hi, I am <span className={' transition-all duration-700 delay-500 default:font-medium' + 
      loadStyle  }>Yolan</span></h1>)

    case 'contact':
      return (<h1 className={heroTitleStyle}> You can <span className={' transition-all duration-700 delay-500 default:font-medium' + 
      loadStyle  }>contact</span> me</h1>)

    case 'roadmap':
    return (<h1 className={heroTitleStyle}> <span className={' transition-all duration-700 delay-500 default:font-medium' + 
    loadStyle  }>Scroll</span> Down</h1>)
  }
}