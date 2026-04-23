import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAppContext } from '../../Context';
import { getProject } from '../../data/projects';
import StoryShell from '../StoryShell';
import ProjectHero from '../ProjectHero';
import PullQuote from '../PullQuote';

const heroBlurb = {
  en: 'Clean-beauty editorial flow. Multilingual storefront. Mobile-first end-to-end.',
  fr: 'Rythme éditorial clean-beauty. Boutique multilingue. Pensé mobile-first.',
};
const productLabel = { en: 'In the catalogue', fr: 'Au catalogue' };
const productCopy = {
  en: 'Solid shampoo bars, brewer\'s-yeast formulas and zero-waste accessories — surfaced as an editorial sequence rather than a checkout funnel.',
  fr: 'Shampoings solides, formules à la levure de bière et accessoires zéro déchet — présentés comme une séquence éditoriale plutôt qu\'un tunnel d\'achat.',
};
const editorialLabel = { en: 'The brewer\'s-yeast story', fr: 'L\'histoire de la levure de bière' };
const editorialCopy = {
  en: 'A long-form panel introduces the partnership behind the formula — beer barrels, ingredient transparency, and a quieter brand voice for buyers who read.',
  fr: 'Un panneau long format présente le partenariat derrière la formule — fûts de bière, transparence des ingrédients, et une voix de marque plus calme pour des acheteurs qui prennent le temps de lire.',
};
const detailLabel = { en: 'Mobile, refined', fr: 'Mobile, raffiné' };
const detailCopy = {
  en: 'The same calm hierarchy carries to mobile — single-column product pages, big imagery, no friction.',
  fr: 'La même hiérarchie calme se retrouve sur mobile — fiches produit en une colonne, grandes images, zéro friction.',
};

export default function NuStory() {
  const { locale, width, breakPointSmall } = useAppContext();
  const project = getProject('nu', locale);
  const isSmall = width < breakPointSmall;

  return (
    <StoryShell project={project} index={1} accent={project.accent} position="left" span="Nu" isFirst>
      {/* Hero — full-bleed editorial */}
      <ProjectHero
        src="/projects/screenshots/nu-hero-desktop.png"
        alt="Nu — editorial hero with bath imagery"
        variant="fullbleed"
        aspect="aspect-[16/9] sm:aspect-[21/9]"
        priority
        overlay={
          <>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] opacity-80 mb-2">
              {project.tag}
            </div>
            <div className="font-medium text-xl sm:text-2xl leading-tight">
              {heroBlurb[locale] || heroBlurb.en}
            </div>
          </>
        }
      />

      {/* Asymmetric two-column: large product image left, summary + features right */}
      <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="sm:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/10 border border-white/10"
        >
          <Image
            src="/projects/screenshots/nu-products.png"
            alt="Nu — product showcase grid"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 58vw, 668px"
            quality={85}
            className="object-cover"
          />
          <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.22em] bg-white/15 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20">
            {productLabel[locale] || productLabel.en}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="sm:col-span-5"
        >
          <p className="text-primary text-base sm:text-lg font-light leading-relaxed">
            {productCopy[locale] || productCopy.en}
          </p>
          <ul className="mt-6 space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="text-primary font-light text-sm sm:text-base flex gap-2">
                <span aria-hidden className="text-white font-medium select-none mt-[0.1em]">·</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Pull quote — editorial moment */}
      <div className="mt-16 sm:mt-24 px-2 sm:px-6">
        <PullQuote accent={project.accent} align={isSmall ? 'left' : 'center'}>
          {project.intro}
        </PullQuote>
      </div>

      {/* Wide editorial — brewer's yeast story */}
      <motion.figure
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: 'spring', stiffness: 110, damping: 22 }}
        className="mt-16 sm:mt-24"
      >
        <div className="relative w-full aspect-[16/8] sm:aspect-[21/8] rounded-2xl overflow-hidden bg-white/10 border border-white/10">
          <Image
            src="/projects/screenshots/nu-editorial.png"
            alt="Nu — long-form editorial panel about brewer's yeast"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
            quality={85}
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 sm:mt-4 text-primary/80 text-xs sm:text-sm font-light italic">
          <span className="text-accent uppercase not-italic font-semibold tracking-[0.22em] mr-2 text-[10px]">
            {editorialLabel[locale] || editorialLabel.en}
          </span>
          {editorialCopy[locale] || editorialCopy.en}
        </figcaption>
      </motion.figure>

      {/* Two small thumbnails — shop + mobile */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-4 sm:gap-6 items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 120, damping: 22 }}
          className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/10 border border-white/10"
        >
          <Image
            src="/projects/screenshots/nu-shop.png"
            alt="Nu — shop landing"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 60vw, 700px"
            quality={85}
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 120, damping: 22, delay: 0.08 }}
          className="relative aspect-[9/16] sm:aspect-[9/19] rounded-2xl overflow-hidden bg-white/10 border border-white/10 max-w-[260px] mx-auto sm:mx-0 sm:max-w-none"
        >
          <Image
            src="/projects/screenshots/nu-mobile.png"
            alt="Nu — mobile editorial home"
            fill
            sizes="(max-width: 640px) 60vw, 280px"
            quality={85}
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-[0.18em] bg-white/15 backdrop-blur-md text-white px-2.5 py-1.5 rounded-full border border-white/20 text-center">
            {detailLabel[locale] || detailLabel.en}
          </div>
        </motion.div>
      </div>

      <p className="mt-4 text-primary/70 text-xs sm:text-sm font-light italic">
        {detailCopy[locale] || detailCopy.en}
      </p>
    </StoryShell>
  );
}
