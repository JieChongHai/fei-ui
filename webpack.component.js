const glob = require('glob');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 构造以下对象
// {
//   "card": "components/lib/card/index.js",
// }
function getComponents() {
  const components = {};
  const ignore = ['demo'];
  const files = glob.sync('./components/lib/**/index.js');
  for (const file of files) {
    const name = path.basename(path.dirname(file));
    if (ignore.indexOf(name) > -1) continue;
    components[name] = file;
  }
  return components;
}

const components = getComponents()

const config = {
  mode: 'development',
  entry: components,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].umd.js',
    library: "feiui",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
};

module.exports = config;