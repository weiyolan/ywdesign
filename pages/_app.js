import '../styles/globals.css'
import Head from 'next/head'
import {Work_Sans} from '@next/font/google'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Background from '../components/Background'
import { useState,useEffect } from 'react';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-worksans',
})

export default function App({ Component, pageProps }) {

  let [scrolled, setScrolled] = useState(0)
  
  function handleScroll () {
    let ratio = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
    setScrolled(ratio)
    // console.log(ratio)
  }

  useEffect(()=>{
    let ratio = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
    setScrolled(ratio)

    window.addEventListener('scroll', handleScroll, {passive:true})

    return () => {window.removeEventListener('scroll',handleScroll)}
  },[])

  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={`${workSans.variable} font-sans relative scroll-smooth w-full overflow-hidden `}>
        {/* bg-gradient-to-br from-green to-blue */}
        <Background scrolled={scrolled}/>
        {/* <Navbar/  > */}
        {/* <Image className='absolute top-0 object-cover' src='/images/background2.svg' fill alt='background image'/> */}
        {/* <Background className='absolute -z-10 w-full' /> */}
        <Component {...pageProps} scrolled={scrolled}/>

      </div>
    
    </>
    ) 
}