export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  // TODO: Add real avatar images to /public/images/avatars/ and update these paths
  avatarSrc?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Rachide a su comprendre nos contraintes métier dès le premier échange. Son approche structurée et sa capacité à vulgariser les enjeux techniques pour la direction ont été déterminantes dans la réussite de notre transformation. Je le recommande sans réserve pour tout projet digital ambitieux.",
    author: "Sophie M.",
    role: "Directrice Générale",
    company: "Groupe médical",
  },
  {
    id: "t2",
    quote:
      "Le chatbot qu'il a développé pour notre association a changé notre quotidien. Nos conseillers peuvent enfin se concentrer sur l'accompagnement humain plutôt que sur les questions répétitives. Un travail sérieux, livré dans les délais et avec un suivi irréprochable.",
    author: "Jean-Pierre K.",
    role: "Directeur",
    company: "Association d'insertion",
  },
  {
    id: "t3",
    quote:
      "Ce que j'apprécie particulièrement chez Rachide, c'est sa disponibilité et sa franchise. Il n'hésite pas à dire quand une solution n'est pas la bonne pour nous, et ça, c'est rare. L'automatisation de nos process nous a permis de gagner un temps considérable dès le premier mois.",
    author: "Amélie D.",
    role: "Responsable E-Commerce",
    company: "Boutique en ligne",
  },
  {
    id: "t4",
    quote:
      "Notre nouveau site reflète enfin notre positionnement haut de gamme. Rachide a géré l'ensemble du projet avec une grande rigueur — design, technique, SEO — et nous a livré exactement ce que nous avions imaginé, en temps et en heure. Notre acquisition de clients s'en est ressentie immédiatement.",
    author: "Marc T.",
    role: "Associé fondateur",
    company: "Cabinet RH",
  },
  {
    id: "t5",
    quote:
      "Piloter la dématérialisation d'une commune n'est pas simple : contraintes réglementaires, budget serré, agents réticents. Rachide a géré tout cela avec calme et professionnalisme. Il a su fédérer toutes les parties prenantes autour d'un objectif commun. Résultat : 100% des démarches livrées à temps.",
    author: "Laurent B.",
    role: "Directeur Général des Services",
    company: "Commune de Normandie",
  },
  {
    id: "t6",
    quote:
      "Rachide a été un collaborateur hors pair au sein du service Outillage de Wabtec. Ce qui m'a immédiatement frappé, c'est sa capacité d'adaptation et sa compréhension ultra-rapide des enjeux — qu'ils soient techniques, organisationnels ou humains. Il était capable de reprendre un sujet complexe en quelques heures et d'en devenir l'interlocuteur référent. Véritable chef d'orchestre, il coordonnait simultanément nos équipes en Inde, en Roumanie et sur site en France, avec une fluidité et une sérénité qui forçaient le respect. Aucune friction, aucune perte d'information. Je le recommande sans la moindre réserve à quiconque cherche un profil capable de tenir un projet complexe dans un environnement international et exigeant.",
    author: "Matthieu Rousseau",
    role: "Manager — Service Outillage",
    company: "Wabtec Corporation",
  },
];
