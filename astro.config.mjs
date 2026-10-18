// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { LAST_MODIFIED } from './src/lib/last-modified.ts';

// https://astro.build/config
export default defineConfig({
    site: 'https://hlaclau.fr',
    base: '/',
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
    },
    trailingSlash: 'ignore',
    build: {
        format: 'directory',
    },
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [
        mdx(),
        sitemap({
            i18n: {
                defaultLocale: 'fr',
                locales: { fr: 'fr-FR', en: 'en-US' },
            },
            lastmod: LAST_MODIFIED ? new Date(LAST_MODIFIED) : undefined,
        }),
    ],
});
