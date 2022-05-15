// 全量引入组件
import card from "./card";

import { version } from '../../package.json';

const components = {
  card,
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { install, version, ...components };