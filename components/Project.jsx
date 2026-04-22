import Image from 'next/image';
import { motion } from 'framer-motion';
import Subtitle from './Subtitle';
import { useAppContext } from './Context';

const labels = {
  en: { visit: 'Visit site', stack: 'Stack' },
  fr: { visit: 'Voir le site', stack: 'Stack' },
};

export default function Project({ project, position, first, realFirst }) {
  const { width, breakPointSmall, locale } = useAppContext();
  const isSmall = width < breakPointSmall;
  const text = labels[locale] || labels.en;

  const image = (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${text.visit} — ${project.name}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 duration-300 group"
    >
      <Image
        src={project.image}
        alt={`${project.name} — ${project.tag}`}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover group-hover:scale-[1.03] duration-500"
      />
    </motion.a>
  );

  const info = (
    <div className="cursor-default">
      <Subtitle
        name={project.tag}
        title={project.name}
        span={project.name}
        first={isSmall ? true : first}
        realFirst={realFirst}
        position={position}
      />

      <p className={`text-primary font-light text-sm sm:text-base mt-4 ${position === 'right' ? 'sm:text-right' : ''}`}>
        {project.summary}
      </p>

      <ul className={`mt-6 space-y-2 ${position === 'right' ? 'sm:text-right' : ''}`}>
        {project.features.map((f) => (
          <li key={f} className="text-primary font-light text-sm sm:text-base">
            <span className="text-white font-medium mr-2">·</span>
            {f}
          </li>
        ))}
      </ul>

      <div className={`mt-6 flex flex-wrap gap-2 ${position === 'right' ? 'sm:justify-end' : ''}`}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] sm:text-xs uppercase tracking-wider text-primary/90 border border-white/15 bg-white/5 rounded-full px-3 py-1 select-none"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className={`mt-8 flex ${position === 'right' ? 'sm:justify-end' : ''}`}>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`${text.visit} — ${project.name}`}
          className="inline-flex items-center border-2 border-solid border-transparent rounded-full px-4 py-2 font-sans font-semibold text-xs uppercase tracking-wider whitespace-nowrap bg-white text-primary hover:border-primary active:bg-primary active:text-white duration-300 cursor-alias"
        >
          {text.visit}
          <span aria-hidden className="ml-2">↗</span>
        </a>
      </div>
    </div>
  );

  return (
    <section id={project.slug} className={`flex w-full gap-8 lg:gap-16 items-center ${isSmall ? 'flex-col' : ''}`}>
      <div className="flex-1 w-full">
        {isSmall ? info : position === 'left' ? info : image}
      </div>
      <div className="flex-1 w-full">
        {isSmall ? image : position === 'left' ? image : info}
      </div>
    </section>
  );
}
