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
        noOptions: 'Aucun élement',
        loading: 'Chargement',
      },
    },
    layout: {
      footer: {
        language: 'Mettre en Anglais',
      },
    },
  },
  pages: {
    error: {
      notFound: {
        title: 'Page non trouvée !',
      },
    },
    home: {
      Im: "Je m'appelle",
      jobTitle: 'Je suis Lead Developer et Full-Stack JS Developer (Node, React) chez {{company}}',
      freelanceInfo: "Dans mon temps libre, Je suis dévelopeur freelance et j'adore créer des choses pour le fun.",
      moreAbouteMe: 'À propos de moi',
      contactMe: 'Me contacter',
    },
  },
  yup: {
    mixed: {
      default: 'Ce champ est invalid.',
      required: 'Ce champ doit être remplis.',
      oneOf: 'Ce champ doit contenir une de ces valeurs {{values}}.',
      notOneOf: 'Ce champ ne doit pas contenir une de ces valeurs {{values}}.',
      defined: 'Ce champ doit être défini.',
    },
    string: {
      default: 'Ce champ est invalid.',
      required: 'Ce champ doit être remplis.',
      length: 'Ce champ doit faire {{length}} caractères.',
      min: 'Ce champ doit faire au minimum {{min}} caractères.',
      max: 'Ce champ doit faire au maximum {{max}} caractères.',
      matches: 'Ce champ doit respecter la regex ({{regex}}).',
      email: 'Ce champ doit être un email valid.',
      url: 'Ce champ doit contenir une url valide. (Commençant par http:// ou https://).',
      uuid: 'Ce champ doit être un UUID valid.',
      trim: "Ce champ doit être trimmé (pas d'espace avant ou après).",
      lowercase: 'Ce champ doit être en minuscule.',
      uppercase: 'Ce champ doit être en majuscule.',
    },
    number: {
      min: 'Ce champ doit être plus grand ou égal à {{min}}.',
      max: 'Ce champ doit être plus petit ou égal à {{max}}.',
      lessThan: 'Ce champ doit être plus petit que {{less}}.',
      moreThan: 'Ce champ doit être plus petit que {{more}}.',
      positive: 'Ce champ doit être un nombre positif.',
      negative: 'Ce champ doit être un nombre négatif.',
      integer: 'Ce champ doit être un nombre entier.',
    },
    date: {
      min: 'Ce champ doit contenir une date après le {{min}}.',
      max: 'Ce champ doit contenir une date avant le {{max}}.',
      dateAfterPreviousValue: 'Ce champ doit contenir une date qui se passe après la date précédente.',
    },
    boolean: {
      isValue: 'Ce champ doit avoir la valeur {{value}}.',
    },
    object: {
      noUnkown: 'Ce champ contient des clés inconnus.',
    },
    array: {
      min: 'Ce champ doit contenir au minimum {{min}} élément(s).',
      max: 'Ce champ doit contenir au maximum {{max}} élément(s).',
      length: 'Ce champ doit contenir {{length}} élément(s).',
    },
  },
};

export default lng;
