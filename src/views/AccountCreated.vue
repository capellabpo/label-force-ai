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
            <img class="forgot-pwd-icon" src="../assets/imgs/check_icon.png"/>
            <div class="mail-verification-form">
                <h4 id="">Email verified</h4>
                <small class="text-mail-vfd">Your email was successfully verified. You can now sign in with your new account.</small>

                <button @click="goToSignInForm" type="submit" class="btn btn-primary">Back to Sign in</button>
            </div>
        </form>
        </div>
      </div>
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
