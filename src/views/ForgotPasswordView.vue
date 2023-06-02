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
                <img class="forgot-pwd-icon" src="../assets/imgs/Featured_icon.png" />
                <div class="forgot-pwd-form">
                    <h4 id="">Forgot password?</h4>
                    <small class="text-forgot-pwd">No worries! we'll send you reset instructions.</small>

                    <div class="form-group">
                        <label class="form-label" for="email-input">Email <span class="required">*</span></label>
                        <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp"
                            placeholder="Enter our email" required>
                    </div>

                    <button @click="goToPasswordResetForm" type="submit" class="btn btn-primary">Reset password</button>
                    <small @click="goToSignUpForm" class="text-return"><img class="sm-icons"
                            src="../assets/imgs/arrow_left.png" />&nbsp;&nbsp;Don't have an account?</small>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForgotPasswordView',
    methods: {
        goToPasswordResetForm() {
            this.$router.push('/passwordreset');
        },

        goToSignUpForm() {
            this.$router.push('/signup');
        }
    }
}
</script>