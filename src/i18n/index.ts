export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

export const OTHER_LOCALE: Record<Locale, Locale> = { fr: 'en', en: 'fr' };

// BCP 47 / Open Graph tags for each locale.
export const LANG_TAG: Record<Locale, string> = { fr: 'fr-FR', en: 'en-US' };
export const OG_LOCALE: Record<Locale, string> = { fr: 'fr_FR', en: 'en_US' };

export function getLocale(currentLocale: string | undefined): Locale {
    return LOCALES.includes(currentLocale as Locale)
        ? (currentLocale as Locale)
        : DEFAULT_LOCALE;
}

// Home URL of a locale: `/` for the default one, `/en/` for the others.
export function homePath(locale: Locale): string {
    return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

export const ui = {
    fr: {
        about: 'À propos',
        contact: 'Contact',
        sourceCode: 'Code source',
        toggleTheme: 'Changer de thème',
        switchLanguage: 'Switch to English',
        profileOf: 'Profil de',
        notFound: {
            title: '404 - Page non trouvée',
            description: "Cette page n'existe pas",
            label: 'Introuvable',
            heading: "Cette page n'existe pas.",
            back: "← Retour à l'accueil",
        },
    },
    en: {
        about: 'About',
        contact: 'Contact',
        sourceCode: 'Source code',
        toggleTheme: 'Toggle theme',
        switchLanguage: 'Passer en français',
        profileOf: 'Profile of',
        notFound: {
            title: '404 - Page not found',
            description: "This page doesn't exist",
            label: 'Not found',
            heading: "This page doesn't exist.",
            back: '← Back to home',
        },
    },
} as const;
