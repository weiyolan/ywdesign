import React, { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Lightbox from "../components/Lightbox";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Map from "../components/Map";
// import Form from '../components/FormOld'
import FormMotion from "../components/FormMotion";
import { useAppContext } from "../components/Context";
// import { useRouter } from 'next/router'

export default function Contact({ scrolled }) {
  let { noBlur, isOpen, toggleOpen, locale } = useAppContext();

  let [lightbox, setLightbox] = useState(false);

  const lightboxClick = (event) => {
    if (lightbox && event.target === document.getElementById("lightboxBackground")) {
      setLightbox(false);
    }
  };

  function handleNavLight(event) {
    if (isOpen && event.target === document.getElementById("navBackground")) {
      toggleOpen();
    }
  }

  return (
    <>
      <Head>
        <title>{`${locale === "en" ? "Contact Us For a Professional Website or e-Commerce in 2024" : "Contactez-Nous Pour un Site Web ou e-Commerce Pro en 2024"}`}</title>
        <meta
          name="description"
          content={`${
            locale === "en"
              ? "Get personal design and web development support for a professional website, e-commerce, logo or app with strong SEO performance, and be ready for 2024."
              : "Obtenez une support personnelle pour la conception et développement de votre site web ou e-commerce professionnel avec du référencement performant en 2024."
          }`}
        />
        {/* <link rel="canonical" href='https://ywdesign.co/contact' />       */}
      </Head>

      <main
        onClick={(event) => {
          lightboxClick(event);
          handleNavLight(event);
        }}>
        {/* <Navbar from = 'Home'/>
        
        <Title breakPointSmall={breakPointSmall} type='home'/>
         */}
        <Navbar from="Contact" />
        <Title type="contact" />

        <Layout>
          <Map />
          <FormMotion noBlur={noBlur} setLightbox={setLightbox} />

          <Lightbox lightbox={lightbox} setLightbox={setLightbox} />
        </Layout>
        <Footer scrolled={scrolled} />
      </main>
    </>
  );
}
