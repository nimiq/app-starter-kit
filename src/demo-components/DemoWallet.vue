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
        <PageFooter>
            <!-- In the footer we want to show some network stats -->
        </PageFooter>
    </SmallPage>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PageBody, PageHeader, PageFooter, SmallPage } from '@nimiq/vue-components';

@Component({ components: { PageBody, PageHeader, PageFooter, SmallPage } })
class DemoWallet extends Vue {
    private state: DemoWallet.State = DemoWallet.State.ADDRESS_SELECTION;
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
</style>
