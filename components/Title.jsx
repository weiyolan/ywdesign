import Image from 'next/image';
import Button from './Button';
import Skills from './Skills';
import { useEffect, useState } from 'react';
import SkillsMoving from './SkillsMoving';

export default function Title({type}) {

  return (
      <section className='text-center w-full '>
          <GetTitle type={type}/>
       
        <SkillsMoving/>

      </section>

  )
}

let heroTitleStyle = 'text-primary text-7xl font-medium my-24';

function GetTitle({type}) {
  let [ loadStyle, setLoadStyle] = useState(' ');

  useEffect(()=>{
    setLoadStyle(' text-white font-semibold scale-150 translate-x-5 ')
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
  }
}