<template>
    <form>
        <img class="forgot-pwd-icon" src="../assets/imgs/check_icon.png"/>
        <div class="mail-verification-form">
            <h4 id="">Password reset</h4>
            <small class="text-mail-vfd">Your password has been succesfully reset. Click below to log in</small>

            <button @click="goToSignInForm" type="submit" class="btn btn-primary">Continue</button>
            <small @click="goToSignInForm" class="text-return"><img class="sm-icons" src="../assets/imgs/arrow_left.png"/>&nbsp;&nbsp;Back to Sign in</small>
        </div>
    </form>
</template>

<script>
export default {
    name: 'PasswordResetView',
    methods: {
        goToSignInForm() {
            this.$router.push('/login')
        }
    }
}
</script>