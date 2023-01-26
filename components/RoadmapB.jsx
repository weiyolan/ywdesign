import React,{useState,useEffect} from "react"
import { useAppContext } from "./Context"
import { Path, AnimateIn, TextAnimate } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"

export default function RoadmapB({scrollMin,scrollMax}) {
    let [allLengths, setAllLengths] = useState([])
    let [allOffsetLengths, setAllOffsetLengths] = useState([])
    let [allRatios, setAllRatios] = useState([0])
    let [allPrevRatios, setAllPrevRatios] = useState([0])
    let { scrolled,locale } = useAppContext();
  
    function handleLength(f, newLength, position) {
      setAllLengths(prevLengths => {
        let copyLengths = [...prevLengths];
        copyLengths[position]=newLength;
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

        <svg alt='Roadmap part 2, contract agreement' className='relative w-full px-4 left-1/2'  style={{transform: `translate(-50%, ${-0*scrolled}px)`}}  viewBox="0 0 807 233"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <TextAnimate print={false} at={0.168} fromTop={true} id="Contract Agreement" transform="translate(185 181)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="218.5" y="41.1313" textAnchor="middle">{`${locale==='en'?'Contract Agreement':"Accord Contractuel"}`}</tspan></TextAnimate>
          {/* <TextAnimate print={false} at={0.168} fromTop={true} id="Contract Agreement" transform="translate(185 181)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="0.028183" y="41.1313">Contract Agreement</tspan></TextAnimate> */}
          <Path print={false} position={0}  inverse={false}  double={2} handleLength={(l,i)=>handleLength(1,l,i)} id="Vector" d="M368.689 2C380.189 8 383.588 21.5 383.588 35V157M438.5 2C427 8 423.602 21.5 423.602 35V157" stroke="black" stroke-width="3" stroke-linecap="round"/>
        </svg>
        
        <AnimateIn at={0.185} >
        <h2>
            {`${locale==='en'?'Before the start of our collaboration, you receive a contract proposal that outlines the proposed solution and required resources.':"Avant le début de notre collaboration, vous recevez une proposition de contrat qui décrit la solution proposée et les ressources nécessaires."}`} 
        </h2>
        </AnimateIn>
        
  
      </div>
      </SVGWrapper>
    )
  }