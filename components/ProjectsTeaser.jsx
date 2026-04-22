import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Subtitle from './Subtitle';
import ArrowLink from './ArrowLink';
import { useAppContext } from './Context';
import projects from './data/projects';

const copy = {
  en: {
    name: 'Work',
    title: 'A few recent\nprojects',
    span: 'projects',
    text: 'Websites, portfolios and brand sites shipped recently. Tap one to explore.',
    seeAll: 'See all projects',
  },
  fr: {
    name: 'Travaux',
    title: 'Quelques projets\nrécents',
    span: 'projets',
    text: 'Sites web, portfolios et vitrines livrés récemment. Cliquez pour explorer.',
    seeAll: 'Voir tous les projets',
  },
};

export default function ProjectsTeaser() {
  const { width, breakPointSmall, locale } = useAppContext();
  const t = copy[locale] || copy.en;
  const featured = (projects[locale] || projects.en).slice(0, 3);

  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  };

  return (
    <section>
      <Subtitle
        name={t.name}
        title={t.title}
        span={t.span}
        text={t.text}
        first={width < breakPointSmall ? true : false}
        position="center"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10"
      >
        {featured.map((p) => (
          <motion.div key={p.slug} variants={card}>
            <Link
              href={`/projects#${p.slug}`}
              title={`${p.name} — ${p.tag}`}
              className="group block rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.tag}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.05] duration-500"
                />
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-primary/70">{p.tag}</div>
                <div className="text-white font-medium text-lg sm:text-xl mt-1">{p.name}</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 sm:mt-8 flex justify-center">
        <ArrowLink text={t.seeAll} to="/projects" ext={false} />
      </div>
    </section>
  );
}
