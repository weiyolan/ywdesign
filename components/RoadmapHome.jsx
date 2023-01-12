import React, {useEffect, useState} from 'react'
import Subtitle from './Subtitle'
import RoadmapSVG from '../public/images/roadmapComplete.svg'
import { useAppContext } from './Context'

const RoadmapHome = () => {
  let {scrolled} = useAppContext()
  let [style, setStyle] = useState({transform: `translate(-50%, -${60}px)`})

  useEffect(() => {
    let movedStyle = {transform: `translate(-50%, -${100  + 1000*Math.max(scrolled-0.25,0)}px)`}
    setStyle(movedStyle)
    console.log(movedStyle)
  },[scrolled])

  return (
    <section className='flex flex-row'>
    <div className='flex-1 max-w-[50%] z-10 '>
      <Subtitle name='Workflow' title='A fully personalised solution, every time' span={'solution'} 
      text='The roadmap allows us to find the best solution for you, every time. You want to try it out.' 
      first={true} position='left'/>
    </div>
    <div className='flex-1 overflow-clip flex justify-center'>
      <div className='mt-12 px-5 relative w-full h-full overflow-hidden z-0'>
        <div style={style} className='flex absolute w-full left-1/2 top-1/2 '>
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