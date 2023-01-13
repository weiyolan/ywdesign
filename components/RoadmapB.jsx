import React,{useState,useEffect} from "react"
import { useAppContext } from "./Context"
import { Path, AnimateSVGText, AnimateText, Text } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"

export default function RoadmapB({scrollMin,scrollMax}) {
    let [allLengths, setAllLengths] = useState([])
    let [allOffsetLengths, setAllOffsetLengths] = useState([])
    let [allRatios, setAllRatios] = useState([0])
    let [allPrevRatios, setAllPrevRatios] = useState([0])
    let { scrolled } = useAppContext();
  
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
    }, [scrolled])
  
    useEffect(() => {
    }, [allLengths, allOffsetLengths, allRatios, allPrevRatios])
  
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
    return (
      <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax}>
      <div className='relative w-full h-fit flex flex-col '> 

        <svg className='relative w-full px-4 left-1/2'  style={{transform: `translate(-50%, ${-0*scrolled}px)`}}  viewBox="0 0 807 233"  fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <AnimateSVGText at={0.16} fromTop={true}>
            <Text id="Contract Agreement" transform="translate(185 181)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="0.028183" y="41.1313">Contract Agreement</tspan></Text>
          </AnimateSVGText>

          <Path print={false} position={0}  inverse={false}  double={2} handleLength={(l,i)=>handleLength(1,l,i)} id="Vector" d="M368.689 2C380.189 8 383.588 21.5 383.588 35V157M438.5 2C427 8 423.602 21.5 423.602 35V157" stroke="black" stroke-width="3" stroke-linecap="round"/>
        </svg>
        
        <AnimateText at={0.17} >
        <h2 className='z-20 px-4 my-4 w-full text-sm font-extralight text-center outline-none -outline-offset-2 relative flex text-white font-sans ' >
            {`Before the start of our collaboration, you receive a contract proposal that outlines the proposed solution and required resources.`} 
        </h2>
        </AnimateText>
        
  
      </div>
      </SVGWrapper>
    )
  }