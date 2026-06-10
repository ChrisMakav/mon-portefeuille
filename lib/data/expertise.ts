export interface ExpertiseDomain {
  id: string;
  iconName: string;
  title: string;
  description: string;
  problemsSolved: string[];
}

export const expertiseDomains: ExpertiseDomain[] = [
  {
    id: "transformation-digitale",
    iconName: "zap",
    title: "Transformation Digitale",
    description:
      "Accompagnement bout-en-bout dans la modernisation des organisations : diagnostic, stratégie, déploiement et adoption.",
    problemsSolved: [
      "Processus manuels chronophages et sources d'erreurs",
      "Absence de feuille de route numérique claire",
      "Résistances internes face au changement",
    ],
  },
  {
    id: "intelligence-artificielle",
    iconName: "brain",
    title: "Intelligence Artificielle",
    description:
      "Conception et intégration de solutions IA pragmatiques : LLM, chatbots, analyse documentaire et aide à la décision.",
    problemsSolved: [
      "Volume de données non exploité",
      "Traitement manuel de documents répétitif",
      "Manque d'outils décisionnels intelligents",
    ],
  },
  {
    id: "automatisation",
    iconName: "settings",
    title: "Automatisation",
    description:
      "Mise en place de workflows automatisés entre outils métier pour supprimer les tâches à faible valeur ajoutée.",
    problemsSolved: [
      "Saisies manuelles chronophages entre systèmes",
      "Erreurs humaines dans les transferts de données",
      "Reporting et alertes gérés à la main",
    ],
  },
  {
    id: "developpement-web",
    iconName: "code",
    title: "Développement Web",
    description:
      "Création d'interfaces et d'applications performantes, accessibles et évolutives avec les technologies modernes.",
    problemsSolved: [
      "Site vitrine obsolète ne générant pas de leads",
      "Outils internes inadaptés aux usages réels",
      "Applications lentes ou non responsives",
    ],
  },
  {
    id: "gestion-projet",
    iconName: "bar-chart",
    title: "Gestion de Projet",
    description:
      "Pilotage rigoureux des projets digitaux : cadrage, coordination des parties prenantes, suivi des délais et des budgets.",
    problemsSolved: [
      "Projets hors délais et hors budget",
      "Manque de visibilité pour la direction",
      "Coordination difficile de prestataires multiples",
    ],
  },
  {
    id: "conseil-strategique",
    iconName: "target",
    title: "Conseil Stratégique",
    description:
      "Analyse de la maturité digitale, benchmarks, recommandations technologiques pour des décisions éclairées.",
    problemsSolved: [
      "Investissements IT sans vision globale",
      "Difficultés à choisir entre solutions du marché",
      "Absence de mesure de la performance digitale",
    ],
  },
  {
    id: "formation",
    iconName: "book-open",
    title: "Formation",
    description:
      "Programmes de montée en compétences sur mesure — outils digitaux, IA, méthodes agiles — pour équipes et dirigeants.",
    problemsSolved: [
      "Faible adoption des nouveaux outils",
      "Équipes peu autonomes sur les pratiques numériques",
      "Compétences digitales insuffisantes au sein des équipes",
    ],
  },
];
