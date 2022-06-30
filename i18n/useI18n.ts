import { useRosetty } from 'rosetty-react';

import frDict from '../i18n/fr';

export const useI18n = () => {
  return useRosetty<typeof frDict>(); //Enable autocompletion base on you translation file
};
