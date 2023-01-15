import React, { useState, useEffect } from "react"
import { useAppContext } from "./Context"
import { Path, AnimateIn, TextAnimate } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"

export default function RoadmapF({ scrollMin, scrollMax }) {
  let [allLengths, setAllLengths] = useState([])
  let [allOffsetLengths, setAllOffsetLengths] = useState([])
  let [allRatios, setAllRatios] = useState([0])
  let [allPrevRatios, setAllPrevRatios] = useState([0])
  let { scrolled } = useAppContext();

  function handleLength(f, newLength, position) {
    setAllLengths(prevLengths => {
      let copyLengths = [...prevLengths];
      copyLengths[position] = newLength;
      return copyLengths
    })
    setAllOffsetLengths(prevOffsets => {
      let copyOffsetLengths = [...prevOffsets];
      copyOffsetLengths[position] = newLength * f;
      return copyOffsetLengths
    })
  }

  useEffect(() => {
    if (allLengths.length > 0) {
      let totLength = allLengths.reduce((x, y) => x + y);
      let totOffsetLength = allOffsetLengths.reduce((x, y) => x + y);
      let allRatios = allLengths.map(itemLength => itemLength / totOffsetLength);
      let newPrevRatios = allLengths.map((itemLength, index) => {
        let prevOffsetLength = allOffsetLengths.reduce((acc, y, i) => {
          return (i < index ? acc + y : acc)
        }, 0);
        return prevOffsetLength / totOffsetLength
      })
      setAllRatios(allRatios)
      setAllPrevRatios(newPrevRatios)
    }
  }, [allLengths])
  // style={{transform: `translate(-50%, -${500*scrolled}px)`}} 
  return (
    // <AnimateSVGText at={0.16} fromTop={true}>

    <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax}>
      <div className='relative w-full h-fit flex flex-col '>

        <svg className='relative w-full px-4 left-1/2' style={{ transform: `translate(-50%, ${-0 * scrolled}px)` }} viewBox="0 0 807 214" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <Path print={false} position={0} animateFill={true} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="finishedProduct" d="M403.5 210L354 139.5L403.5 69L453 139.5L403.5 210Z" fill="black" stroke="black" stroke-width="4"/>
          <TextAnimate at={0.64} fromTop={true} id="Product Delivery" transform="translate(223)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="0.174484" y="41.1313">Product Delivery</tspan></TextAnimate>

        </svg>

        <AnimateIn at={0.69}>
          <h2 >
          {`When the product is ready you receive it.\nYes, you own all the code.`}
        </h2>
        </AnimateIn>
        {/* <h2 className='z-20 p-2 bg-white/10 rounded-2xl backdrop-blur-sm outline-none -outline-offset-2 outline-white/20 relative flex text-sm font-light w-[40vw] text-center text-white font-sans ' >{`We take note of your\nvalues, existing branding\nand style preferences to\ngenerate ideas together`} </h2> */}
        {/* <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[70%] left-0' >{`I then transform the\nfinal design into the\nactual digital produc`}t</h2>
        <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[80%] left-0' >{`When the product is ready\nyou finally receive it.\nYes, you own all the code`}.</h2>
        <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[95%] left-0' >{`An apple a day keeps the doctor away.\nA maintenance plan is developed to\nanswer the needs of your product`}.</h2> */}


      </div>
    </SVGWrapper>
  )
}