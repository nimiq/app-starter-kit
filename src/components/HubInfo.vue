<template>
    <div class="nq-card">
        <div class="nq-card-header">
            <h2 class="nq-h2">Nimiq Hub</h2>
        </div>
        <div class="nq-card-body">
            <p class="nq-text">
                The Nimiq Hub is an app or interface that provides an unified API for accessing the user's accounts and
                performing common tasks like sending transactions which can directly be used by Nimiq Ecosystem apps
                without the need to reimplement such features.
            </p>
            <p class="nq-text">
                Click this button to see an example of a Hub API call:
            </p>
            <p class="nq-text">
                <button class="nq-button-pill light-blue" @click="chooseAddress">Select Account</button>
            </p>
            <p class="nq-text">
                <span v-if="addressSelected">
                    Address:
                    <span class="address">{{ hubResult.address }}</span>
                    <br>
                    Label:
                    <span>{{ hubResult.label }}</span>
                </span>
                <span v-else-if="!!hubResult">Error: {{ hubResult }}</span>
            </p>
            <p class="nq-text">
                To learn more about the Hub Api, have a look at our
                <a href="https://nimiq.github.io/hub/" target="_blank" rel="noopener">documentation</a>.
                If you do not need the Hub Api, you can revert the <em>Setup @nimiq/hub-api</em> commit.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HubApi from '@nimiq/hub-api';

@Component
export default class HubInfo extends Vue {
    private hubResult: string | { address: string, label: string } = '';
    private addressSelected: boolean = false;
    private hub: any = new HubApi('https://hub.nimiq.com');

    private async chooseAddress(): Promise<void> {
        try {
            this.hubResult = await this.hub.chooseAddress({ appName: 'Nimiq App Template' });
            this.addressSelected = true;
        } catch (e) {
            this.hubResult = e.message || e;
            this.addressSelected = false;
        }
    }
}
</script>

<style scoped>
.address {
    font-family: 'Fira Mono', monospace;
}
</style>
