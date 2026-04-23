// Project data for /projects page and Home ProjectsTeaser.
// Locale-agnostic fields (slug, url, accent, stack, teaserImage) live in `shared`.
// Translatable fields (name, tag, summary, features, intro, techniques) live in `localized`.
// Each Story component resolves its data with getProject(slug, locale).

const shared = {
  nu: {
    slug: 'nu',
    url: 'https://nu-site.netlify.app/en',
    accent: '#E9D8C2',
    teaserImage: '/projects/screenshots/nu-hero-desktop.png',
    stack: ['nextjs', 'react', 'tailwind', 'sanity'],
  },
  miloweiler: {
    slug: 'miloweiler',
    url: 'https://miloweiler.com',
    accent: '#1F2A3D',
    teaserImage: '/projects/screenshots/milo-hero.png',
    stack: ['nextjs', 'react', 'tailwind', 'figma'],
  },
  'bermuda-events': {
    slug: 'bermuda-events',
    url: 'https://bermuda-events.be',
    accent: '#C9A55C',
    teaserImage: '/projects/screenshots/bermuda-hero.png',
    stack: ['nextjs', 'react', 'tailwind'],
  },
  spiree: {
    slug: 'spiree',
    url: 'https://spiree-next.netlify.app/',
    accent: '#FF7A33',
    teaserImage: '/projects/screenshots/spiree-hero.png',
    stack: ['nextjs', 'react', 'tailwind'],
  },
};

