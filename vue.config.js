/**
 * @author YangLing
 * @date 2022/7/18 11:17
 */
module.exports = {
  devServer: {
    port: 9999
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: "@import './src/styles/scssconfig.scss';"
      }
    }
  }
}
