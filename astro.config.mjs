import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ai-engineer-web.patchanon-ome.workers.dev',
  output: 'static',
  build: { format: 'directory' }
});
