import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Subtitle from '../components/Subtitle'
import TwoColumns from '../components/TwoColumns'
// import { FaTimes } from 'react-icons/fa'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Number from '../components/Number'
import Vision from '../components/Vision'
import Contact from '../components/Contact'
import { useAppContext } from '../components/Context'
import YolanMotion from '../components/YolanMotion'

// const inter = Inter({ subsets: ['latin'] })

let numbers = {en:[
{n:3,unit:'x',title:"Growth of retail sales through\ne-commerce worldwide since 2015.",text:"You better get your\nbrand online", link: "https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/"},
{n:58,unit:'%',title:`Global website traffic\nthrough mobile devices.`,text:'You better have a\nresponsive website',link:'https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/'},
{n:92,unit:'%',title:"Internet searches globally going\nthrough Google's search engine.", text:"You better optimise your\nwebsite's SEO", link:"https://www.oberlo.com/statistics/search-engine-market-share#:~:text=Handling%20over%2090%25%20of%20all,done%20through%20the%20internet%20giant."}],
fr:[
  {n:3,unit:'x',title:"La croissance des ventes au détail\nmondiales via e-commerce\ndepuis 2015.",text:"Vous avez intérêt à mettre\nvotre marque en ligne.", link: "https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/"},
  {n:58,unit:'%',title:`Le trafic mondial des sites web\nvia les appareils mobiles.`,text:'Vous avez intérêt à\navoir un site web responsive',link:'https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/'},
  {n:92,unit:'%',title:"Les recherches internet mondiales\npassant par le moteur de\nrecherche de Google.", text:"Vous avez intérêt à optimiser\nle référencement de votre site web", link:"https://www.oberlo.com/statistics/search-engine-market-share#:~:text=Handling%20over%2090%25%20of%20all,done%20through%20the%20internet%20giant."}]
}

let vision = {en: [{title:'Impact',text:'To have an impact in this world is to share your ideas and to have the many understand them.', span:''},
{title:'Excellence',text:'To succeed in whatever you do is to always be open minded to improving yourself.', span:''},
{title:'Listening',text:'Great victories are always shared and achieved only when the individual opens its ears and listens.', span:''},
{title:'Learning',text:'On the road to understanding, one has to become free from the values that make up their own reality.', span:''}
], fr:[{title:'Impact',text:"Pour avoir un impact dans ce monde, il faut partager ses idées et les faire comprendre au plus grand nombre.", span:''},
{title:'Excellence',text:"Pour réussir dans tout ce que vous faites, il faut toujours être ouvert à l'idée de s'améliorer.", span:''},
{title:'Écoute',text:"Les grandes victoires sont toujours partagées et réalisées uniquement lorsque l'individu est attentif et à l'écoute.", span:''},
{title:'Apprendre',text:"Sur la voie de la compréhension, il faut s'affranchir des valeurs qui constituent sa propre réalité.", span:''}
]}
let missionText = {en:'A positive impact on the planet and its people. I want to use my passion for graphic design and computer science to inspire and motivate the many. By building digital tools that leverage the internet more people can understand the ideas that will change the world.',
fr:"Avoir un impact positif sur la planète et ses habitants. Je veux utiliser ma passion pour le graphisme et l'informatique pour inspirer et motiver un grand nombre de personnes. En créant des outils numériques sur internet, un plus grand nombre comprendront les idées qui changeront le monde."}
let aboutmeText = {en:"I'm an open-minded and ambitious person, taking every challenge as an opportunity to learn. I love working with people and I tend to get the best out of everyone. Listening and planning skills help me to pull the team forward, achieving always-improving results, together.",
fr:"Je suis une personne ouverte d'esprit et ambitieuse, qui considère chaque défi comme une occasion d'apprendre. J'aime travailler avec les gens et j'ai tendance à tirer le meilleur de chacun. Mes compétences en matière d'écoute et de planification m'aident à faire avancer l'équipe et à obtenir des résultats toujours meilleurs, ensemble."}


