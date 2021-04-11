import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";

const isProd = process.env.NODE_ENV === "production";

const plugins = [
  vue({
    css: true, // extract css from sfc into html style tag
    compileTemplate: true, // convert template to render function
  }),
];

if (isProd) {
  plugins.push(terser());
}

module.exports = [
  {
    input: "index.js",
    output: [
      {
        file: "dist/index.js",
        format: "es",
      },
    ],
    plugins: plugins,
  },
];
