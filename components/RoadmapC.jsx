import React, { useState, useEffect } from "react"
import { useAppContext } from "./Context"
import { Path, AnimateIn, TextAnimate } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"

export default function RoadmapC({ home, scrollMin, scrollMax }) {
  let [allLengths, setAllLengths] = useState([])
  let [allOffsetLengths, setAllOffsetLengths] = useState([])
  let [allRatios, setAllRatios] = useState([0])
  let [allPrevRatios, setAllPrevRatios] = useState([0])
  let { scrolled ,locale} = useAppContext();

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

  return (
    <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax}>
      <div className='relative w-full h-fit flex flex-col '>

        <svg alt='Roadmap part 3, Ideation phase' className='relative w-full  left-1/2' style={{ transform: `translate(-50%, ${-0 * scrolled}px)` }} viewBox="0 0 807 193" fill="none" xmlns="http://www.w3.org/2000/svg">
          <TextAnimate at={0.26} fromTop={true} id="Ideation" transform="translate(316 141)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="87.5" y="41.1313" textAnchor="middle">{`${locale==='en'?'Ideation':'Idéation'}`}</tspan></TextAnimate>
          <Path position={0} inverse={true} double={2} handleLength={(l, i) => handleLength(1, l, i)}  id="Vector" d="M383.588 125V2M423.602 125V2" stroke="black" stroke-width="3" stroke-linecap="round"/>
        
        </svg>

        {!home && <AnimateIn at={0.28}>
        <h2 >
        {`${locale==='en'?'Once agreed, we meet up and take note of your\nvalues, existing branding\nand style preferences to\ngenerate ideas together:':"Une fois l'accord conclu, nous nous rencontrons et prenons note de vos valeurs, de votre image de marque existante et de vos préférences stylistiques pour générer des idées ensemble :"}`} 
          </h2>
        </AnimateIn>}

      </div>
    </SVGWrapper>
  )
}