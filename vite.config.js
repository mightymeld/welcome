import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import resolve from "vite-plugin-resolve";

const babelPlugins = [];
/** @type {Record<string, string>} */
const resolved = {};

if (process.env.MIGHTYMELD) {
  babelPlugins.push("@mightymeld/runtime/babel-plugin-mightymeld");

  // Special case for Glitch sandbox: load devigner from CDN instead of local. This fixes a problem
  // where the devigner import would load very slowly or error on Glitch.
  if (process.env.SANDBOX === "glitch") {
    resolved[
      "@mightymeld/runtime/mightymeld"
    ] = `import('https://esm.sh/@mightymeld/runtime@${process.env.MIGHTYMELD}/mightymeld')`;
  }
}

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT) || 4444,
  },
  plugins: [
    react({
      babel: {
        plugins: babelPlugins,
      },
    }),
    resolve(resolved),
  ],
});
