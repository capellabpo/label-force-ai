<template>
    <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successUrl"
        :cancel-url="cancelUrl"
        @loading="v => loading = v"
    />
    <button @click="submit" type="button" class="btn btn-primary">Proceed to payment</button>
</template>

<script>
import {StripeCheckout} from '@vue-stripe/vue-stripe';

export default {
    components: {
        StripeCheckout
    },
    data() {
        this.publishableKey = "pk_test_51NH2wmLyXHr2ANubycDIiDeJgNGbwpbr2oLKGVKFboyVKhtN2m1uJJ4bSXEc9SOVxo6GUdDa7On865mQLFUGBh2e00ALP8ZwUm";
        return {
            loading: false,
            lineItems: [
                {
                    price: "price_1NH2yELyXHr2ANubDRJxsEj0", // ID from stripe dashboard
                    quantity: 1 // update as needed based from number chosen by user
                }
            ],
            successUrl: 'http://localhost:8080/client/notify',
            cancelUrl: 'http://localhost:8080/mydashboard/manageproject'
        }
    },
    methods: {
        submit() {
            this.$refs.checkoutRef.redirectToCheckout();
        }
    }
}
</script>

<style scoped>
.btn {
    width: 45%;
    margin-top: 10px;
    border-radius: 8px;
    padding: 10px;
}
</style>