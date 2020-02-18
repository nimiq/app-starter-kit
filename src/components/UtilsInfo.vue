<template>
    <div class="nq-card">
        <div class="nq-card-header">
            <h2 class="nq-h2">Nimiq Utils</h2>
        </div>
        <div class="nq-card-body">
            <p class="nq-text">
                The Nimiq Utils package provides a collection of utilities which might be useful for your application.
                These utilities include methods for address validation, fiat currency price conversion, currency
                formatting, clipboard handling, utf8 string conversion
                <a href="https://github.com/nimiq/nimiq-utils/tree/master/src" target="_blank" rel="noopener">
                    and others</a>.
            </p>
            <p class="nq-text">
                Use for example the ValidationUtils to check whether an address is valid:
            </p>
            <p class="nq-text">
                <input v-model="address" class="nq-input">
            </p>
            <p class="nq-text">
                Addres is {{ isValidAddress ? 'valid' : 'invalid' }}
            </p>
            <p class="nq-text">
                If you do not want to use the Nimiq Utils, you can revert the <em>Setup @nimiq/utils</em> commit.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ValidationUtils } from '@nimiq/utils';

@Component
export default class UtilsInfo extends Vue {
    private address: string = 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000';

    private get isValidAddress() {
        return ValidationUtils.isValidAddress(this.address);
    }
}
</script>
