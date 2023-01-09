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
  let {width, breakPointSmall, noBlur} = useAppContext();

  let [lightbox, setLightbox] = useState(true);

  const lightboxClick = (event) => {
      if (lightbox && event.target === document.getElementById('background')) {
          setLightbox(false);
      };
  };

  return (
    <>
      <Head> 
        <title>ywdesign | Contact</title>
      </Head>

      <main onClick={lightboxClick}>
        <Navbar from='Contact'/>
        <Title breakPointSmall={breakPointSmall} type='contact'/>

        <Layout>
          
          <Map/>
          <FormMotion noBlur={noBlur} setLightbox={setLightbox}/>

          <Lightbox lightbox={lightbox} setLightbox={setLightbox}/>
          
        </Layout>
        <Footer scrolled={scrolled}/>

        

      </main>
    
    </>
)}