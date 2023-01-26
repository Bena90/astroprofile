import mdx from "@astrojs/mdx";
import { defineConfig } from 'astro/config';

export default defineConfig({
    markdown: {
      drafts: true,
    },
    integrations: [mdx({
        drafts: true,
      })],
  });
