import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAppContext } from '../../Context';
import { getProject } from '../../data/projects';
import StoryShell from '../StoryShell';

const chapters = {
  en: [
    { num: '01', name: 'Highlighted', count: 10 },
    { num: '02', name: 'Set Photography', count: 17 },
    { num: '03', name: 'Corporate & Brand', count: 4 },
    { num: '04', name: 'Event & Documentaries', count: 6 },
    { num: '05', name: 'Portraits & Headshots', count: 12 },
    { num: '06', name: 'Product & Food', count: 4 },
    { num: '07', name: 'Fine Art', count: 2 },
  ],
  fr: [
    { num: '01', name: 'Highlighted', count: 10 },
    { num: '02', name: 'Set Photography', count: 17 },
    { num: '03', name: 'Corporate & Brand', count: 4 },
    { num: '04', name: 'Event & Documentaires', count: 6 },
    { num: '05', name: 'Portraits & Headshots', count: 12 },
    { num: '06', name: 'Product & Food', count: 4 },
    { num: '07', name: 'Fine Art', count: 2 },
  ],
};
const chaptersLabel = { en: '7 chapters · 55 projects', fr: '7 chapitres · 55 projets' };
const galleryItems = {
  en: [
    { src: '/projects/screenshots/milo-set-photo.png', label: 'Set Photography', count: '17 projects' },
    { src: '/projects/screenshots/milo-corporate.png', label: 'Corporate & Brand', count: '4 projects' },
    { src: '/projects/screenshots/milo-about.png', label: 'About — Four Chapters', count: 'On scroll' },
  ],
  fr: [
    { src: '/projects/screenshots/milo-set-photo.png', label: 'Set Photography', count: '17 projets' },
    { src: '/projects/screenshots/milo-corporate.png', label: 'Corporate & Brand', count: '4 projets' },
    { src: '/projects/screenshots/milo-about.png', label: 'About — Quatre chapitres', count: 'Au scroll' },
  ],
};

export default function MiloStory() {
  const { locale } = useAppContext();
  const project = getProject('miloweiler', locale);
  const chs = chapters[locale] || chapters.en;
  const gallery = galleryItems[locale] || galleryItems.en;

  return (
    <StoryShell project={project} index={2} accent={project.accent} position="right" span="Weiler">
      {/* Hero: layered cinematic frames — large back image, smaller front image offset bottom-right */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-[28px] overflow-hidden bg-[#0a0d18] border border-white/15"
        >
          <Image
            src="/projects/screenshots/milo-hero.png"
            alt="Milo Weiler — Highlighted chapter, dancer on dark stage"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
            quality={88}
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/80 font-semibold">
            01 · Highlighted
          </div>
        </motion.div>

        {/* Offset second frame bottom-right (desktop only — mobile drops to stacked grid below) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', stiffness: 110, damping: 22, delay: 0.18 }}
          className="hidden sm:block absolute -bottom-12 -right-2 lg:-right-6 w-[42%] aspect-[16/10] rounded-xl overflow-hidden bg-[#0a0d18] border border-white/20 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
        >
          <Image
            src="/projects/screenshots/milo-set-photo.png"
            alt="Milo Weiler — Set Photography"
            fill
            sizes="42vw"
            quality={85}
            className="object-cover"
          />
          <div className="absolute bottom-2 right-2 text-[9px] uppercase tracking-[0.28em] text-white/85 font-semibold">
            02 · Set Photography
          </div>
        </motion.div>
      </div>

      {/* Dark manifesto panel + chapter list */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 110, damping: 22 }}
        className="mt-20 sm:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10"
      >
        <div className="lg:col-span-7 relative rounded-2xl sm:rounded-[28px] overflow-hidden bg-[#0c111e] border border-white/10 p-7 sm:p-12">
          <div aria-hidden className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full opacity-30 blur-[120px]" style={{ backgroundColor: project.accent }} />
          <div className="relative">
            <div className="text-white/50 uppercase font-semibold text-[10px] sm:text-[11px] tracking-[0.28em] mb-4">
              Manifesto
            </div>
            <p className="font-serif text-white text-2xl sm:text-3xl lg:text-4xl leading-snug font-[450] tracking-[-0.01em]">
              &ldquo;{project.intro}&rdquo;
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl sm:rounded-[28px] bg-white/[0.04] border border-white/10 backdrop-blur-sm p-6 sm:p-8">
          <div className="text-accent uppercase font-semibold text-[11px] tracking-[0.22em] mb-4">
            {chaptersLabel[locale] || chaptersLabel.en}
          </div>
          <ul className="space-y-1">
            {chs.map((c) => (
              <li key={c.num} className="flex items-baseline gap-3 sm:gap-4 py-1.5 border-b border-white/5 last:border-b-0">
                <span className="font-mono text-white/60 text-[11px] tracking-wider w-6">{c.num}</span>
                <span className="text-primary font-medium text-sm sm:text-base flex-1">{c.name}</span>
                <span className="text-primary/70 font-light text-[11px] sm:text-xs">{c.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* 3-up cinematic gallery */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
      >
        {gallery.map((g) => (
          <motion.figure
            key={g.src}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 22 } },
            }}
            className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0a0d18] border border-white/10 group"
          >
            <Image
              src={g.src}
              alt={`Milo Weiler — ${g.label}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
              quality={85}
              className="object-cover duration-700 group-hover:scale-[1.04]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <figcaption className="absolute bottom-3 left-3 right-3 text-white">
              <div className="text-[9px] uppercase tracking-[0.28em] opacity-70">{g.count}</div>
              <div className="font-serif text-base sm:text-lg font-[500] mt-0.5">{g.label}</div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>

      {/* Features list — small */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 130, damping: 22 }}
        className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2"
      >
        {project.features.map((f) => (
          <div key={f} className="text-primary/90 font-light text-sm sm:text-base flex gap-2">
            <span aria-hidden className="text-white font-medium">·</span>
            <span>{f}</span>
          </div>
        ))}
      </motion.div>
    </StoryShell>
  );
}
