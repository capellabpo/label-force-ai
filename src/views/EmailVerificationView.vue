<template>
    <form>
        <img class="forgot-pwd-icon" src="../assets/imgs/mail_icon.png"/>
        <div class="mail-verification-form">
            <h4 id="">Check your email</h4>
            <small class="text-mail-vc">An email with a verification code was sent to johndoe@gmail.com</small>

            <button @click="goToOtpVerificationForm" type="submit" class="btn btn-primary">Enter code manually</button>
            <small @click="goToSignInForm" class="text-return"><img class="sm-icons" src="../assets/imgs/arrow_left.png"/>&nbsp;&nbsp;Back to Sign in</small>
        </div>
    </form>
</template>

<script>
export default {
    name: 'EmailVerificationView',
    methods: {
        goToOtpVerificationForm() {
            this.$router.push('/otpverification');
        },

        goToSignInForm() {
            this.$router.push('/login');
        }
    }
}
</script>