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


let roadmap = {en:{icon: <BsLightningFill color='white' className='mx-auto w-8 h-8' alt={'Roadmap Icon'}/>, title:'Roadmap', list:['Our workflow is powered by a transparant design process which allows you to collaborate and provide feedback on several design iterations.']},
fr:{icon: <BsLightningFill color='white' className='mx-auto w-8 h-8' alt={"Icône d'un chemin"}/>, title:'Le Chemin', list:["Notre flux de travail est alimenté par un processus de conception transparent qui vous permet de fournir des commentaires sur plusieurs itérations de conception."]}}
let fingerprint = {'en':{icon: <IoFingerPrint className='w-8 text-3xl text-white' alt='Fingerprint icon'/>, title:'UX/UI', list:["User Experience and User Interaction are central when creating your design to ensure optimal interaction and click-through. "]},
fr:{icon: <IoFingerPrint className='w-8 text-3xl text-white' alt="Icône d'un empreinte digitale"/>, title:'UX/UI', list:["L'expérience et l'interaction de l'utilisateur sont au cœur de la création de votre design afin de garantir une interaction et un taux de clics optimal."]}}

let serviceIconsWebsite = {'en':[
  {icon: <SlSpeedometer color='white' className='mx-auto w-8 h-8' alt='Velocity meter icon showing a high speed'/>,
  title:'Performance',
  list:["Using today's technology we create blazingly fast and interactive websites and online tools"],  
  },
  fingerprint['en'],
  {icon: <HiPhoto className='w-8 text-3xl text-white' alt='Structured database icon'/>,
  title:'Content Management',
  list:["We integrate a Content Management System in your website through which it becomes an enjoyable experience to update your photo's, blog posts and articles."],
  },
  { icon: <IconScreen color='white' className='mx-auto w-8 h-8' alt='Computer screen size icon'/>,
  title:'Responsiveness',
  list:['50%-60% of all internet consumption comes from mobile devices. We adapt your website to small, medium and large screen sizes.']
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Translate Icon'}/>, 
  title:'Multiple Languages', 
  list:['We can translate your website in the English, French and Dutch languages.']
  },
  roadmap['en']
],
fr:[
  {icon: <SlSpeedometer color='white' className='mx-auto w-8 h-8' alt='Capteurs de vitesse qui montre une haute vitesse'/>,
  title:'Performance',
  list:["En utilisant la technologie d'aujourd'hui, nous créons des sites web et des outils en ligne rapides et interactifs."],  
  },
  fingerprint['fr'],
  {icon: <HiPhoto className='w-8 text-3xl text-white' alt="Icône d'une base de données structurée"/>,
  title:'Gestion du contenu',
  list:["Nous intégrons un système de gestion de contenu à votre site web, ce qui rend agréable la mise à jour de vos photos, de vos billets de blog et de vos articles."],
  },
  { icon: <IconScreen color='white' className='mx-auto w-8 h-8' alt="Icône d'une taille d'écran adaptable"/>,
  title:'Adaptable aux écrans',
  list:["50 % à 60 % de la consommation d'Internet provient d'appareils mobiles. Nous adaptons votre site web aux écrans de petite, moyenne et grande taille."]
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Icône de traduction'}/>, 
  title:'Plusieurs langues', 
  list:['Nous pouvons traduire votre site web en anglais, français et néerlandais.']
  },
  roadmap['fr']
]};

