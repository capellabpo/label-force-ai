<template>
    <form>
        <img class="forgot-pwd-icon" src="../assets/imgs/Featured_icon.png"/>
        <div class="forgot-pwd-form">
            <h4 id="">Forgot password?</h4>
            <small class="text-forgot-pwd">No worries! we'll send you reset instructions.</small>

            <div class="form-group">
                <label class="form-label" for="email-input">Email <span class="required">*</span></label>
                <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter our email" required>
            </div>
            
            <button @click="goToPasswordResetForm" type="submit" class="btn btn-primary">Reset password</button>
            <small @click="goToSignUpForm" class="text-return"><img class="sm-icons" src="../assets/imgs/arrow_left.png"/>&nbsp;&nbsp;Don't have an account?</small>
        </div>
    </form>
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