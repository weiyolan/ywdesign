import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import YW from '../public/images/logo_yw_b.svg'

// let borderDebug = 'border border-red-500';

export default function NavDesk({from}) {
    let [selectedB,setSelectedB] = useState(from);
    // let [show, setShow] = useState({transform:'translateY(0)'})
    // let [lastTop, setLastTop] = useState(0)

    function selectButton (selection) {
        setSelectedB(selection)
    }

    useEffect(()=>{
      setSelectedB(from)
    },[from])

  

    // function handleScroll () {
    //   if(window.scrollY > lastTop){ //if it will be greater than the previous
    //     setShow(false);//set the value to the negetive of height of navbar 
    //   }
    //   else{
    //     setShow(true);
    //   }
    //   setLastTop(window.scrollY); //New Position Stored
    // }

  
    // useEffect(()=>{
    //   window.addEventListener('scroll', handleScroll, ) //{passive:true}
    //   return () => {window.removeEventListener('scroll', handleScroll)}
    // },[lastTop])

    // useEffect(()=>{
    //   console.log(lastTop)
    // },[lastTop])


    return (
        <nav className={`flex fixed justify-center w-full h-16 rounded-b-3xl top-0 z-10 bg-white/5 backdrop-blur-sm`}>
            
            <div className='inline-flex absolute items-center h-16 left-0'>
              <Link  href={`/`} onClick={()=>selectButton('Home')}>
              {/* <YW
                width='40'
                className='m-2'
                alt="ywdesign svg-logo"
                onClick={()=>selectButton('Home')}/> */}
              <YW className='m-2 w-10 h-10' lt="ywdesign logo" />
              </Link> 
            </div>

            <div className='flex mx-auto'>
              <Button className='' to="" title="Home" text="Home" mode={selectedB==='Home'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="services" title="Services" text="Services" mode={selectedB==='Services'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="aboutme" title="About Me" text="About Me" mode={selectedB==='About Me'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="contact" title="Contact"  text="Contact" mode={selectedB==='Contact'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="roadmap" title="Roadmap"  text="Roadmap" mode={selectedB==='Roadmap'?'selected':'unselected'} handleClick={selectButton}/>
            </div>
            
            <div className='flex absolute  h-16 right-0 '>
              {/* <Button className=''  to="contact/#Form" title="Contact" text="Have a question?" handleClick={selectButton} /> */}
              {/* <Button className='' to="" title="EN"/> */}
              <Button className='' to="contact/#Form" title="Contact" text="Ask a quote" handleClick={selectButton} mode={'dark'}/>
            </div>
        </nav>
    )
}