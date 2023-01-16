import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import Title from '../components/Title'
import Layout from '../components/Layout'
// import Subtitle from '../components/Subtitle'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Technologies from '../components/Technologies'
import Service from '../components/Service'
import Navbar from '../components/Navbar';
import { useAppContext } from '../components/Context'

import IconScreen from '../public/images/icon_screen.svg';
import IconGraph from '../public/images/icon_graph.svg';
import {IoMdSpeedometer, IoMdColorPalette} from 'react-icons/io'
import {IoEarth,IoFingerPrint} from 'react-icons/io5'
import {VscMerge} from 'react-icons/vsc'
// import {GiTrail,} from 'react-icons/gi'
import {RiFlowChart, RiSeedlingFill, RiPlantLine, RiSecurePaymentFill} from 'react-icons/ri'
// import {GrDirections,GrGrow} from 'react-icons/gr'
import {MdEmergency, MdManageAccounts, MdAutoFixHigh} from 'react-icons/md'
// import {FaPencilRuler, FaSeedling} from 'react-icons/fa'
import {CgSmartphoneChip} from 'react-icons/cg'
import {AiOutlineAim} from 'react-icons/ai'
import {GiPeaceDove, GiOpenBook, GiLighthouse} from 'react-icons/gi'
import {BsFileEarmarkBarGraphFill, BsCalendar3, BsSpeedometer, BsCurrencyExchange, BsGearWideConnected, BsLightningFill} from 'react-icons/bs'
import {HiOutlineTranslate} from 'react-icons/hi'
import {SlSpeedometer} from 'react-icons/sl'
import {HiPhoto, HiPlay} from 'react-icons/hi2'
import {FaFastForward, FaLightbulb, FaShippingFast} from 'react-icons/fa'
// import {TbFlower,TbPlant, TbReportAnalytics, TbRoad} from 'react-icons/tb'
import {TiSocialFacebook} from 'react-icons/ti'
import {BiTimer, BiCodeAlt,BiGlasses} from 'react-icons/bi'
import {SiLighthouse} from 'react-icons/si'
import { useEffect } from 'react'
// RiFlowChart
// GrDirections
// GiTrail


let roadmap = {icon: <BsLightningFill color='white' className='mx-auto w-8 h-8' alt={'Roadmap Icon'}/>, title:'Roadmap', list:['Our workflow is powered by a transparant design process which allows you to collaborate and provide feedback on several design iterations.']}
let fingerprint = {icon: <IoFingerPrint className='w-8 text-3xl text-white' alt='Fingerprint icon'/>, title:'UX/UI', list:["User Experience and User Interaction are central when creating your design to ensure optimal interaction and click-through. "]}

let serviceIconsWebsite = [
  {icon: <SlSpeedometer color='white' className='mx-auto w-8 h-8' alt='Velocity meter icon showing a high speed'/>,
  title:'Performance',
  list:["Using today's technology we create blazingly fast and interactive websites and online tools"],  
  },
  fingerprint,
  {icon: <HiPhoto className='w-8 text-3xl text-white' alt='Structured database icon'/>,
  title:'Content Management',
  list:["We integrate a Content Management System in your website through which it becomes an enjoyable experience to update your photo's, blog posts and articles."],
  },
  { icon: <IconScreen color='white' className='mx-auto w-8 h-8' alt='Computer screen size icon'/>,
  title:'Responsiveness',
  list:['50%-60% of all interent consumption comes from mobile devices. We adapt your website to small, medium and large screen sizes.']
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Translate Icon'}/>, 
  title:'Multiple Languages', 
  list:['We can translate your website in the English, French and Dutch languages.']
  },
  roadmap
];

let serviceIconsShop = [
  {icon: <RiSecurePaymentFill  className='w-8 text-3xl text-white' alt='Fingerprint icon'/>,
  title:'Secure Payments',
  list:['We integrate flexible payment options like Twint and Sprite that allow for an easy and secure checkout process as well as an affordable pricing strategy.'],
  },
  {icon: <BsCurrencyExchange  className='w-8 text-3xl text-white' alt='Fingerprint icon'/>,
  title:'Multiple Currencies',
  list:['We make sure you can accept payments in the most common currencies around you, further improving the overall shoping experience.'],
  },
  {icon: <IconGraph color='white' className='mx-auto w-8 h-8' alt='Graph going up Icon'/>, 
  title: 'Grow Your Business',
  list: ['We build your online shop and integrate the customised tools you need to grow your business.']
  },
  {icon: <FaShippingFast color='white' className='mx-auto w-8 h-8' alt={'Earth Icon'}/>, 
  title:'Integrated Shipment', 
  list:["We integrate liable and confirmed shipment services so you can expand your business to new geographic locations."]
  },
  roadmap,
];

