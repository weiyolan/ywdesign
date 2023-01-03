import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Subtitle from '../components/Subtitle'
import TwoColumns from '../components/TwoColumns'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Yolan from '../public/images/yolan.svg'
import AccentTitle from '../components/AccentTitle'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri'
import Number from '../components/Number'
import Vision from '../components/Vision'
import YolanPhoto from '../components/YolanPhoto'
import Conctact from '../components/Contact'

// const inter = Inter({ subsets: ['latin'] })

let numbers = [{n:25,title:'years of experience',text:'the number of months abroad'},
{n:12,title:'years',text:'the number of months abroad'},
{n:2.4,title:'million',text:'total value of projects managed'}]

let vision = [{title:'Impact',text:'To have an impact in this world is to share your ideas and to have the many understand them.'},
{title:'Excellence',text:'To succeed in whatever you do is to always be open minded to improving yourself. '},
{title:'Listening',text:'Great victories are always shared and achieved only when the individual opens its ears and listens.'},
{title:'Learning',text:'On the road to understanding, one has to become free from the values that make up their own reality.'}
]

let missionText = 'A positive impact on the planet and its people. I want to use my passion for medicines, engineering, and computer science, to inspire and motivate the many. By building digital tools that leverage the internet more people can understand the ideas that will change the world.'
let aboutmeText = 'I’m an open-minded and ambitious person, taking every challenge as an opportunity to learn. I love working with people and I tend to get the best out of everyone. Listening and planning skills help me to pull the team forward, achieving always-improving results, together.'


export default function Aboutme({scrolled}) {
  return (
    <>
      <Head> 
        <title>ywdesign | About me</title>
      </Head>

      <main>
        <Navbar from='About Me'/>
        <Title type='aboutme'/>

        <Layout type='text'>
        
          <YolanPhoto />

          <TwoColumns left={true}>
            <Subtitle name='About' title={`A little bit\nabout me`} span='me' first={true} position={'left'}/>
              <p className='flex font-light mt-36 px-12 text-primary text-center'>
              {aboutmeText}
              </p>
          </TwoColumns>

          <TwoColumns left={true}>
            <Subtitle name='Mission' title={`What I want\nto achieve`} span='achieve' position={'left'} />
            <p className='flex font-light mt-60 px-12 text-primary text-center'>
              {missionText}
            </p>

          </TwoColumns>

          <section className='flex flex-col text-center cursor-default'>
          <Subtitle name='Vision' title={`Everything starts\nwith a vision`} first={false} span='vision'/>
            {/* <RiDoubleQuotesL className='inline-block -translate-y-3' fill='white'/>  */}
            <div className='grid grid-cols-2 gap-16 auto-rows-auto my-10 mx-auto'>
              {vision.map((item)=>{
                return (
                  <Vision key={item.title} title={item.title} text={item.text}/>
                )
              })}
            </div>
          </section>  

          
          {/* <section className='mt-24 cursor-default'>
            <Subtitle name='About Me' title='' span='' position={'left'}/>
            <div className='inline-flex justify-between flex-row'>
            <p className=' inline-block my-4 font-sans font-light text-md text-primary text-justify'>
             {aboutmeText}
            </p>
            </div>
          </section> */}

          

          <section className='grid grid-cols-3 cursor-default'>
            <div className='col-start-1 col-span-3'>
              <Subtitle name='Numbers' title={`Measure to\ndrive impact`} span='drive'  />
            </div>
            {numbers.map((num,i) => {
                return (
                  <Number className={`col-start-${i+1} col-span-1`} key={i} n={num.n} title={num.title} text={num.text} />
                )
            })}
          </section>

          {/* <section className='cursor-default'>
          <AccentTitle className='text-center' text={'Services'}/>
          </section> */}


          <Conctact/>
          
        </Layout>

        <Footer scrolled={scrolled}/>

      </main>
    
    </>
)}