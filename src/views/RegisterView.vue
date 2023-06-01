<template>
    <form class="sign-in-form">
        <h5 id="">Create an account</h5>
        <div class="form-group">
            <label class="form-label" for="name-input">Name <span class="required">*</span></label>
            <input type="name" class="form-control" id="name-input" aria-describedby="emailHelp" placeholder="Enter your name" required>
        </div>
        <div class="form-group">
            <label class="form-label" for="email-input">Email <span class="required">*</span></label>
            <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter your email" required>
        </div>
        <div class="form-group">
            <label class="form-label" for="password-input">Password <span class="required">*</span></label>
            <input type="password" class="form-control" id="password-input" placeholder="Create a password" required>
            <img @click.prevent="revealPassword" src="../assets/imgs/eye.svg" class="bi bi-eye form-input-icons" fill="currentColor"/>
            <small class="form-text text-muted">Must be at least 8 characters.</small>
        </div>
        <div class="form-group">
            <label class="form-label" for="cfm-password-input">Confirm password <span class="required">*</span></label>
            <input type="password" class="form-control" id="cfm-password-input" placeholder="Confirm password" required>
            <img @click.prevent="revealPassword" src="../assets/imgs/eye.svg" class="bi bi-eye form-input-icons" fill="currentColor"/>
            <small class="form-text text-muted">Must be at least 8 characters.</small>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="remember-checkbox">
            <label class="form-check-label" for="remember-checkbox">I agree to the <a href="#">&nbsp;Terms and Privacy Policy</a></label>
        </div>
        <button @click="goToEmailVerificationForm" type="submit" class="btn btn-primary">Sign up</button>
        <a class="btn btn-sm btn-google btn-block btn-outline" href="#"><img class="md-icons" src="https://img.icons8.com/color/16/000000/google-logo.png">&nbsp;&nbsp;Sign up with Google</a>
        <small class="text-signup">Already have an account?<a @click="goToSignInForm" href="#" id="sign-up">&nbsp;Sign in</a></small>
    </form>
</template>

<script>
export default {
    name: "RegisterView",
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

        goToEmailVerificationForm() {
            this.$router.push("/emailverification");
        },

        // loginVerify() {
        //     console.log("clicked");
        //     if () {

        //     }
        // }

        goToSignInForm() {
            this.$router.push("/login");
        }

    }
}
</script>