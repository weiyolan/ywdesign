import React, { useEffect, useRef, useState } from 'react'

import { BiTargetLock } from 'react-icons/bi'

import Subtitle from '../components/Subtitle'
import Navbar from '../components/Navbar'

import {Path, Circle, Rect} from '../components/pathUtils'
import { useAppContext } from '../components/Context'
import RoadmapSVG from '../public/images/roadmapComplete.svg'
import Iteration1 from '../public/images/roadmapIteration1.svg'
import Iteration2 from '../public/images/roadmapIteration2.svg'


const roadmap = () => {
  // PARALLAX
  // let target = document.getElementById('id')
  // let dataRateX = 0.4
  // let dataRateY = 0.2

  // let posX = window.pageYOffset * dataRateX;
  // let posY = window.pageYOffset * dataRateY;
  // setStyle ( {transform: `translate3d(${posX}px,${posY}px, 0px)`})

  return (
    <section className='flex w-full flex-col justify-center '>
      <Navbar />

      <Subtitle name={'Roadmap'} title={`Scroll down to see\nhow we work together`} span={'Scroll'} text={'Yes indeed scroll dooownnnnn'} first={true} />
      
      <div className='relative w-full flex flex-col' >
        <Roadmap />
        {/* <Stroke2 scrolled={scrolled} /> */}
        {/* <Stroke3 scrolled={scrolled} /> */}
      </div>
    </section>
  )
}
export default roadmap


function Roadmap() {
  let [allLengths, setAllLengths] = useState([])
  let [allRatios, setAllRatios] = useState([0])
  let [allPrevRatios, setAllPrevRatios] = useState([0])
  let {scrolled} = useAppContext();

  function handleLength (f, newLength) {
    setAllLengths(prevLengths=>{return [...prevLengths, newLength*f]})
  }

useEffect(()=>{
  console.log(scrolled)
},[scrolled])

  useEffect(()=>{
    console.log(allLengths)
    console.log(allRatios)
    console.log(allPrevRatios)
  },[allLengths, allRatios, allPrevRatios])

  useEffect(() => {
    if (allLengths.length > 0) {
      let totLength = allLengths.reduce((x,y)=>x+y);
      let allRatios = allLengths.map(itemLength => itemLength/totLength);
      
      let newPrevRatios = allLengths.map((itemLength, index) => {
        // console.log('Mapping to reduce to allPrevRatios, current index: ' + index)
          let prevLength = allLengths.reduce((acc,y,i)=>{
            // console.log('acc: ' + acc + ' currentVal: ' + y + ' index: ' + i)
            // if (i<index) {console.log('added the value: ' + y + ' to acc ' + acc +' resulting in : ' + (acc + y))}
            return (i<index?acc+y:acc)}, 0);
        return prevLength/totLength
      })    

      setAllRatios(allRatios)
      setAllPrevRatios(newPrevRatios)
    }


  }, [allLengths])

  return (
    <div className='w-full mx-auto relative'>
        <RoadmapSVG className='w-[90vw] my-10 mx-auto'/>

        <h2 className='z-20 p-2 bg-white/10 rounded-2xl backdrop-blur-sm outline-none -outline-offset-2 outline-white/20 absolute inline-flex text-sm font-light w-[40vw] text-center text-white font-sans top-[400px] left-0' >{`We take note of your\nvalues, existing branding\nand style preferences to\ngenerate ideas together`} </h2>
        <h2 className='z-20 p-2 absolute inline-flex text-sm font-light w-[30vw] text-center text-white font-sans top-[70%] left-0' >{`I then transform the\nfinal design into the\nactual digital produc`}t</h2>
        <h2 className='z-20 p-2 absolute inline-flex text-sm font-light w-[30vw] text-center text-white font-sans top-[80%] left-0' >{`When the product is ready\nyou finally receive it.\nYes, you own all the code`}.</h2>
        <h2 className='z-20 p-2 absolute inline-flex text-sm font-light w-[30vw] text-center text-white font-sans top-[95%] left-0' >{`An apple a day keeps the doctor away.\nA maintenance plan is developed to\nanswer the needs of your product`}.</h2>
        
        {/* <div className='absolute w-1/3 top-1/3 right-0 backdrop-blur-md'>
          <Iteration1/>
        </div>
        
        <div className='absolute w-1/3 top-1/3 left-0 backdrop-blur-md'>
          <Iteration2/>
        </div> */}
    </div>
  )
}


