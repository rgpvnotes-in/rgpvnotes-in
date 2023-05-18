import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.rgpvnotes.in/',
    integrations: [
        vue(),
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
            filter: (page) =>
                page !== 'https://www.rgpvnotes.in/whatsapp/' &&
                page !== 'https://www.rgpvnotes.in/not-available/',
        }),
    ],
});
