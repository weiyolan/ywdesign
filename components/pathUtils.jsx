import React, { useRef, useState, useEffect } from "react"
import { useAppContext } from '../components/Context'
import { useSVGContext } from "./ContextSVG"

function getOffset(lengthArray, i) {
  let included = lengthArray.map((l, index) => index < i ? l : 0)
  let offset = included.reduce((prev, curr) => prev + curr)
  return offset
}

function getPathProps(props) {
  let pathProps = { ...props }
  delete pathProps.handleLength
  delete pathProps.print
  delete pathProps.lineSpeed
  delete pathProps.inverse
  delete pathProps.initialDash
  delete pathProps['stroke-linecap']
  delete pathProps['stroke-width']
  delete pathProps.initialDash
  pathProps.strokeWidth = '4'
  pathProps.strokeLinecap="round"
  return pathProps
}

export function Path(props) {
  let {myRatio, prevRatio, scrollMin, scrollMax, animationSpeed} = useSVGContext();
 
  let pathRef = useRef(null)
  let [pathLength, setPathLength] = useState(0)
  let [mySpeed, setMySpeed] = useState(1)
  let [dashArray, setDashArray] = useState('')
  let [dashLineLength, setDashLineLength] = useState(0)
  let [newProps, setNewProps] = useState(getPathProps(props))
  let { scrolled } = useAppContext()

  useEffect(() => {
    let path = pathRef.current;
    let length = path.getTotalLength()
    if (props.print) {console.log('length is:' + length); console.log('double is: ' + props.double); console.log('so pathlength is : ' + length/props.double)}
    setPathLength(length/(props.double?props.double:1));
  },[])

  useEffect(()=>{
    if (pathLength>0) {
      props.handleLength(pathLength, props.position)
    }
  },[pathLength])

  useEffect(() => {
    if (props.print) {
    // console.log('strokedashoffset')
    // console.log(scrolled - prevRatio[props.position], 0)
    // console.log(Math.max(scrolled - prevRatio[props.position], 0))
    // console.log(pathLength>0?pathLength:'calculating pathlength')
    }
  }, [pathLength, props.lengths, props.position, scrolled, prevRatio, myRatio])

  useEffect(()=>{
    if (props.initialDash) {
      let stringDash = props.initialDash.split(' ');
      let lineString = stringDash[0];
      let gapString = stringDash[1];
      let numDash = stringDash.map(i=>+i);
      let dashLength = numDash.reduce((acc,x)=>acc + x, 0);

      let repeat = Math.floor(pathLength/dashLength);
      // console.log(repeat)
      let newStringDash = Array(repeat).fill(props.initialDash)
      newStringDash.push(lineString)
      newStringDash.push(`${pathLength}`)
      newStringDash = newStringDash.join(' ')
      // console.log(newStringDash)
      setDashArray(newStringDash)
      setDashLineLength(+lineString)
    }
  },[props.initialDash, pathLength])

  useEffect(()=>{
    let speed = 1;
    if (animationSpeed) {speed = speed*animationSpeed}
    if (props.lineSpeed) {speed = speed*props.lineSpeed}
    setMySpeed(speed)
  },[animationSpeed, props.lineSpeed])

  useEffect(()=>{
    let biasedScrolled = scrollMin>=0&&scrollMax>scrollMin&&scrollMax>0?(Math.min(Math.max(scrolled-scrollMin,0)/(scrollMax-scrollMin),1)):scrolled;
    
    let childProps = getPathProps(props);
    childProps.strokeDasharray = dashArray.length>0?dashArray:(pathLength) + ' ' + (pathLength);
    let newOffset =  (pathLength + (dashLineLength>0?0:0)) * Math.min( Math.max(biasedScrolled*mySpeed - prevRatio[props.position], 0)  / myRatio[props.position] , 1) * (props.inverse?1:-1) || 0 
    childProps.strokeDashoffset = (pathLength + (dashLineLength>0?0:0)) + newOffset
    
    childProps.stroke = (dashArray.length>0)?(newOffset!=0?'white':'transparent'):'white';
    if (props.print) {
      // console.log(scrollMin, scrollMax, biasedScrolled)
      // console.log('dashLineLength', dashLineLength)
      console.log(newOffset)
    };
    setNewProps(childProps)

  },[pathLength, dashArray, pathRef, props.inverse, scrollMin, scrollMax, mySpeed, dashLineLength , prevRatio, myRatio, scrolled, props.initialDash])


  switch (props.type) {
    case 'rect' :
      return <rect ref={pathRef} {...newProps} />
    case 'circle' :
      return <circle ref={pathRef} {...newProps} />
    default :
      return <path ref={pathRef} {...newProps} />
    }

}

export function AnimateSVGText({children,at, fromTop}) {
  let {scrolled} = useAppContext();

  return (
    <g className='' 
    style={{opacity:(scrolled>at?1:0),transform:scrolled>at?'translateY(0)':`translateY(${fromTop?'-20px':'0'})`, transition:'all 0.4s ease'}}>
      {children}
    </g>
  )

}

export function AnimateText({children,at}) {
  let {scrolled} = useAppContext();

  return (
    <div className='' 
    style={{opacity:(scrolled>at?1:0),transform:scrolled>at?'translateY(0)':'translateY(0)', transition:'all 0.4s ease'}}>
      {children}
    </div>
  )

}

export function Text(props) {
let [myProps, setMyProps] = useState(handleTextProps(props));  
  
function handleTextProps (props) {
  let newProps = {...props}
  newProps.fontFamily = 'Work Sans'
  newProps.fontSize = newProps['font-size']
  newProps.letterSpacing = newProps['letter-spacing']
  newProps.fontWeight = newProps['font-weight']
  // delete newProps['xml:space']
  delete newProps['font-family']
  delete newProps['font-size']
  delete newProps['letter-spacing']
  delete newProps['font-weight']
  delete newProps.children
  newProps.style = {'white-space': 'pre'}
  newProps.fill = 'white'
  return newProps
}

// useEffect(()=>{
//   setMyProps(handleTextProps(props))
//   console.log(handleTextProps(props))
// },[props])


  return <text {...myProps}>
    {props.children}
    </text>
}
