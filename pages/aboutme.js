import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
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

// const inter = Inter({ subsets: ['latin'] })

let numbers = [{n:25,title:'months',text:'the number of months abroad'},
{n:12,title:'years',text:'the number of months abroad'},
{n:57,title:'projects',text:'the number of projects abroad'}]

let vision = [{title:'Impact',text:'To have an impact in this world is to share your ideas and to have the many understand them.'},
{title:'Excellence',text:'To succeed in whatever you do is to always be open minded to improving yourself. '},
{title:'Listening',text:'Great victories are always shared and achieved only when the individual opens its ears and listens.'},
{title:'Learning',text:'On the road to understanding one has to become free from the values that make up their own reality.'}
]

let missionText = 'A positive impact on the planet and its people. I want to use my passion for medicines, engineering, and computer science, as well as my animated energy to inspire and motivate the many, because only together we can change the world.'



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
        
          <YolanPhoto/>

          <section className='mt-24'>
            <AccentTitle text='About Me' />
            <div className='inline-flex justify-between flex-row'>
            <RiDoubleQuotesL className='inline-block my-4 mr-2 flex-none' fill='white'/> 
            <p className=' inline-block my-4 font-sans font-light text-md text-primary text-justify'>
            I’m an open-minded and ambitious person, eager to learn from the challenges that I face. 
            I love working with people and I tend to motivate my team getting the best out of everyone. 
            Listening and planning skills help me to pull the team forward, achieving always-improving results. 
            </p>
            </div>
          </section>

          <section className='grid grid-cols-3 my-24'>
            {numbers.map((num,i) => {
              return (

                <Number className={`col-start-${i+1} col-span-1`} key={i} n={num.n} title={num.title} text={num.text} />

              )

            })}

          </section>



          <section className='mt-14'>

            <AccentTitle text={'Vision'}/>

            {/* <RiDoubleQuotesL className='inline-block -translate-y-3' fill='white'/>  */}
            <div className='grid grid-cols-2 gap-10 auto-rows-auto my-10 mx-auto'>
              {vision.map((item)=>{
                return (
                  <Vision key={item.title} title={item.title} text={item.text}/>
                )
              })}

            </div>



          </section>  

          <section className='my-24'>

            <AccentTitle text={'Mission'}/>

            <p className='font-light text-primary text-justify'>
              {missionText}
            </p>
          </section>

          <AccentTitle className='text-center' text={'Services'}/>

          
        </Layout>

        <Footer scrolled={scrolled}/>



      </main>
    
    </>
)}