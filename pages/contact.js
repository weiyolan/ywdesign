import Head from 'next/head'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Map from '../components/Map'
// import Form from '../components/FormOld'
import FormMotion from '../components/FormMotion'




export default function Contact({scrolled, breakPointSmall}) {
  return (
    <>
      <Head> 
        <title>ywdesign | Contact</title>
      </Head>

      <main>
        <Navbar from='Contact'/>
        <Title breakPointSmall={breakPointSmall} type='contact'/>

        <Layout>
          <Map/>
          <FormMotion noBlur={true}/>
        </Layout>
        <Footer scrolled={scrolled}/>

        

      </main>
    
    </>
)}