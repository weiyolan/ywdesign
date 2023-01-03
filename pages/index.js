import Head from 'next/head'
import Title from '../components/Title'
import Layout from '../components/Layout'
import Subtitle from '../components/Subtitle'
import Conctact from '../components/Contact'
import Footer from '../components/Footer'
import Specialities from '../components/Specialities'
import Navbar from '../components/Navbar'
import Features from '../components/Features'

// const inter = Inter({ subsets: ['latin'] })



export default function Home({scrolled}) {
  return (
    <>
      <Head>
        <title>ywdesign | Web Development</title>
      </Head>
      
      <main>
        <Navbar from='Home'/>
        <Title type='home'/>

        <Layout>
          
          <Specialities noBlur={false}/>


          <section className='grid grid-cols-2'>
            <div className='col-start-1 w-full'>
              <Subtitle name='Workflow' title='A fully personalised solution, every time' span={'solution'} 
              text='The roadmap allows us to find the best solution for you, every time. You want to try it out.' 
              first={false} position='left'/>
            </div>
            <div className=' col-start-2 w-full'>
              {/* <SpecialtyCard 
              className = '' title={'Roadmap'} text={'gliding and animated'} /> */}
            </div>
          </section>

          <Features/>

              
          <Conctact/>

        </Layout>

        <Footer scrolled={scrolled}/>
      </main>

    </>
  )
}
