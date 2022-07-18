import { Rosetty, useRosetty } from 'rosetty-react';

import frDict from '../i18n/fr';

export const useI18n = () => {
  return useRosetty<typeof frDict>(); //Enable autocompletion base on you translation file
};

export const getDefaultLanguage = () => {
  if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('lang')) {
      return localStorage.getItem('lang') as string;
    }
  }

  if (typeof navigator !== 'undefined') {
    return navigator?.language?.toLowerCase()?.startsWith('fr') ? 'fr' : 'en';
  }

  return 'en';
};

export type RosettyReturn = Rosetty<typeof frDict>;
