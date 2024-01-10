import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import Title from '../components/Title'
import Layout from '../components/Layout'
import Subtitle from '../components/Subtitle'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Specialities from '../components/Specialities'
import Features from '../components/Features'
import { useAppContext } from '../components/Context'
import Navbar from '../components/Navbar'
import RoadmapHome from '../components/RoadmapHome'
// const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
import Technologies from "../components/Technologies";

// import { GetStaticProps } from 'next/types'

export default function Index({ scrolled }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  let { noBlur, isOpen, toggleOpen, breakPointSmall } = useAppContext();

  // let [navLight, setNavLight] = useState(false);

  function handleNavLight(event) {
    if (isOpen && event.target === document.getElementById("navBackground")) {
      toggleOpen();
    }
  }

  // useEffect(()=>{
  //   console.log('navlight= ' + isOpen)
  // },[isOpen])

  return (
    <>
      <Head>
        <title>{`${locale === "en" ? "Development of Professional Websites and e-Commerces in 2024" : "Création de Sites Web Professionels et e-Commerces en 2024"}`}</title>
        <meta
          name="description"
          content={`${
            locale === "en"
              ? "Get personal design and web development support for your professional website, e-commerce, logo or app with strong SEO performance, and be ready for 2024."
              : "Obtenez une support personnelle pour la conception et développement de votre site web ou e-commerce professionnel avec du référencement performant en 2024."
          }`}
        />
        {/* <link rel="canonical" href='https://ywdesign.co' /> */}
      </Head>

      <main className="scroll-smooth" onClick={handleNavLight}>
        <Navbar from="Home" />

        <Title type="home" />

        <Layout>
          <Specialities noBlur={noBlur} />

          <RoadmapHome />

          <Technologies breakPointSmall={breakPointSmall} />
          <Features />

          <Contact first={true} />
        </Layout>

        <Footer scrolled={scrolled} />
      </main>
    </>
  );
}

// export async function getStaticProps({locale,locales}) {

// //  Return local values from sanity

//   return {
//       props: {


//       },
//     }
// }
