import React, {useEffect, useState} from 'react'
import Subtitle from './Subtitle'
import ArrowLink from './ArrowLink'
// import RoadmapSVG from '../public/images/roadmapComplete.svg'
import RoadmapE1 from './RoadmapE1'
import RoadmapE2 from './RoadmapE2'
import RoadmapC from './RoadmapC'
import RoadmapDHome from './RoadmapDHome'
import { useAppContext } from './Context'
import Link from 'next/link'

const RoadmapHome = () => {
  let {scrolled} = useAppContext()
  let {width, breakPointSmall} = useAppContext();
  let [hovering,setHovering] = useState(false);

  // useEffect(()=>{
  //   console.log(scrolled)

  // })
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
        <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} 
        style={{transform: `translate(-50%, -${(width<breakPointSmall?0:50)  + (width<breakPointSmall?280:300)*Math.max(scrolled-0.20,0)}px) scale(${hovering?1.02:1})`}} 
        className='transition-all hover:cursor-pointer ease flex flex-col absolute w-[98%] lg:w-[80%] left-1/2 top-1/3 '>
        <Link onFocus={()=>setHovering(true)} onBlur={()=>setHovering(false)} title='Explore the roadmap' href='/roadmap'>
          {width<breakPointSmall && <RoadmapC home={true} scrollMin={0.2} scrollMax={0.25}/>}
          <RoadmapDHome print={false} hovering={hovering} home={true} scrollMin={width<breakPointSmall?0.25:0.18} scrollMax={width<breakPointSmall?0.35:width<768?0.55:0.55} speed={width<breakPointSmall?1.5:1.2}/>
          {/* <RoadmapE1 home={true} scrollMin={0.35} scrollMax={0.37} /> */}
        </Link>
        </div>

      </div>
    </div>
  </section>
  )
}

export default RoadmapHome