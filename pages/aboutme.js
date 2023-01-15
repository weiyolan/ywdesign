import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Subtitle from '../components/Subtitle'
import TwoColumns from '../components/TwoColumns'
// import { FaTimes } from 'react-icons/fa'
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
import Contact from '../components/Contact'
import { useAppContext } from '../components/Context'

// const inter = Inter({ subsets: ['latin'] })

let numbers = [
{n:3,unit:'x',title:"Growth of retail sales through\ne-commerce worldwide since 2015",text:"You better get your\nbrand online", link: "https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/"},
{n:58,unit:'%',title:`Global website traffic\nthrough mobile devices`,text:'You better have a\nresponsive website',link:'https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/'},
{n:92,unit:'%',title:"Internet searches globally going\nthrough Google's search engine", text:"You better optimise your\nwebsite's SEO", link:"https://www.oberlo.com/statistics/search-engine-market-share#:~:text=Handling%20over%2090%25%20of%20all,done%20through%20the%20internet%20giant."}]

let vision = [{title:'Impact',text:'To have an impact in this world is to share your ideas and to have the many understand them.', span:''},
{title:'Excellence',text:'To succeed in whatever you do is to always be open minded to improving yourself.', span:''},
{title:'Listening',text:'Great victories are always shared and achieved only when the individual opens its ears and listens.', span:''},
{title:'Learning',text:'On the road to understanding, one has to become free from the values that make up their own reality.', span:''}
]
let missionText = 'A positive impact on the planet and its people. I want to use my passion for graphic design and computer science to inspire and motivate the many. By building digital tools that leverage the internet more people can understand the ideas that will change the world.'
let aboutmeText = "I'm an open-minded and ambitious person, taking every challenge as an opportunity to learn. I love working with people and I tend to get the best out of everyone. Listening and planning skills help me to pull the team forward, achieving always-improving results, together."


export default function Aboutme({scrolled}) {

  let {width, breakPointSmall, noBlur} = useAppContext();

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

            <div className='flex flex-col lg:flex-row'>
              <div className='flex-1'>
                <TwoColumns left={true}>
                  <Subtitle name='About' title={`A little bit\nabout me`} span='me' first={true} position={'left'}/>
                    <div className='flex text-base lg:text-base font-light  text-primary text-justify sm:text-left sm:w-2/3 lg:w-4/5'>
                      <p>{aboutmeText}</p>
                    </div>
                </TwoColumns>
              </div>
            {/* <TwoColumns left={width<breakPointSmall?true:false}> */}
              <div className='flex-1'>
                <TwoColumns left={true}>
                  <Subtitle name='Mission' first={true} title={`What I want\nto achieve`} span='achieve' position={'right'} />
                  <div className='flex text-base lg:text-base font-light text-primary text-justify sm:text-right justify-end'>
                    <p className='sm:w-2/3 lg:w-4/5'>{missionText}</p>
                  </div>
                </TwoColumns>
              </div>
            </div>

          <section className='flex flex-col cursor-default'>
            <Subtitle name='Vision' title={`Everything starts\nwith a vision`} first={width>1025?false:true} span='vision'/>
            {/* <RiDoubleQuotesL className='inline-block -translate-y-3' fill='white'/>  */}
            <div className='grid grid-cols-2 gap-4  sm:gap-16 auto-rows-auto mx-auto'>
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
              <Subtitle name='Numbers' first={width>1025?false:true} title={`Measure to\ndrive impact`} span='drive'  />
              
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


          <Contact first={width>1025?false:true}/>
          
        </Layout>

        <Footer scrolled={scrolled}/>

      </main>
    
    </>
)}