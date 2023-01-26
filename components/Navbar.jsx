import React,{useState,useEffect} from "react";
import NavDesk from "./NavDesk";
import NavMobile from "./NavMobile";
import Link from "next/link";
import { useAppContext } from "./Context";

export default function Navbar ({from}) {
  let [lastTop, setLastTop] = useState(0)
  let [show, setShow] = useState(true)
  let {width, noBlur, isOpen} = useAppContext()

  useEffect(()=>{
    function handleScroll () {
      if(window.scrollY > lastTop){ //if it will be greater than the previous
        setShow(false);//set the value to the negetive of height of navbar 
      }
      else{
        setShow(true);
      }
      setLastTop(window.scrollY); //New Position Stored
    }

    window.addEventListener('scroll', handleScroll, ) //{passive:true}
    return () => {window.removeEventListener('scroll', handleScroll)}
  },[lastTop])



  return (
      <div>
      {width>1023? 
        <div className={`fixed z-[50] w-full hidden min-[1023px]:block top-0 duration-500 ${show?'':'-translate-y-20'}`}>
          <NavDesk from = {from} />
        </div>
        :
        <div className={`block min-[1023px]:hidden`}>  
          {isOpen && <div id='navBackground' className='z-20 fixed w-screen h-screen'/>}
          <NavMobile noBlur={noBlur} from = {from} />
        </div>}
      </div>
)  

}