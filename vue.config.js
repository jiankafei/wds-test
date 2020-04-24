const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  assetsDir: 'assets',
  productionSourceMap: IS_DEV,
  devServer: {
    port: 9527,
    disableHostCheck: true,
    sockPath: '/sockjs-wds', // Toggle this field
  },
};
