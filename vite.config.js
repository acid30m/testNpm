import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import { defineConfig } from 'vite'

export default defineConfig ({
  base: '/testNpm/',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
    }),
  ],
});