import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import Title from '../components/Title'
import Layout from '../components/Layout'
import Subtitle from '../components/Subtitle'
import Footer from '../components/Footer'
import Conctact from '../components/Contact'
import Technologies from '../components/Technologies'
import Service from '../components/Service'
import Navbar from '../components/Navbar';

import {IoEarth} from 'react-icons/io5'
import {VscMerge} from 'react-icons/vsc'
import {GiTrail} from 'react-icons/gi'
import {MdEmergency} from 'react-icons/md'
import {FaPencilRuler} from 'react-icons/fa'
import {CgSmartphoneChip} from 'react-icons/cg'
import {AiOutlineAim} from 'react-icons/ai'
import {GiPeaceDove} from 'react-icons/gi'
import {BsFileEarmarkBarGraphFill} from 'react-icons/bs'
import {HiOutlineTranslate} from 'react-icons/hi'

// const inter = Inter({ subsets: ['latin'] })
let roadmap = {icon: <GiTrail color='white' className='mx-auto w-8 h-8' alt={'Roadmap Icon'}/>, title:'Our Workflow', list:['We follow the predefined roadmap for improved teamwork and collaboration.','A clearly defined product at the start allows for positive surprises only.','You know when you can provide feedback on the designs.','You are the owner of the final product, including the code.']}

let serviceIcons1 = [
  {icon: <IoEarth color='white' className='mx-auto w-8 h-8' alt={'Earth Icon'}/>, 
  title:'Products we make', 
  list:['As a graphic designer and computer scientist two essential skills are at our disposal to develop high speed and beautiful internet tools answering your needs.','We can develop a simple new logo and fast modern website. If required we can also build complete internet strategies or highly customised applications to help grow your business.',
  'Things I can build for your: online strategy, web application, logo, website, web shop, business tools']
  },

  roadmap,

  {icon: <VscMerge color='white' className='mx-auto w-8 h-8' alt={'Integration Icon'}/>, 
  title: 'Business Integration',
  list: ['We develop purely using code allowing to develop fully customised products that are integrated in your current business flow and management style.']
  },

  {icon: <MdEmergency color='white' className='mx-auto w-8 h-8' alt={'Note star Icon'}/>, 
  title: 'Transparancy',
  list: ['Terms & Conditions + You own your code']
  } 

];

let serviceIcons2 = [
  {icon: <AiOutlineAim color='white' className='mx-auto w-8 h-8' alt={'Scope Icon'}/>, 
  title:'Minimum Viable Product', 
  list:['We work together to define the MVP','app/online tool/website/...','Prototype is accessible for all team members']
  }
  ,

  {icon: <CgSmartphoneChip color='#fff' className='mx-auto w-8 h-8' alt={'Smartphone chip Icon'}/>, 
  title:'Engineering Mindset', 
  list:['More than designer and web developer','Prototyping is done with an engineering mindset and feedback is provided','Integrate a background in electrical, mechanical and biomedical engineering','Hardcoded design customisable to any idea']
  },
  
  roadmap
];

let serviceIcons3 = [
  {icon: <Image className='mx-auto' src={'/images/icon_spark.svg'} width={32} height={32} alt={'Sparkling Icon'}/>, 
  title:'Uplift existing material' ,
  list: ['Current feels outdated?','How big are your changes?','New customers','Modernise']
  },
  {icon: <FaPencilRuler color='white' className='mx-auto w-8 h-8' alt={'Design tools Icon'}/>, 
  title: 'Design',
  list: ['Things need to work seamlessly and look pretty','User experience is a top priority','Integrate your new values and vision','Get a collection of a coherent color palette and font with your logo.']
  },

  roadmap
];

let serviceIcons4  = [
  {icon: <BsFileEarmarkBarGraphFill color='white' className='mx-auto w-8 h-8' alt={'Analysis report Icon'}/>, 
  title:'In-Depth Report', 
  list:['Companies values','Security','User friendlyness','Speed','Design','Structure', 'responsiveness', 'You own your data']
  },
  {icon: <GiPeaceDove color='white' className='mx-auto w-8 h-8' alt={'Peace dove Icon'}/>, 
  title:'Zero Commitment', 
  list:['You are free to go with the report.', 'You can engage whichever specialist you want']
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Translate Icon'}/>, 
  title:'Language of your choice', 
  list:['Language bla bla bla']
  },
  {icon: <Image className='mx-auto' src={'/images/icon_graph.svg'} width={32} height={32} alt={'Graph Icon'}/>, 
  title: 'Digital Strategy',
  list: ['We define next steps and suggestions following the report + Recommendations']
  }
];

let serviceList = [
  {name:'Web Development', icons: serviceIcons1, title:'Step up your\ninternet game', span:'internet',text:'Together we improve your online presence by creating a brand new logo, website, e-commerces and customised online tools.'},
  {name:'Products', icons: serviceIcons2, title:'We work with\nStart-ups',span:'Start-ups', text:'We help shape your ideas into functioning prototypes that convince your stakeholders and new investors.'},
  {name:'Redesign', icons: serviceIcons3, title:'Put your brand\nin a new Jacket',span:'brand', text:'Your current website or brand feels outdated? We integrate the latest design trends and technology to bring your vision alive.'},
  {name:'Analysis', icons: serviceIcons4, title:'Knowledge is\nPower',span:'Power', text:'We provide an in-depth report of your online presence, looking at coherence, your vision, values, speed, and overall user experience.'}
  ];

export default function Services({scrolled}) {
  return (
    <>
      <Head> 
        <title>ywdesign | Our Services</title>
      </Head>

      <main className="bg-[url('/images/background.svg')]">
        <Navbar from='Services'/>
        
        <Title type='services'/>
        
        <Layout>

          {/* <Subtitle name='How To' title='' span text first={true}/> */}

          {serviceList.map((service,i)=>{
            return <Service 
            key={i} 
            name={service.name} 
            first={i===0?true:false}
            icons={service.icons}
            title={service.title} 
            text={service.text} 
            span={service.span}
            noBlur={true} 
            position={i % 2 === 0 ? 'left' : 'right' } 
            />
          })}


          <Technologies/>

          <Conctact first={false}/>

        </Layout>

        <Footer scrolled={scrolled}/>

      </main>
    
    </>
)}