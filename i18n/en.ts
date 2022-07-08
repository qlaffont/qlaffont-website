const lng = {
  navbar: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    gaming: 'Gaming',
    news: 'News',
    tools: 'Tools',
  },
  components: {
    generic: {
      day: 'day(s)',
      week: 'week(s)',
      month: 'month',
      year: 'year(s)',
      hour: 'hour(s)',
      minute: 'minute(s)',
      second: 'second(s)',
    },
    form: {
      save: 'Send',
      cancel: 'Cancel',
      confirm: 'Confirm',
    },
    atoms: {
      alert: {
        wip: 'This fonctionnality is in work in progress !',
        info: 'Info',
        error: 'Error',
        success: 'Success',
        changesSaved: 'All changes have been saved.',
        errorTryLater: 'Error ! Please try again later.',
        copied: 'Text have been copied !',
      },
      select: {
        noOptions: 'No element',
        loading: 'Loading',
      },
    },
    layout: {
      footer: {
        language: 'Mettre en Français',
      },
    },
  },
  pages: {
    error: {
      notFound: {
        title: 'Page not found !',
        action: 'Go to homepage',
      },
    },
    home: {
      Im: "I'm",
      jobTitle: "I'm a Lead Developer and Full-Stack JS Developer (Node, React) at {{company}}",
      freelanceInfo: "On my free time, I'm a freelance developer and I love to create stuff for fun.",
      moreAbouteMe: 'More about me',
      contactMe: 'Contact me',
    },
    about: {
      title: 'About',
      description: "Here's my story",
      presentation: {
        '1': "I'm Quentin, a <u>Full Stack JS developer</u> who specialised to ensure quality of your projects and who make your <u>developer and user life easier</u>. My mission is to translate user needs on website and applications that run blazing fast but with a great developer experience.",
        '2': "I'm currently working as a {{jobTitle}} at <u>{{company}}</u>. I work hard on my tasks to help tech team in every aspects : Tech Stack, Dev Practices, Product Management, Testing, Deployment, etc.",
        '3': "As a Freelance, I do the same thing with a customer level of expertise. <u>I'm focusing on delivery, quality and advices on your online strategy</u>. With my SEO/SEA expertise, I can advice you some strategies to make you website as we can on 1st page of Google.",
        '4': 'You can find me on Twitter (@qlaffont) where sometimes I share my thoughts about my work and my life. On my Github (@qlaffont), you can found some of my open source libraries / projects. On my Discord server, you can contact me and sometimes I share some advices / tech news that I think are interesting.',
      },
      experiences: 'My experiences',
      diplomas: 'My diplomas',
      services: 'Services',
      servicesDetails: {
        website: {
          title: 'Website',
          description:
            'Do you need a new website ? You want a static website, you want to be connected to a CMS like Wordpress, you want to have a theme and code your website ? I have what you need and what you are waiting for !',
        },
        application: {
          title: 'Application',
          description:
            'You need to build a application to make your workflow easier, you need to create an ecommerce solution ? We can do it !',
        },
        discord: {
          title: 'Discord bot',
          description:
            "I love Discord ! Probably like you ! But you want to connect your application, your data and your services (like Stripe, Chargebee, Twitch, Github, Trello, etc.) on your company server, but you don't know how to do it ? I can do it !",
        },
      },
      servicesHero: {
        title: "Let's work together !",
        description: 'Send me an email with all informations and I will try to answer you in 48 h !',
      },
    },
    gaming: {
      title: 'Gaming',
      description: "Here's my other side",
      experiences: 'My experiences',
      twitch: 'See on Twitch',
      donation: 'Donation',
    },
    projects: {
      title: 'Projects',
      description: 'Some recent works',
    },
    news: {
      title: 'News / Conferences',
      description: 'Some articles and presentations',
      moreNews: 'More Articles',
      presentations: 'Presentations',
    },
  },
  yup: {
    mixed: {
      default: 'This field is not valid.',
      required: 'This field is required.',
      oneOf: 'This field need to be one of {{values}}.',
      notOneOf: 'This field need to not be one of {{values}}.',
      defined: 'This field need to be defined.',
    },
    string: {
      default: 'This field is not valid.',
      required: 'This field is required.',
      length: 'This field need to have a length of {{length}}.',
      min: 'This field need to have a minimum length of {{min}}.',
      max: 'This field need to have a maximum length of {{max}}.',
      matches: 'This field need to respect regex ({{regex}}).',
      email: 'This field need to be a valid email address.',
      url: 'This field need to be a valid URL. (Starting with http:// or https://).',
      uuid: 'This field need to be a valid UUID.',
      trim: 'This field need to be trimmed (no space before or after content).',
      lowercase: 'This field need to be in lowercase.',
      uppercase: 'This field need to be in uppercase.',
    },
    number: {
      min: 'This field need to have a minimum value of {{min}}.',
      max: 'This field need to have a maximum value of {{max}}.',
      lessThan: 'This field need to be less or equal to {{less}}.',
      moreThan: 'This field need to be greater or equal to {{more}}.',
      positive: 'This field need to be a positive number.',
      negative: 'This field need to be a negative number.',
      integer: 'This field need to be an integer.',
    },
    date: {
      min: 'This field need to contain a date before {{min}}.',
      max: 'This field need to contain a date after {{max}}.',
      dateAfterPreviousValue: 'This field need to contain a date before the previous value.',
    },
    boolean: {
      isValue: 'This field need to have the value of {{value}}.',
    },
    object: {
      noUnkown: 'This field contain some unkown keys.',
    },
    array: {
      min: 'This field need to contain at least {{min}} item(s).',
      max: 'This field need to contain at most {{max}} item(s).',
      length: 'This field need to contain {{length}} item(s).',
    },
  },
};

export default lng;
