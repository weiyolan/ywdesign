import React, { useEffect, useRef, useState } from 'react'

// import { BiTargetLock } from 'react-icons/bi'

import Subtitle from '../components/Subtitle'
import Navbar from '../components/Navbar'

// import { useAppContext } from '../components/Context'
import RoadmapA from '../components/RoadmapA'
import RoadmapB from '../components/RoadmapB'
import RoadmapC from '../components/RoadmapC'
import RoadmapD from '../components/RoadmapD'
import RoadmapE from '../components/RoadmapE'
import RoadmapF from '../components/RoadmapF'
import RoadmapG from '../components/RoadmapG'
// import RoadmapSVG from '../public/images/roadmapComplete.svg'
// import Iteration1 from '../public/images/roadmapIteration1.svg'
// import Iteration2 from '../public/images/roadmapIteration2.svg'


const roadmap = () => {
  // let { scrolled } = useAppContext();
  // PARALLAX
  // let target = document.getElementById('id')
  // let dataRateX = 0.4
  // let dataRateY = 0.2

  // let posX = window.pageYOffset * dataRateX;
  // let posY = window.pageYOffset * dataRateY;
  // setStyle ( {transform: `translate3d(${posX}px,${posY}px, 0px)`})


  let fadeStyle = {
    'maskImage': "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
    'maskSize': '100% 100%',
    'WebkitMaskImage': "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
    'maskPosition': '0 0',
    'maskRepeat': 'no-repeat',
  }

  return (
    <section className='flex w-full flex-col justify-center '>
      <Navbar />

      <Subtitle name={'Roadmap'} title={`Scroll down to see\nhow we work together`} span={'Scroll'} text={'Yes indeed scroll dooownnnnn'} first={true} />

      {/* <div style={fadeStyle} className='relative w-[full] h-full ' > */}
      <div className='relative w-[full] h-full ' >
        <RoadmapA />
        <RoadmapB/>
        <RoadmapC/>
        <RoadmapD/>
        <RoadmapE/>
        <RoadmapF/>
        <RoadmapG/>

        {/* <Stroke2 scrolled={scrolled} /> */}
        {/* <Stroke3 scrolled={scrolled} /> */}
      </div>
    </section>
  )
}
export default roadmap





