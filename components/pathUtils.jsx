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
  delete pathProps.inverse
  delete pathProps.initialDash
  pathProps.stroke = 'white'
  pathProps.strokeWidth = '4'
  pathProps.strokeLinecap="round"
  return pathProps
}

export function Path(props) {
  let {myRatio, prevRatio, scrollMin, scrollMax} = useSVGContext();
 
  let pathRef = useRef(null)
  let [pathLength, setPathLength] = useState(0)
  let [dashArray, setDashArray] = useState('')
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
    }


  },[props.initialDash, pathLength])

  useEffect(()=>{
    let biasedScrolled = Math.min(Math.max(scrolled-scrollMin,0)/scrollMax,1)
    let childProps = getPathProps(props);
    childProps.strokeDasharray = dashArray.length>0?dashArray:(pathLength) + ' ' + (pathLength);
    childProps.strokeDashoffset = (pathLength) + (pathLength) * Math.min( Math.max(biasedScrolled - prevRatio[props.position], 0)  / myRatio[props.position] , 1) * (props.inverse?1:-1) || 0 
    setNewProps(childProps)

  },[pathLength, dashArray, pathRef, props.inverse, scrollMin, scrollMax, prevRatio, myRatio, scrolled, props.initialDash])


  switch (props.type) {
    case 'rect' :
      return <rect ref={pathRef} {...newProps} />
    case 'circle' :
      return <circle ref={pathRef} {...newProps} />
    default :
      return <path ref={pathRef} {...newProps} />
    }

}
