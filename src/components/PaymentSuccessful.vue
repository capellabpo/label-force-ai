<template>
    <form>
        <img class="forgot-pwd-icon" src="../assets/imgs/check_icon.png" />
        <div class="mail-verification-form">
            <h4 id="">Payment Confirmed</h4>
            <small class="text-mail-vfd">Thank you, your payment has been successful.
                A confirmation email has been sent to your email address.
            </small>

            <button @click="goToDashboard" type="submit" class="btn btn-primary">Go back to dashboard</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'PaymentSuccessful',
    methods: {
        goToDashboard() {
            this.$router.push('/client/mydashboard')
        }
    }
}
</script>

<style scoped>
form {
    width: 20%;
    position: absolute;
    margin: auto;
    top: 40%;
    background-color: #FFFFFF;

    .mail-verification-form > * {
        margin-bottom: 1rem;
    }
}
</style>