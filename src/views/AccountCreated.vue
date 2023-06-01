<template>
    <form>
        <img class="forgot-pwd-icon" src="../assets/imgs/check_icon.png"/>
        <div class="mail-verification-form">
            <h4 id="">Email verified</h4>
            <small class="text-mail-vfd">Your email was successfully verified. You can now sign in with your new account.</small>

            <button @click="goToSignInForm" type="submit" class="btn btn-primary">Back to Sign in</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'AccountCreated',
    methods: {
        goToSignInForm() {
            this.$router.push('/login')
        }
    }
}
</script>
