import React, { useState, useEffect } from "react"
import { useAppContext } from "./Context"
import { Path, AnimateIn, TextAnimate } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"

export default function RoadmapE({home, scrollMin, scrollMax }) {
  let [allLengths, setAllLengths] = useState([])
  let [allOffsetLengths, setAllOffsetLengths] = useState([])
  let [allRatios, setAllRatios] = useState([0])
  let [allPrevRatios, setAllPrevRatios] = useState([0])
  let { scrolled , locale} = useAppContext();

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
      // let totLength = allLengths.reduce((x, y) => x + y);
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
  }, [allLengths,allOffsetLengths])
  // style={{transform: `translate(-50%, -${500*scrolled}px)`}} 

  return (
    // <AnimateSVGText at={0.16} fromTop={true}>
    
    <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax}>
      <div className='relative w-full h-fit flex flex-col '>

        <svg alt='Roadmap part 5, Final design' className='relative w-full px-4 left-1/2' style={{ transform: `translate(-50%, ${-0 * scrolled}px)` }} viewBox="0 0 807 211" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 20">
            <g id="finalDesignGroup">
              <Path position={0}  inverse={false} double={1} handleLength={(l,i)=>handleLength(1.2,l,i)} id="designProduct" d="M403.5 207L354 136.5L403.5 66L453 136.5L403.5 207Z" stroke="black" stroke-width="4"/>
              <TextAnimate print={false} at={home?0.35:0.50} fromTop={true} id="Final Design" transform="translate(273)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="130.5" y="41.1313" textAnchor="middle">{`${locale==='en'?'Final Design':"Conception Finale"}`}</tspan></TextAnimate>
              {/* <TextAnimate print={false} at={home?0.35:0.50} fromTop={true} id="Final Design" transform="translate(273)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="0.0964661" y="41.1313">Final Design</tspan></TextAnimate> */}

            </g>
          </g>
        </svg>

       {!home && <AnimateIn at={0.52}>
        <h2 >
          {`${locale==='en'?'After two iterations on the structure\nand design, the final design can be approved.\nNow I start coding.':"Après deux itérations sur la structure et le design, le design final peut être approuvé. Je commence alors à coder."}`}
        </h2>
        </AnimateIn>}
        {/* <h2 className='z-20 p-2 bg-white/10 rounded-2xl backdrop-blur-sm outline-none -outline-offset-2 outline-white/20 relative flex text-sm font-light w-[40vw] text-center text-white font-sans ' >{`We take note of your\nvalues, existing branding\nand style preferences to\ngenerate ideas together`} </h2> */}
        {/* <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[70%] left-0' >{`I then transform the\nfinal design into the\nactual digital produc`}t</h2>
        <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[80%] left-0' >{`When the product is ready\nyou finally receive it.\nYes, you own all the code`}.</h2>
        <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[95%] left-0' >{`An apple a day keeps the doctor away.\nA maintenance plan is developed to\nanswer the needs of your product`}.</h2> */}


      </div>
    </SVGWrapper>
  )
}