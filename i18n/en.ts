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
      },
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
