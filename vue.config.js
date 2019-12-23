const path = require("path");

// if (process.env.NODE_ENV === "production") {
//   module.exports = {
//     // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
//     indexPath: "index.html",
//     publicPath: "/",
//     assetsDir: "assets",
//     // 默认在生成的静态资源文件名中包含hash以控制缓存
//     filenameHashing: false,

//     // 是否开启eslint保存检测，有效值：ture | false | 'error'
//     lintOnSave: false,

//     transpileDependencies: ["vue-echarts", "resize-detector"],

//     configureWebpack: {
//       module: {
//         rules: [
//           {
//             test: /\.tsx?$/,
//             loader: "ts-loader",
//             options: {
//               appendTsSuffixTo: [/\.vue$/],
//               transpileOnly: true,
//               getCustomTransformers: () => ({
//                 before: [
//                   require("ts-import-plugin")({
//                     libraryName: "mand-mobile"
//                   })
//                 ]
//               })
//             }
//           },
//           // {
//           //   test: /\.svg$/,
//           //   loader: "svg-sprite-loader",
//           //   include: [path.resolve("src/icons")],
//           //   options: {
//           //     symbolId: "icon-[name]"
//           //   }
//           // },
//           {
//             test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//             loader: "url-loader",
//             options: {
//               limit: 10240,
//               fallback: {
//                 loader: "file-loader",
//                 options: {
//                   name: "/assets/img/[name].[ext]"
//                 }
//               }
//             }
//             // exclude: [path.resolve("src/icons")]
//           }
//         ]
//       },
//       resolve: {
//         alias: {
//           "@": path.resolve("src"),
//           "@assets": path.resolve("src/assets"),
//           "@utils": path.resolve("src/utils"),
//           "@p": path.resolve("src/page"),
//           "@c": path.resolve("src/components"),
//           "@a": path.resolve("src/api"),
//           "@svg": path.resolve("src/my-svg")
//         }
//       }
//     }
//   };
// } else {
module.exports = {
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: "index.html",
  publicPath: "/",
  assetsDir: "assets",
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: false,

  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: false,

  transpileDependencies: ["vue-echarts", "resize-detector"],

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        "@assets": path.resolve("src/assets"),
        "@utils": path.resolve("src/utils"),
        "@p": path.resolve("src/page"),
        "@c": path.resolve("src/components"),
        "@a": path.resolve("src/api"),
        "@svg": path.resolve("src/my-svg")
      }
    },
    devServer: {
      contentBase: path.resolve(__dirname), //这里指的是服务器在哪个文件夹下起
      host: "0.0.0.0", // 服务器的IP地址，可以使用IP也可以使用localhost
      inline: true, //看下文
      compress: true, //是否起用服务端压缩
      port: 1717, //默认为8080
      hot: true,
      open: true,
      proxy: {
        "/screenApi": {
          target: "http://192.168.100.101:8076/api/DataScreen",
          changeOrigin: true,
          pathRewrite: {
            "^/screenApi": ""
          }
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 10240 }));
  }
};
// }
