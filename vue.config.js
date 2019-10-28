let externals = {};
if (process.env.NODE_ENV === 'production') {
  externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'element-ui': 'ELEMENT',
    axios: 'axios'
  };
}

process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  publicPath:process.env.VUE_APP_REALEASE === 'production' ? 'https://cdn-activities.mini1.cn/ssxt-pvp/':'/',
  productionSourceMap: false,
  // devServer: {
  //   proxy: {
  //     '/pvp/': {
  //       // target: 'http://pvp-test.mini.me/',
  //       target: 'http://10.0.0.203:3070',
  //       changeOrigin: true
  //     },
  //     '/user/': {
  //       // target: 'http://pvp-test.mini.me/',
  //       target: 'http://10.0.0.203:3070',
  //       changeOrigin: true
  //     }
  //   }
  // },
  configureWebpack: {
    externals
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].env = process.env.NODE_ENV
        args[0].template = 'public/index.html';
        args[0].globalData = '${web}';
        args[0].minify = {
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          collapseWhitespace: true
        };
      } else {
        args[0].template = 'public/index.html';
      }
      return args;
    });
  }
};
