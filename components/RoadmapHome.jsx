import React, {useEffect, useState} from 'react'
import Subtitle from './Subtitle'
import ArrowLink from './ArrowLink'
import RoadmapSVG from '../public/images/roadmapComplete.svg'
import { useAppContext } from './Context'

const RoadmapHome = () => {
  let {scrolled} = useAppContext()
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
      <Subtitle name='Workflow' title='A fully personalised solution, every time' span={'solution'} 
      text='The roadmap allows us to find the best solution for you, every time. You want to try it out.' 
      first={true} position='left'/>
      
      <div className= {`flex `}>
        <ArrowLink text={'Discover more'} to={'/roadmap2'} ext={false}/>
      </div>

    </div>
    <div className='flex-1 flex justify-center'>
      <div style={fadeStyle1} className='px-5 relative overflow-hidden w-full h-[100%] z-0 mt-5'>
        <div style={{transform: `translate(-50%, -${20  + 1000*Math.max(scrolled-0.20,0)}px)`}} className=' flex absolute w-full left-1/2 top-1/2 '>
        <RoadmapSVG/>
        </div>
          {/* <div className='flex absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-local bg-no-repeat bg-center' style={{'background-image':'url(./images/roadmapComplete.svg)'}}>

          </div> */}
      </div>
    </div>
  </section>
  )
}

export default RoadmapHome