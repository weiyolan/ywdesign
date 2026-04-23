import { motion } from 'framer-motion';

export default function PullQuote({ children, accent, align = 'left' }) {
  const alignment =
    align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ml-auto' : 'text-left';

  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`max-w-3xl ${alignment} relative`}
    >
      <span
        aria-hidden
        className="block text-6xl sm:text-7xl leading-none font-serif font-[550] mb-2 opacity-70"
        style={{ color: accent || '#ffffff' }}
      >
        &ldquo;
      </span>
      <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-light leading-snug tracking-[-0.01em]">
        {children}
      </p>
    </motion.blockquote>
  );
}
