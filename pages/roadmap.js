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
import RoadmapE1 from '../components/RoadmapE1'
import RoadmapE2 from '../components/RoadmapE2'
import RoadmapF from '../components/RoadmapF'
import RoadmapG from '../components/RoadmapG'
// import RoadmapSVG from '../public/images/roadmapComplete.svg'
import RoadmapIteration1 from '../components/RoadmapIteration1'
// import RoadmapIteration2 from '../public/images/RoadmapIteration2.svg'
import { useAppContext } from '../components/Context'
import ArrowLink from '../components/ArrowLink'
import Conctact from '../components/Contact'


export default function Roadmap () {
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
      
      <main className='scroll-smooth'>
        <Navbar />
        
        <div id='Title'>
          <Title type='roadmap'/>
        </div>
        <Layout>
        
        <section>
        <Subtitle name={'visual'} position='center' title={`Our collaboration visualised`} span={'collaboration'} text={'How it is to work on a digital product? We follow the design process that is visualised below.'} first={true} />

        <div className='text-center w-full pl-6'>
          <ArrowLink text='Questions? Reach out' to='/contact/#Form' />
        </div>
        </section>

        <section className='flex w-full flex-col mt-6 justify-center relative h-full' >
          <RoadmapATitle />
          <RoadmapA scrollMin={0} scrollMax={0.12} />
          <RoadmapB scrollMin={0.13} scrollMax={0.16} />
          <RoadmapC scrollMin={0.22} scrollMax={0.25} />
          <RoadmapD speed={1.5} scrollMin={0.35} scrollMax={0.57} />
          <RoadmapE1 scrollMin={0.6} scrollMax={0.64} />
          <RoadmapE2 scrollMin={0.65} scrollMax={0.72} />
          <RoadmapF scrollMin={0.78} scrollMax={0.83} />
          <RoadmapG scrollMin={0.82} scrollMax={0.90} />
          <div className='absolute w-[40vw] z-[35]  top-[900px] ml-4 left-0'>
            <RoadmapIteration1 />
          </div>
          <div className='absolute w-2/3 z-[35]  top-1/2 mr-4 right-0'>
            {/* <Iteration2 /> */}
          </div>
        </section>

        <section>
        <div className='text-center w-full pl-6 mb-12'>
            <ArrowLink text='To the top' to='#Title' />
        </div>
        <Conctact/>
        </section>
        </Layout>

        <Footer/>

      </main>
    </>
  )
}