let serviceIconsLogo = [
  {icon: <MdAutoFixHigh color='white' className='mx-auto w-8 h-8' alt={'Scope Icon'}/>, 
  title:'Uplift Existing Material' ,
  list: ['If your current brand image or logo feels outdated we can mimplement modernising changes keeping the integrity of your current designs.']
  },{icon: <IoMdColorPalette color='white' className='mx-auto w-8 h-8' alt={'Design tools Icon'}/>, 
  title: 'Design',
  list: ['Get a collection of a coherent color palette and font with your logo.']
  },
  {icon: <AiOutlineAim color='white' className='mx-auto w-8 h-8' alt={'Scope Icon'}/>, 
  title:'Target Audience', 
  list:['Guided by your vision and values we difine your target audience and integrate these insights into a suitable design.']
  },
  {icon: <TiSocialFacebook color='white' className='mx-auto w-8 h-8' alt={'Scope Icon'}/>, 
  title:'Social Networks', 
  list:['We make marketing material that leverage popular social networks to increase your brand visibility.']
  },
  roadmap
];

let serviceIconsTools  = [
  {icon: <BsCalendar3 className='w-8 text-3xl text-white' alt='Fingerprint icon'/>,
  title:'Scheduling',
  list:['Customers are able to schedule appointments in your agenda and are notified when you accept or change their requests.'],
  },
  {icon: <MdManageAccounts className='w-8 text-3xl text-white' alt='Fingerprint icon'/>,
  title:'Team Management',
  list:["We implement tools through which you can manage your team and each individual's salary, shifts, and even medical information."],
  },{icon: <BiTimer color='white' className='mx-auto w-8 h-8' alt='Graph going up Icon'/>, 
  title: 'Free Your Time',
  list: ['Automatating simple tasks can free up your time allowing you to focus on improving your business.']
  },
  {icon: <VscMerge color='white' className='mx-auto w-8 h-8' alt={'Integration Icon'}/>, 
  title: 'Business Integration',
  list: ['Using code developement we customise your tool to seamlessly integrate into your current business flow and management style.']
  },
  {icon: <BsGearWideConnected className='w-8 text-3xl text-white' alt='Fingerprint icon'/>,
  title:'Website Integration',
  list:['We can implement the tools into an existing website, reducing your investment cost.'],
  },
  roadmap
];



let serviceIconsAnalysis  = [
  {icon: <BsFileEarmarkBarGraphFill color='white' className='mx-auto w-8 h-8' alt={'Analysis report Icon'}/>, 
  title:'In-Depth Report', 
  list:['We analyse your online performance, looking at your overall brand image, user experience, speed, security, responsiveness, communication and spelling errors.']
  },
  {icon: <IconGraph color='white' className='mx-auto w-8 h-8' alt='Graph going up Icon'/>, 
  title: 'Grow Your Business',
  list: ['Several suggestions are made of actions and investments that will most impact your business growth.']
  },
  // {icon: <GiOpenBook color='white' className='mx-auto w-8 h-8' alt='Graph going up Icon'/>, 
  // title: 'Gather Knowledge',
  // list: ['Start by gathering the knowledge needed to target .']
  // },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Translate Icon'}/>, 
  title:'Language of Your Choice', 
  list:['The report and recommendations are delivered in the language of your choice with the possibilities of English, French or Dutch.']
  },
  {icon: <GiPeaceDove color='white' className='mx-auto w-8 h-8' alt={'Peace dove Icon'}/>, 
  title:'Zero Commitment', 
  list:['You are free to go with the report to engage whichever specialist you prefer.']
  },
  
  
];

let serviceIconsPrototypes  = [
   {icon: <CgSmartphoneChip color='#fff' className='mx-auto w-8 h-8' alt={'Smartphone chip Icon'}/>, 
  title:'Engineering Mindset', 
  list:['As an electrical and biomedical engineer with experience in graphic design and web developement I bring a unique perspective on the table.']
  },
  {icon: <AiOutlineAim color='white' className='mx-auto w-8 h-8' alt={'Scope Icon'}/>, 
  title:'Minimum Viable Product', 
  list:['We deliver guidance on defining the MVP to accelarate the development, whether it takes the shape of a mobile or web app.']
  },
  {icon: <BiCodeAlt color='white' className='mx-auto w-8 h-8' alt={'Scope Icon'}/>, 
  title:'Hardcoded', 
  list:['Since our products are hardcoded our prototypes are built fully customised to your vision and application.']
  },
  {icon: <MdEmergency color='white' className='mx-auto w-8 h-8' alt={'Note star Icon'}/>, 
  title: 'No Footnotes',
  list: ["You are the owner of the final product, including the code. No surprises or funny terms & conditions."]
  },
  roadmap,
];