let serviceIconsShop = {en:[
  {icon: <RiSecurePaymentFill  className='w-8 text-3xl text-white' alt='Locked lock icon'/>,
  title:'Secure Payments',
  list:['We integrate flexible payment options like Twint and Sprite that allow for an easy and secure checkout process as well as an affordable pricing strategy.'],
  },
  {icon: <BsCurrencyExchange  className='w-8 text-3xl text-white' alt='Different currencies exchanging icon'/>,
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
  roadmap['en'],
],fr:
[
  {icon: <RiSecurePaymentFill  className='w-8 text-3xl text-white' alt="Icône d'un cadenas fermé"/>,
  title:'Paiements Sûrs',
  list:["Nous intégrons des options de paiement flexibles comme Twint et Sprite qui permettent un processus de paiement facile et sécurisé ainsi qu'une stratégie de prix abordable."],
  },
  {icon: <BsCurrencyExchange  className='w-8 text-3xl text-white' alt="Plusieurs devises"/>,
  title:'Devises Multiples',
  list:["Nous nous assurons que vous pouvez accepter les paiements dans les devises les plus courantes autour de vous, ce qui améliore encore l'expérience d'achat globale."],
  },
  {icon: <IconGraph color='white' className='mx-auto w-8 h-8' alt='Des statistiques qui croissent'/>, 
  title: 'Développez vos Activités',
  list: ["Nous construisons votre boutique en ligne et intégrons les outils personnalisés dont vous avez besoin pour développer votre activité."]
  },
  {icon: <FaShippingFast color='white' className='mx-auto w-8 h-8' alt={'La planète qui est accessible'}/>, 
  title:'Transport Intégré', 
  list:["Nous intégrons des services d'expédition responsables et confirmés afin que vous puissiez étendre votre activité à de nouveaux sites géographiques."]
  },
  roadmap['fr'],
]}

let serviceIconsLogo = {en:[
  {icon: <MdAutoFixHigh color='white' className='mx-auto w-8 h-8' alt={'Magic wand icon'}/>, 
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
  {icon: <TiSocialFacebook color='white' className='mx-auto w-8 h-8' alt={'Social Media Facebook Icon'}/>, 
  title:'Social Networks', 
  list:['We make marketing material that leverage popular social networks to increase your brand visibility.']
  },
  roadmap['en']
],
fr:[
  {icon: <MdAutoFixHigh color='white' className='mx-auto w-8 h-8' alt={'Baguette Magique'}/>, 
  title:'Améliorez Votre Marque' ,
  list: ["Si votre image de marque ou votre logo actuel vous semble dépassé, nous pouvons mettre en œuvre des changements de modernisation tout en préservant l'intégrité de vos conceptions actuelles."]
  },{icon: <IoMdColorPalette color='white' className='mx-auto w-8 h-8' alt={'Outils de conception'}/>, 
  title: 'Conception',
  list: ["Obtenez une collection d'une palette de couleurs et d'une police cohérente avec votre logo."]
  },
  {icon: <AiOutlineAim color='white' className='mx-auto w-8 h-8' alt={'Cibler une bute'}/>, 
  title:'Ciblez le Publique', 
  list:["Guidés par votre vision et vos valeurs, nous déterminons votre public cible et intégrons ces informations dans un design adapté."]
  },
  {icon: <TiSocialFacebook color='white' className='mx-auto w-8 h-8' alt={'Icône de Facebook'}/>, 
  title:'Réseaux Sociaux', 
  list:["Nous réalisons des supports marketing qui exploitent les réseaux sociaux populaires pour accroître la visibilité de votre marque."]
  },
  roadmap['fr']
]};

let serviceIconsTools  ={en: [
  {icon: <BsCalendar3 className='w-8 text-3xl text-white' alt='Calendar icon'/>,
  title:'Scheduling',
  list:['Customers are able to schedule appointments in your agenda and are notified when you accept or change their requests.'],
  },
  {icon: <MdManageAccounts className='w-8 text-3xl text-white' alt='Team leader icon'/>,
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
  {icon: <BsGearWideConnected className='w-8 text-3xl text-white' alt='Interconnecting gears icon'/>,
  title:'Website Integration',
  list:['We can implement the tools into an existing website, reducing your investment cost.'],
  },
  roadmap['en']
],fr: [
  {icon: <BsCalendar3 className='w-8 text-3xl text-white' alt="Icône d'un agenda"/>,
  title:'Agenda Automatique',
  list:["Les clients peuvent prendre des rendez-vous dans votre agenda et sont avertis lorsque vous acceptez ou modifiez leurs demandes."],
  },
  {icon: <MdManageAccounts className='w-8 text-3xl text-white' alt='Une équipe organisée'/>,
  title:"Gestion d'Équipe",
  list:["Nous mettons en place des outils grâce auxquels vous pouvez gérer votre équipe et le salaire de chaque individu, ses horaires et même ses informations médicales."],
  },{icon: <BiTimer color='white' className='mx-auto w-8 h-8' alt='Graph going up Icon'/>, 
  title: 'Libéréz Votre Temps',
  list: ["L'automatisation de tâches simples peut vous libérer du temps et vous permettre de vous concentrer sur l'amélioration de votre entreprise."]
  },
  {icon: <VscMerge color='white' className='mx-auto w-8 h-8' alt={'Intégration de flux'}/>, 
  title: "Intégration d'Activites ",
  list: ["En utilisant le développement dur, nous personnalisons votre outil pour qu'il s'intègre parfaitement à votre flux d'activités et à votre style de gestion actuels."]
  },
  {icon: <BsGearWideConnected className='w-8 text-3xl text-white' alt='Engrenages connectés'/>,
  title:'Intégration Site Web',
  list:["Nous pouvons implémenter les outils dans un site web existant, réduisant ainsi votre coût d'investissement."],
  },
  roadmap['fr']
]};



let serviceIconsAnalysis  = {en:[
  {icon: <BsFileEarmarkBarGraphFill color='white' className='mx-auto w-8 h-8' alt={'Analysis report Icon'}/>, 
  title:'In-Depth Report', 
  list:['We analyse your online performance, looking at your overall brand image, user experience, speed, security, communication and spelling errors.']
  },
  {icon: <IconGraph color='white' className='mx-auto w-8 h-8' alt='Graph going up Icon'/>, 
  title: 'Grow Your Business',
  list: ['Several suggestions are made of actions and investments that will most impact your business growth.']
  },{ icon: <IconScreen color='white' className='mx-auto w-8 h-8' alt='Computer screen size icon'/>,
  title:'Responsiveness',
  list:['50%-60% of all internet consumption comes from mobile devices. Know how your current website performs on different screen sizes.']
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
],fr:[
  {icon: <BsFileEarmarkBarGraphFill color='white' className='mx-auto w-8 h-8' alt={'Rapport avec des statistiques'}/>, 
  title:'Rapport Approfondi', 
  list:["Nous analysons vos performances en ligne, en examinant votre image de marque globale, l'expérience utilisateur, la vitesse, la sécurité, la communication et les erreurs d'orthographe."]
  },
  {icon: <IconGraph color='white' className='mx-auto w-8 h-8' alt='Des statistiques croissants'/>, 
  title: 'Développez Vos Activités',
  list: ["Plusieurs suggestions sont faites concernant les actions et les investissements qui auront le plus d'impact sur la croissance de votre entreprise."]
  },{ icon: <IconScreen color='white' className='mx-auto w-8 h-8' alt="Icône d'une taille d'écran adaptable"/>,
  title:'Adaptabilité',
  list:["50 % à 60 % de la consommation d'Internet provient d'appareils mobiles. Sachez comment votre site web s'adapte aux écrans de toutes tailles"]
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Icône de traduction'}/>, 
  title:'Choix de Langue', 
  list:["Le rapport et les recommandations sont livrés dans la langue de votre choix, à savoir l'anglais, le français ou le néerlandais."]
  },
  {icon: <GiPeaceDove color='white' className='mx-auto w-8 h-8' alt={'Un pigeon de paix'}/>, 
  title:'Zéro Engagement', 
  list:["Vous êtes libre de suivre le rapport et d'engager le spécialiste que vous préférez."]
  },
]};

let serviceIconsPrototypes  ={en: [
   {icon: <CgSmartphoneChip color='#fff' className='mx-auto w-8 h-8' alt={'Smartphone chip Icon'}/>, 
  title:'Engineering Mindset', 
  list:['As an electrical and biomedical engineer with experience in graphic design and web developement I bring a unique perspective on the table.']
  },
  {icon: <AiOutlineAim color='white' className='mx-auto w-8 h-8' alt={'Scope Icon'}/>, 
  title:'Minimum Viable Product', 
  list:['We deliver guidance on defining the MVP to accelarate the development, whether it takes the shape of a mobile or web app.']
  },
  {icon: <BiCodeAlt color='white' className='mx-auto w-8 h-8' alt={'Coding shortcut Icon'}/>, 
  title:'Hardcoded', 
  list:['Since our products are hardcoded our prototypes are built fully customised to your vision and application.']
  },
  {icon: <MdEmergency color='white' className='mx-auto w-8 h-8' alt={'Footnote asterix'}/>, 
  title: 'No Footnotes',
  list: ["You are the owner of the final product, including the code. No surprises or funny terms & conditions."]
  },
  roadmap['en'],
],fr: [
  {icon: <CgSmartphoneChip color='#fff' className='mx-auto w-8 h-8' alt={'Une puce intelligent'}/>, 
 title:'Mentalité Ingénierie', 
 list:["En tant qu'ingénieur électrique et biomédical, avec une expérience en conception graphique et en développement web, j'apporte une perspective unique sur la table."]
 },
 {icon: <AiOutlineAim color='white' className='mx-auto w-8 h-8' alt={'Cibler le but'}/>, 
 title:'Produit Minimal Viable', 
 list:["Nous fournissons des conseils sur la définition du MVP pour accélérer le développement, qu'il prenne la forme d'une application mobile ou web."]
 },
 {icon: <BiCodeAlt color='white' className='mx-auto w-8 h-8' alt={'Des encodages'}/>, 
 title:'La Code Pure', 
 list:["Comme nos produits sont codés en dur, nos prototypes sont construits en fonction de votre vision et de votre application."]
 },
 {icon: <MdEmergency color='white' className='mx-auto w-8 h-8' alt={'Astérisque de note de bas de page'}/>, 
 title: 'Pas de Surprises',
 list: ["Vous êtes le propriétaire du produit final, y compris du code. Pas de surprises ni de conditions générales amusantes."]
 },
 roadmap['fr'],
]};

let serviceIconsSEO  = {en: [
  // {icon: <IoEarth color='white' className='mx-auto w-8 h-8' alt={'Earth Icon'}/>, 
  // title:'Reach new customers', 
  // list:['','We can develop a simple new logo and fast modern website. If required we can also build complete internet strategies or highly customised applications to help grow your business.',
  // 'Things I can build for your: online strategy, web application, logo, website, web shop, business tools']
  // },
  {icon: <RiSeedlingFill color='white' className='mx-auto text-white w-8 h-8' alt='Healthy seedlign growing'/>, 
  title: 'Grow Organically',
  list: ['We optimse your SEO because it has tremendous impact on the organic growth of your business.']
  },
  {icon: <BiGlasses color='white' className='mx-auto w-8 h-8' alt='Smart glasses'/>, 
  title: 'Looking Code Deep',
  list: ['We go code-deep into your website to perform optimisations where needed.']
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Translate Icon'}/>, 
  title:'Language Settings', 
  list:['We look at the way languages are integrated in your websites to increase SEO.']
  },
  {icon: <GiLighthouse color='white' className='mx-auto w-8 h-8' alt='Lighthouse shining far away'/>, 
  title: 'Lighthouse Score',
  list: ["We make use of Google's own lighthouse scoring system to improve your SEO."]
  },
],fr:[
  {icon: <RiSeedlingFill color='white' className='mx-auto text-white w-8 h-8' alt='Un semis en bon santé'/>, 
  title: 'Croissance Organique',
  list: ["Nous optimisons votre référencement car il a un impact considérable sur la croissance organique de votre entreprise."]
  },
  {icon: <BiGlasses color='white' className='mx-auto w-8 h-8' alt='Des lunettes intelligentes'/>, 
  title: 'Profond Dans Matrix',
  list: ["Nous pénétrons profondément dans le code de votre site Web afin d'effectuer des optimisations si nécessaire."]
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Icône de traduction'}/>, 
  title:'Paramètres Langue', 
  list:["Nous examinons la manière dont les langues sont intégrées dans vos sites Web afin d'améliorer le référencement."]
  },
  {icon: <GiLighthouse color='white' className='mx-auto w-8 h-8' alt='Un phare qui brille'/>, 
  title: 'Quotation "Lighthouse"',
  list: ["Nous utilisons le système de notation Lighthouse de Google pour améliorer votre référencement."]
  },
]};

let serviceList = {en:[
  {name:'Website', icons: serviceIconsWebsite['en'], title:'Step up your\ninternet game', span:'internet',text:'We build fast and modern websites from scratch to bring your story online and to organically reach new customers.'},
  {name:'e-Commerce', icons: serviceIconsShop['en'], title:'Bring your\nshop online',span:'shop', text:'We build themed e-commerces integrating secure payment services like Twint to make customers love shopping with you.'},
  {name:'Logo', icons: serviceIconsLogo['en'], title:'Put your brand\nin a new jacket',span:'brand', text:'Your current brand image feels outdated? We integrate the latest design trends to create a new logo and modern color palette.'},
  {name:'Tools', icons: serviceIconsTools['en'], title:'Tools to boost\nyour business',span:'boost', text:'We build simple tools that you can manage. Think automated customer scheduling, team planning, invoice reminders and more.'},
  {name:'Analysis', icons: serviceIconsAnalysis['en'], title:'Knowledge is\npower',span:'power', text:'We provide an in-depth report analysing your online presence inlcuding brand coherence, vision, values, speed and UX/UI.'},
  {name:'Prototypes', icons: serviceIconsPrototypes['en'], title:'We work with\nStart-ups',span:'Start-ups', text:'We help shape your ideas into functioning prototypes that convince your stakeholders and new investors.'},
  {name:'SEO Optimisation', icons: serviceIconsSEO['en'], title:'Google will\nlove your site',span:'Google', text:"We implement Search Engine Optimisation (SEO) because even a fast and beautiful website has no impact without it."},
  ],
fr:[
  {name:'Site web', icons: serviceIconsWebsite['fr'], title:'Améliorez votre\nstratégie internet', span:'internet',text:"Nous créons des sites web rapides et modernes pour mettre votre histoire en ligne afin d'atteindre de nouveaux clients de manière organique."},
  {name:'e-Commerce', icons: serviceIconsShop['fr'], title:'Mettez votre\nboutique en ligne',span:'boutique', text:"Nous créons des e-commerces à thème, intégrant des services de paiement sécurisés comme Twint pour que les clients aiment acheter chez vous."},
  {name:'Logo', icons: serviceIconsLogo['fr'], title:'Donnez un nouveau\nvisage à votre marque',span:'visage', text:"Votre image de marque actuelle vous semble dépassée ? Nous intégrons les dernières tendances pour créer un nouveau logo et une palette de couleurs modernes."},
  {name:'Outils', icons: serviceIconsTools['fr'], title:'Des outils poussant votre activité',span:'poussant', text:"Nous créons des outils simples que vous pouvez gérer. Pensez au gestion des clients, à la planification de l'équipe, aux rappels de factures et plus encore."},
  {name:'Analyses', icons: serviceIconsAnalysis['fr'], title:"La connaissance,\nc'est le pouvoir",span:'pouvoir', text:"Nous fournissons un rapport approfondi analysant votre présence en ligne, notamment la cohérence de la marque, la vision, les valeurs, la vitesse et l'interface utilisateur."},
  {name:'Prototypes', icons: serviceIconsPrototypes['fr'], title:'Nous travaillons\navec les Start-ups',span:'Start-ups', text:"Nous vous aidons à transformer vos idées en prototypes fonctionnels qui convainquent vos partenaires et vos nouveaux investisseurs."},
  {name:'Référencement', icons: serviceIconsSEO['fr'], title:'Google va adorer\nvotre site',span:'Google', text:"Nous mettons en œuvre l'optimisation pour les moteurs de recherche (SEO), car même un site web rapide et beau n'a aucun impact sans un bon référencement."},
  ]};

export default function Services({scrolled}) {
  let { width, breakPointSmall, noBlur, isOpen, toggleOpen, locale } = useAppContext();

  // let [navLight, setNavLight] = useState(false);

  function handleNavLight(event) {
    if (isOpen && event.target === document.getElementById("navBackground")) {
      toggleOpen();
    }
  }

  return (
    <>
      <Head>
        <title>{`${locale === "en" ? "Development of Professional Websites and e-Commerces in 2023" : "Création de Sites Web Professionels et e-Commerces en 2023"}`}</title>
        <meta
          name="description"
          content={`${
            locale === "en"
              ? "Get personal design and web development support for your professional website, e-commerce, logo or app with strong SEO performance, and be ready for 2023."
              : "Obtenez une support personnelle pour la conception et développement de votre site web ou e-commerce professionnel avec du référencement performant en 2023."
          }`}
        />
        {/* <link rel="canonical" href='https://ywdesign.co/services' /> */}
      </Head>

      <main className="" onClick={handleNavLight}>
        <Navbar from="Services" />

        <Title breakPointSmall={breakPointSmall} type="services" />

        <Layout>
          {/* <Subtitle name='How To' title='' span text first={true}/> */}

          {serviceList[locale].map((service, i) => {
            return (
              <Service
                key={i}
                name={service.name}
                realFirst={i === 0 ? true : false}
                first={true}
                // first={i===0?true:false}
                icons={service.icons}
                title={service.title}
                text={service.text}
                span={service.span}
                breakPointSmall={breakPointSmall}
                noBlur={noBlur}
                position={i % 2 === 0 ? "left" : "right"}
              />
            );
          })}

          {/* <Technologies breakPointSmall={breakPointSmall}/> */}

          <Contact breakPointSmall={breakPointSmall} first={width < breakPointSmall ? true : false} />
        </Layout>

        <Footer scrolled={scrolled} />
      </main>
    </>
  );
}