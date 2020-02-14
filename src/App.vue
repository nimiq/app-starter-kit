<template>
    <div id="app">
        <div id="introduction">
            <h1 class="nq-h1">Hi!</h1>
            <p class="nq-text">
                Congratulations, you just set up a fully functional, Nimiq powered app.
                This app starter kit already contains everything you need to build an awesome app.
            </p>
        </div>

        <ProjectInfo />

        <StyleInfo />

        <VueComponentsInfo />

        <HubInfo />

        <CoreInfo />

        <WhatNextInfo />
    </div>
</template>

<script lang="ts">
import '@nimiq/style/nimiq-style.min.css';
import '@nimiq/vue-components/dist/NimiqVueComponents.css';

import { Component, Vue } from 'vue-property-decorator';
import CoreInfo from './components/CoreInfo.vue';
import HubInfo from './components/HubInfo.vue';
import ProjectInfo from './components/ProjectInfo.vue';
import StyleInfo from './components/StyleInfo.vue';
import VueComponentsInfo from './components/VueComponentsInfo.vue';
import WhatNextInfo from './components/WhatNextInfo.vue';

@Component({ components: { CoreInfo, HubInfo, ProjectInfo, StyleInfo, VueComponentsInfo, WhatNextInfo } })
export default class App extends Vue {}
</script>

<style lang="scss">
#introduction {
    max-width: 75rem;
    margin-bottom: 6rem;
    text-align: center;
}

#app > * {
    margin-left: auto;
    margin-right: auto;
}
</style>
