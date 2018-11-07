import path from 'path'

// ref: https://umijs.org/config/
export default {
  publicPath: '/',
  define: {
    "__VERSION__": require('./package.json').version,
    "process.env.YL_NODE_ENV": process.env.YL_NODE_ENV,
  },
  exportStatic: {},
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true
      },
      // hd: true, // h5 高清
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/PageLoading',
      },
      title: 'yunle-template-umi',
      dll: {
        exclude: [],
        include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"],
      },
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /node_modules\//,
          /services\//,
          /utils\//,
        ],
      },
      alias:{
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        services: path.resolve(__dirname, 'src/services'),
        models: path.resolve(__dirname, 'src/models'),
      },
      // externals: {
      //   'react': 'window.React',
      //   'react-dom': 'window.ReactDOM',
      //   'react-router-dom': 'window.ReactRouterDOM'
      // },
      targets: {
        ie: 9,
      },
      theme: {
        "@primary-color": "#FA1C30",
        "@brand-primary-tap": "#FA1C30"
      },
      hardSource: false,
    }],
  ],
}
