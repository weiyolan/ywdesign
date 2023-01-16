import React,{useState,useEffect} from "react"
import { useAppContext } from "./Context"
import { Path, PathFillText, AnimateIn, TextAnimate } from './pathUtils'
import { SVGWrapper } from "./ContextSVG"

export default function RoadmapATitle({scrollMin,scrollMax}) {
    let [allLengths, setAllLengths] = useState([])
    let [allOffsetLengths, setAllOffsetLengths] = useState([])
    let [allRatios, setAllRatios] = useState([0])
    let [allPrevRatios, setAllPrevRatios] = useState([0])
    let { scrolled } = useAppContext();
    let [fakeScroll,setFakeScroll] = useState(0)
    let [fillStyle,setFillStyle] = useState(false)
  
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

    useEffect(()=>{
      let timer = setTimeout(()=>{setFakeScroll(1)},500)
      let timer2 = setTimeout(()=>{setFillStyle(true)},2000)
        return ()=>{clearTimeout(timer);clearTimeout(timer2)}
    },[])

    return (
      <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax}>
      <div className='relative w-full h-fit flex flex-col '> 
        
        <svg alt='Roadmap title' style={{transform: `translate(-50%, ${!fakeScroll?20:0}px)`, transition:'all 4s ease-out'}}  className='relative w-full px-4 left-1/2' viewBox="0 0 807 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 25">
          {/* <TextAnimate at={-1} fromTop={false} id="RoadmapTitle" style="white-space: pre" font-family="Work Sans" font-size="67.7698" font-weight="600" letter-spacing="0em"><tspan x="248.246" y="62.7789">Roadmap</tspan></TextAnimate> */}
          </g>

          <PathFillText scrolled={fakeScroll} position={6} animateFill={fillStyle} print={false} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="p" d="M640.814 142.817V46.6597H657.473L658.692 68.1935L656.389 65.7557C657.202 61.7831 658.692 58.2618 660.858 55.192C663.116 52.1222 665.96 49.7296 669.391 48.0141C672.822 46.2083 676.659 45.3054 680.902 45.3054C686.41 45.3054 691.331 46.7049 695.665 49.5038C699.999 52.3028 703.384 56.3206 705.822 61.5573C708.35 66.7038 709.614 72.9788 709.614 80.3825C709.614 87.7861 708.35 94.1514 705.822 99.4785C703.294 104.715 699.818 108.733 695.394 111.532C691.06 114.331 686.094 115.73 680.496 115.73C674.537 115.73 669.571 114.06 665.599 110.719C661.716 107.379 659.053 103.18 657.608 98.1241L659.369 95.28V142.817H640.814ZM675.079 101.51C680.045 101.51 683.927 99.7493 686.726 96.2281C689.615 92.6165 691.06 87.3798 691.06 80.5179C691.06 73.656 689.66 68.4644 686.862 64.9431C684.153 61.3316 680.316 59.5258 675.35 59.5258C672.19 59.5258 669.391 60.3836 666.953 62.0991C664.605 63.7243 662.755 66.1169 661.4 69.277C660.046 72.3468 659.369 76.0938 659.369 80.5179C659.369 84.8517 660.001 88.5987 661.265 91.7588C662.529 94.9189 664.335 97.3567 666.682 99.0722C669.12 100.697 671.919 101.51 675.079 101.51Z"/>
          <PathFillText scrolled={fakeScroll} position={5} animateFill={fillStyle} print={false} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="a" d="M601.645 71.173C601.645 67.2906 600.516 64.266 598.259 62.0991C596.092 59.9321 593.203 58.8487 589.591 58.8487C586.25 58.8487 583.316 59.7064 580.788 61.4219C578.26 63.1374 576.409 65.9815 575.235 69.9542L559.39 65.0786C560.925 59.1195 564.265 54.3343 569.412 50.7227C574.648 47.1112 581.646 45.3054 590.404 45.3054C596.363 45.3054 601.554 46.2534 605.978 48.1495C610.403 49.9553 613.834 52.7091 616.271 56.4109C618.799 60.1127 620.063 64.7626 620.063 70.3604V97.8533C620.063 101.284 621.689 103 624.939 103C626.474 103 627.919 102.774 629.273 102.323L628.189 113.834C625.842 115.008 622.908 115.595 619.386 115.595C616.226 115.595 613.382 115.053 610.854 113.97C608.326 112.886 606.34 111.261 604.895 109.094C603.45 106.837 602.728 104.038 602.728 100.697V100.156L605.978 99.6139C605.437 103.045 603.947 105.979 601.509 108.417C599.071 110.764 596.092 112.57 592.571 113.834C589.14 115.098 585.573 115.73 581.871 115.73C577.267 115.73 573.294 115.053 569.953 113.699C566.613 112.254 564.039 110.178 562.234 107.469C560.428 104.76 559.525 101.42 559.525 97.447C559.525 92.3908 561.15 88.2827 564.401 85.1226C567.651 81.8722 572.301 79.6602 578.35 78.4864L603.812 73.34L603.676 84.8517L587.424 88.1021C584.354 88.7341 582.007 89.5919 580.382 90.6753C578.847 91.6685 578.079 93.3388 578.079 95.6863C578.079 97.9435 578.892 99.659 580.517 100.833C582.233 102.007 584.264 102.593 586.612 102.593C588.508 102.593 590.359 102.368 592.164 101.916C593.97 101.465 595.595 100.742 597.04 99.7493C598.485 98.7562 599.613 97.4018 600.426 95.6863C601.238 93.9709 601.645 91.8942 601.645 89.4564V71.173Z"/>
          <PathFillText scrolled={fakeScroll} position={4} animateFill={fillStyle} print={false} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="m" d="M435.021 114.376V46.6597H451.679L452.356 58.8487C454.613 54.3343 457.683 50.9484 461.565 48.6912C465.538 46.434 469.917 45.3054 474.702 45.3054C479.578 45.3054 483.957 46.434 487.839 48.6912C491.812 50.9484 494.791 54.2891 496.778 58.7132C498.222 55.7337 500.164 53.2508 502.601 51.2645C505.039 49.2781 507.748 47.7884 510.727 46.7952C513.707 45.802 516.731 45.3054 519.801 45.3054C524.225 45.3054 528.243 46.2083 531.855 48.0141C535.557 49.8198 538.491 52.5285 540.658 56.14C542.825 59.7516 543.908 64.3563 543.908 69.9542V114.376H525.354V73.6108C525.354 68.645 524.271 65.1237 522.104 63.0471C519.937 60.9705 517.138 59.9321 513.707 59.9321C510.998 59.9321 508.47 60.6093 506.123 61.9636C503.865 63.318 502.06 65.3494 500.705 68.0581C499.441 70.6765 498.809 73.972 498.809 77.9447V114.376H480.255V73.6108C480.255 68.645 479.126 65.1237 476.869 63.0471C474.702 60.9705 471.903 59.9321 468.472 59.9321C466.125 59.9321 463.777 60.5642 461.43 61.8282C459.173 63.0922 457.277 65.0786 455.742 67.7872C454.297 70.4959 453.575 74.0623 453.575 78.4864V114.376H435.021Z"/>
          <PathFillText scrolled={fakeScroll} position={3} animateFill={fillStyle} print={false} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="d" d="M375.707 115.73C370.109 115.73 365.098 114.331 360.674 111.532C356.34 108.733 352.909 104.715 350.381 99.4784C347.944 94.2417 346.725 87.9667 346.725 80.6533C346.725 73.1594 348.034 66.794 350.652 61.5573C353.271 56.2303 356.792 52.2125 361.216 49.5038C365.73 46.7049 370.786 45.3054 376.384 45.3054C382.343 45.3054 387.264 47.0209 391.147 50.4518C395.029 53.8828 397.557 58.3069 398.731 63.7242L396.97 65.8912V17H415.524V114.376H398.866L397.647 93.7903L399.95 94.8737C399.318 99.1173 397.873 102.819 395.616 105.979C393.359 109.049 390.514 111.442 387.084 113.157C383.653 114.873 379.86 115.73 375.707 115.73ZM381.124 101.51C384.375 101.51 387.174 100.697 389.521 99.0721C391.869 97.3567 393.675 94.8737 394.939 91.6234C396.293 88.373 396.97 84.4906 396.97 79.9762C396.97 75.6423 396.338 71.9856 395.074 69.0061C393.81 65.9363 392.004 63.5888 389.657 61.9636C387.309 60.3384 384.555 59.5258 381.395 59.5258C376.339 59.5258 372.367 61.3316 369.477 64.9431C366.678 68.4644 365.279 73.656 365.279 80.5179C365.279 87.3798 366.678 92.6165 369.477 96.2281C372.276 99.7493 376.159 101.51 381.124 101.51Z"/>
          <PathFillText scrolled={fakeScroll} position={2} animateFill={fillStyle} print={false} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="a1" d="M311.206 71.173C311.206 67.2906 310.078 64.266 307.82 62.0991C305.653 59.9321 302.764 58.8487 299.153 58.8487C295.812 58.8487 292.878 59.7064 290.35 61.4219C287.821 63.1374 285.971 65.9815 284.797 69.9542L268.951 65.0786C270.486 59.1195 273.827 54.3343 278.973 50.7227C284.21 47.1112 291.207 45.3054 299.965 45.3054C305.924 45.3054 311.116 46.2534 315.54 48.1495C319.964 49.9553 323.395 52.7091 325.833 56.4109C328.361 60.1127 329.625 64.7626 329.625 70.3604V97.8533C329.625 101.284 331.25 103 334.501 103C336.035 103 337.48 102.774 338.834 102.323L337.751 113.834C335.403 115.008 332.469 115.595 328.948 115.595C325.788 115.595 322.944 115.053 320.416 113.97C317.887 112.886 315.901 111.261 314.457 109.094C313.012 106.837 312.29 104.038 312.29 100.697V100.156L315.54 99.6139C314.998 103.045 313.508 105.979 311.071 108.417C308.633 110.764 305.653 112.57 302.132 113.834C298.701 115.098 295.135 115.73 291.433 115.73C286.828 115.73 282.856 115.053 279.515 113.699C276.174 112.254 273.601 110.178 271.795 107.469C269.989 104.76 269.087 101.42 269.087 97.447C269.087 92.3908 270.712 88.2827 273.962 85.1226C277.213 81.8722 281.862 79.6602 287.912 78.4864L313.373 73.34L313.238 84.8517L296.986 88.1021C293.916 88.7341 291.568 89.5919 289.943 90.6753C288.408 91.6685 287.641 93.3388 287.641 95.6863C287.641 97.9435 288.453 99.659 290.079 100.833C291.794 102.007 293.826 102.593 296.173 102.593C298.069 102.593 299.92 102.368 301.726 101.916C303.532 101.465 305.157 100.742 306.601 99.7493C308.046 98.7562 309.175 97.4018 309.987 95.6863C310.8 93.9709 311.206 91.8942 311.206 89.4564V71.173Z"/>
          <PathFillText scrolled={fakeScroll} position={1} animateFill={fillStyle} print={false} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="o" d="M222.808 45.3054C229.67 45.3054 235.675 46.7049 240.821 49.5038C246.058 52.3028 250.121 56.3206 253.01 61.5573C255.989 66.7941 257.479 73.1142 257.479 80.5179C257.479 87.8313 255.989 94.1514 253.01 99.4785C250.121 104.715 246.058 108.733 240.821 111.532C235.675 114.331 229.67 115.73 222.808 115.73C216.037 115.73 210.033 114.331 204.796 111.532C199.559 108.733 195.451 104.715 192.472 99.4785C189.582 94.1514 188.138 87.8313 188.138 80.5179C188.138 73.1142 189.582 66.7941 192.472 61.5573C195.451 56.3206 199.559 52.3028 204.796 49.5038C210.033 46.7049 216.037 45.3054 222.808 45.3054ZM222.808 59.1195C219.377 59.1195 216.443 59.9321 214.005 61.5573C211.658 63.0922 209.852 65.4397 208.588 68.5998C207.324 71.7599 206.692 75.7326 206.692 80.5179C206.692 85.3032 207.324 89.2759 208.588 92.436C209.852 95.5961 211.658 97.9887 214.005 99.6139C216.443 101.149 219.377 101.916 222.808 101.916C226.149 101.916 228.993 101.149 231.341 99.6139C233.778 97.9887 235.629 95.5961 236.893 92.436C238.157 89.2759 238.789 85.3032 238.789 80.5179C238.789 75.7326 238.157 71.7599 236.893 68.5998C235.629 65.4397 233.778 63.0922 231.341 61.5573C228.993 59.9321 226.149 59.1195 222.808 59.1195Z"/>
          <PathFillText scrolled={fakeScroll} position={0} animateFill={fillStyle} print={false} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="r" d="M142.508 24.9905C152.62 24.9905 160.565 27.4283 166.344 32.3038C172.122 37.1794 175.011 43.7253 175.011 51.9416C175.011 60.6995 172.122 67.426 166.344 72.121C160.565 76.7257 152.665 79.0281 142.643 79.0281L140.747 80.1115H121.516V114.376H103.097V24.9905H142.508ZM140.341 65.8911C145.577 65.8911 149.46 64.8528 151.988 62.7762C154.606 60.6092 155.915 57.3137 155.915 52.8896C155.915 48.4655 154.606 45.2151 151.988 43.1384C149.46 40.9715 145.577 39.8881 140.341 39.8881H121.516V65.8911H140.341ZM151.311 69.8187L180.293 114.376H159.301L135.33 75.236L151.311 69.8187Z"/>

        </svg>

  
      </div>
      </SVGWrapper>
    )
  }