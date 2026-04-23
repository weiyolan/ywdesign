import { motion } from 'framer-motion';
import { useAppContext } from '../Context';
import Subtitle from '../Subtitle';
import TechniqueChip from './TechniqueChip';

const visitLabel = { en: 'Visit site', fr: 'Voir le site' };
const techniquesLabel = { en: 'Techniques used', fr: 'Techniques utilisées' };
const stackLabel = { en: 'Stack', fr: 'Stack' };

// Shared chrome for every project section. Provides:
//  - section anchor (id={slug}) for deeplinks from ProjectsTeaser
//  - decorative big background number (1, 2, 3, 4) on the side opposite the heading
//  - the existing Subtitle component as the actual heading (matches the rest of the site)
//  - bottom strip: techniques chips + stack tags + Visit CTA
// Children = the project's unique middle composition.
export default function StoryShell({
  project,
  index,
  accent,
  position = 'left',
  span,
  isFirst = false,
  children,
}) {
  const { locale } = useAppContext();
  const visit = visitLabel[locale] || visitLabel.en;
  const techLabel = techniquesLabel[locale] || techniquesLabel.en;
  const stackLbl = stackLabel[locale] || stackLabel.en;

  // span defaults to the full project name (whole title rendered white).
  // If a story passes e.g. span="Weiler", only that word is highlighted.
  const spanText = span || project.name;

  // Decorative number sits on the opposite side of the heading.
  const numberSide =
    position === 'right' ? 'left-0 -translate-x-[10%] sm:-translate-x-[15%]' : 'right-0 translate-x-[10%] sm:translate-x-[15%]';

  return (
    <section
      id={project.slug}
      className="relative scroll-mt-24 overflow-hidden mt-36"
    >
      {/* Big decorative background number */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 100, damping: 24 }}
        className={`absolute top-0 sm:-top-8 ${numberSide} font-serif font-[600] leading-[0.8] select-none pointer-events-none text-[12rem] sm:text-[20rem] lg:text-[28rem] -z-0`}
        style={{ color: accent || '#ffffff' }}
      >
        {index}
      </motion.div>

      <div className="relative z-10">
        <Subtitle
          name={project.tag}
          title={project.name}
          span={spanText}
          text={project.summary}
          position={position}
          realFirst={isFirst}
          first={true}
        />

        <div className="mt-8 sm:mt-12">{children}</div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 130, damping: 22 }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10"
        >
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-[minmax(0,1fr)_auto] items-start">
            <div>
              <div className="text-accent uppercase font-semibold text-[11px] tracking-[0.22em] mb-3">
                {techLabel}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(project.techniques || []).map((t) => (
                  <TechniqueChip key={t}>{t}</TechniqueChip>
                ))}
              </div>

              <div className="text-accent uppercase font-semibold text-[11px] tracking-[0.22em] mb-3 mt-6">
                {stackLbl}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(project.stack || []).map((s) => (
                  <TechniqueChip key={s}>{s}</TechniqueChip>
                ))}
              </div>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${visit} — ${project.name}`}
              className="inline-flex items-center self-end sm:self-auto border-2 border-solid border-transparent rounded-full px-5 py-2.5 font-sans font-semibold text-xs uppercase tracking-[0.18em] whitespace-nowrap bg-white text-primary hover:border-primary active:bg-primary active:text-white duration-300 cursor-alias group"
            >
              {visit}
              <span aria-hidden className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
