<template>
    <SmallPage>
        <PageHeader>Demo Wallet</PageHeader>
        <PageBody v-if="state === constructor.State.ADDRESS_SELECTION">
            <p class="nq-text">Please choose the address you want to send a transaction from.</p>
            <button class="nq-button" @click="chooseAddress">Choose address</button>
        </PageBody>
        <PageBody v-else-if="state === constructor.State.TRANSACTION_DETAILS">
            <p class="nq-text">Transaction recipient:</p>
            <AddressInput @address="recipientAddress = $event" />
            <p class="nq-text">Transaction amount:</p>
            <AmountInput v-model="amount" />

            <button class="nq-button" :disabled="!recipientAddress || !amount" @click="sendTransaction">Send</button>
        </PageBody>
        <PageBody v-else-if="state === constructor.State.TRANSACTION_STATUS">
            <p class="nq-text">Your transaction is: {{transactionState}}</p>
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
import { AddressInput, AmountInput, PageBody, PageHeader, PageFooter, SmallPage } from '@nimiq/vue-components';
import { NetworkClient } from '@nimiq/network-client';
import HubClient from '@nimiq/hub-api';

@Component({ components: { AddressInput, AmountInput, PageBody, PageHeader, PageFooter, SmallPage } })
class DemoWallet extends Vue {
    private state: DemoWallet.State = DemoWallet.State.ADDRESS_SELECTION;

    private networkReadyPromise!: Promise<void>;
    private peerCount: number = 0;
    private consensusState: string = 'connecting';
    private blockchainHeight: number = 0;

    // Note that we're using the nimiq testnet in this demo. You can get testnet Nim for testing from our faucet:
    // https://getsome.nimiq-testnet.com/
    private hubClient: HubClient = new HubClient('https://hub.nimiq-testnet.com/');
    private myAddress: string = '';

    private recipientAddress: string = '';
    private amount: number = 0;

    private transactionHash: string = '';
    private transactionState: string = 'unknown';

    private async created() {
        // Get the Network client singleton. If you need to configure the client, use NetworkClient.createInstance
        const networkClient = NetworkClient.Instance;
        this.networkReadyPromise = networkClient.init();
        await this.networkReadyPromise;
        networkClient.on(NetworkClient.Events.PEER_COUNT, (peerCount) => this.peerCount = peerCount);
        networkClient.on(NetworkClient.Events.CONSENSUS, (consensusState) => this.consensusState = consensusState);
        networkClient.on(NetworkClient.Events.HEAD_HEIGHT, (height) => this.blockchainHeight = height);
        networkClient.on(NetworkClient.Events.TRANSACTION, (transaction) => {
            if (transaction.transactionHash !== this.transactionHash) return; // ignore other transactions
            ({ state: this.transactionState } = transaction);
        });
    }

    private async chooseAddress() {
        ({ address: this.myAddress } = await this.hubClient.chooseAddress({ appName: 'Demo Wallet' }));
        this.state = DemoWallet.State.TRANSACTION_DETAILS;
        await this.networkReadyPromise;
        NetworkClient.Instance.subscribe([this.myAddress]); // subscribe to updates and transactions for this address
    }

    private async sendTransaction() {
        await this.networkReadyPromise;
        const networkClient = NetworkClient.Instance;

        if (this.consensusState !== 'established') {
            await new Promise((resolve) => {
                const consensusListener = () => {
                    networkClient.off(NetworkClient.Events.CONSENSUS_ESTABLISHED, consensusListener);
                    resolve();
                };
                networkClient.on(NetworkClient.Events.CONSENSUS_ESTABLISHED, consensusListener);
            });
        }

        const signedTransaction = await this.hubClient.signTransaction({
            appName: 'Demo Wallet',
            sender: this.myAddress,
            recipient: this.recipientAddress,
            value: this.amount,
            validityStartHeight: this.blockchainHeight,
        });
        this.transactionHash = signedTransaction.hash;
        networkClient.sendTransaction(signedTransaction.serializedTx);
        this.state = DemoWallet.State.TRANSACTION_STATUS;
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
