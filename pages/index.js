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

// import { GetStaticProps } from 'next/types'



export default function Index({scrolled}) {

  const router = useRouter()
  const { locale, locales, defaultLocale } = router
  let {noBlur, isOpen, toggleOpen} = useAppContext();

  // let [navLight, setNavLight] = useState(false);

  function handleNavLight (event) {
      if (isOpen && event.target === document.getElementById('navBackground')) {
        toggleOpen();
      };
  };

  // useEffect(()=>{
  //   console.log('navlight= ' + isOpen)
  // },[isOpen])


  return (
    <>
      <Head>
        <title>{`ywdesign | ${locale==='en'?'Web Development':'Développement Web'}`}</title>
      </Head>
      
      <main className='scroll-smooth' onClick={handleNavLight}>
        <Navbar from = 'Home'/>
        
        <Title type='home'/>

        <Layout>
          
          <Specialities noBlur={noBlur}/>


          <RoadmapHome/>


          <Features/>

              
          <Contact first={true}/>

        </Layout>

        <Footer scrolled={scrolled}/>
      </main>

    </>
  )
}

// export async function getStaticProps({locale,locales}) {

// //  Return local values from sanity

//   return {
//       props: {


//       },
//     }
// }
