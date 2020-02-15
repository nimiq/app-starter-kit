<template>
    <div class="nq-card">
        <div class="nq-card-header">
            <h2 class="nq-h2">Nimiq Network</h2>
        </div>
        <div class="nq-card-body">
            <p class="nq-text">
                The Network Client handles connecting and syncing to the Nimiq network and network related operations
                like fetching balances, transaction histories or sending transactions.
                <!-- Not yet but in the future: The Network Client also communicates with other currently open windows /
                tabs that use the Network Client to share information on the current network state. This allows for
                instant syncing when opening additional tabs.-->
            </p>
            <p class="nq-text">
                You are right now {{peerCount? 'connected' : 'connecting'}} to the decentralized Nimiq Network.<br>
                Connected Peers: {{peerCount}}<br>
                Consensus: {{consensus}}<br>
                <span v-if="blockchainHeight">Blockchain height: {{blockchainHeight}}</span>
            </p>
            <p class="nq-text">
                Check out the
                <a href="https://github.com/nimiq/network/blob/master/client/src/NetworkClient.ts"
                    target="_blank" rel="noopener">
                    Network Client's api
                </a>
                and supported api methods. If you do not want to use the Nimiq Network Client you can revert the
                <em>Setup @nimiq/network-client</em> commit.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { NetworkClient } from '@nimiq/network-client';

@Component
export default class NetworkInfo extends Vue {
    private peerCount: number = 0;
    private consensus: string = 'loading';
    private blockchainHeight: number = 0;

    async mounted() {
        // Get the Network client singleton. If you need to configure the client, use NetworkClient.createInstance
        const client = NetworkClient.Instance;
        await client.init();

        // Update on network events
        client.on(NetworkClient.Events.PEER_COUNT, (peerCount) => this.peerCount = peerCount);
        client.on(NetworkClient.Events.CONSENSUS, (consensus) => this.consensus = consensus);
        client.on(NetworkClient.Events.HEAD_HEIGHT, (height) => this.blockchainHeight = height);
    }
}
</script>
