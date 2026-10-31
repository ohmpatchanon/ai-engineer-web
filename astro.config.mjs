import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://roadtoai.engineer',
  output: 'static',
  build: { format: 'directory' }
});
