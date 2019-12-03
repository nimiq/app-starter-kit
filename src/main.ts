import Vue from 'vue';
import Demo from './Demo.vue';

// Merge slot: nimiq-browser-warning

// Merge slot: nimiq-vue-components-identicons

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(Demo),
}).$mount('#app');
