import React,{useState,useEffect} from "react";
import NavDesk from "./NavDesk";
import NavMobile from "./NavMobile";
import useWindowSize from "./useWindowSize";
import YW from "../public/images/logo_yw_b.svg";
import Link from "next/link";

export default function Navbar ({from}) {
    let [lastTop, setLastTop] = useState(0)
    let [show,setShow] = useState(true)
    let {width} = useWindowSize()

    function handleScroll () {
        if(window.scrollY > lastTop){ //if it will be greater than the previous
          setShow(false);//set the value to the negetive of height of navbar 
        }
        else{
          setShow(true);
        }
        setLastTop(window.scrollY); //New Position Stored
      }
  
    
      useEffect(()=>{
        window.addEventListener('scroll', handleScroll, ) //{passive:true}
        return () => {window.removeEventListener('scroll', handleScroll)}
      },[lastTop])


    return (
        <div>
        {width<750? 
            <div className={`z-[50]`}>  
              <div className='absolute inline-flex rounded-full w-fit p-2 top-[16px] z-[51] left-[16px]'>
              <Link  href={`/`} onClick={()=>selectButton('Home')}>
              {/* <YW
                width='40'
                className='m-2'
                alt="ywdesign svg-logo"
                onClick={()=>selectButton('Home')}/> */}
                <YW className='w-10 h-10' lt="ywdesign logo" />
              </Link> 
            </div>
          
          <NavMobile from = {from} />
          </div>
          :<div className={`fixed z-[50] w-full top-0 duration-500 ${show?'':'-translate-y-20'}`}>
          :<NavDesk from = {from} />
          </div>}
        </div>
)  

}