<template>
    <SmallPage>
        <PageHeader>Demo Wallet</PageHeader>
        <PageBody v-if="state === constructor.State.ADDRESS_SELECTION">
            <!-- First, the user will be asked to select an address to send a transaction from -->
        </PageBody>
        <PageBody v-else-if="state === constructor.State.TRANSACTION_DETAILS">
            <!-- Then the user should specify the transaction details -->
        </PageBody>
        <PageBody v-else-if="state === constructor.State.TRANSACTION_STATUS">
            <!-- Show status of sent transaction -->
        </PageBody>
        <PageFooter class="nq-text">
            {{peerCount}} peers -
            consensus {{consensusState}} -
            block #{{blockchainHeight}}
        </PageFooter>
    </SmallPage>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PageBody, PageHeader, PageFooter, SmallPage } from '@nimiq/vue-components';
import { NetworkClient } from '@nimiq/network-client';

@Component({ components: { PageBody, PageHeader, PageFooter, SmallPage } })
class DemoWallet extends Vue {
    private state: DemoWallet.State = DemoWallet.State.ADDRESS_SELECTION;

    private peerCount: number = 0;
    private consensusState: string = 'connecting';
    private blockchainHeight: number = 0;

    private async created() {
        // Get the Network client singleton. If you need to configure the client, use NetworkClient.createInstance
        const networkClient = NetworkClient.Instance;
        await networkClient.init();
        networkClient.on(NetworkClient.Events.PEER_COUNT, (peerCount) => this.peerCount = peerCount);
        networkClient.on(NetworkClient.Events.CONSENSUS, (consensusState) => this.consensusState = consensusState);
        networkClient.on(NetworkClient.Events.HEAD_HEIGHT, (height) => this.blockchainHeight = height);
    }
}

namespace DemoWallet {
    export enum State {
        ADDRESS_SELECTION = 'address-selection',
        TRANSACTION_DETAILS = 'transaction-details',
        TRANSACTION_STATUS = 'transaction-status',
    }
}

export default DemoWallet;
</script>

<style scoped>
.page-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.page-footer {
    margin: 0;
    text-align: center;
}
</style>
