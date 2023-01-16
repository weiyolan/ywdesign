import React, { useRef, useState, useEffect } from "react"
import { useAppContext } from '../components/Context'
import { useSVGContext } from "./ContextSVG"

// function getOffset(lengthArray, i) {
//   let included = lengthArray.map((l, index) => index < i ? l : 0)
//   let offset = included.reduce((prev, curr) => prev + curr)
//   return offset
// }

function getPathProps(props) {
  let pathProps = { ...props }
  delete pathProps.handleLength
  delete pathProps.print
  delete pathProps.lineSpeed
  delete pathProps.inverse
  delete pathProps.initialDash
  delete pathProps.animateFill
  delete pathProps.fillColor
  delete pathProps.strokeColor
  delete pathProps.home
  delete pathProps.scrolled
  delete pathProps.myGradient
  delete pathProps['stroke-linecap']
  delete pathProps['stroke-width']
  delete pathProps.initialDash
  pathProps.strokeWidth = '4'
  pathProps.strokeLinecap="round"
  pathProps.stroke="transparent"
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
    let newOffset = Math.min( Math.max(biasedScrolled*mySpeed - prevRatio[props.position], 0)  / myRatio[props.position] , 1) * (props.inverse?1:-1) || 0 
    childProps.strokeDashoffset = (pathLength + (dashLineLength>0?0:0)) + (pathLength + (dashLineLength>0?0:0))*newOffset
    
    childProps.stroke = props.myGradient?props.myGradient:newOffset!=0?'white':'transparent';
    
    childProps.fill = props.animateFill?Math.abs(newOffset)===1?'white':'transparent':'transparent';

    if (props.print) {
      // console.log(scrollMin, scrollMax, biasedScrolled)
      // console.log('dashLineLength', dashLineLength)
      console.log(newOffset)
    };
    setNewProps(childProps)

  },[pathLength, dashArray, pathRef, props.inverse, scrollMin, scrollMax, mySpeed, dashLineLength , props.animateFill, prevRatio, myRatio, scrolled, props.initialDash])

  let style={transition:'all 0.5s ease'};
  // let style={transition: 'fill 0.5s ease'}

  switch (props.type) {
    case 'rect' :
      return <rect ref={pathRef} style={style} {...newProps} />
    case 'circle' :
      return <circle ref={pathRef} style={style} {...newProps} />
    default :
      return <path ref={pathRef} style={style} {...newProps} />
    }

}

export function PathFillText(props) {
  let {myRatio, prevRatio, scrollMin, scrollMax, animationSpeed} = useSVGContext();
 
  let pathRef = useRef(null)
  let [pathLength, setPathLength] = useState(0)
  let [mySpeed, setMySpeed] = useState(1)
  let [dashArray, setDashArray] = useState('')
  let [dashLineLength, setDashLineLength] = useState(0)
  let [newProps, setNewProps] = useState(getPathProps(props))

  let fakeScrolled = props.scrolled;
  let realScrolled = useAppContext().scrolled;
  let scrolled=fakeScrolled?fakeScrolled:realScrolled

  useEffect(()=>{
    scrolled=(fakeScrolled>0)?fakeScrolled:realScrolled
    // console.log(scrolled)
    // console.log(props.scrolled)
  },[fakeScrolled, realScrolled])


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
    let newOffset = Math.min( Math.max(biasedScrolled*mySpeed - prevRatio[props.position], 0)  / myRatio[props.position] , 1) * (props.inverse?1:-1) || 0 
    childProps.strokeDashoffset = (pathLength + (dashLineLength>0?0:0)) + (pathLength + (dashLineLength>0?0:0))*newOffset
    
    childProps.stroke = props.myGradient?props.myGradient:newOffset!=0?props.strokeColor?props.strokeColor:'white':'transparent';
    childProps.fill = props.animateFill?Math.abs(newOffset)===1?props.fillColor?props.fillColor:'white':'transparent':'transparent';

    childProps.strokeWidth = '3'


    // console.log(childProps.stroke)

    if (props.print) {
      // console.log(scrollMin, scrollMax, biasedScrolled)
      // console.log('dashLineLength', dashLineLength)
      console.log('newoffset:')
      console.log(newOffset)
    };
    setNewProps(childProps)

  },[pathLength, dashArray, pathRef, props.inverse, scrollMin, scrollMax, mySpeed, dashLineLength, props.strokeColor , props.animateFill, prevRatio, myRatio, scrolled, props.initialDash])

  let style={transition: scrolled>0?props.home?'all 0.5s ease':'all 4s ease':'all 0.1s'};
  // let style={transition: 'fill 0.5s ease'}

  switch (props.type) {
    case 'rect' :
      return <rect ref={pathRef} style={style} {...newProps} />
    case 'circle' :
      return <circle ref={pathRef} style={style} {...newProps} />
    default :
      return <path ref={pathRef} style={style} {...newProps} />
    }

}

export function AnimateIn({children,at}) {
  let {scrolled} = useAppContext();

  return (
    <div className='z-20 px-4 my-4 w-full text-sm font-extralight text-center outline-none -outline-offset-2 relative flex text-white font-sans ' 
    style={{opacity:(scrolled>at?1:0),transform:scrolled>at?'translateY(0)':'translateY(0)', transition:'all 0.4s ease'}}>
      {children}
    </div>
  )
}

export function TextAnimate(props) {
let {scrolled} = useAppContext();

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
    delete newProps.at
    delete newProps.print
    delete newProps.fromTop
    delete newProps.transform
    // newProps.fill = '#171B4D'
    newProps.fill='white'
    return newProps
  }

  // translate(185 181)

  function handleTransform (Y) {
  let [x,y] = [undefined, undefined] 

    if (props.transform) {      
      let first = props.transform.split(' ');
      if (first.length===1) {
        x = +first[0].split('(')[1].split(')')[0];
        y = 0;
      } else { 
        x = +first[0].split('(')[1];
        y = +first[1].split(')')[0];
      }
    } else {x,y=[0,0]}
    if (props.print) {
      console.log(props.transform.split(' '))
      console.log(Y)
      console.log(x)
      console.log(`translate(${x?x:0}px,${(y?y:0) + Y}px)`)
    }
    return `translate(${x}px, ${y + Y}px)`
  }

  return (
    <text {...handleTextProps(props)}
    style={{
      opacity:(scrolled>props.at?1:0),
      transform: scrolled>props.at?handleTransform(0):handleTransform(props.fromTop?-25:0), 
      transition:'all 0.4s ease', 
      whiteSpace:'pre'
    }}>
      {props.children}
    </text>
  )

}

// export function AnimateSVGText({children,at, fromTop}) {
  //   let {scrolled} = useAppContext();
  
  //   return (
  //     <g className='' 
  //     style={{opacity:(scrolled>at?1:0),transform:scrolled>at?'translateY(0)':`translateY(${fromTop?'-20px':'0'})`, transition:'all 0.4s ease'}}>
  //       {children}
  //     </g>
  //   )
  
  // }