<template>
    <SmallPage>
        <PageHeader class="nq-card-header">
            <h2 class="nq-h2">Nimiq Vue Component Library</h2>
        </PageHeader>
        <PageBody class="nq-card-body">
            <p class="nq-text">
                Nimiq provides a growing
                <a href="https://github.com/nimiq/vue-components" rel="noopener" target="_blank">
                    collection of vue components
                </a>
                ready to be used in your app.
            </p>
            <p class="nq-text">
                How about a small demonstration?
            </p>
        </PageBody>
        <Carousel :entries="carouselEntries">
            <template v-slot:demo1>
                <div class="nq-card">
                    <h3 class="nq-card-header nq-h3">Address Input</h3>
                    <div class="nq-card-body">
                        <AddressInput />
                    </div>
                </div>
            </template>
            <template v-slot:demo2>
                <div class="nq-card">
                    <h3 class="nq-card-header nq-h3">QrCode</h3>
                    <div class="nq-card-body">
                        <QrCode data="https://nimiq.com" :size="200" />
                    </div>
                </div>
            </template>
            <template v-slot:demo3>
                <div class="nq-card">
                    <h3 class="nq-card-header nq-h3">Icons</h3>
                    <div class="nq-card-body icon-container">
                        <HexagonIcon />
                        <InfoCircleIcon />
                        <CheckmarkIcon />
                        <LoginIcon />
                    </div>
                </div>
            </template>
        </Carousel>
        <PageBody>
            <p class="nq-text">
                Note that some of the vue components require the nimiq styling framework.
            </p>
            <p class="nq-text">
                If you only need a subset of the provided components in your project you can optimize for a smaller
                bundle size as described in the
                <a href="https://github.com/nimiq/vue-components#advanced-setup" rel="noopener" target="_blank">
                    vue components documentation
                </a>.
                The Nimiq vue components library is setup in the
                <em>nimiq-vue-components</em>
                branch.
            </p>
        </PageBody>
    </SmallPage>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
    AddressInput,
    Carousel,
    CheckmarkIcon,
    HexagonIcon,
    InfoCircleIcon,
    LoginIcon,
    PageHeader,
    PageBody,
    QrCode,
    SmallPage,
} from '@nimiq/vue-components';

@Component({
    components: {
        AddressInput,
        Carousel,
        CheckmarkIcon,
        HexagonIcon,
        InfoCircleIcon,
        LoginIcon,
        PageHeader,
        PageBody,
        QrCode,
        SmallPage,
    },
})
export default class VueComponentsInfo extends Vue {
    private carouselEntries = ['demo1', 'demo2', 'demo3'];
}
</script>

<style scoped>
.small-page {
    max-width: 75rem;
    height: auto;
}

.carousel {
    padding: 0 0 4rem;
    overflow: hidden;
}

.carousel >>> .nq-card {
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carousel >>> .icon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: var(--nimiq-gold);
}

.carousel >>> .nq-icon {
    font-size: 10rem;
    padding: 1rem;
}
</style>
