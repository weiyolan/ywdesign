import React, { useState, useEffect } from "react"
import { useAppContext } from "./Context"
import { Path, AnimateIn, TextAnimate } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"

export default function RoadmapE({ scrollMin, scrollMax }) {
  let [allLengths, setAllLengths] = useState([])
  let [allOffsetLengths, setAllOffsetLengths] = useState([])
  let [allRatios, setAllRatios] = useState([0])
  let [allPrevRatios, setAllPrevRatios] = useState([0])
  let { scrolled, locale } = useAppContext();

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
  let a = 0.572;
  let delay = 0.003;
  return (
    // <AnimateSVGText at={0.16} fromTop={true}>
    
    <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax}>
      <div className='relative w-full h-fit flex flex-col '>

        <svg alt='Roadmap part 5, Development of website' className='relative w-full mb-4 px-4 left-1/2' style={{ transform: `translate(-50%, ${-0 * scrolled}px)` }} viewBox="0 0 807 584"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 20">
            <g id="developmentGroup">
              <Path position={3} inverse={false} double={1} handleLength={(l,i)=>handleLength(0,l,i)} id="start2A" d="M403.5 469.5C403.5 502.5 383.5 504 383.5 521.5C383.5 539 383.5 548 383.5 548C383.5 565 376.394 578.406 366 581.5" stroke="black" stroke-width="4" stroke-linecap="round"/>
              <Path position={3} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="start2B" d="M403.5 469.5C403.5 506 422.999 501 423 522C423 543 423 548 423 548C423 575 432 578.5 439.5 581.5" stroke="black" stroke-width="4" stroke-linecap="round"/>
              <Path position={2} inverse={true} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="tails2" d="M403.5 470L403.5 374M403.5 470C403.5 384 470 406.5 470 374M403.5 470C403.5 384.5 536.5 417 536.5 374M403.5 470C403.5 384 336.5 406 336.5 374M403.5 470C403.5 384 270 415.5 270 374" stroke="black" stroke-width="4" stroke-linecap="round"/>

              <g id="Development">
                <g id="numbers2">
                  <TextAnimate print={false} at={a+12*delay} fromTop={true} id="1" transform="translate(529 319)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="34.2614" font-weight="500" letter-spacing="0em"><tspan x="0.107573" y="31.7688">1</tspan></TextAnimate>
                  <TextAnimate print={false} at={a+11*delay} fromTop={true} id="0" transform="translate(460 319)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="34.2614" font-weight="500" letter-spacing="0em"><tspan x="0.243129" y="31.7688">0</tspan></TextAnimate>
                  <TextAnimate print={false} at={a+10*delay} fromTop={true} id="1_2" transform="translate(396 319)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="34.2614" font-weight="500" letter-spacing="0em"><tspan x="0.107573" y="31.7688">1</tspan></TextAnimate>
                  <TextAnimate print={false} at={a+9*delay} fromTop={true} id="1_3" transform="translate(331 319)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="34.2614" font-weight="500" letter-spacing="0em"><tspan x="0.107573" y="31.7688">1</tspan></TextAnimate>
                  <TextAnimate print={false} at={a+8*delay} fromTop={true} id="0_2" transform="translate(259 319)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="34.2614" font-weight="500" letter-spacing="0em"><tspan x="0.243129" y="31.7688">0</tspan></TextAnimate>

                </g>
                {/* <path id="Development_2" d="M275.068 488.927C279.619 488.927 283.158 490.19 285.684 492.715C288.239 495.211 289.516 498.794 289.516 503.463C289.516 508.133 288.239 511.73 285.684 514.256C283.158 516.752 279.619 518 275.068 518H264.804V488.927H275.068ZM275.068 513.991C278.151 513.991 280.5 513.081 282.116 511.26C283.76 509.41 284.582 506.811 284.582 503.463C284.582 500.116 283.76 497.531 282.116 495.711C280.5 493.86 278.151 492.935 275.068 492.935H269.517V513.991H275.068ZM305.538 518.441C303.336 518.441 301.398 517.985 299.724 517.075C298.05 516.165 296.743 514.858 295.803 513.154C294.893 511.422 294.438 509.366 294.438 506.987C294.438 504.609 294.893 502.568 295.803 500.864C296.743 499.132 298.035 497.81 299.68 496.9C301.324 495.99 303.189 495.534 305.274 495.534C307.418 495.534 309.239 495.975 310.736 496.856C312.234 497.737 313.379 498.941 314.172 500.468C314.965 501.995 315.362 503.728 315.362 505.666C315.362 506.195 315.347 506.694 315.318 507.164C315.288 507.633 315.244 508.045 315.185 508.397H297.477V504.785H313.115L310.78 505.49C310.78 503.493 310.281 501.966 309.283 500.908C308.284 499.822 306.919 499.279 305.186 499.279C303.923 499.279 302.822 499.572 301.882 500.16C300.942 500.747 300.223 501.628 299.724 502.803C299.224 503.948 298.975 505.358 298.975 507.031C298.975 508.676 299.239 510.071 299.768 511.216C300.296 512.362 301.045 513.228 302.014 513.815C302.983 514.403 304.129 514.696 305.45 514.696C306.919 514.696 308.108 514.417 309.018 513.859C309.929 513.301 310.648 512.523 311.177 511.525L314.921 513.287C314.392 514.344 313.673 515.269 312.763 516.062C311.882 516.825 310.824 517.413 309.591 517.824C308.358 518.235 307.007 518.441 305.538 518.441ZM335.161 495.975H340.095L331.329 518H326.175L317.365 495.975H322.519L328.774 513.903L335.161 495.975ZM353.675 518.441C351.473 518.441 349.535 517.985 347.861 517.075C346.187 516.165 344.88 514.858 343.94 513.154C343.03 511.422 342.575 509.366 342.575 506.987C342.575 504.609 343.03 502.568 343.94 500.864C344.88 499.132 346.172 497.81 347.817 496.9C349.461 495.99 351.326 495.534 353.411 495.534C355.555 495.534 357.376 495.975 358.873 496.856C360.371 497.737 361.516 498.941 362.309 500.468C363.102 501.995 363.499 503.728 363.499 505.666C363.499 506.195 363.484 506.694 363.455 507.164C363.425 507.633 363.381 508.045 363.322 508.397H345.614V504.785H361.252L358.917 505.49C358.917 503.493 358.418 501.966 357.42 500.908C356.421 499.822 355.056 499.279 353.323 499.279C352.06 499.279 350.959 499.572 350.019 500.16C349.08 500.747 348.36 501.628 347.861 502.803C347.362 503.948 347.112 505.358 347.112 507.031C347.112 508.676 347.376 510.071 347.905 511.216C348.433 512.362 349.182 513.228 350.151 513.815C351.121 514.403 352.266 514.696 353.587 514.696C355.056 514.696 356.245 514.417 357.155 513.859C358.066 513.301 358.785 512.523 359.314 511.525L363.058 513.287C362.53 514.344 361.81 515.269 360.9 516.062C360.019 516.825 358.961 517.413 357.728 517.824C356.495 518.235 355.144 518.441 353.675 518.441ZM374.032 486.063V511.833C374.032 512.92 374.223 513.668 374.605 514.08C374.987 514.491 375.618 514.696 376.499 514.696C377.028 514.696 377.468 514.667 377.821 514.608C378.202 514.52 378.672 514.373 379.23 514.168L378.702 517.692C378.202 517.927 377.63 518.103 376.984 518.22C376.338 518.367 375.691 518.441 375.045 518.441C373.078 518.441 371.624 517.941 370.684 516.943C369.774 515.915 369.319 514.344 369.319 512.229V486.063H374.032ZM392.733 495.534C394.876 495.534 396.771 495.99 398.415 496.9C400.06 497.81 401.337 499.132 402.247 500.864C403.187 502.568 403.657 504.609 403.657 506.987C403.657 509.366 403.187 511.422 402.247 513.154C401.337 514.858 400.06 516.165 398.415 517.075C396.771 517.985 394.876 518.441 392.733 518.441C390.589 518.441 388.695 517.985 387.05 517.075C385.406 516.165 384.113 514.858 383.174 513.154C382.234 511.422 381.764 509.366 381.764 506.987C381.764 504.609 382.234 502.568 383.174 500.864C384.113 499.132 385.406 497.81 387.05 496.9C388.695 495.99 390.589 495.534 392.733 495.534ZM392.733 499.235C391.411 499.235 390.28 499.543 389.341 500.16C388.43 500.747 387.726 501.613 387.226 502.759C386.727 503.904 386.477 505.313 386.477 506.987C386.477 508.632 386.727 510.042 387.226 511.216C387.726 512.362 388.43 513.243 389.341 513.859C390.28 514.447 391.411 514.74 392.733 514.74C394.054 514.74 395.17 514.447 396.08 513.859C396.991 513.243 397.696 512.362 398.195 511.216C398.694 510.042 398.944 508.632 398.944 506.987C398.944 505.313 398.694 503.904 398.195 502.759C397.696 501.613 396.991 500.747 396.08 500.16C395.17 499.543 394.054 499.235 392.733 499.235ZM409.587 527.251V495.975H413.771L414.124 502.142L413.507 501.393C413.86 500.248 414.403 499.235 415.137 498.354C415.871 497.473 416.782 496.782 417.868 496.283C418.984 495.784 420.203 495.534 421.524 495.534C423.316 495.534 424.946 495.99 426.414 496.9C427.882 497.81 429.042 499.117 429.894 500.82C430.746 502.494 431.171 504.535 431.171 506.943C431.171 509.351 430.731 511.422 429.85 513.154C428.998 514.858 427.824 516.165 426.326 517.075C424.857 517.985 423.213 518.441 421.392 518.441C419.513 518.441 417.912 517.956 416.591 516.987C415.269 515.988 414.329 514.726 413.771 513.199L414.3 512.45V527.251H409.587ZM420.379 514.608C422.288 514.608 423.771 513.933 424.828 512.582C425.915 511.231 426.458 509.366 426.458 506.987C426.458 504.609 425.929 502.744 424.872 501.393C423.815 500.013 422.347 499.323 420.467 499.323C419.234 499.323 418.147 499.646 417.207 500.292C416.297 500.908 415.578 501.789 415.049 502.935C414.55 504.051 414.3 505.402 414.3 506.987C414.3 508.544 414.55 509.895 415.049 511.04C415.548 512.185 416.253 513.066 417.163 513.683C418.074 514.3 419.146 514.608 420.379 514.608ZM437.204 518V495.975H441.389L441.609 499.675C442.373 498.265 443.386 497.223 444.649 496.547C445.941 495.872 447.306 495.534 448.745 495.534C450.331 495.534 451.785 495.901 453.106 496.636C454.457 497.34 455.47 498.412 456.146 499.851C456.616 498.882 457.262 498.075 458.084 497.428C458.906 496.782 459.817 496.313 460.815 496.019C461.814 495.696 462.797 495.534 463.767 495.534C465.176 495.534 466.498 495.828 467.731 496.415C468.965 497.003 469.963 497.898 470.727 499.102C471.49 500.306 471.872 501.848 471.872 503.728V518H467.158V504.477C467.158 502.685 466.733 501.393 465.881 500.6C465.029 499.807 463.943 499.411 462.621 499.411C461.593 499.411 460.639 499.66 459.758 500.16C458.906 500.659 458.216 501.408 457.688 502.406C457.159 503.375 456.895 504.579 456.895 506.018V518H452.181V504.477C452.181 502.685 451.755 501.393 450.904 500.6C450.052 499.807 448.966 499.411 447.644 499.411C446.763 499.411 445.882 499.646 445.001 500.116C444.12 500.585 443.386 501.32 442.799 502.318C442.211 503.317 441.918 504.638 441.918 506.283V518H437.204ZM488.709 518.441C486.506 518.441 484.568 517.985 482.894 517.075C481.22 516.165 479.913 514.858 478.974 513.154C478.063 511.422 477.608 509.366 477.608 506.987C477.608 504.609 478.063 502.568 478.974 500.864C479.913 499.132 481.205 497.81 482.85 496.9C484.495 495.99 486.359 495.534 488.444 495.534C490.588 495.534 492.409 495.975 493.907 496.856C495.404 497.737 496.55 498.941 497.343 500.468C498.135 501.995 498.532 503.728 498.532 505.666C498.532 506.195 498.517 506.694 498.488 507.164C498.459 507.633 498.414 508.045 498.356 508.397H480.647V504.785H496.285L493.951 505.49C493.951 503.493 493.451 501.966 492.453 500.908C491.454 499.822 490.089 499.279 488.356 499.279C487.094 499.279 485.992 499.572 485.053 500.16C484.113 500.747 483.393 501.628 482.894 502.803C482.395 503.948 482.145 505.358 482.145 507.031C482.145 508.676 482.409 510.071 482.938 511.216C483.467 512.362 484.216 513.228 485.185 513.815C486.154 514.403 487.299 514.696 488.621 514.696C490.089 514.696 491.278 514.417 492.189 513.859C493.099 513.301 493.819 512.523 494.347 511.525L498.091 513.287C497.563 514.344 496.843 515.269 495.933 516.062C495.052 516.825 493.995 517.413 492.761 517.824C491.528 518.235 490.177 518.441 488.709 518.441ZM504.484 518V495.975H508.669L508.977 501.701L508.361 501.085C508.772 499.822 509.359 498.779 510.123 497.957C510.916 497.105 511.841 496.489 512.898 496.107C513.984 495.725 515.13 495.534 516.334 495.534C517.89 495.534 519.285 495.843 520.519 496.459C521.781 497.047 522.78 497.942 523.514 499.146C524.248 500.35 524.615 501.878 524.615 503.728V518H519.902V505.181C519.902 503.008 519.447 501.51 518.536 500.688C517.655 499.837 516.539 499.411 515.188 499.411C514.219 499.411 513.28 499.646 512.369 500.116C511.459 500.556 510.695 501.276 510.079 502.274C509.491 503.272 509.198 504.609 509.198 506.283V518H504.484ZM537.931 489.499V511.392C537.931 512.479 538.21 513.272 538.768 513.771C539.355 514.27 540.133 514.52 541.102 514.52C541.895 514.52 542.585 514.403 543.173 514.168C543.76 513.903 544.303 513.551 544.803 513.11L545.86 516.546C545.184 517.134 544.347 517.604 543.349 517.956C542.38 518.279 541.293 518.441 540.089 518.441C538.827 518.441 537.667 518.235 536.609 517.824C535.552 517.413 534.73 516.752 534.142 515.842C533.555 514.902 533.247 513.683 533.217 512.185V490.821L537.931 489.499ZM545.507 495.975V499.675H528.989V495.975H545.507Z" fill="white" /> */}
                <TextAnimate print={false} at={a+6*delay} fromTop={true} id="Development_2" transform="translate(260 255)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="44.0504" font-weight="500" letter-spacing="0em"><tspan x="143.5" y="41.1313" textAnchor="middle">{`${locale==='en'?'Development':'Développement'}`}</tspan></TextAnimate>

                <g id="numbers1">
                  <TextAnimate print={false} at={a} fromTop={true} id="1_4" transform="translate(263 203)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="34.2614" font-weight="500" letter-spacing="0em"><tspan x="0.107573" y="31.7688">1</tspan></TextAnimate>
                  <TextAnimate print={false} at={a+1*delay} fromTop={true} id="0_3" transform="translate(327 203)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="34.2614" font-weight="500" letter-spacing="0em"><tspan x="0.243129" y="31.7688">0</tspan></TextAnimate>
                  <TextAnimate print={false} at={a+2*delay} fromTop={true} id="0_4" transform="translate(392 203)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="34.2614" font-weight="500" letter-spacing="0em"><tspan x="0.243129" y="31.7688">0</tspan></TextAnimate>
                  <TextAnimate print={false} at={a+3*delay} fromTop={true} id="1_5" transform="translate(464 203)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="34.2614" font-weight="500" letter-spacing="0em"><tspan x="0.107573" y="31.7688">1</tspan></TextAnimate>
                  <TextAnimate print={false} at={a+4*delay} fromTop={true} id="1_6" transform="translate(529 203)" fill="black" style="white-space: pre" font-family="Work Sans" font-size="34.2614" font-weight="500" letter-spacing="0em"><tspan x="0.107573" y="31.7688">1</tspan></TextAnimate>

                </g>
              </g>
              <Path position={0} inverse={false} double={1} handleLength={(l,i)=>handleLength(0,l,i)}  id="startA" d="M423 2C423 2 423 28 423 45.5C423 63 403 64.5 403 97.5" stroke="black" stroke-width="4" stroke-linecap="round"/>
              <Path position={0} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="startB" d="M383.5 2C383.5 2 383.5 24 383.5 45C383.501 66 403 61 403 97.5" stroke="black" stroke-width="4" stroke-linecap="round"/>
              <Path position={1} inverse={false} double={1} handleLength={(l,i)=>handleLength(0.1,l,i)} id="tails" d="M403 97V193M403 97C403 183 336.5 160.5 336.5 193M403 97C403 182.5 270 150 270 193M403 97C403 183 470 161 470 193M403 97C403 183 536.5 151.5 536.5 193" stroke="black" stroke-width="4" stroke-linecap="round"/>

            </g>
            
          </g>
        </svg>


        {/* <h2 className='z-20 p-2 w-full text-sm font-light text-center outline-none -outline-offset-2 relative flex text-white font-sans ' >
          {`When we first meet we define the goals and resources of your project as well as the available time until completion.`}
        </h2> */}
        {/* <h2 className='z-20 p-2 bg-white/10 rounded-2xl backdrop-blur-sm outline-none -outline-offset-2 outline-white/20 relative flex text-sm font-light w-[40vw] text-center text-white font-sans ' >{`We take note of your\nvalues, existing branding\nand style preferences to\ngenerate ideas together`} </h2> */}
        {/* <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[70%] left-0' >{`I then transform the\nfinal design into the\nactual digital produc`}t</h2>
        <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[80%] left-0' >{`When the product is ready\nyou finally receive it.\nYes, you own all the code`}.</h2>
        <h2 className='z-20 p-2 relative flex text-sm font-light w-[30vw] text-center text-white font-sans top-[95%] left-0' >{`An apple a day keeps the doctor away.\nA maintenance plan is developed to\nanswer the needs of your product`}.</h2> */}


      </div>
    </SVGWrapper>
  )
}