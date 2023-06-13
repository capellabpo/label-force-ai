<template>
    <div class="container-fluid">
        <side-navigation-bar></side-navigation-bar>

        <div class="p-3 content">
            <div class="container">
                <payment-successful></payment-successful>

            </div>
        </div>
    </div>
</template>

<script>
import SideNavigationBar from '../../components/SideNavigationBar.vue';
import PaymentSuccessful from '../../components/PaymentSuccessful.vue';

export default {
    name: "PaymentForm",
    components: {
        SideNavigationBar,
        PaymentSuccessful
    }
}
</script>

<style scoped>
.container-fluid {
    background-color: #101828;
    display: flex;
    padding: 0;

    .content {
        font-size: 14px;
        color: #475467;
        width: 100%;
        background: linear-gradient(64.66deg, #101828 48.38%, #264DDB 102.45%);
        padding: 2rem 0px 0px 1rem !important;

        .container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            align-content: flex-start;
            margin-top: auto;
            max-width: 100%;
            height: 100%;
            border-radius: 40px 0px 0px 0px;
            background-color: #475467;

            > form {
                border: 1px solid;
                border-radius: 12px;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-content: center;
                align-items: center;
            }
        }
    }
}
</style>