<template>
    <div id="app">
        <h1>Hi!</h1>

        <p>Congratulations, you just set up a fully functional, Nimiq powered app.</p>
        <p>This app starter kit already contains everything you need to build an awesome app.</p>

        <ProjectInfo />

        <WhatNextInfo />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectInfo from './components/ProjectInfo.vue';
import WhatNextInfo from './components/WhatNextInfo.vue';

@Component({ components: { ProjectInfo, WhatNextInfo } })
export default class App extends Vue {}
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
