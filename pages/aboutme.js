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
import { useAppContext } from '../components/Context'

// const inter = Inter({ subsets: ['latin'] })

let numbers = [{n:12,unit:'',title:'years global website traffic\nthrough mobile devices',text:'the number of months abroad'},
{n:58,unit:'%',title:`the global website traffic\nthrough mobile devices`,text:'',link:'https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/'},
{n:2.4,unit:'€',title:'million global website traffic\nthrough mobile devices', text:'total value of projects managed'}]

let vision = [{title:'Impact',text:'To have an impact in this world is to share your ideas and to have the many understand them.', span:''},
{title:'Excellence',text:'To succeed in whatever you do is to always be open minded to improving yourself.', span:''},
{title:'Listening',text:'Great victories are always shared and achieved only when the individual opens its ears and listens.', span:''},
{title:'Learning',text:'On the road to understanding, one has to become free from the values that make up their own reality.', span:''}
]
let missionText = 'A positive impact on the planet and its people. I want to use my passion for graphic design and computer science to inspire and motivate the many. By building digital tools that leverage the internet more people can understand the ideas that will change the world.'
let aboutmeText = "I'm an open-minded and ambitious person, taking every challenge as an opportunity to learn. I love working with people and I tend to get the best out of everyone. Listening and planning skills help me to pull the team forward, achieving always-improving results, together."


export default function Aboutme({scrolled}) {

  let {width, breakPointSmall} = useAppContext();

  return (
    <>
      <Head> 
        <title>ywdesign | About me</title>
      </Head>

      <main>
        <Navbar from='About Me'/>
        <Title breakPointSmall={breakPointSmall} type='aboutme'/>

        <Layout type='text'>
        
          <YolanPhoto />

          <TwoColumns left={true}>
            <Subtitle name='About' title={`A little bit\nabout me`} span='me' first={true} position={'left'}/>
              <div className='flex text-base lg:text-base font-light  text-primary text-justify sm:text-left sm:w-2/3 lg:w-1/2'>
                <p>{aboutmeText}</p>
              </div>
          </TwoColumns>

          {/* <TwoColumns left={width<breakPointSmall?true:false}> */}
          <TwoColumns left={true}>
            <Subtitle name='Mission' first={true} title={`What I want\nto achieve`} span='achieve' position={'right'} />
            <div className='flex text-base lg:text-base font-light justify-end text-primary text-justify sm:text-right '>
              <p className='sm:w-2/3 lg:w-1/2'>{missionText}</p>
            </div>
          </TwoColumns>

          <section className='flex flex-col cursor-default'>
            <Subtitle name='Vision' title={`Everything starts\nwith a vision`} first={true} span='vision'/>
            {/* <RiDoubleQuotesL className='inline-block -translate-y-3' fill='white'/>  */}
            <div className='grid grid-cols-2 gap-8  sm:gap-16 auto-rows-auto mx-auto'>
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

          <section >
              <Subtitle name='Numbers' first={true} title={`Measure to\ndrive impact`} span='drive'  />
              
              <div className='grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 cursor-default'>
              {numbers.map((num,i) => {
                  return (
                    <Number className={``} key={i} n={num.n} unit={num.unit} link={num.link} title={num.title} text={num.text} />
                  )
              })}
              </div>
          </section>

          {/* <section className='cursor-default'>
          <AccentTitle className='text-center' text={'Services'}/>
          </section> */}


          <Conctact first={true}/>
          
        </Layout>

        <Footer scrolled={scrolled}/>

      </main>
    
    </>
)}