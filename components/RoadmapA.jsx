import React,{useState,useEffect} from "react"
import { useAppContext } from "./Context"
import { Path, AnimateIn, TextAnimate } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"

export default function RoadmapA({scrollMin,scrollMax}) {
    let [allLengths, setAllLengths] = useState([])
    let [allOffsetLengths, setAllOffsetLengths] = useState([])
    let [allRatios, setAllRatios] = useState([0])
    let [allPrevRatios, setAllPrevRatios] = useState([0])
    let { scrolled, locale } = useAppContext();
  
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
  
    // useEffect(() => {
    //   console.log(scrolled)
    // }, [scrolled])
  
    // useEffect(() => {
      // console.log(allLengths)
      // console.log(allOffsetLengths)
      // console.log(allRatios)
      // console.log(allPrevRatios)
    // }, [allLengths, allOffsetLengths, allRatios, allPrevRatios])
  
    useEffect(() => {
      if (allLengths.length > 0) {
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
    }, [allLengths, allOffsetLengths])

    return (
      <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax}>
      <div className='relative w-full h-fit flex flex-col '> 
        {/* <RoadmapSVG className='absolute left-1/2 -translate-x-1/2 w-full px-4 mt-24  '/> */}
  
        <svg alt='Roadmap part 1, Project defintion' style={{transform: `translate(-50%, ${-0*scrolled}px)`}} 
        className='relative w-full px-4 left-1/2' viewBox="0 0 807 563" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            <g id="projectDefinitionGroup" className="text-right">
              <TextAnimate print={false} at={0.04} fromTop={true} id="Project Definition" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="50%" y="333.131" textAnchor='middle'>{`${locale==='en'?'Project Definition':"Définition du Projet"}`}</tspan></TextAnimate>
              {/* <TextAnimate print={false} at={0.04} fromTop={true} id="Project Definition" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="213.791" y="333.131">Project Definition</tspan></TextAnimate> */}
              
              <Path position={0}  print={false} inverse={false}  double={2} handleLength={(l,i)=>handleLength(1,l,i)} id="line1Roadmap" d="M423.5 2V234C423.5 252 429.5 265.5 440.5 267.493M384 2V234C384 252 378 265.5 367 267.493" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <Path position={1}  inverse={false}  handleLength={(l,i)=>handleLength(0.2,l,i)} type='circle'  id="scope" cx="160" cy="452" r="60" stroke="black" stroke-width="4"/>
              <Path position={2}  inverse={false}  handleLength={(l,i)=>handleLength(0.2,l,i)}  id="timing" d="M403 392C412.512 392 421.887 394.261 430.353 398.598C438.819 402.934 446.132 409.22 451.69 416.939C457.248 424.658 460.892 433.588 462.32 442.991C463.748 452.395 462.92 462.004 459.904 471.025C456.888 480.046 451.771 488.22 444.974 494.874C438.177 501.528 429.896 506.471 420.813 509.295C411.73 512.119 402.106 512.743 392.735 511.115C383.363 509.488 374.513 505.656 366.914 499.935L389.154 470.392C392.07 472.587 395.466 474.057 399.061 474.681C402.657 475.306 406.35 475.066 409.834 473.983C413.319 472.9 416.497 471.003 419.105 468.45C421.712 465.897 423.676 462.761 424.833 459.299C425.99 455.838 426.308 452.152 425.76 448.544C425.212 444.936 423.814 441.509 421.682 438.548C419.549 435.586 416.743 433.174 413.495 431.51C410.247 429.847 406.649 428.979 403 428.979L403 392Z" stroke="black" stroke-width="4"/>
              <Path position={3}  inverse={false}  handleLength={(l,i)=>handleLength(1,l,i)} type='rect'  id="budget" x="645" y="392" width="84.8528" height="84.8528" transform="rotate(45 645 392)" stroke="black" stroke-width="4"/>

              <TextAnimate at={0.06} fromTop={true} id="Scope" fill="black" style="white-space: pre" font-family="Work Sans" font-size="37.1769" letter-spacing="0em"><tspan x="160" y="553.77" textAnchor="middle">{`${locale==='en'?'Scope':"Portée"}`}</tspan></TextAnimate>
              {/* <TextAnimate at={0.06} fromTop={true} id="Scope" fill="black" style="white-space: pre" font-family="Work Sans" font-size="37.1769" letter-spacing="0em"><tspan x="104.162" y="553.77" textAnchor="middle">Scope</tspan></TextAnimate> */}
              
              <TextAnimate at={0.07} fromTop={true} id="Timing" fill="black" style="white-space: pre" font-family="Work Sans" font-size="37.1769" letter-spacing="0em"><tspan x="402.5" y="553.77" textAnchor="middle">{`${locale==='en'?'Timing':"Calendrier"}`}</tspan></TextAnimate>
              {/* <TextAnimate at={0.07} fromTop={true} id="Timing" fill="black" style="white-space: pre" font-family="Work Sans" font-size="37.1769" letter-spacing="0em"><tspan x="343.078" y="553.77" textAnchor="middle">Timing</tspan></TextAnimate> */}
              
              <TextAnimate at={0.08} fromTop={true} id="Budget" fill="black" style="white-space: pre" font-family="Work Sans" font-size="37.1769" letter-spacing="0em"><tspan x="645" y="553.77" textAnchor="middle">{`${locale==='en'?'Budget':"Budget"}`}</tspan></TextAnimate>
              {/* <TextAnimate at={0.08} fromTop={true} id="Budget" fill="black" style="white-space: pre" font-family="Work Sans" font-size="37.1769" letter-spacing="0em"><tspan x="585.092" y="553.77" textAnchor="middle">Budget</tspan></TextAnimate> */}
              
            </g> 
        </svg>

        <AnimateIn at={0.11}>
          <h2 >
            {`${locale==='en'?'When we first meet, we define the goals and resources of your project as well as the available time until completion.':"Lors de notre première rencontre, nous définissons les objectifs et les ressources de votre projet, ainsi que le temps disponible jusqu'à son achèvement."}`} 
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