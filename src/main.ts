import Vue from 'vue';
import Demo from './Demo.vue';

// Merge slot: nimiq-browser-warning
// On browser warning stop further execution.
if (window.hasBrowserWarning) {
    throw new Error('Execution aborted due to browser warning');
}

// Merge slot: nimiq-vue-components-identicons

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(Demo),
}).$mount('#app');
