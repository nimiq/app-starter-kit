import Vue from 'vue';
import Demo from './Demo.vue';

// Merge slot: nimiq-browser-warning

// Merge slot: nimiq-vue-components-identicons
// Specify where the svg asset for the Nimiq identicons is located. The file gets copied to this location via
// the copy-webpack-plugin as specified in vue.config.js
window.NIMIQ_IQONS_SVG_PATH = `${process.env.BASE_URL}img/iqons.min.svg`;

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(Demo),
}).$mount('#app');
