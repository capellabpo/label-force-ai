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
                <img class="forgot-pwd-icon" src="../assets/imgs/check_icon.png" />
                <div class="mail-verification-form">
                    <h4 id="">Password reset</h4>
                    <small class="text-mail-vfd">Your password has been succesfully reset. Click below to log in</small>

                    <button @click="goToSignInForm" type="submit" class="btn btn-primary">Continue</button>
                    <small @click="goToSignInForm" class="text-return"><img class="sm-icons"
                            src="../assets/imgs/arrow_left.png" />&nbsp;&nbsp;Back to Sign in</small>
                </div>
            </form>
        </div>
    </div>
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