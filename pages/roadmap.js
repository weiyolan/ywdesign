import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'

// import { BiTargetLock } from 'react-icons/bi'

import Subtitle from '../components/Subtitle'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Footer from '../components/Footer'

// import { useAppContext } from '../components/Context'
import RoadmapATitle from '../components/RoadmapATitle'
import RoadmapA from '../components/RoadmapA'
import RoadmapB from '../components/RoadmapB'
import RoadmapC from '../components/RoadmapC'
import RoadmapD from '../components/RoadmapD'
import RoadmapE from '../components/RoadmapE'
import RoadmapF from '../components/RoadmapF'
import RoadmapG from '../components/RoadmapG'
// import RoadmapSVG from '../public/images/roadmapComplete.svg'
import Iteration1 from '../public/images/roadmapIteration1.svg'
import Iteration2 from '../public/images/roadmapIteration2.svg'
import { useAppContext } from '../components/Context'


const roadmap = () => {
  let {breakPointSmall,scrolled} = useAppContext();
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
    <>
      <Head>
        <title>ywdesign | Our Services</title>
      </Head>
      
      <main className=''>
        <Navbar />
        
        <Title type='roadmap'/>
        
        <Layout>

        <Subtitle name={'Roadmap'} title={`Scroll down to see\nhow we work together`} span={'Scroll'} text={'Yes indeed scroll dooownnnnn'} first={true} />

        {/* <div style={fadeStyle} className='relative w-[full] h-full ' > */}
        <div className='flex w-full flex-col justify-center relative h-full' >
          <RoadmapATitle />
          <RoadmapA scrollMin={0} scrollMax={0.12} />
          <RoadmapB scrollMin={0.13} scrollMax={0.16} />
          <RoadmapC scrollMin={0.22} scrollMax={0.25} />
          <RoadmapD speed={1.5} scrollMin={0.35} scrollMax={0.57} />
          <RoadmapE scrollMin={0.64} scrollMax={0.8} />
          <RoadmapF scrollMin={0.9} scrollMax={0.95} />
          <RoadmapG scrollMin={0.95} scrollMax={1} />

          <div className='absolute w-1/3 z-[35] backdrop-blur-sm top-[900px] ml-4 left-0'>
            <Iteration1 />
          </div>

          <div className='absolute w-1/3 z-[35] backdrop-blur-sm top-1/2 mr-4 right-0'>
            <Iteration2 />
          </div>


          {/* <Stroke2 scrolled={scrolled} /> */}
          {/* <Stroke3 scrolled={scrolled} /> */}
        </div>
        </Layout>

        <Footer/>

      </main>
    </>
  )
}
export default roadmap





