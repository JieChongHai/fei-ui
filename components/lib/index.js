// 全量引入组件
import card from "./card";

const components = {
  card,
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

export default { install };