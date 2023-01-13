import React,{useState,useEffect} from "react"
import { useAppContext } from "./Context"
import { Path, AnimateIn, TextAnimate } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"

export default function RoadmapATitle({scrollMin,scrollMax}) {
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
      console.log(scrolled)
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
        
        <svg style={{transform: `translate(-50%, ${-0*scrolled}px)`}}  className='relative w-full px-4 left-1/2' viewBox="0 0 807 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 25">
          <TextAnimate at={-1} fromTop={false} id="RoadmapTitle" fill="black" style="white-space: pre" font-family="Work Sans" font-size="67.7698" font-weight="600" letter-spacing="0em"><tspan x="248.246" y="62.7789">Roadmap</tspan></TextAnimate>
          </g>
        </svg>

  
      </div>
      </SVGWrapper>
    )
  }