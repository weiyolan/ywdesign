import Image from 'next/image';
import { motion } from 'framer-motion';

// A flexible hero primitive used by stories.
// variant:
//   'fullbleed'  — image + optional overlay glass card with copy (Nu hero)
//   'framed'     — image inside a tight glass frame (Milo hero)
//   'plain'      — bare image with rounded corners (default)
export default function ProjectHero({
  src,
  alt,
  variant = 'plain',
  aspect = 'aspect-[16/10]',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px',
  overlay,
  children,
  accent,
  className = '',
  imgClassName = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: 'spring', stiffness: 110, damping: 22 }}
      className={`relative w-full ${aspect} rounded-2xl sm:rounded-[28px] overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={85}
        className={`object-cover duration-700 group-hover:scale-[1.02] ${imgClassName}`}
      />

      {variant === 'fullbleed' && overlay && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-md p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white pointer-events-auto">
            {overlay}
          </div>
        </div>
      )}

      {variant === 'framed' && (
        <div
          aria-hidden
          className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl sm:rounded-[28px] pointer-events-none"
          style={accent ? { boxShadow: `inset 0 -120px 200px -80px ${accent}66` } : undefined}
        />
      )}

      {children}
    </motion.div>
  );
}
