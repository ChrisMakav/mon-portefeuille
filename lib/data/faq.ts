export interface FAQEntry {
  id: string;
  question: string;
  answer: string;
}

export const faqEntries: FAQEntry[] = [
  {
    id: "tarifs",
    question: "Comment facturez-vous vos prestations ?",
    answer:
      "Je travaille principalement en régie (tarif journalier) ou en forfait selon la nature de la mission. Le tarif est établi après un premier échange gratuit pour bien comprendre vos besoins et le volume de travail. Un devis détaillé vous est systématiquement envoyé avant tout démarrage.",
  },
  {
    id: "distance",
    question: "Travaillez-vous à distance ou en présentiel ?",
    answer:
      "Je travaille principalement à distance, ce qui me permet d'intervenir auprès de clients partout en France et à l'international. Des déplacements ponctuels en présentiel peuvent être organisés pour des ateliers, des réunions de lancement ou des formations — à définir ensemble selon vos contraintes.",
  },
  {
    id: "duree",
    question: "Quelle est la durée typique d'une mission ?",
    answer:
      "Cela varie selon la nature de la prestation. Un audit ou un conseil stratégique peut se conclure en 2 à 4 semaines. Un projet de développement web ou d'intégration IA s'étend généralement de 1 à 3 mois. Un accompagnement à la transformation peut durer de 3 à 12 mois. Nous définissons ensemble un calendrier réaliste dès le cadrage.",
  },
  {
    id: "premier-contact",
    question: "Comment démarre une collaboration ?",
    answer:
      "Tout commence par un appel de découverte de 30 minutes — gratuit et sans engagement. Je prends le temps de comprendre votre contexte, vos enjeux et vos objectifs. Ensuite, je vous envoie une proposition commerciale détaillée avec le périmètre, les livrables, le planning et le tarif. Une fois validée, nous signons un contrat et lançons la mission.",
  },
  {
    id: "secteurs",
    question: "Avez-vous une expérience dans mon secteur ?",
    answer:
      "J'ai accompagné des organisations dans des secteurs variés : santé, commerce et distribution, services aux entreprises, secteur associatif et collectivités publiques. Mes compétences en digital sont transposables à de nombreux secteurs. N'hésitez pas à me présenter votre contexte — si je ne suis pas le bon interlocuteur, je vous orienterai honnêtement.",
  },
  {
    id: "associations",
    question: "Accompagnez-vous aussi les associations et organismes publics ?",
    answer:
      "Oui, tout à fait. J'ai une expérience spécifique avec des associations et des collectivités locales, avec une sensibilité aux contraintes budgétaires et aux processus de décision de ces structures. Certaines missions peuvent être éligibles à des financements publics ou à des dispositifs de soutien à la digitalisation.",
  },
  {
    id: "suivi",
    question: "Proposez-vous un suivi après la livraison du projet ?",
    answer:
      "Oui. Chaque mission se termine par une phase de clôture qui inclut une documentation complète et un transfert de compétences. Je propose également des formules de suivi mensuel (hotline, maintenance, monitoring) pour assurer la pérennité des solutions mises en place. Ces options sont détaillées dans la proposition commerciale.",
  },
  {
    id: "confidentialite",
    question: "Comment garantissez-vous la confidentialité de nos données ?",
    answer:
      "Un accord de confidentialité (NDA) peut être signé avant tout échange sensible. Je m'engage à ne jamais partager vos données avec des tiers, à utiliser uniquement des outils conformes au RGPD et à supprimer vos données à l'issue de la mission si vous le souhaitez. La confiance est la base de toute relation durable.",
  },
];
