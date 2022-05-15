import Demo from './src/index.vue';

Demo.install = function(Vue) {
  Vue.component(Demo.name, Demo);
};

export default Demo;