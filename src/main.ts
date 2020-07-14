import Vue from 'vue';
import App from './App.vue';
import Popover from '../component';

Vue.use(Popover);
Vue.config.productionTip = false;

new Vue({ render: h => h(App) }).$mount('#app');
