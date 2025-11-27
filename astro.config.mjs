// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cmfab.ca',
  integrations: [
    sitemap({
      serialize(item) {
        // Homepage: highest priority
        if (item.url === 'https://cmfab.ca/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Service pages: high priority
        if (item.url.includes('/services/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Location pages: medium-high priority
        if (item.url.includes('/locations/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Blog posts: medium priority
        if (item.url.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});