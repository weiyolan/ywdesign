// Shared project data used by /projects page and the Home ProjectsTeaser.
// Copy per project is intentionally short — owner to refine.

const projects = {
  en: [
    {
      slug: 'nu',
      name: 'Nu',
      tag: 'Beauty & wellness e-commerce',
      url: 'https://nu-site.netlify.app/en',
      image: '/projects/nu.svg',
      summary:
        'A multilingual storefront for a clean-beauty brand, focused on a calm editorial feel and a frictionless buying flow.',
      features: [
        'Multilingual (EN/FR) storefront with clear category entry points',
        'Product pages built around large imagery and ingredient transparency',
        'Fast, responsive layout tuned for mobile-first shoppers',
        'CMS-driven content so the team can ship updates without a developer',
      ],
      stack: ['nextjs', 'react', 'tailwind', 'sanity'],
    },
    {
      slug: 'miloweiler',
      name: 'Milo Weiler',
      tag: 'Musician portfolio',
      url: 'https://miloweiler.com',
      image: '/projects/miloweiler.svg',
      summary:
        'A personal site for an independent musician — a single scrollable landing that surfaces releases, shows, and contact in one flow.',
      features: [
        'Bold hero with motion-driven typography setting the artistic tone',
        'Embedded releases and links to streaming platforms',
        'Tour/upcoming shows section managed from a simple data source',
        'Lightweight build with strong Lighthouse scores',
      ],
      stack: ['nextjs', 'react', 'tailwind', 'figma'],
    },
    {
      slug: 'bermuda-events',
      name: 'Bermuda Events',
      tag: 'Events agency — Belgium',
      url: 'https://bermuda-events.be',
      image: '/projects/bermuda.svg',
      summary:
        'A brand site for a Belgian events agency — showcasing past productions and converting leads through a contact funnel.',
      features: [
        'Project gallery highlighting signature events',
        'Services overview tailored to corporate, private and brand clients',
        'Dedicated contact funnel optimised for qualified requests',
        'Bilingual-ready structure (NL/FR/EN) for the local market',
      ],
      stack: ['nextjs', 'react', 'tailwind'],
    },
    {
      slug: 'spiree',
      name: 'Spiree',
      tag: 'SaaS product — next gen',
      url: 'https://spiree-next.netlify.app/',
      image: '/projects/spiree.svg',
      summary:
        'A product marketing site for Spiree — clearly explaining the value proposition and routing visitors into the product.',
      features: [
        'Feature-first landing structure with clear CTAs at every fold',
        'Motion accents used sparingly to guide attention',
        'Scalable content structure ready for future case studies and docs',
        'Deployed on Netlify with preview builds on every branch',
      ],
      stack: ['nextjs', 'react', 'tailwind'],
    },
  ],
  fr: [
    {
      slug: 'nu',
      name: 'Nu',
      tag: 'E-commerce beauté & bien-être',
      url: 'https://nu-site.netlify.app/en',
      image: '/projects/nu.svg',
      summary:
        "Une boutique multilingue pour une marque de clean-beauty, avec une ambiance éditoriale apaisée et un parcours d'achat fluide.",
      features: [
        'Boutique multilingue (EN/FR) avec des points d\'entrée clairs par catégorie',
        'Fiches produit centrées sur les visuels et la transparence des ingrédients',
        'Mise en page rapide et responsive, pensée mobile-first',
        "Contenu piloté via un CMS pour que l'équipe publie sans développeur",
      ],
      stack: ['nextjs', 'react', 'tailwind', 'sanity'],
    },
    {
      slug: 'miloweiler',
      name: 'Milo Weiler',
      tag: 'Portfolio de musicien',
      url: 'https://miloweiler.com',
      image: '/projects/miloweiler.svg',
      summary:
        "Un site personnel pour un musicien indépendant — une landing scrollable qui rassemble sorties, concerts et contact dans un seul flow.",
      features: [
        'Hero typographique animé qui pose le ton artistique',
        'Sorties intégrées et liens vers les plateformes de streaming',
        'Section tournée/concerts gérée depuis une source de données simple',
        'Build léger avec de très bons scores Lighthouse',
      ],
      stack: ['nextjs', 'react', 'tailwind', 'figma'],
    },
    {
      slug: 'bermuda-events',
      name: 'Bermuda Events',
      tag: "Agence d'événementiel — Belgique",
      url: 'https://bermuda-events.be',
      image: '/projects/bermuda.svg',
      summary:
        "Un site vitrine pour une agence événementielle belge — mettant en valeur les productions passées et convertissant les prospects via un tunnel de contact.",
      features: [
        'Galerie de projets mettant en avant les événements signatures',
        'Présentation des services adaptée aux clients corporate, privés et marques',
        'Tunnel de contact dédié, optimisé pour des demandes qualifiées',
        'Structure prête pour le bilingue (NL/FR/EN) adaptée au marché local',
      ],
      stack: ['nextjs', 'react', 'tailwind'],
    },
    {
      slug: 'spiree',
      name: 'Spiree',
      tag: 'Produit SaaS — nouvelle génération',
      url: 'https://spiree-next.netlify.app/',
      image: '/projects/spiree.svg',
      summary:
        "Un site marketing pour Spiree — expliquant clairement la proposition de valeur et guidant les visiteurs vers le produit.",
      features: [
        'Structure feature-first avec des CTA clairs à chaque écran',
        "Accents d'animation utilisés avec parcimonie pour guider l'attention",
        'Structure de contenu évolutive, prête pour de futures études de cas et docs',
        'Déployé sur Netlify avec des previews sur chaque branche',
      ],
      stack: ['nextjs', 'react', 'tailwind'],
    },
  ],
};

export default projects;
