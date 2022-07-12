export const normalize = (str: string) => {
  return str
    ? str
        .toLowerCase()
        .normalize('NFD')
        /* This is a regular expression that replaces any sequence of diacritics with a single space. */
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '')
        .replace('🛠', '')
        .trim()
        /* Replacing all the dashes with nothing. */
        .replace(/-/g, '')
        /* This is a regular expression that replaces any sequence of underscores with a single space. */
        .replace(/_/g, '')
        /* This is a regular expression that replaces any sequence of commas with a single space. */
        .replace(/,/g, '')
        /* Replacing all the periods in the company name with nothing. */
        .replace(/\./g, '')
        /* This is a regular expression that replaces any sequence of whitespace characters with a single space. */
        .replace(/\s+/g, ' ')
        /* Removing all single quotes from the company name. */
        .replace(/'/g, '')
        .replace(/’/g, '')
    : undefined;
};
