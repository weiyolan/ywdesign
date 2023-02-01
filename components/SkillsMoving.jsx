import Image from 'next/image';
import Check from '../public/images/icon_check_round.svg';
import React, { useState, useEffect, useRef } from "react";
import useWindowSize from './useWindowSize';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { useAppContext } from './Context';


const skills1 = ['Biomedical Engineering', 'PRINCE2', 'Project Management', 'Adaptibility', 'Communication', 
'Maintenance', 'Computer Science', 'Digital Strategy', 'Customisation', 'Personlised Budget', 'SEO Optimisation',
'Listening', 'Empowerment', 'Story Telling', 'Graphic Design', 'Leadership', 'Professionality', 'Sales'];

const skills2 = ['Next.js', "Logo's", 'Websites', 'React.js', 'Front-End', 'Mobile App', 'Online Tools',
'Javascript', 'CSS', 'Sanity.io', 'CMS Integration', 'Headless CMS', 'Tailwind CSS', 'VS Code', 'Postman', 
'API', 'Node.js', 'NoSQL', 'e-Commerce', 'Redux', 'GitHub', 'Web 3.0', "MongoDB", 'Stripe', 'Payments', 'Twint'];

export default function SkillsMoving() {
  let window = useWindowSize();
  let {width, breakPointSmall} = useAppContext();


//  useEffect(()=>{
//   console.log(breakPointSmall)
//  })
  
 return (
    <div className='cursor-default select-none'>
      
      <MovingRow role='presentation' baseVelocity={window.width<breakPointSmall?-7:-1} allSkills={skills2}/>
      <MovingRow role='presentation' baseVelocity={window.width<breakPointSmall?7:1} allSkills={skills1}/>
        
    </div>

  )
}

function MovingRow({allSkills, baseVelocity=100}) {

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();



  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  const directionFactor = useRef(1);



  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    // let moveBy = baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    // moveBy += moveBy * velocityFactor.get();
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });


  return (
      <motion.div style={{ x }} className={`inline-flex relative z-[10] justify-center mx-2 my-2 '} `}>
        {/* {allSkills.sort((a, b) => 0.5 - Math.random()).map((skill)=>{
          return <Pill content={skill} round={true} key={skill}/>
        })} */}
        {/* <ul role='presentation' className={`inline-block flex-none`}>
          {allSkills.map((skill)=>{
          return <li role='presentation' className='inline-block' key={skill}><Pill content={skill} round={true} /></li>
        })}
        </ul>
        <ul role='presentation' className={`inline-block flex-none`}>
          {allSkills.map((skill,i)=>{
          return <li role='presentation' className='inline-block' key={skill+i}><Pill content={skill} round={true} /></li>
        })}
        </ul>
        <ul role='presentation' className={`inline-block flex-none`}>
          {allSkills.map((skill,i)=>{
          return <li role='presentation' className='inline-block' key={skill+i}><Pill content={skill} round={true} /></li>
        })}
        </ul> */}
        <div role='presentation' className={`inline-block flex-none`}>
          {allSkills.map((skill)=>{
          return <div role='presentation' className='inline-block' key={skill}><Pill content={skill} round={true} /></div>
        })}
        </div>
        <div role='presentation' className={`inline-block flex-none`}>
          {allSkills.map((skill,i)=>{
          return <div role='presentation' className='inline-block' key={skill+i}><Pill content={skill} round={true} /></div>
        })}
        </div>
        <div role='presentation' className={`inline-block flex-none`}>
          {allSkills.map((skill,i)=>{
          return <div role='presentation' className='inline-block' key={skill+i}><Pill content={skill} round={true} /></div>
        })}
        </div>

        {/* animate-[left2Scroll_10s_linear_infinite] */}
      </motion.div>       
  )
}

function Pill({content,round}) {
  return (
      <div role='presentation' className='inline-flex mx-2 px-2 py-1 
      bg-white/10 items-center
      rounded-full 
       text-[0.6rem] text-white/90 font-normal  '>
          <Check role='presentation' className='inline-block mr-1' width='10' height={10} alt='checkmark icon'/>
          {/* <Check width='15' alt='checkmark'/> */}
          {/* <Image priority className='aspect-square inline-block mr-1' src={`/images/icon_check_${round?'round':'simple'}.svg`} width={12} height={12} alt='checkmark icon'/>         */}
          <span role='presentation' className='inline-block whitespace-nowrap'>{content}</span>           
      </div>
    
)
}