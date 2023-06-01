<template>
    <form>
        <img class="forgot-pwd-icon" src="../assets/imgs/Featured_icon.png"/>
        <div class="forgot-pwd-form">
            <h4 id="">Set new password</h4>
            <small class="text-new-pwd">Your new password must be different to previously used passwords.</small>

            <div class="form-group">
                <label class="form-label" for="password-input">Password <span class="required">*</span></label>
                <input type="password" class="form-control" id="password-input" placeholder="Create a password">
                <img @click.prevent="revealPassword" src="../assets/imgs/eye.svg" class="bi bi-eye form-input-icons" fill="currentColor"/>
                <small class="form-text text-muted">Must be at least 8 characters.</small>
            </div>
            <div class="form-group">
                <label class="form-label" for="cfm-password-input">Confirm password <span class="required">*</span></label>
                <input type="password" class="form-control" id="cfm-password-input" placeholder="Confirm password">
                <img @click.prevent="revealPassword" src="../assets/imgs/eye.svg" class="bi bi-eye form-input-icons" fill="currentColor"/>
                <small class="form-text text-muted">Must be at least 8 characters.</small>
            </div>
            
            <button type="submit" class="btn btn-primary">Reset password</button>
            <small class="text-return"><img class="sm-icons" src="../assets/imgs/arrow_left.png"/>&nbsp;&nbsp;Back to Sign in</small>
        </div>
    </form>
</template>

<script>
export default {
    name: 'NewPasswordView',
    methods: {
        revealPassword() {
            console.log(this.defaultPasswordIcon);
            // this.changeIcon = "eye-slash"
            // if (this.defaultPasswordIcon !== this.showPasswordIcon) {
                // this.defaultPasswordIcon = this.showPasswordIcon;
            // } else {
            //     this.defaultPasswordIcon;
            // }
            // this.defaultPasswordIcon = "eye-slash";

            if(this.type === "password") {
                this.type = "text"
            } else {
                this.type = "password"
            }
            
        },

        // loginVerify() {
        //     console.log("clicked");
        //     if () {

        //     }
        // }

    }
}
</script>