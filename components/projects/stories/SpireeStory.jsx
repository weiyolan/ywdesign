import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAppContext } from '../../Context';
import { getProject } from '../../data/projects';
import StoryShell from '../StoryShell';

const collectionLabel = { en: 'The collection', fr: 'La collection' };
const collectionItems = {
  en: [
    { name: 'Sun', mood: 'warm · core', color: '#FF7A33' },
    { name: 'Moon', mood: 'cool · ethereal', color: '#7A3DC9' },
  ],
  fr: [
    { name: 'Sun', mood: 'chaud · base', color: '#FF7A33' },
    { name: 'Moon', mood: 'froid · éthéré', color: '#7A3DC9' },
  ],
};
const fabricLabel = { en: 'The fabric', fr: 'Le tissu' };
const fabricCopy = {
  en: '100% Merino wool from sheep raised between –10°C and +30°C — odour-resistant, ultra-soft, thermoregulating, naturally quick-drying.',
  fr: '100% laine mérinos de moutons élevés entre –10°C et +30°C — résistante aux odeurs, ultra-douce, thermorégulatrice, naturellement à séchage rapide.',
};
const storyLabel = { en: 'Meet Astrid', fr: 'Rencontrer Astrid' };
const storyCopy = {
  en: 'A long-form story page introduces Astrid — the runner whose vision shapes the brand. Story-first, product-second.',
  fr: 'Une page narrative longue présente Astrid — la runneuse dont la vision façonne la marque. Histoire d\'abord, produit ensuite.',
};
const heroPullquote = {
  en: 'Empowering women to run everywhere with confidence and style.',
  fr: 'Permettre aux femmes de courir partout avec confiance et style.',
};

export default function SpireeStory() {
  const { locale } = useAppContext();
  const project = getProject('spiree', locale);
  const collection = collectionItems[locale] || collectionItems.en;

  return (
    <StoryShell project={project} index={4} accent={project.accent} position="right" span="Spiree">
      {/* Hero with diagonal gradient bleed */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-[28px] overflow-hidden bg-white/10 border border-white/10"
        >
          <Image
            src="/projects/screenshots/spiree-hero.png"
            alt="Spiree — woman running on rocky terrain with mountains"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
            quality={88}
            className="object-cover"
          />
          {/* Diagonal accent bleed */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-60"
            style={{
              background: `linear-gradient(115deg, transparent 45%, ${project.accent}80 75%, #7A3DC9 100%)`,
            }}
          />
          {/* Pull quote overlaid */}
          <div className="absolute inset-x-4 bottom-4 sm:inset-x-auto sm:left-8 sm:bottom-8 sm:max-w-lg">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/85 font-semibold mb-2">
              {project.tag}
            </div>
            <p className="font-serif text-white text-2xl sm:text-3xl lg:text-4xl leading-tight font-[450] tracking-[-0.01em]">
              {heroPullquote[locale] || heroPullquote.en}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tilted product collection — Sun + Moon */}
      <div className="mt-16 sm:mt-24">
        <div className="text-accent uppercase font-semibold text-[11px] tracking-[0.22em] mb-6">
          {collectionLabel[locale] || collectionLabel.en}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative"
        >
          <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-[28px] overflow-hidden bg-white/10 border border-white/10 sm:rotate-[-2deg] sm:transform-gpu sm:origin-center will-change-transform">
            <Image
              src="/projects/screenshots/spiree-section2.png"
              alt="Spiree — Sun and Moon collection products"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
              quality={85}
              className="object-cover"
            />
          </div>

          {/* Floating product chips */}
          <div className="hidden sm:flex absolute -bottom-4 left-1/2 -translate-x-1/2 gap-3">
            {collection.map((c) => (
              <span
                key={c.name}
                className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-white/40 text-primary font-semibold text-xs uppercase tracking-[0.18em] flex items-center gap-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]"
              >
                <span aria-hidden className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                {c.name}
                <span className="opacity-50 font-light normal-case tracking-normal text-[10px]">{c.mood}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Two-up: features panel + fabric callout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-20 sm:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 22 } },
          }}
          className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/10 border border-white/10"
        >
          <Image
            src="/projects/screenshots/spiree-features.png"
            alt="Spiree — 100% Merino features panel"
            fill
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 58vw, 668px"
            quality={85}
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 22 } },
          }}
          className="lg:col-span-5 rounded-2xl border border-white/10 p-7 sm:p-8 flex flex-col justify-between"
          style={{
            background: `linear-gradient(135deg, ${project.accent}26 0%, #7A3DC926 100%)`,
          }}
        >
          <div>
            <div className="text-accent uppercase font-semibold text-[11px] tracking-[0.22em] mb-3">
              {fabricLabel[locale] || fabricLabel.en}
            </div>
            <p className="font-serif text-white text-xl sm:text-2xl lg:text-3xl leading-snug font-[450]">
              100% Merino
            </p>
            <p className="text-primary font-light text-sm sm:text-base mt-3 leading-relaxed">
              {fabricCopy[locale] || fabricCopy.en}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['odour-resistant', 'ultra-soft', 'thermoregulating', 'quick-drying'].map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-[0.18em] text-primary/85 border border-white/15 bg-white/10 rounded-full px-2.5 py-1 select-none"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Full-bleed Astrid story closer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: 'spring', stiffness: 110, damping: 22 }}
        className="mt-16 sm:mt-24 relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-[28px] overflow-hidden bg-white/10 border border-white/10"
      >
        <Image
          src="/projects/screenshots/spiree-story.png"
          alt="Spiree — Meet Astrid story section in forest"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
          quality={85}
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-white max-w-md">
          <div
            className="inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.22em] font-semibold border bg-white/15 backdrop-blur-md border-white/20 mb-3"
          >
            {storyLabel[locale] || storyLabel.en}
          </div>
          <p className="font-light text-sm sm:text-base leading-relaxed text-white/90">
            {storyCopy[locale] || storyCopy.en}
          </p>
        </div>
      </motion.div>

      {/* Features list */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        {project.features.map((f) => (
          <div key={f} className="text-primary/90 font-light text-sm sm:text-base flex gap-2">
            <span aria-hidden className="text-white font-medium">·</span>
            <span>{f}</span>
          </div>
        ))}
      </div>
    </StoryShell>
  );
}
