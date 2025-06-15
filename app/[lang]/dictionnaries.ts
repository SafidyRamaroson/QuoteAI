import 'server-only';

export type Dictionary = typeof import('@/dictionnaries/fr.json');

const dictionaries: Record<'fr' | 'en', () => Promise<Dictionary>> = {
  fr: async () => (await import('@/dictionnaries/fr.json')).default,
  en: async () => (await import('@/dictionnaries/en.json')).default,
};

export const getDictionary = async (locale: 'fr' | 'en'): Promise<Dictionary> => {
  if (!locale || !['fr', 'en'].includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return dictionaries[locale]();
};
