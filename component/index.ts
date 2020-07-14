import component from './Index.vue';

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue);
}

export default component;
