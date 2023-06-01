<template>
    <!-- Use desktop versions for now -->
    <!-- Work on actual sign-in -->
    <!-- work on localStorage for remember me -->
    <!-- work on test user roles to redirect user based from role (admin/client) -->

    <form class="sign-in-form">
        <h5 id="">Sign in to your account</h5>
        <a class="btn btn-sm btn-google btn-block btn-outline" href="#"><img class="md-icons" src="https://img.icons8.com/color/16/000000/google-logo.png">&nbsp;&nbsp;Continue with Google</a>
        <div class="line-divider">
            <hr class="divider">
            <small class="form-text text-muted">or</small>
            <hr class="divider">
        </div>
        <div class="form-group">
            <label class="form-label" for="email-input">Email <span class="required">*</span></label>
            <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter your email" required>
        </div>

        <div class="form-group">
            <label class="form-label" for="password-input">Password <span class="required">*</span></label>
            <input :type="type" class="form-control" id="password-input" placeholder="Enter your password" required>
            <img @click.prevent="revealPassword" src="../assets/imgs/eye.svg" class="bi bi-eye form-input-icons" fill="currentColor"/>
            <small @click="goToForgotPasswordForm" class="form-text text-muted"><a href="#" id="sign-in-fpwd">Forgot password</a></small>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="remember-checkbox">
            <label class="form-check-label" for="remember-checkbox">Remember me</label>
        </div>
        <button @click="loginVerify" type="submit" class="btn btn-primary">Sign in</button>
        <small class="text-signup">Don't have an account?<a @click="goToSignUpForm" href="#" id="sign-up">&nbsp;Sign up</a></small>
    </form>
</template>

<script>
// const showPassword = document.querySelector(".bi-eye");
// console.log(showPassword);
// showPassword.addEventListener("click", () => {
//     console.log("clicked");
// });
import userData from "../assets/scripts/users.json";

export default {
    name: "LoginView",
    data() {
        return {
            type: "password",
            // defaultPasswordIcon: 'eye',
            // showPasswordIcon: '../assets/imgs/eye-slash.svg'
        };
    },
    // computed: {
    //     iconSource() {
    //         return '../assets/imgs/eye.svg';
    //     }
    // },
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

            if (this.type === "password") {
                this.type = "text"
            } else {
                this.type = "password"
            }
        },

        loginVerify() {
            // console.log("clicked");
            // console.log(userData);
            const email = document.querySelector("#email-input").value;
            if (email !== userData[0].email) {
                alert("Email does not exist");
            } else {
                // redirect to respective client/admin dashboard
                alert("Email exists");
            }
        },

        goToForgotPasswordForm() {
            this.$router.push("/forgotpassword");
        },

        goToSignUpForm() {
            this.$router.push("/signup");
        },
    }
}


// Form validation
// 1. Bootstrap component, custom Javascript


</script>