const localized = {
  en: {
    nu: {
      name: 'Nu',
      tag: 'Beauty & wellness e-commerce',
      summary:
        'A multilingual storefront for a clean-beauty brand — calm editorial pacing wrapped around a frictionless buying flow.',
      intro: 'Calm editorial pacing. Honest ingredients. Mobile-first end-to-end.',
      features: [
        'Multilingual EN/FR storefront with clear category entry points',
        'Product pages built around large imagery and ingredient transparency',
        'Fast, responsive layout tuned for mobile-first shoppers',
        'CMS-driven content so the team can ship updates without a developer',
      ],
      techniques: [
        'Multilingual i18n routing',
        'CMS-driven catalogue (Sanity)',
        'Mobile-first checkout flow',
        'Editorial product photography',
      ],
    },
    miloweiler: {
      name: 'Milo Weiler',
      tag: 'Photography portfolio',
      summary:
        'A photographer\'s portfolio split into seven chapters — from set photography to corporate, headshots to fine art — held together by a dark, cinematic shell.',
      intro: 'Seven chapters. One photographer. A story unfolds with every scroll.',
      features: [
        'Sticky chapter navigation that follows the visitor through every category',
        'Cinematic dark UI letting the imagery carry the page',
        'Per-chapter image carousels surfacing the strongest frames first',
        'Lightweight build with strong Lighthouse performance',
      ],
      techniques: [
        'Custom sectioned scroll',
        'Sticky chapter navigation',
        'Cinematic dark UI',
      ],
    },
    'bermuda-events': {
      name: 'Bermuda Events',
      tag: 'Events agency · Belgium',
      summary:
        'A brand site for a Belgian events agency — past productions framed at premium scale, with a contact funnel built to qualify the right leads.',
      intro: 'Brand-trust at every fold. Refined details. Belgian elegance.',
      features: [
        'Project gallery showcasing signature corporate and private events',
        'Trusted-by logo strip building credibility above the fold',
        'Dedicated contact funnel optimised for qualified requests',
        'Bilingual-ready structure (NL/FR/EN) for the local market',
      ],
      techniques: [
        'Bilingual NL/FR/EN routing',
        'Brand-trust logo strip',
        'Contact funnel optimisation',
      ],
    },
    spiree: {
      name: 'Spiree',
      tag: 'Activewear brand · 100% Merino',
      summary:
        'A brand site for an independent sportswear label — bold gradient blocks, the Sun & Moon merino base layers, and a story arc built around the runner Astrid.',
      intro: 'Bold colour. Honest fabric. A brand built for women who run.',
      features: [
        'Bold gradient design system carrying the brand voice across every section',
        'Product collection modules — Sun (warm) & Moon (cool) — with shared layout DNA',
        'Story-driven Meet Astrid section explaining the brand mission',
        'Performance-tuned with deferred imagery on the longer scroll',
      ],
      techniques: [
        'Bold gradient design system',
        'Product collection modules',
        'Story-driven brand pages',
      ],
    },
  },
  fr: {
    nu: {
      name: 'Nu',
      tag: 'E-commerce beauté & bien-être',
      summary:
        'Une boutique multilingue pour une marque de clean-beauty — un rythme éditorial apaisé autour d\'un parcours d\'achat fluide.',
      intro: 'Rythme éditorial apaisé. Ingrédients honnêtes. Pensé mobile-first.',
      features: [
        'Boutique multilingue EN/FR avec des points d\'entrée clairs par catégorie',
        'Fiches produit centrées sur les visuels et la transparence des ingrédients',
        'Mise en page rapide et responsive, pensée mobile-first',
        'Contenu piloté via un CMS pour que l\'équipe publie sans développeur',
      ],
      techniques: [
        'Routing i18n multilingue',
        'Catalogue piloté par CMS (Sanity)',
        'Tunnel d\'achat mobile-first',
        'Photographie produit éditoriale',
      ],
    },
    miloweiler: {
      name: 'Milo Weiler',
      tag: 'Portfolio photographe',
      summary:
        'Le portfolio d\'un photographe en sept chapitres — set photography, corporate, portraits, fine art — rassemblés dans un shell sombre et cinématographique.',
      intro: 'Sept chapitres. Un photographe. Une histoire qui se déplie au fil du scroll.',
      features: [
        'Navigation par chapitre qui suit le visiteur dans chaque catégorie',
        'UI sombre et cinématographique qui laisse les images porter la page',
        'Carrousels par chapitre mettant en avant les meilleures images en premier',
        'Build léger avec d\'excellentes performances Lighthouse',
      ],
      techniques: [
        'Scroll par sections custom',
        'Navigation par chapitre persistante',
        'UI sombre cinématographique',
      ],
    },
    'bermuda-events': {
      name: 'Bermuda Events',
      tag: 'Agence événementielle · Belgique',
      summary:
        'Un site vitrine pour une agence événementielle belge — productions passées mises en valeur à grande échelle, et un tunnel de contact conçu pour qualifier les bons prospects.',
      intro: 'Confiance de marque à chaque écran. Détails raffinés. Élégance belge.',
      features: [
        'Galerie de projets mettant en avant les événements corporate et privés signatures',
        'Bandeau "Trusted by" qui établit la crédibilité au-dessus de la ligne de flottaison',
        'Tunnel de contact dédié, optimisé pour des demandes qualifiées',
        'Structure prête pour le bilingue (NL/FR/EN) adaptée au marché local',
      ],
      techniques: [
        'Routing bilingue NL/FR/EN',
        'Bandeau "Trusted by"',
        'Optimisation du tunnel de contact',
      ],
    },
    spiree: {
      name: 'Spiree',
      tag: 'Marque sportswear · 100% Mérinos',
      summary:
        'Un site de marque pour un label de sportswear indépendant — blocs en dégradés audacieux, la base layer Sun & Moon en mérinos, et un arc narratif autour de la runneuse Astrid.',
      intro: 'Couleur audacieuse. Tissu honnête. Une marque pour les femmes qui courent.',
      features: [
        'Design system en dégradés audacieux qui porte la voix de marque dans chaque section',
        'Modules collection — Sun (chaud) & Moon (froid) — avec un ADN de layout partagé',
        'Section narrative "Meet Astrid" expliquant la mission de la marque',
        'Performance optimisée avec chargement différé sur le scroll long',
      ],
      techniques: [
        'Design system en dégradés audacieux',
        'Modules collection produit',
        'Pages de marque narratives',
      ],
    },
  },
};

export const slugs = ['nu', 'miloweiler', 'bermuda-events', 'spiree'];

export function getProject(slug, locale) {
  const loc = localized[locale] ? locale : 'en';
  return { ...shared[slug], ...localized[loc][slug] };
}

export function getAllProjects(locale) {
  return slugs.map((slug) => getProject(slug, locale));
}

const projects = { shared, localized };
export default projects;
