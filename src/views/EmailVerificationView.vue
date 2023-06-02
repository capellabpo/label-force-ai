<template>
    <div class="container">
        <div id="brand-col">
            <div class="app-title">
                <img class="label-force-logo" src="../assets/imgs/Lb_logo.png" />
            </div>
            <div class="app-branding">
                <img class="branding-img" src="../assets/imgs/Lb_gfx.png" />
            </div>
        </div>
        <div class="divider"></div>
        <!-- Use desktop versions for now -->
        <!-- Work on actual sign-in -->
        <div id="sign-in-col">
            <form>
                <img class="forgot-pwd-icon" src="../assets/imgs/mail_icon.png" />
                <div class="mail-verification-form">
                    <h4 id="">Check your email</h4>
                    <small class="text-mail-vc">An email with a verification code was sent to johndoe@gmail.com</small>

                    <button @click="goToOtpVerificationForm" type="submit" class="btn btn-primary">Enter code
                        manually</button>
                    <small @click="goToSignInForm" class="text-return"><img class="sm-icons"
                            src="../assets/imgs/arrow_left.png" />&nbsp;&nbsp;Back to Sign in</small>
                </div>
            </form>
        </div>
    </div>
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