import React,{useState} from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Map from '../components/Map'
// import Form from '../components/FormOld'
import FormMotion from '../components/FormMotion'
import { useAppContext } from '../components/Context'




export default function Contact({scrolled}) {
  let {noBlur, isOpen,toggleOpen} = useAppContext();

  let [lightbox, setLightbox] = useState(false);

  const lightboxClick = (event) => {
      if (lightbox && event.target === document.getElementById('lightboxBackground')) {
          setLightbox(false);
      };
  };

  function handleNavLight (event) {
    if (isOpen && event.target === document.getElementById('navBackground')) {
      toggleOpen();
    };
};

  return (
    <>
      <Head> 
        <title>{`ywdesign | ${locale==='en'?'Contact':'Coordonnées'}`}</title>
      </Head>

      <main onClick={(event)=>{lightboxClick(event);handleNavLight(event)}}>

      {/* <Navbar from = 'Home'/>
        
        <Title breakPointSmall={breakPointSmall} type='home'/>
         */}
        <Navbar from='Contact'/>
        <Title  type='contact'/>

        <Layout>
          
          <Map/>
          <FormMotion noBlur={noBlur} setLightbox={setLightbox}/>

          <Lightbox lightbox={lightbox} setLightbox={setLightbox}/>
          
        </Layout>
        <Footer scrolled={scrolled}/>

        

      </main>
    
    </>
)}