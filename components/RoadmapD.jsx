import React, { useState, useEffect } from "react"
import { useAppContext } from "./Context"
import { Path, AnimateIn, TextAnimate } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"

export default function RoadmapD({ scrollMin, scrollMax, speed , home}) {
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
            // let totLength = allLengths.reduce((x, y) => x + y);
            let totOffsetLength = allOffsetLengths.reduce((x, y) => x + y);
            let allRatios = allLengths.map(itemLength => itemLength / totOffsetLength);
            let newPrevRatios = allLengths.map((itemLength, index) => {
                let prevOffsetLength = allOffsetLengths.reduce((acc, y, i) => {
                    return (i < index ? acc + y : acc)
                }, 0);
                return prevOffsetLength / totOffsetLength})
            setAllRatios(allRatios)
            setAllPrevRatios(newPrevRatios)
        }
    }, [allLengths,allOffsetLengths])
    // style={{transform: `translate(-50%, -${500*scrolled}px)`}} 
    return (
      // <AnimateSVGTextAnimate at={0.16} fromTop={true}>


      <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax} animationSpeed={speed}>
        <div className='relative w-full h-fit flex flex-col '>

          <svg className={`relative w-full ${home?'mb-1':'mb-4'} left-1/2`} style={{ transform: `translate(-50%, ${-0 * scrolled}px)` }} viewBox="0 0 810 1116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 19">
          <g id="iterationGroup">
          <Path position={11}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="Tri10" d="M382.506 764.69L465.074 836.031L362.007 871.866L382.506 764.69Z" stroke="white" strokeWidth="4"/>
          <Path position={10}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(0.2,l,i)} id="Tri9" d="M368.194 611.234L393.728 735.945L272.958 695.702L368.194 611.234Z" stroke="white" strokeWidth="4" initialDash="35 10"/>
          <Path position={9}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(0.2,l,i)} id="Tri8" d="M545.009 576.802C548.778 576.02 551.98 579.612 550.773 583.266L518.327 681.495C517.119 685.15 512.408 686.127 509.847 683.254L441.002 606.041C438.44 603.168 439.949 598.599 443.718 597.817L545.009 576.802Z" stroke="white" strokeWidth="4" initialDash="20 10"/>
          <Path position={8}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(0.2,l,i)} id="Tri7" d="M495.128 446.659C500.514 443.422 507.357 447.373 507.248 453.656L505.913 530.043C505.807 536.138 499.194 539.879 493.914 536.831L429.763 499.793C424.483 496.745 424.417 489.148 429.643 486.008L495.128 446.659Z" stroke="white" strokeWidth="4" initialDash="20 10"/>
          <Path position={7}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(0.2,l,i)} id="Tri6" d="M377.385 388.989C386.718 383.601 398.385 390.336 398.385 401.113L398.385 469.927C398.385 480.704 386.718 487.44 377.385 482.051L317.791 447.645C308.457 442.256 308.457 428.784 317.791 423.396L377.385 388.989Z" stroke="white" strokeWidth="4" initialDash="10 10"/>
          <Path lineSpeed={1.2} position={5}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(0.1,l,i)} id="Arrow" d="M407.5 346C407.5 464.5 606 425 606 517.5C606 610 250.5 558 250.5 669.5C250.5 781 484 741 484 805C484 869 380.5 869 380.5 916.5C380.5 964 406.5 964 406.5 1055M406.5 1055L412 1047.5M406.5 1055L400.5 1047.5" myGradient="url(#paint0_linear_652_2278)" strokeWidth="3" strokeLinecap="round" initialDash="6 6"/>
          
            <TextAnimate at={home?0.28:0.41} fromTop={true} id="Iteration" transform="translate(477 335)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="0.0276794" y="41.1313">Iteration</tspan></TextAnimate>

          <Path position={6}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(0.2,l,i)} id="Tri5" d="M272.216 403.651C259.576 411.009 243.71 401.924 243.658 387.298L243.476 335.805C243.424 321.179 259.225 311.982 271.918 319.25L316.603 344.839C329.295 352.107 329.36 370.389 316.719 377.747L272.216 403.651Z" stroke="white" strokeWidth="4" initialDash="10 10"/>
          <Path position={4}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(0.2,l,i)} id="Tri4" d="M351.517 338.905C339.236 339.85 330.538 327.147 335.859 316.039L356.852 272.216C362.174 261.108 377.524 259.926 384.483 270.089L411.938 310.181C418.898 320.344 412.246 334.229 399.965 335.174L351.517 338.905Z" stroke="white" strokeWidth="4" initialDash="10 10"/>
          <Path position={3}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(0.2,l,i)} id="Tri3" d="M444.56 190.285C460.56 181.047 480.56 192.594 480.56 211.069L480.56 237.05C480.56 255.525 460.56 267.072 444.56 257.835L422.06 244.844C406.06 235.607 406.06 212.513 422.06 203.275L444.56 190.285Z" stroke="white" strokeWidth="4" initialDash="5 10"/>
          <Path position={2}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(0.2,l,i)} id="Tri2" d="M358.56 149.285C374.56 140.047 394.56 151.594 394.56 170.069L394.56 196.05C394.56 214.525 374.56 226.072 358.56 216.835L336.06 203.844C320.06 194.607 320.06 171.513 336.06 162.275L358.56 149.285Z" stroke="white" strokeWidth="4" initialDash="5 10"/>
          <Path print={false} position={1}  inverse={false}  double={1} handleLength={(l,i)=>handleLength(0.2,l,i)} id="Tri1" d="M388.31 74.7798C409.31 62.6554 435.56 77.8109 435.56 102.06V102.06C435.56 126.308 409.31 141.464 388.31 129.339V129.339C367.31 117.215 367.31 86.9042 388.31 74.7798V74.7798Z" stroke="white" strokeWidth="4" initialDash="5 20"/>
          <Path print={false} position={0}  inverse={true}  double={2} handleLength={(l,i)=>handleLength(0.1,l,i)} id="Vector" d="M384.588 1114.5C384.588 893.5 181.19 633.5 119.19 550.5C57.1895 467.5 -5.81048 441 2.18952 324C8.58951 230.4 115.523 182.667 168.19 170.5C276.28 145.53 384.588 112 384.588 1.5M424.602 1114.5C424.602 893.5 628 633.5 690 550.5C752 467.5 815 441 807 324C800.6 230.4 693.667 182.667 641 170.5C532.91 145.53 424.602 112 424.602 1.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </g>
          </g>
          <defs>
          <linearGradient id="paint0_linear_652_2278" x1="428.25" y1="346" x2="428" y2="685" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{'stopColor':'#FFFFFF','stopOpacity':0}}/>
          <stop offset="100%" style={{'stopColor':'#FFFFFF','stopOpacity':1}}/>
          </linearGradient>
          </defs>
          </svg>

                {/* <h2 className='z-20 p-2 bg-white/10 rounded-2xl backdrop-blur-sm outline-none -outline-offset-2 outline-white/20 relative flex text-sm font-light w-[40vw] text-center text-white font-sans ' >{`We take note of your\nvalues, existing branding\nand style preferences to\ngenerate ideas together`} </h2> */}
                {/* <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[70%] left-0' >{`I then transform the\nfinal design into the\nactual digital produc`}t</h2>
        <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[80%] left-0' >{`When the product is ready\nyou finally receive it.\nYes, you own all the code`}.</h2>
        <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[95%] left-0' >{`An apple a day keeps the doctor away.\nA maintenance plan is developed to\nanswer the needs of your product`}.</h2> */}


            </div>
        </SVGWrapper>
    )
}