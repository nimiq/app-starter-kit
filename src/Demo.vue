<template>
    <div id="demo">
        <div id="introduction">
            <h1 class="nq-h1">Hi!</h1>
            <p class="nq-text">
                Congratulations, you just set up a fully functional, Nimiq powered app.
                This app starter kit already contains everything you need to build an awesome app.
            </p>
        </div>

        <ProjectInfo />

        <!-- To reduce merge conflicts when merging the feature branches, we provide target slots here where the
        branches' content should go. When you are done merging the branches / features you want, feel free to
        remove all merge slots throughout the project. -->

        <!-- Merge slot: nimiq-style -->
        <StyleInfo />
        <!-- Merge slot: nimiq-vue-components -->
        <VueComponentsInfo />
        <!-- Merge slot: nimiq-hub -->
        <HubInfo />
        <!-- Merge slot: nimiq-core -->
        <!-- Merge slot: nimiq-network -->
        <!-- Merge slot: nimiq-browser-warning -->
        <!-- Merge slot: nimiq-utils -->

        <WhatNextInfo />
    </div>
</template>

<script lang="ts">
// Merge slot: nimiq-style
import '@nimiq/style/nimiq-style.min.css';
// Merge slot: nimiq-vue-components
import '@nimiq/vue-components/dist/NimiqVueComponents.css';

import { Component, Vue } from 'vue-property-decorator';
import ProjectInfo from './demo-components/ProjectInfo.vue';
import WhatNextInfo from './demo-components/WhatNextInfo.vue';

// Merge slot: nimiq-style
import StyleInfo from './demo-components/StyleInfo.vue';
// Merge slot: nimiq-vue-components
import VueComponentsInfo from './demo-components/VueComponentsInfo.vue';
// Merge slot: nimiq-hub
import HubInfo from './demo-components/HubInfo.vue';
// Merge slot: nimiq-core
// Merge slot: nimiq-network
// Merge slot: nimiq-browser-warning
// Merge slot: nimiq-utils

@Component({ components: {
    ProjectInfo,
    WhatNextInfo,
    // Merge slot: nimiq-style
    StyleInfo,
    // Merge slot: nimiq-vue-components
    VueComponentsInfo,
    // Merge slot: nimiq-hub
    HubInfo,
    // Merge slot: nimiq-core
    // Merge slot: nimiq-network
    // Merge slot: nimiq-browser-warning
    // Merge slot: nimiq-utils
} })
export default class Demo extends Vue {}
</script>

<style lang="scss">
#demo {
    flex-grow: 1;
}

#demo > * {
    margin-left: auto;
    margin-right: auto;
}

#introduction {
    max-width: 75rem;
    margin-bottom: 6rem;
    text-align: center;
}
</style>
