import React, {useEffect, useState} from 'react'
import Subtitle from './Subtitle'
import ArrowLink from './ArrowLink'
// import RoadmapSVG from '../public/images/roadmapComplete.svg'
import RoadmapE1 from './RoadmapE1'
import RoadmapE2 from './RoadmapE2'
import RoadmapC from './RoadmapC'
import RoadmapD from './RoadmapD'
import { useAppContext } from './Context'

const RoadmapHome = () => {
  let {scrolled} = useAppContext()

  useEffect(()=>{
    console.log(scrolled)

  })
  // let [style, setStyle] = useState({transform: `translate(-50%, -${20}px)`})

  // useEffect(() => {
  //   let movedStyle = {transform: `translate(-50%, -${20  + 1000*Math.max(scrolled-0.20,0)}px)`}
  //   setStyle(movedStyle)
  // },[scrolled])

  let fadeStyle1 = {
    'maskImage': "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
    'maskSize': '100% 100%',
    'WebkitMaskImage':"linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
    'maskPosition': '0 0',
    'maskRepeat': 'no-repeat',
}

  return (
    <section className='flex flex-row'>
    <div className='flex-1 max-w-[50%] z-10 '>
      <Subtitle name='Workflow' title='A fully transparent design process' span={'transparent'} 
      text='The roadmap allows us to find the best solution for you, every time. You want to try it out.' 
      first={true} position='left'/>
      
      <div className= {`flex `}>
        <ArrowLink text={'Discover more'} to={'/roadmap'} ext={false}/>
      </div>

    </div>
    <div className='flex-1 flex justify-center'>
      <div style={fadeStyle1} className='relative overflow-hidden w-full h-[100%] z-0 mt-5'>
        {/* <div style={{transform: `translate(-50%, -${20  + 1000*Math.max(scrolled-0.20,0)}px)`}} className=' flex absolute w-full left-1/2 top-1/2 '> */}
        <div style={{transform: `translate(-50%, -${0  + 280*Math.max(scrolled-0.20,0)}px)`}} className=' flex flex-col absolute w-full left-1/2 top-1/3 '>
          <RoadmapC home={true} scrollMin={0.2} scrollMax={0.25}/>
          <RoadmapD home={true} scrollMin={0.25} scrollMax={0.35} speed={1.5}/>
          <RoadmapE1 home={true} scrollMin={0.35} scrollMax={0.37} />
          {/* <RoadmapE2 scrollMin={0.38} scrollMax={0.43} /> */}
        </div>
          {/* <div className='flex absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-local bg-no-repeat bg-center' style={{'background-image':'url(./images/roadmapComplete.svg)'}}>

          </div> */}
      </div>
    </div>
  </section>
  )
}

export default RoadmapHome