import Image from 'next/image';
// import Check from '../public/images/icon_check_round.svg';
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
          {/* <Check role='presentation' className='inline-block mr-1' width='10' height={10} alt='checkmark icon'/> */}
          <svg role='presentation' className='inline-block mr-1' width='10' height={10} alt='checkmark icon' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11C22 17.0766 17.0766 22 11 22C4.92339 22 0 17.0766 0 11C0 4.92339 4.92339 0 11 0C17.0766 0 22 4.92339 22 11ZM9.72702 16.8238L17.8883 8.6625C18.1633 8.3875 18.1633 7.93508 17.8883 7.66008L16.8859 6.65766C16.6109 6.38266 16.1585 6.38266 15.8835 6.65766L9.22581 13.3109L6.11653 10.2016C5.84153 9.92661 5.38911 9.92661 5.11411 10.2016L4.11169 11.204C3.83669 11.479 3.83669 11.9315 4.11169 12.2065L8.7246 16.8194C8.9996 17.1032 9.45202 17.1032 9.72702 16.8238Z" fill="#ffffffc2"/>
          </svg>

          {/* <Check width='15' alt='checkmark'/> */}
          {/* <Image priority className='aspect-square inline-block mr-1' src={`/images/icon_check_${round?'round':'simple'}.svg`} width={12} height={12} alt='checkmark icon'/>         */}
          <span role='presentation' className='inline-block whitespace-nowrap'>{content}</span>           
      </div>
    
)
}