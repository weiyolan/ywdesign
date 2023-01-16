import React, { useState, useEffect } from "react"
import { useAppContext } from "./Context"
import { Path, AnimateIn, TextAnimate } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"
import ArrowLink from "./ArrowLink"

export default function RoadmapG({ scrollMin, scrollMax }) {
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


        <svg alt='Roadmap part 8, Maintenance' className='relative w-full px-4 left-1/2' style={{ transform: `translate(-50%, ${-0 * scrolled}px)` }} viewBox="0 0 807 393" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 22">
            <g id="maintenanceGroup">
              
              <TextAnimate at={0.78} fromTop={true} id="Maintenance" transform="translate(453 43)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="0.304916" y="41.1313">Maintenance</tspan></TextAnimate >
              <Path position={0}  inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="Vector 15" d="M366.5 2.5C380 6 383.5 23.5 383.5 38V72C383.5 132 272.001 154 272.001 255C272.001 322 325.001 387.5 402.001 387.5C475.001 387.5 531.001 330 531.001 255C531.001 155.5 423.5 135.5 423.5 72" stroke="black" stroke-width="4" stroke-linecap="round"/>
              <Path position={0}  inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="Vector 16" d="M441 2.5C428 8.5 423.5 19 423.5 38V72C424.5 165 307.5 165 307.5 257C307.5 330.5 367 354.5 400.5 354.5C448 354.5 495.5 319 495.5 257C495.5 171 386 157.5 383.5 72" stroke="black" stroke-width="4" stroke-linecap="round"/>

              <Path animateFill={true} position={1} inverse={false} double={1} handleLength={(l,i)=>handleLength(0,l,i)} d="M397.5 177L348 247.5L372.75 282.75L422.25 212.25L397.5 177Z" stroke="black" stroke-width="4"/>
              <Path animateFill={true} position={1} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} d="M403.75 329.75L453.25 259.25L428.5 224L379 294.5L403.75 329.75Z" stroke="black" stroke-width="4"/>

              {/* <g id="maintenanceProduct">
                <path d="M403.5 171L354 241.5L378.75 276.75L428.25 206.25L403.5 171Z" fill="black" />
                <path d="M409.75 323.75L459.25 253.25L434.5 218L385 288.5L409.75 323.75Z" fill="black" />
                <Path position={3}  inverse={false} double={1} handleLength={(l,i)=>handleLength(2,l,i)} d="M403.5 171L354 241.5L378.75 276.75L428.25 206.25L403.5 171Z" stroke="white" strokeWidth="4" />
                <Path position={2}  inverse={false} double={1} handleLength={(l,i)=>handleLength(2,l,i)} d="M409.75 323.75L459.25 253.25L434.5 218L385 288.5L409.75 323.75Z" stroke="white" strokeWidth="4" />
              </g>
              <Path position={1}  inverse={false} double={1} handleLength={(l,i)=>handleLength(2,l,i)} id="maintenanceLineB" d="M440.767 2.98255C441.583 2.83483 442.124 2.05427 441.976 1.23912C441.828 0.423973 441.048 -0.117088 440.233 0.0306308L440.767 2.98255ZM347.5 170.387L346.619 169.173L346.599 169.187L346.579 169.203L347.5 170.387ZM483.613 187.5L484.797 186.579L483.613 187.5ZM425 82V35H422V82H425ZM425 35C425 26.144 426.479 18.5147 429.222 12.9102C431.957 7.3221 435.873 3.86943 440.767 2.98255L440.233 0.0306308C434.127 1.13713 429.543 5.43115 426.528 11.5914C423.521 17.7352 422 25.8559 422 35H425ZM422 82C422 93.5636 419.93 102.817 416.221 110.676C412.509 118.538 407.118 125.082 400.367 131.178C393.602 137.286 385.508 142.915 376.401 148.969C367.317 155.007 357.233 161.464 346.619 169.173L348.381 171.6C358.93 163.94 368.927 157.539 378.061 151.467C387.172 145.41 395.432 139.676 402.377 133.405C409.335 127.122 415.008 120.27 418.933 111.956C422.86 103.639 425 93.9364 425 82H422ZM502.5 247C502.5 299.743 459.743 342.5 407 342.5V345.5C461.4 345.5 505.5 301.4 505.5 247H502.5ZM407 342.5C354.257 342.5 311.5 299.743 311.5 247H308.5C308.5 301.4 352.6 345.5 407 345.5V342.5ZM311.5 247C311.5 216.335 325.951 189.046 348.421 171.571L346.579 169.203C323.41 187.222 308.5 215.37 308.5 247H311.5ZM446.381 159.972C460.597 166.415 472.956 176.24 482.429 188.421L484.797 186.579C475.028 174.018 462.283 163.885 447.619 157.239L446.381 159.972ZM482.429 188.421C495.009 204.596 502.5 224.921 502.5 247H505.5C505.5 224.23 497.772 203.262 484.797 186.579L482.429 188.421Z" fill="white" />
              <Path position={0}  inverse={false} double={1} handleLength={(l,i)=>handleLength(2,l,i)} id="maintenanceLine" d="M366.767 0.0306308C365.952 -0.117088 365.172 0.423973 365.024 1.23912C364.876 2.05427 365.417 2.83483 366.233 2.98255L366.767 0.0306308ZM328.678 142.37L329.598 143.554L329.649 143.514L329.697 143.47L328.678 142.37ZM460.49 126.787L459.78 128.108L460.49 126.787ZM508.993 165.005L510.176 164.083L508.993 165.005ZM385 82V35H382V82H385ZM385 35C385 25.8559 383.479 17.7352 380.472 11.5914C377.457 5.43115 372.873 1.13713 366.767 0.0306308L366.233 2.98255C371.127 3.86943 375.043 7.3221 377.778 12.9102C380.521 18.5147 382 26.144 382 35H385ZM534.5 247.703C534.5 317.729 477.642 374.5 407.5 374.5V377.5C479.295 377.5 537.5 319.39 537.5 247.703H534.5ZM407.5 374.5C337.358 374.5 280.5 317.729 280.5 247.703H277.5C277.5 319.39 335.705 377.5 407.5 377.5V374.5ZM280.5 247.703C280.5 206.939 299.757 166.727 329.598 143.554L327.758 141.185C297.14 164.961 277.5 206.072 277.5 247.703H280.5ZM459.78 128.108C478.704 138.275 495.246 149.798 507.81 165.926L510.176 164.083C497.248 147.486 480.296 135.725 461.2 125.466L459.78 128.108ZM507.81 165.926C524.51 187.366 534.5 218.342 534.5 247.703H537.5C537.5 217.745 527.329 186.102 510.176 164.083L507.81 165.926ZM382 82C382 87.1746 379.802 92.4741 376.069 97.8341C372.34 103.187 367.163 108.483 361.399 113.622C355.639 118.757 349.35 123.687 343.416 128.332C337.505 132.958 331.92 137.322 327.659 141.269L329.697 143.47C333.847 139.626 339.32 135.348 345.265 130.694C351.187 126.059 357.552 121.07 363.395 115.861C369.234 110.655 374.608 105.18 378.531 99.5487C382.448 93.9242 385 88.0254 385 82H382ZM422.013 82.1982C423.535 93.6138 426.41 101.66 432.312 108.61C438.161 115.497 446.883 121.18 459.78 128.108L461.2 125.466C448.326 118.549 440.052 113.089 434.599 106.668C429.199 100.311 426.465 92.8862 424.987 81.8017L422.013 82.1982ZM382.001 82.0492C382.907 109.635 392.957 126.314 406.185 137.629C419.283 148.832 435.518 154.746 448.356 160.854L449.644 158.146C436.456 151.871 420.834 146.211 408.135 135.349C395.566 124.598 385.879 108.718 384.999 81.9507L382.001 82.0492Z" fill="white" /> */}
            </g>
          </g>
        </svg>

        <AnimateIn at={0.79}>
        <h2 >
        {`An apple a day keeps the doctor away.\nA maintenance plan is crucial\nfor the health of your product.`}
        </h2>
        </AnimateIn>


        <AnimateIn at={0.82}>

        <div className='text-center w-full pl-6 mb-12'>
            <ArrowLink text='To the top' to='#Title' />
        </div>
        </AnimateIn>
        {/* <h2 className='z-20 p-2 bg-white/10 rounded-2xl backdrop-blur-sm outline-none -outline-offset-2 outline-white/20 relative flex text-sm font-light w-[40vw] text-center text-white font-sans ' >{`We take note of your\nvalues, existing branding\nand style preferences to\ngenerate ideas together`} </h2> */}
        {/* <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[70%] left-0' >{`I then transform the\nfinal design into the\nactual digital produc`}t</h2>
        <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[80%] left-0' >{`When the product is ready\nyou finally receive it.\nYes, you own all the code`}.</h2>
        <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[95%] left-0' >{`An apple a day keeps the doctor away.\nA maintenance plan is developed to\nanswer the needs of your product`}.</h2> */}


      </div>
    </SVGWrapper>
  )
}