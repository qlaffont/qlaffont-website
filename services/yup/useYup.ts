import { isValid } from 'date-fns';
import * as yup from 'yup';

import { RosettyReturn } from '../../i18n/useI18n';

export const useYup = () => {
  yup.setLocale({
    mixed: {
      default: 'yup.mixed.default',
      required: 'yup.mixed.required',
      oneOf: ({ values }) => `yup.mixed.oneOf - ${JSON.stringify({ values })}`,
      notOneOf: ({ values }) => `yup.mixed.notOneOf - ${JSON.stringify({ values })}`,
      defined: 'yup.mixed.defined',
    },
    string: {
      length: ({ length }: { length: number }) => `yup.string.length - ${JSON.stringify({ length })}`,
      min: ({ min }) => `yup.string.min - ${JSON.stringify({ min })}`,
      max: ({ max }) => `yup.string.max - ${JSON.stringify({ max })}`,
      matches: ({ regex }) => `yup.string.matches - ${JSON.stringify({ regex })}`,
      email: 'yup.string.email',
      url: 'yup.string.url',
      uuid: 'yup.string.uuid',
      trim: 'yup.string.trim',
      lowercase: 'yup.string.lowercase',
      uppercase: 'yup.string.uppercase',
    },
    number: {
      min: ({ min }) => `yup.number.min - ${JSON.stringify({ min })}`,
      max: ({ max }) => `yup.number.max - ${JSON.stringify({ max })}`,
      lessThan: ({ less }) => `yup.number.less - ${JSON.stringify({ less })}`,
      moreThan: ({ more }) => `yup.number.more - ${JSON.stringify({ more })}`,
      positive: 'yup.number.positive',
      negative: 'yup.number.negative',
      integer: 'yup.number.integer',
    },
    date: {
      min: ({ min }) => `yup.date.min - ${JSON.stringify({ min })}`,
      max: ({ max }) => `yup.date.max - ${JSON.stringify({ max })}`,
    },
    boolean: {
      isValue: ({ value }) => `yup.boolean.isValue - ${JSON.stringify({ value })}`,
    },
    object: {
      noUnknown: `yup.boolean.noUnknown`,
    },
    array: {
      min: ({ min }) => `yup.array.min - ${JSON.stringify({ min })}`,
      max: ({ max }) => `yup.array.max - ${JSON.stringify({ max })}`,
      length: ({ length }) => `yup.array.length - ${JSON.stringify({ length })}`,
    },
  });

  return yup;
};

export const translateErrorMessage = (
  error: { message: string; type: string } | undefined,
  t: RosettyReturn['t'],
  format: RosettyReturn['format'],
) => {
  if (!error?.message || !t) {
    return undefined;
  }
  const [key, valuesString] = error.message.split('-').map((i) => i.trim());

  if (!valuesString) {
    if (error.type === 'typeError') {
      return t('yup.mixed.default');
    } else {
      return t(key as 'yup.mixed.default');
    }
  }

  const values = JSON.parse(valuesString);

  for (const [k, v] of Object.entries(values)) {
    if (typeof v === 'boolean') {
      values[k] = v ? 1 : 0;
    }

    if (Array.isArray(values[k])) {
      values[k] = values[k].join(', ');
    }

    if (typeof values[k] === 'object' && isValid(values[k])) {
      values[k] = format(values[k], 'Pp');
    } else {
      values[k];
    }
  }

  return t(key as 'yup.mixed.default', values);
};
