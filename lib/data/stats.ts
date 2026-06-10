export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export const stats: Stat[] = [
  {
    value: "15+",
    label: "Années d'expérience",
    description: "En ingénierie industrielle et transformation digitale",
  },
  {
    value: "50+",
    label: "Projets livrés",
    description: "De la phase offre à la mise en service",
  },
  {
    value: "30+",
    label: "Clients accompagnés",
    description: "Grands groupes, PME, associations et collectivités",
  },
  {
    value: "4",
    label: "Secteurs d'activité",
    description: "Ferroviaire, Aéronautique, Pétrole & Gaz, Digital",
  },
  {
    value: "95%",
    label: "Taux de satisfaction",
    description: "Mesuré par retour client en fin de mission",
  },
  {
    value: "24h",
    label: "Délai de réponse",
    description: "Garantie de réactivité sur toutes les demandes",
  },
];
