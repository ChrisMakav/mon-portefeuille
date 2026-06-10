export interface Project {
  id: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  client: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    id: "likelemba",
    image: "/images/project-placeholder.svg",
    imageAlt: "Interface de la plateforme Likelemba",
    category: "Développement Web",
    title: "Likelemba — Plateforme de Tontine en Ligne",
    client: "MAKAV Service Digital — Projet fondateur",
    year: "2023–2024",
    summary:
      "Conception et développement complet d'une plateforme SaaS de gestion de cagnottes et tontines en ligne — de l'architecture cloud à la mise en production.",
    challenge:
      "Les tontines et cagnottes collectives sont une pratique financière solidaire très répandue au sein des diasporas africaines, mais elles reposent encore sur des échanges manuels (WhatsApp, cahiers, virement bancaire) sources d'erreurs, de litiges et d'insécurité. L'enjeu était de digitaliser ce processus tout en maintenant la confiance qui est au cœur de ces pratiques communautaires.",
    solution:
      "Conception de l'architecture technique complète (Python/Django REST, React, PostgreSQL sur AWS), développement des modules de gestion des groupes, des cotisations, des cycles de versement, des notifications automatiques et du tableau de bord administrateur. Déploiement en production avec CI/CD sur GitHub Actions.",
    results: [
      "Plateforme en production — accessible sur mk-likelemba.com",
      "Gestion multi-groupes, multi-devises et multi-cycles",
      "Notifications automatiques à chaque étape du cycle",
      "Architecture scalable AWS prête pour la montée en charge",
    ],
    technologies: ["Python", "Django", "React", "PostgreSQL", "AWS", "GitHub Actions"],
    href: "https://mk-likelemba.com",
  },
  {
    id: "wabtec-outils-web",
    image: "/images/project-placeholder.svg",
    imageAlt: "Interface de gestion des outils internes Wabtec",
    category: "Transformation Digitale",
    title: "Digitalisation des Outils Internes — Wabtec",
    client: "Wabtec Corporation — Saint-Pierre-des-Corps",
    year: "2021–2023",
    summary:
      "Responsable système dans le bureau d'études du groupe ferroviaire Wabtec : développement et déploiement des solutions web internes et externes de l'équipe outils.",
    challenge:
      "L'équipe outils de Wabtec développait des solutions logicielles (interfaces logiciels embarqués, cartes électroniques, automates) sans processus structuré de gestion de projet ni de développement web. Les délais n'étaient pas tenus et les livrables clients manquaient de traçabilité.",
    solution:
      "Mise en place d'une organisation Agile (SCRUM), pilotage de tous les projets web de la phase offre à la livraison, développement full-stack (Django/React/PostgreSQL), intégration Polarion pour la gestion des exigences et traçabilité totale, coordination technique avec les clients et les équipes internes.",
    results: [
      "Respect des délais projets : taux de livraison à temps porté à 90%+",
      "Mise en place de la traçabilité complète via Polarion",
      "Équipe de 8 développeurs coordinée selon la méthode SCRUM",
      "Réduction du time-to-market des outils internes de 40%",
    ],
    technologies: ["Polarion", "Django", "React", "PostgreSQL", "CouchDB", "Docker", "AWS", "Git", "SCRUM"],
  },
  {
    id: "total-moho-nord",
    image: "/images/project-placeholder.svg",
    imageAlt: "Projet MOHO NORD Total E&P",
    category: "Gestion de Projet",
    title: "Contrôle Projet MOHO NORD — Total E&P",
    client: "Total E&P — Projet offshore EPCC (Corée du Sud)",
    year: "2013–2015",
    summary:
      "Responsable contrôle projet sur le chantier offshore MOHO NORD (plateforme TLP semi-submersible et FPU) chez le constructeur Hyundai à Ulsan, Corée du Sud.",
    challenge:
      "Projet EPCC de construction d'une plateforme offshore multi-millions d'euros impliquant des centaines d'intervenants sur plusieurs continents. La complexité des interfaces entre paquets TLP et FPU, les contraintes HSE et les exigences de reporting vers Total et ses partenaires exigeaient un système de contrôle projet de haut niveau.",
    solution:
      "Mise en place et tenue des outils de synthèse projet (planning Primavera P6, coûts, ordres de changement, registre des risques), production des analyses d'aide à la décision pour la direction, coordination des interfaces planning entre sous-ensembles, calcul d'avancement du contracteur EPCC et reporting hebdomadaire/mensuel aux comités de pilotage.",
    results: [
      "Tableau de bord de pilotage consolidant 10+ packages projet",
      "Registre des risques TLP mis à jour mensuellement avec actions correctives",
      "Rapports de statut validés par la direction Total et les partenaires",
      "Coordination des interfaces planning pour tous les sous-ensembles critiques",
    ],
    technologies: ["Primavera P6", "Documentum", "Analyse des risques", "KPI", "AMDEC"],
  },
  {
    id: "zodiac-programme",
    image: "/images/project-placeholder.svg",
    imageAlt: "Gestion programme Zodiac Aerospace",
    category: "Gestion de Projet",
    title: "Responsable Programme Aéronautique — Zodiac Aerospace",
    client: "Zodiac Aerospace (Safran) — Programmes avionneurs",
    year: "2016–2019",
    summary:
      "Responsable Programme, interface principale entre les avionneurs, les compagnies aériennes et les équipes internes pour le pilotage de programmes siège avion en développement et en série.",
    challenge:
      "Les programmes aéronautiques impliquent des cycles de développement longs (3 à 7 ans), des exigences contractuelles extrêmement strictes des avionneurs (Airbus, Boeing) et une coordination complexe entre bureau d'études, production, achat et qualité. Le moindre retard ou écart qualité entraîne des pénalités contractuelles significatives.",
    solution:
      "Pilotage de l'ensemble du cycle de vie du programme : définition du périmètre et du budget avant ITCM, cascading des objectifs par fonction, animation des revues périodiques, gestion des risques et opportunités, coordination des interfaces cross-fonctionnelles, reporting régulier vers le comité de direction et le client, gestion des évolutions en série.",
    results: [
      "Programmes livrés dans le respect des engagements contractuels QCD",
      "Coordination de 6+ fonctions transverses (achat, BE, prod, qualité, industrialisation)",
      "Amélioration de la rentabilité des programmes en série via Lean",
      "Satisfaction client mesurée et maintenue selon les KPIs contractuels",
    ],
    technologies: ["MS Project", "SAP", "QRQC", "5M", "Lean", "Amélioration continue"],
  },
  {
    id: "ge-energy-turbines",
    image: "/images/project-placeholder.svg",
    imageAlt: "Projet GE Energy turbines à gaz",
    category: "Gestion de Projet",
    title: "Chef de Projet EPCC Centrale Électrique — GE Energy",
    client: "GE Energy — Projets Ichthys LNG & BARZAN CCGT",
    year: "2011–2015",
    summary:
      "Chef de projet pour la fourniture et l'installation de turbines à gaz/vapeur et équipements mécaniques auxiliaires sur des centrales électriques internationales (Ichthys LNG, BARZAN CCGT).",
    challenge:
      "Projets EPCC internationaux multi-disciplines sur des centrales électriques en exploitation : coordination de fournisseurs mondiaux, respect de normes strictes (ANSI, API, ASME, IEC), gestion de budgets multi-millions d'euros, interfaces avec des clients exigeants dans des environnements haute pression.",
    solution:
      "Management complet des projets (coûts, délais, qualité), lecture et maîtrise des contrats, création des PQA (Plans Qualité Affaires), organisation des revues de design, gestion des instructions de changement (DCI/ECN), pilotage dans Enovia PLM/Primavera P6, reporting aux comités de direction.",
    results: [
      "Projets livrés selon les critères QCD contractuels",
      "Gestion simultanée de plusieurs affaires internationales",
      "Application Six Sigma pour l'optimisation des processus",
      "Support technique expert auprès des équipes commerciales",
    ],
    technologies: ["Primavera P6", "Enovia PLM", "Documentum", "AMDEC", "Six Sigma", "KPI"],
  },
];