let serviceIconsSEO  = [
  // {icon: <IoEarth color='white' className='mx-auto w-8 h-8' alt={'Earth Icon'}/>, 
  // title:'Reach new customers', 
  // list:['','We can develop a simple new logo and fast modern website. If required we can also build complete internet strategies or highly customised applications to help grow your business.',
  // 'Things I can build for your: online strategy, web application, logo, website, web shop, business tools']
  // },
  {icon: <RiSeedlingFill color='white' className='mx-auto text-white w-8 h-8' alt='Graph going up Icon'/>, 
  title: 'Grow Organically',
  list: ['We optimse your SEO because it has tremendous impact on the organic growth of your business.']
  },
  {icon: <BiGlasses color='white' className='mx-auto w-8 h-8' alt='Graph going up Icon'/>, 
  title: 'Looking Code Deep',
  list: ['We go code-deep into your website to perform optimisations where needed.']
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Translate Icon'}/>, 
  title:'Language Settings', 
  list:['We look at the way languages are integrated in your websites to increase SEO.']
  },
  {icon: <GiLighthouse color='white' className='mx-auto w-8 h-8' alt='Graph going up Icon'/>, 
  title: 'Lighthouse Score',
  list: ["We make use of Google's own lighthouse scoring system to improve your SEO."]
  },
];

let serviceList = [
  {name:'Website', icons: serviceIconsWebsite, title:'Step up your\ninternet game', span:'internet',text:'We build fast and modern websites from scratch to bring your story online and to organically reach new customers.'},
  {name:'e-Commerce', icons: serviceIconsShop, title:'Bring your\nshop online',span:'shop', text:'We build themed e-commerces integrating secure payment services like Twint to make customers love shopping with you.'},
  {name:'Logo', icons: serviceIconsLogo, title:'Put your brand\nin a new jacket',span:'brand', text:'Your current brand image feels outdated? We integrate the latest design trends to create a new logo and modern color palette.'},
  {name:'Tools', icons: serviceIconsTools, title:'Tools to boost\nyour business',span:'boost', text:'We build simple tools that you can manage. Think automated customer scheduling, team planning, invoice reminders and more.'},
  {name:'Analysis', icons: serviceIconsAnalysis, title:'Knowledge is\npower',span:'power', text:'We provide an in-depth report analysing your online presence inlcuding brand coherence, vision, values, speed and UX/UI.'},
  {name:'Prototypes', icons: serviceIconsPrototypes, title:'We work with\nStart-ups',span:'Start-ups', text:'We help shape your ideas into functioning prototypes that convince your stakeholders and new investors.'},
  {name:'SEO Optimisation', icons: serviceIconsSEO, title:'Google will\nlove your site',span:'Google', text:"We implement Search Engine Optimisation (SEO) because even a fast and beautiful website has no impact without it."},
  ];

export default function Services({scrolled}) {
  let {width, breakPointSmall, noBlur} = useAppContext();

  return (
    <>
      <Head> 
        <title>ywdesign | The Roadmap</title>
      </Head>

      <main className="">
        <Navbar from='Services'/>
        
        <Title breakPointSmall={breakPointSmall} type='services'/>
        
        <Layout>

          {/* <Subtitle name='How To' title='' span text first={true}/> */}

          {serviceList.map((service,i)=>{
            return <Service 
            key={i} 
            name={service.name}
            realFirst={i===0?true:false} 
            first={true}
            // first={i===0?true:false}
            icons={service.icons}
            title={service.title} 
            text={service.text} 
            span={service.span}
            breakPointSmall = {breakPointSmall}
            noBlur={noBlur} 
            position={i % 2 === 0 ? 'left' : 'right' } 
            />
          })}


          <Technologies breakPointSmall={breakPointSmall}/>

          <Contact breakPointSmall={breakPointSmall} first={width<breakPointSmall?true:false}/>

        </Layout>

        <Footer scrolled={scrolled}/>

      </main>
    
    </>
)}