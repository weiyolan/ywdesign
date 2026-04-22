import Head from 'next/head';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Project from '../components/Project';
import { useAppContext } from '../components/Context';
import projects from '../components/data/projects';

export default function Projects({ scrolled }) {
  const { width, breakPointSmall, isOpen, toggleOpen, locale } = useAppContext();

  function handleNavLight(event) {
    if (isOpen && event.target === document.getElementById('navBackground')) {
      toggleOpen();
    }
  }

  const list = projects[locale] || projects.en;

  return (
    <>
      <Head>
        <title>{`${
          locale === 'en'
            ? 'Recent Projects — Websites, Portfolios and Brand Sites in 2026'
            : 'Projets Récents — Sites Web, Portfolios et Vitrines en 2026'
        }`}</title>
        <meta
          name="description"
          content={`${
            locale === 'en'
              ? 'A look at recent websites and e-commerces built by YWdesign — clean, fast, multilingual, and ready for 2026.'
              : 'Un aperçu des sites web et e-commerces récemment réalisés par YWdesign — propres, rapides, multilingues et prêts pour 2026.'
          }`}
        />
      </Head>

      <main onClick={handleNavLight}>
        <Navbar from="Projects" />

        <Title type="projects" />

        <Layout>
          {list.map((project, i) => (
            <Project
              key={project.slug}
              project={project}
              position={i % 2 === 0 ? 'left' : 'right'}
              realFirst={i === 0}
              first={true}
            />
          ))}

          <Contact first={width < breakPointSmall ? true : false} />
        </Layout>

        <Footer scrolled={scrolled} />
      </main>
    </>
  );
}
