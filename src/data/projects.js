import portfolioPreview from '../assets/images/portfolio-final-preview.png'
import ensaGuidePreview from '../assets/images/ensa-guide-preview.png'

export const projects = [
  {
    id: 1,
    title: 'Portfolio Personnel',
    description:
      "Conception et développement d'un portfolio interactif haut de gamme. Ce projet met en œuvre des techniques avancées de React, de JavaScript et de CSS pour offrir une expérience utilisateur fluide, minimaliste et entièrement responsive.",
    stack: ['React', 'HTML', 'CSS', 'JavaScript', 'Autres...'],
    image: portfolioPreview,
    liveUrl: '#',
    githubUrl: 'https://github.com/elkihelriyad/portfolio-react',
  },
  {
    id: 2,
    title: 'ENSA Guide',
    description:
      "Plateforme d'orientation pour les étudiants de l'ENSA, centralisant les informations sur les spécialités et débouchés. Elle intègre un test d'orientation intelligent et un chatbot basé sur l'IA (Mistral AI) pour un accompagnement interactif.",
    stack: ['HTML', 'CSS', 'Python', 'SQL', 'Intégration IA (Mistral AI)'],
    image: ensaGuidePreview,
    badge: 'BIENTÔT DISPONIBLE',
    liveUrl: '#',
    githubUrl: 'https://github.com/elkihelriyad/ensa-guide',
  },
  {
    id: 3,
    title: 'Projet à venir',
    description:
      'Un nouveau projet est actuellement en cours de conception. Il sera bientôt disponible.',
    stack: [],
    image: null,
    badge: 'BIENTÔT DISPONIBLE',
    isUpcoming: true,
  },
]

export const skillsByCategory = [
  {
    title: 'Programming & Development',
    items: ['Python', 'C', 'Java'],
    iconCategory: 'programming',
  },
  {
    title: 'Web Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
    iconCategory: 'web',
  },
  {
    title: 'Databases & Analytics',
    items: ['MySQL', 'UML / MERISE', 'Power BI', 'Excel', 'MATLAB'],
    iconCategory: 'data',
  },
  {
    title: 'Tools & Environments',
    items: ['Visual Studio', 'PyCharm', 'Spyder 6', 'CodeBlocks', 'Git & GitHub'],
    iconCategory: 'tools',
  },
]