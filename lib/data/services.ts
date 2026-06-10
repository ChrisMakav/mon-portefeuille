export interface Service {
  id: string;
  iconName: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    id: "transformation-digitale",
    iconName: "zap",
    title: "Transformation Digitale",
    tagline: "Faites évoluer votre organisation vers le numérique",
    description:
      "J'accompagne les dirigeants dans la définition et l'exécution de leur feuille de route numérique : audit de l'existant, identification des opportunités, conduite du changement et pilotage des projets.",
    deliverables: [
      "Audit digital complet",
      "Roadmap stratégique priorisée",
      "Plan de conduite du changement",
      "Tableau de bord de suivi",
    ],
    useCases: [
      "PME souhaitant moderniser leurs outils de gestion",
      "Organisations confrontées à une transition post-COVID",
      "Entreprises en phase de croissance rapide",
    ],
  },
  {
    id: "integration-ia",
    iconName: "brain",
    title: "Intégration IA",
    tagline: "Mettez l'intelligence artificielle au service de vos objectifs",
    description:
      "De la sélection des modèles à leur déploiement opérationnel, je conçois des solutions IA adaptées à votre réalité : chatbots, analyse de données, aide à la décision et automatisation cognitive.",
    deliverables: [
      "Cadrage et choix technologique",
      "Prototype fonctionnel",
      "Intégration dans vos systèmes existants",
      "Formation des équipes",
    ],
    useCases: [
      "Optimisation du service client par chatbot",
      "Analyse automatique de documents et rapports",
      "Aide à la décision basée sur les données",
    ],
  },
  {
    id: "automatisation",
    iconName: "settings",
    title: "Automatisation des Process",
    tagline: "Éliminez les tâches répétitives, libérez vos équipes",
    description:
      "J'identifie et automatise les processus manuels qui consomment du temps et génèrent des erreurs : synchronisation de données, notifications, workflows multi-outils et reporting automatique.",
    deliverables: [
      "Cartographie des processus existants",
      "Flux automatisés (n8n, Make, scripts)",
      "Documentation et maintenance",
      "Formation aux nouveaux workflows",
    ],
    useCases: [
      "Synchronisation CRM ↔ ERP ↔ facturation",
      "Notifications et alertes automatiques",
      "Reporting hebdomadaire sans saisie manuelle",
    ],
  },
  {
    id: "developpement-web",
    iconName: "code",
    title: "Développement Web",
    tagline: "Des interfaces qui convertissent et des apps qui performent",
    description:
      "Je conçois et développe des sites vitrine, des applications métier et des plateformes sur mesure avec les technologies modernes : Next.js, React, TypeScript — performants, accessibles et évolutifs.",
    deliverables: [
      "Design UI/UX personnalisé",
      "Développement front-end & back-end",
      "Intégration CMS ou API",
      "Déploiement et optimisation SEO",
    ],
    useCases: [
      "Site vitrine ou portfolio professionnel",
      "Application métier interne",
      "Refonte d'une plateforme existante",
    ],
  },
  {
    id: "gestion-projet",
    iconName: "bar-chart",
    title: "Gestion de Projet Digital",
    tagline: "Pilotez vos projets avec méthode et transparence",
    description:
      "En tant que chef de projet externalisé, je structure, coordonne et pilote vos projets numériques de A à Z : cadrage, suivi des prestataires, reporting dirigeant et clôture dans les délais.",
    deliverables: [
      "Cahier des charges et planning",
      "Suivi hebdomadaire et reporting",
      "Coordination des prestataires",
      "Recette et clôture de projet",
    ],
    useCases: [
      "Direction de refonte digitale sans ressource interne",
      "Coordination d'une équipe prestataires",
      "Reprise en main d'un projet en difficulté",
    ],
  },
  {
    id: "conseil-strategique",
    iconName: "target",
    title: "Conseil Stratégique",
    tagline: "Prenez les bonnes décisions avec une vision claire",
    description:
      "Audit de maturité digitale, recommandations technologiques, benchmark concurrentiel — je vous aide à poser les bases d'une stratégie numérique cohérente et à long terme.",
    deliverables: [
      "Rapport d'audit de maturité digitale",
      "Recommandations stratégiques documentées",
      "Benchmark des solutions du marché",
      "Présentation exécutive",
    ],
    useCases: [
      "Direction générale souhaitant une vision externe",
      "Choix d'un nouveau système d'information",
      "Préparation d'une levée de fonds ou certification",
    ],
  },
  {
    id: "formation",
    iconName: "book-open",
    title: "Formation & Accompagnement",
    tagline: "Montez en compétences pour gagner en autonomie",
    description:
      "J'anime des ateliers pratiques et conçois des parcours de formation sur mesure — outils collaboratifs, IA au quotidien, gestion de projet agile — pour que vos équipes maîtrisent leurs nouvelles pratiques.",
    deliverables: [
      "Programme de formation personnalisé",
      "Supports pédagogiques (slides, guides)",
      "Ateliers pratiques en présentiel ou distanciel",
      "Suivi post-formation",
    ],
    useCases: [
      "Adoption d'un nouvel outil par les équipes",
      "Montée en compétences sur les outils IA",
      "Culture digitale pour le management",
    ],
  },
];