export default function Aboutme({scrolled}) {

  let {width, breakPointSmall, noBlur, isOpen, toggleOpen, locale} = useAppContext();


  function handleNavLight (event) {
    if (isOpen && event.target === document.getElementById('navBackground')) {
      toggleOpen();
    };
  };

  return (
    <>
      <Head>
        <title>{`${locale === "en" ? "Our In-House Developer is an Engineer and Pro Web Designer" : "Notre Développeur est un Ingénieur et Designer Professionel"}`}</title>
        <meta
          name="description"
          content={`${
            locale === "en"
              ? "Get personal design and web development support for a professional website, e-commerce, logo or app with strong SEO performance, and be ready for 2024."
              : "Obtenez une support personnelle pour la conception et développement de votre site web ou e-commerce professionnel avec du référencement performant en 2024."
          }`}
        />
        {/* <link rel="canonical" href='https://ywdesign.co/aboutme' /> */}
      </Head>

      <main onClick={handleNavLight}>
        <Navbar from="About Me" />
        <Title breakPointSmall={breakPointSmall} type="aboutme" />

        <Layout type="text">
          <YolanMotion />

          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <TwoColumns left={true}>
                <Subtitle
                  name={`${locale === "en" ? "About" : "A Propos"}`}
                  title={`${locale === "en" ? "A little bit\nabout me" : "Quelques mots\nsur moi"}`}
                  span={`${locale === "en" ? "me" : "moi"}`}
                  first={true}
                  position={"left"}
                />
                <div className="flex text-base lg:text-base font-light  text-primary text-justify sm:text-left sm:w-2/3 lg:w-4/5">
                  <p>{aboutmeText[locale]}</p>
                </div>
              </TwoColumns>
            </div>
            {/* <TwoColumns left={width<breakPointSmall?true:false}> */}
            <div className="flex-1">
              <TwoColumns left={true}>
                <Subtitle
                  name={`${locale === "en" ? "Mission" : "Mission"}`}
                  first={true}
                  title={`${locale === "en" ? "What I want\nto achieve" : "Ce que je\nveux réaliser"}`}
                  span={`${locale === "en" ? "achieve" : "réaliser"}`}
                  position={"right"}
                />
                <div className="flex text-base lg:text-base font-light text-primary text-justify sm:text-right justify-end">
                  <p className="sm:w-2/3 lg:w-4/5">{missionText[locale]}</p>
                </div>
              </TwoColumns>
            </div>
          </div>

          <section className="flex flex-col cursor-default">
            <Subtitle
              name="Vision"
              title={`${locale === "en" ? "Everything starts\nwith a vision" : "Tout commence\npar une vision"}`}
              first={width > 1025 ? false : true}
              span="vision"
            />
            {/* <RiDoubleQuotesL className='inline-block -translate-y-3' fill='white'/>  */}
            <div className="grid grid-cols-2 gap-4  sm:gap-16 auto-rows-auto mx-auto">
              {vision[locale].map((item) => {
                return <Vision key={item.title} title={item.title} text={item.text} />;
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

          <section>
            <Subtitle
              name={`${locale === "en" ? "Numbers" : "Chiffres"}`}
              first={width > 1025 ? false : true}
              title={`${locale === "en" ? "Measure to\ndrive impact" : "Mesurez pour\navoir un impact"}`}
              span={`${locale === "en" ? "impact" : "impact"}`}
            />

            <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 cursor-default">
              {numbers[locale].map((num, i) => {
                return <Number className={``} key={i} n={num.n} unit={num.unit} link={num.link} title={num.title} text={num.text} />;
              })}
            </div>
          </section>

          {/* <section className='cursor-default'>
          <AccentTitle className='text-center' text={'Services'}/>
          </section> */}

          <Contact first={width > 1025 ? false : true} />
        </Layout>

        <Footer scrolled={scrolled} />
      </main>
    </>
  );}