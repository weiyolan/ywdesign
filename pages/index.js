import Head from 'next/head'
import Title from '../components/Title'
import Layout from '../components/Layout'
import Subtitle from '../components/Subtitle'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Specialities from '../components/Specialities'
import Features from '../components/Features'
import { useEffect } from 'react'
import { useAppContext } from '../components/Context'
import Navbar from '../components/Navbar'
import RoadmapHome from '../components/RoadmapHome'
// const inter = Inter({ subsets: ['latin'] })



export default function Index({scrolled}) {
  let {width, breakPointSmall, noBlur} = useAppContext();

  return (
    <>
      <Head>
        <title>ywdesign | Web Development</title>
      </Head>
      
      <main className='scroll-smooth'>
        <Navbar from = 'Home'/>
        
        <Title breakPointSmall={breakPointSmall} type='home'/>

        <Layout>
          
          <Specialities noBlur={noBlur}/>


          <RoadmapHome/>


          <Features/>

              
          <Contact breakPointSmall={breakPointSmall} first={true}/>

        </Layout>

        <Footer scrolled={scrolled}/>
      </main>

    </>
  )
}
