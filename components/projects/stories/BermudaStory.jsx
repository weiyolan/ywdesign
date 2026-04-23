import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAppContext } from '../../Context';
import { getProject } from '../../data/projects';
import StoryShell from '../StoryShell';
import PullQuote from '../PullQuote';

const trustedBy = ['Beeple', 'Unikoo', 'Fever', 'Studio Capiche'];
const trustedLabel = { en: 'Trusted by', fr: 'Choisi par' };
const aboutLabel = { en: 'About the agency', fr: 'À propos de l\'agence' };
const aboutCopy = {
  en: 'Bermuda Events is an Antwerp-based agency that turns venues, food and atmosphere into a single experience. The site frames their work as a portfolio rather than a service list.',
  fr: 'Bermuda Events est une agence basée à Anvers qui transforme lieux, gastronomie et ambiance en une expérience unique. Le site présente leur travail comme un portfolio plutôt qu\'une liste de services.',
};
const teamLabel = { en: 'The network behind it', fr: 'Le réseau derrière l\'agence' };
const teamCopy = {
  en: 'A small team of event managers, communication leads and a freelance web partner — surfaced openly on the site.',
  fr: 'Une petite équipe d\'event managers, de leads communication et d\'un partenaire web freelance — présentée ouvertement sur le site.',
};
const contactLabel = { en: 'Contact funnel', fr: 'Tunnel de contact' };
const contactCopy = {
  en: 'A focused contact page replaces the generic form — built to capture the right brief in one pass.',
  fr: 'Une page de contact focalisée remplace le formulaire générique — pensée pour capturer le bon brief en une seule fois.',
};

export default function BermudaStory() {
  const { locale } = useAppContext();
  const project = getProject('bermuda-events', locale);

  return (
    <StoryShell project={project} index={3} accent={project.accent} position="left" span="Events">
      {/* Hero diptych: large left, narrow stacked right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-[28px] overflow-hidden bg-white/10 border border-white/10 group"
        >
          <Image
            src="/projects/screenshots/bermuda-hero.png"
            alt="Bermuda Events — historic arched venue, gathered tables"
            fill
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 60vw, 750px"
            quality={88}
            className="object-cover duration-700 group-hover:scale-[1.02]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <div
              className="inline-block px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.22em] font-semibold text-white border"
              style={{ backgroundColor: `${project.accent}55`, borderColor: `${project.accent}99` }}
            >
              Get Lost In The Experience
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-4 grid grid-rows-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 110, damping: 22 }}
            className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden bg-white/10 border border-white/10"
          >
            <Image
              src="/projects/screenshots/bermuda-section2.png"
              alt="Bermuda Events — Trusted By logos and three pillars"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              quality={85}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 110, damping: 22, delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6 flex flex-col justify-between"
            style={{ background: `linear-gradient(135deg, ${project.accent}1A, transparent 70%)` }}
          >
            <div>
              <div className="text-accent uppercase font-semibold text-[10px] tracking-[0.22em] mb-2">
                {trustedLabel[locale] || trustedLabel.en}
              </div>
              <ul className="space-y-1.5">
                {trustedBy.map((b) => (
                  <li key={b} className="text-white font-medium text-base sm:text-lg leading-tight">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-primary/70 font-light text-[11px] sm:text-xs mt-4">
              NL · FR · EN
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pull quote */}
      <div className="mt-16 sm:mt-24 px-2 sm:px-6">
        <PullQuote accent={project.accent} align="left">
          {project.intro}
        </PullQuote>
      </div>

      {/* About panel — bermuda-gallery with offset card */}
      <div className="mt-12 sm:mt-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-[28px] overflow-hidden bg-white/10 border border-white/10"
        >
          <Image
            src="/projects/screenshots/bermuda-gallery.png"
            alt="Bermuda Events — banquet hall about-us section"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
            quality={85}
            className="object-cover"
          />
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', stiffness: 110, damping: 22, delay: 0.12 }}
          className="relative sm:absolute sm:bottom-6 sm:right-6 sm:max-w-sm mt-4 sm:mt-0 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 text-primary shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
        >
          <div className="text-accent uppercase font-semibold text-[10px] tracking-[0.22em] mb-2">
            {aboutLabel[locale] || aboutLabel.en}
          </div>
          <p className="text-primary text-sm sm:text-base font-light leading-relaxed">
            {aboutCopy[locale] || aboutCopy.en}
          </p>
        </motion.aside>
      </div>

      {/* Two-up: team + contact */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
      >
        <motion.figure
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 22 } },
          }}
          className="rounded-2xl overflow-hidden bg-white/10 border border-white/10"
        >
          <div className="relative aspect-[16/10]">
            <Image
              src="/projects/screenshots/bermuda-events.png"
              alt="Bermuda Events — Our Network team section"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              quality={85}
              className="object-cover"
            />
          </div>
          <figcaption className="p-5 sm:p-6">
            <div className="text-accent uppercase font-semibold text-[10px] tracking-[0.22em] mb-2">
              {teamLabel[locale] || teamLabel.en}
            </div>
            <p className="text-primary font-light text-sm sm:text-base leading-relaxed">
              {teamCopy[locale] || teamCopy.en}
            </p>
          </figcaption>
        </motion.figure>

        <motion.figure
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 22 } },
          }}
          className="rounded-2xl overflow-hidden bg-white/10 border border-white/10"
        >
          <div className="relative aspect-[16/10]">
            <Image
              src="/projects/screenshots/bermuda-contact.png"
              alt="Bermuda Events — contact funnel"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              quality={85}
              className="object-cover"
            />
          </div>
          <figcaption className="p-5 sm:p-6">
            <div className="text-accent uppercase font-semibold text-[10px] tracking-[0.22em] mb-2">
              {contactLabel[locale] || contactLabel.en}
            </div>
            <p className="text-primary font-light text-sm sm:text-base leading-relaxed">
              {contactCopy[locale] || contactCopy.en}
            </p>
          </figcaption>
        </motion.figure>
      </motion.div>

      {/* Features list */}
      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
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
