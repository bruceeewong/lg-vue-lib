import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";
import path from "path";
import fs from "fs";

const isProd = process.env.NODE_ENV === "production";

const root = path.resolve(__dirname, "packages");

const plugins = [
  vue({
    css: true, // extract css from sfc into html style tag
    compileTemplate: true, // convert template to render function
  }),
];

if (isProd) {
  plugins.push(terser());
}

module.exports = fs
  .readdirSync(root)
  // 只保留文件夹
  .filter((item) => fs.statSync(path.resolve(root, item)).isDirectory())
  // 唯美一个文件夹创建对应的配置
  .map((item) => {
    const pkg = require(path.resolve(root, item, "package.json"));
    return {
      input: path.resolve(root, item, "index.js"),
      output: [
        {
          exports: "auto",
          file: path.resolve(root, item, pkg.main),
          format: "cjs",
        },
        {
          exports: "auto",
          file: path.resolve(root, item, pkg.module),
          format: "es",
        },
      ],
      plugins: plugins,
    };
  });

// module.exports = [
//   {
//     input: "index.js",
//     output: [
//       {
//         file: "dist/index.js",
//         format: "es",
//       },
//     ],
//     plugins: plugins,
//   },
// ];
