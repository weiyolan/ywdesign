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
fr:{icon: <BsLightningFill color='white' className='mx-auto w-8 h-8' alt={"Ic??ne d'un chemin"}/>, title:'Le Chemin', list:["Notre flux de travail est aliment?? par un processus de conception transparent qui vous permet de fournir des commentaires sur plusieurs it??rations de conception."]}}
let fingerprint = {'en':{icon: <IoFingerPrint className='w-8 text-3xl text-white' alt='Fingerprint icon'/>, title:'UX/UI', list:["User Experience and User Interaction are central when creating your design to ensure optimal interaction and click-through. "]},
fr:{icon: <IoFingerPrint className='w-8 text-3xl text-white' alt="Ic??ne d'un empreinte digitale"/>, title:'UX/UI', list:["L'exp??rience et l'interaction de l'utilisateur sont au c??ur de la cr??ation de votre design afin de garantir une interaction et un taux de clics optimal."]}}

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
  list:["En utilisant la technologie d'aujourd'hui, nous cr??ons des sites web et des outils en ligne rapides et interactifs."],  
  },
  fingerprint['fr'],
  {icon: <HiPhoto className='w-8 text-3xl text-white' alt="Ic??ne d'une base de donn??es structur??e"/>,
  title:'Gestion du contenu',
  list:["Nous int??grons un syst??me de gestion de contenu ?? votre site web, ce qui rend agr??able la mise ?? jour de vos photos, de vos billets de blog et de vos articles."],
  },
  { icon: <IconScreen color='white' className='mx-auto w-8 h-8' alt="Ic??ne d'une taille d'??cran adaptable"/>,
  title:'Adaptable aux ??crans',
  list:["50 % ?? 60 % de la consommation d'Internet provient d'appareils mobiles. Nous adaptons votre site web aux ??crans de petite, moyenne et grande taille."]
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Ic??ne de traduction'}/>, 
  title:'Plusieurs langues', 
  list:['Nous pouvons traduire votre site web en anglais, fran??ais et n??erlandais.']
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
  {icon: <RiSecurePaymentFill  className='w-8 text-3xl text-white' alt="Ic??ne d'un cadenas ferm??"/>,
  title:'Paiements S??rs',
  list:["Nous int??grons des options de paiement flexibles comme Twint et Sprite qui permettent un processus de paiement facile et s??curis?? ainsi qu'une strat??gie de prix abordable."],
  },
  {icon: <BsCurrencyExchange  className='w-8 text-3xl text-white' alt="Plusieurs devises"/>,
  title:'Devises Multiples',
  list:["Nous nous assurons que vous pouvez accepter les paiements dans les devises les plus courantes autour de vous, ce qui am??liore encore l'exp??rience d'achat globale."],
  },
  {icon: <IconGraph color='white' className='mx-auto w-8 h-8' alt='Des statistiques qui croissent'/>, 
  title: 'D??veloppez vos Activit??s',
  list: ["Nous construisons votre boutique en ligne et int??grons les outils personnalis??s dont vous avez besoin pour d??velopper votre activit??."]
  },
  {icon: <FaShippingFast color='white' className='mx-auto w-8 h-8' alt={'La plan??te qui est accessible'}/>, 
  title:'Transport Int??gr??', 
  list:["Nous int??grons des services d'exp??dition responsables et confirm??s afin que vous puissiez ??tendre votre activit?? ?? de nouveaux sites g??ographiques."]
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
  title:'Am??liorez Votre Marque' ,
  list: ["Si votre image de marque ou votre logo actuel vous semble d??pass??, nous pouvons mettre en ??uvre des changements de modernisation tout en pr??servant l'int??grit?? de vos conceptions actuelles."]
  },{icon: <IoMdColorPalette color='white' className='mx-auto w-8 h-8' alt={'Outils de conception'}/>, 
  title: 'Conception',
  list: ["Obtenez une collection d'une palette de couleurs et d'une police coh??rente avec votre logo."]
  },
  {icon: <AiOutlineAim color='white' className='mx-auto w-8 h-8' alt={'Cibler une bute'}/>, 
  title:'Ciblez le Publique', 
  list:["Guid??s par votre vision et vos valeurs, nous d??terminons votre public cible et int??grons ces informations dans un design adapt??."]
  },
  {icon: <TiSocialFacebook color='white' className='mx-auto w-8 h-8' alt={'Ic??ne de Facebook'}/>, 
  title:'R??seaux Sociaux', 
  list:["Nous r??alisons des supports marketing qui exploitent les r??seaux sociaux populaires pour accro??tre la visibilit?? de votre marque."]
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
  {icon: <BsCalendar3 className='w-8 text-3xl text-white' alt="Ic??ne d'un agenda"/>,
  title:'Agenda Automatique',
  list:["Les clients peuvent prendre des rendez-vous dans votre agenda et sont avertis lorsque vous acceptez ou modifiez leurs demandes."],
  },
  {icon: <MdManageAccounts className='w-8 text-3xl text-white' alt='Une ??quipe organis??e'/>,
  title:"Gestion d'??quipe",
  list:["Nous mettons en place des outils gr??ce auxquels vous pouvez g??rer votre ??quipe et le salaire de chaque individu, ses horaires et m??me ses informations m??dicales."],
  },{icon: <BiTimer color='white' className='mx-auto w-8 h-8' alt='Graph going up Icon'/>, 
  title: 'Lib??r??z Votre Temps',
  list: ["L'automatisation de t??ches simples peut vous lib??rer du temps et vous permettre de vous concentrer sur l'am??lioration de votre entreprise."]
  },
  {icon: <VscMerge color='white' className='mx-auto w-8 h-8' alt={'Int??gration de flux'}/>, 
  title: "Int??gration d'Activites ",
  list: ["En utilisant le d??veloppement dur, nous personnalisons votre outil pour qu'il s'int??gre parfaitement ?? votre flux d'activit??s et ?? votre style de gestion actuels."]
  },
  {icon: <BsGearWideConnected className='w-8 text-3xl text-white' alt='Engrenages connect??s'/>,
  title:'Int??gration Site Web',
  list:["Nous pouvons impl??menter les outils dans un site web existant, r??duisant ainsi votre co??t d'investissement."],
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
  list:["Nous analysons vos performances en ligne, en examinant votre image de marque globale, l'exp??rience utilisateur, la vitesse, la s??curit??, la communication et les erreurs d'orthographe."]
  },
  {icon: <IconGraph color='white' className='mx-auto w-8 h-8' alt='Des statistiques croissants'/>, 
  title: 'D??veloppez Vos Activit??s',
  list: ["Plusieurs suggestions sont faites concernant les actions et les investissements qui auront le plus d'impact sur la croissance de votre entreprise."]
  },{ icon: <IconScreen color='white' className='mx-auto w-8 h-8' alt="Ic??ne d'une taille d'??cran adaptable"/>,
  title:'Adaptabilit??',
  list:["50 % ?? 60 % de la consommation d'Internet provient d'appareils mobiles. Sachez comment votre site web s'adapte aux ??crans de toutes tailles"]
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Ic??ne de traduction'}/>, 
  title:'Choix de Langue', 
  list:["Le rapport et les recommandations sont livr??s dans la langue de votre choix, ?? savoir l'anglais, le fran??ais ou le n??erlandais."]
  },
  {icon: <GiPeaceDove color='white' className='mx-auto w-8 h-8' alt={'Un pigeon de paix'}/>, 
  title:'Z??ro Engagement', 
  list:["Vous ??tes libre de suivre le rapport et d'engager le sp??cialiste que vous pr??f??rez."]
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
 title:'Mentalit?? Ing??nierie', 
 list:["En tant qu'ing??nieur ??lectrique et biom??dical, avec une exp??rience en conception graphique et en d??veloppement web, j'apporte une perspective unique sur la table."]
 },
 {icon: <AiOutlineAim color='white' className='mx-auto w-8 h-8' alt={'Cibler le but'}/>, 
 title:'Produit Minimal Viable', 
 list:["Nous fournissons des conseils sur la d??finition du MVP pour acc??l??rer le d??veloppement, qu'il prenne la forme d'une application mobile ou web."]
 },
 {icon: <BiCodeAlt color='white' className='mx-auto w-8 h-8' alt={'Des encodages'}/>, 
 title:'La Code Pure', 
 list:["Comme nos produits sont cod??s en dur, nos prototypes sont construits en fonction de votre vision et de votre application."]
 },
 {icon: <MdEmergency color='white' className='mx-auto w-8 h-8' alt={'Ast??risque de note de bas de page'}/>, 
 title: 'Pas de Surprises',
 list: ["Vous ??tes le propri??taire du produit final, y compris du code. Pas de surprises ni de conditions g??n??rales amusantes."]
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
  {icon: <RiSeedlingFill color='white' className='mx-auto text-white w-8 h-8' alt='Un semis en bon sant??'/>, 
  title: 'Croissance Organique',
  list: ["Nous optimisons votre r??f??rencement car il a un impact consid??rable sur la croissance organique de votre entreprise."]
  },
  {icon: <BiGlasses color='white' className='mx-auto w-8 h-8' alt='Des lunettes intelligentes'/>, 
  title: 'Profond Dans Matrix',
  list: ["Nous p??n??trons profond??ment dans le code de votre site Web afin d'effectuer des optimisations si n??cessaire."]
  },
  {icon: <HiOutlineTranslate color='white' className='mx-auto w-8 h-8' alt={'Ic??ne de traduction'}/>, 
  title:'Param??tres Langue', 
  list:["Nous examinons la mani??re dont les langues sont int??gr??es dans vos sites Web afin d'am??liorer le r??f??rencement."]
  },
  {icon: <GiLighthouse color='white' className='mx-auto w-8 h-8' alt='Un phare qui brille'/>, 
  title: 'Quotation "Lighthouse"',
  list: ["Nous utilisons le syst??me de notation Lighthouse de Google pour am??liorer votre r??f??rencement."]
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
  {name:'Site web', icons: serviceIconsWebsite['fr'], title:'Am??liorez votre\nstrat??gie internet', span:'internet',text:"Nous cr??ons des sites web rapides et modernes pour mettre votre histoire en ligne afin d'atteindre de nouveaux clients de mani??re organique."},
  {name:'e-Commerce', icons: serviceIconsShop['fr'], title:'Mettez votre\nboutique en ligne',span:'boutique', text:"Nous cr??ons des e-commerces ?? th??me, int??grant des services de paiement s??curis??s comme Twint pour que les clients aiment acheter chez vous."},
  {name:'Logo', icons: serviceIconsLogo['fr'], title:'Donnez un nouveau\nvisage ?? votre marque',span:'visage', text:"Votre image de marque actuelle vous semble d??pass??e ? Nous int??grons les derni??res tendances pour cr??er un nouveau logo et une palette de couleurs modernes."},
  {name:'Outils', icons: serviceIconsTools['fr'], title:'Des outils poussant votre activit??',span:'poussant', text:"Nous cr??ons des outils simples que vous pouvez g??rer. Pensez au gestion des clients, ?? la planification de l'??quipe, aux rappels de factures et plus encore."},
  {name:'Analyses', icons: serviceIconsAnalysis['fr'], title:"La connaissance,\nc'est le pouvoir",span:'pouvoir', text:"Nous fournissons un rapport approfondi analysant votre pr??sence en ligne, notamment la coh??rence de la marque, la vision, les valeurs, la vitesse et l'interface utilisateur."},
  {name:'Prototypes', icons: serviceIconsPrototypes['fr'], title:'Nous travaillons\navec les Start-ups',span:'Start-ups', text:"Nous vous aidons ?? transformer vos id??es en prototypes fonctionnels qui convainquent vos partenaires et vos nouveaux investisseurs."},
  {name:'R??f??rencement', icons: serviceIconsSEO['fr'], title:'Google va adorer\nvotre site',span:'Google', text:"Nous mettons en ??uvre l'optimisation pour les moteurs de recherche (SEO), car m??me un site web rapide et beau n'a aucun impact sans un bon r??f??rencement."},
  ]};

export default function Services({scrolled}) {
  let {width, breakPointSmall, noBlur, isOpen,toggleOpen, locale} = useAppContext();


  // let [navLight, setNavLight] = useState(false);

  function handleNavLight (event) {
      if (isOpen && event.target === document.getElementById('navBackground')) {
        toggleOpen();
      };
  };


  return (
    <>
      <Head> 
        <title>{`${locale==='en'?'Development of Professional Websites and e-Commerces in 2023':'Cr??ation de Sites Web Professionels et e-Commerces en 2023'}`}</title>
        <meta name="description" content={`${locale==='en'?"Get personal design and web development support for your professional website, e-commerce, logo or app with strong SEO performance, and be ready for 2023.":
        "Obtenez une support personnelle pour la conception et d??veloppement de votre site web ou e-commerce professionnel avec du r??f??rencement performant en 2023."}`} />
        {/* <link rel="canonical" href='https://ywdesign.co/services' /> */}
      </Head>

      <main className="" onClick={handleNavLight}>
        <Navbar from='Services'/>
        
        <Title breakPointSmall={breakPointSmall} type='services'/>
        
        <Layout>

          {/* <Subtitle name='How To' title='' span text first={true}/> */}

          {serviceList[locale].map((service,i)=>{
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