import enDict from './en';

const lng: typeof enDict = {
  navbar: {
    home: 'Accueil',
    about: 'À propos',
    projects: 'Projets',
    gaming: 'Gaming',
    news: 'Actualités',
    tools: 'Outils',
  },
  components: {
    generic: {
      day: 'jour(s)',
      week: 'semaine(s)',
      month: 'mois',
      year: 'année(s)',
      hour: 'heure(s)',
      minute: 'minute(s)',
      second: 'seconde(s)',
    },
    form: {
      save: 'Envoyer',
      cancel: 'Annuler',
      confirm: 'Confirmer',
    },
    atoms: {
      alert: {
        wip: 'Cette fonctionnalité est en développement !',
        info: 'Info',
        error: 'Erreur',
        success: 'Succès',
        changesSaved: 'Tous les changements ont été enregistrés.',
        errorTryLater: 'Erreur ! Veuillez réessayer plus tard.',
        copied: 'Le texte a été copié !',
      },
      select: {
        noOptions: 'Aucun élément',
        loading: 'Chargement',
      },
    },
    layout: {
      footer: {
        source: 'Voir le code',
      },
      available: 'Je suis actuellement disponible pour une nouvelle mission ! Contactez moi !',
    },
  },
  pages: {
    error: {
      notFound: {
        title: 'Page non trouvée !',
        action: "Aller à la page d'accueil",
      },
    },
    home: {
      Im: "Je m'appelle",
      jobTitle: 'Je suis Lead Developer et Full-Stack JS Developer (Node, React) chez {{company}}',
      freelanceInfo: 'Passionné, Développeur freelance, je créé des projets et lance vos idées 🚀',
      moreAbouteMe: 'À propos de moi',
      contactMe: 'Me contacter',
    },
    cv: {
      fullStack: 'Développeur Full Stack JS',
      leadDev: 'Lead Développeur',
      address: 'Adresse',
      contact: 'Contact',
      formation: 'Formation & Diplômes',
      experiences: 'Expériences professionnelles',
      since: 'Depuis',
      about: 'À propos',
      priorities: 'Mes priorités',
      prioritiesDetails: {
        projectManagement: 'Gestion de projet claire et précise',
        qualityCode: 'Code réutilisable et documenté',
        tests: 'Tests unitaires et fonctionnelles',
        cicd: 'Processus CI / CD pour réduire la DX',
        client: 'Focus sur les clients / produits',
        security: 'Focus sur la sécurité',
        news: 'Veille technologique très fréquente',
      },
      downloadEN: 'Télécharger (EN)',
      downloadFR: 'Télécharger (FR)',
    },
    about: {
      title: 'À propos',
      description: 'Mon parcours',
      presentation: {
        '1': "Je suis Quentin, un <u>Lead Dev / développeur JS Full Stack</u> qui assure la qualité de vos projets et qui <u>facilite le développement mais aussi la vie de l'utilisateur</u>. Ma mission est de traduire les besoins des utilisateurs sur des site internets ainsi que des applications. Je m'assure notamment qu'elles s'exécutent rapidement, mais avec une excellente expérience de développement.",
        '2': "Je travaille actuellement comme {{jobTitle}} à <u>{{company}}</u>. Je m'attarde sur mes tâches pour aider l'équipe Dev dans tous les aspects: Stack technique, pratiques de développement, gestion produits, tests, déploiement, etc.",
        '3': "En tant que freelance, je fais la même chose avec un niveau d'expertise client. <u>Je me concentre sur la livraison, la qualité ainsi que les conseils sur votre stratégie en ligne</u>. Avec mon expertise SEO/SEA, je peux vous conseiller afin de créer votre site Web afin d'être sur la 1ère page de Google.",
        '4': 'Vous pouvez me trouver sur mon Discord où parfois je partage mes projets. Sur mon Github (@qlaffont), vous pouvez trouver certaines de mes librairies / projets open source. Sur mon serveur Discord, vous pouvez me contacter et parfois je partage des conseils / nouvelles techniques qui, je pense, sont intéressantes.',
      },
      cv: 'Télécharger le CV',
      experiences: 'Mes expériences',
      diplomas: 'Mes diplômes',
      services: 'Services',
      servicesDetails: {
        website: {
          title: 'Site Internet',
          description:
            "Avez-vous besoin d'un nouveau site Web ? Vous voulez un site Web statique, vous souhaitez être connecté à un CMS comme WordPress, vous voulez avoir un thème et coder votre site Web ? J'ai ce dont vous avez besoin et ce que vous attendez !",
        },
        application: {
          title: 'Application',
          description:
            'Vous souhaitez créer une application pour faciliter votre flux de travail, vous devez créer une solution de e-commerce ? Je peux le faire !',
        },
        discord: {
          title: 'Bot Discord',
          description:
            "J'adore Discord ! Probablement comme vous ! Mais vous souhaitez connecter votre application, vos données et vos services (comme Stripe, ChargeBee, Twitch, Github, Trello, etc.) sur votre serveur, mais vous ne savez pas comment le faire ? Je peux le faire !",
        },
      },
      servicesHero: {
        title: 'Travaillons ensemble !',
        description: 'Envoyez-moi un e-mail avec toutes les informations et je vais essayer de vous répondre en 48 h !',
      },
    },
    gaming: {
      title: 'Gaming',
      description: 'Mon passe-temps favori',
      experiences: 'Mes expériences',
      twitch: 'Voir sur Twitch',
      donation: 'Don',
    },
    projects: {
      title: 'Projets',
      description: 'Quelques réalisations récentes',
    },
    news: {
      title: 'Actualités',
      description: 'Mes articles et présentations',
      moreNews: "Plus d'articles",
      presentations: 'Présentations',
    },
    tools: {
      title: 'Outils & Config',
      description: 'Mes outils & mes PCs',
      config: {
        desktop: 'Ordinateur fix',
        portable: 'Ordinateur portable',
        os: 'Système',
        processor: 'Processeur',
        motherboard: 'Carte Mère',
        alimentation: 'Alimentation',
        cooler: 'Ventilateur',
        case: 'Boîtier',
        graphicCard: 'Carte Graphique',
        ram: 'RAM',
        keyboardAndMouse: 'Clavier & souris',
        keyboard: 'Clavier',
        headset: 'Casque & Micro',
        flight: 'Config pour les vols (Sim Flight)',
        driving: 'Config pour la conduite (Sim Racing)',
      },
    },
  },
};

export default lng;
