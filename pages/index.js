import Head from 'next/head'
import Title from '../components/Title'
import Layout from '../components/Layout'
import Subtitle from '../components/Subtitle'
import Conctact from '../components/Contact'
import Footer from '../components/Footer'
import Specialities from '../components/Specialities'
import Features from '../components/Features'
import { useEffect } from 'react'
import { useAppContext } from '../components/Context'
import Navbar from '../components/Navbar'

// const inter = Inter({ subsets: ['latin'] })



export default function Index({scrolled}) {
  let {width, breakPointSmall} = useAppContext();

  return (
    <>
      <Head>
        <title>ywdesign | Web Development</title>
      </Head>
      
      <main>
        <Navbar from = 'Home'/>
        <Title breakPointSmall={breakPointSmall} type='home'/>

        <Layout>
          
          <Specialities noBlur={true}/>


          <section className='grid grid-cols-2'>
            <div className='col-start-1 w-full'>
              <Subtitle name='Workflow' title='A fully personalised solution, every time' span={'solution'} 
              text='The roadmap allows us to find the best solution for you, every time. You want to try it out.' 
              first={true} position='left'/>
            </div>
            <div className=' col-start-2 w-full'>
              {/* <SpecialtyCard 
              className = '' title={'Roadmap'} text={'gliding and animated'} /> */}
            </div>
          </section>

          <Features/>

              
          <Conctact breakPointSmall={breakPointSmall} first={true}/>

        </Layout>

        <Footer scrolled={scrolled}/>
      </main>

    </>
  )
}
