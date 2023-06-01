<template>
    <form>
        <img class="forgot-pwd-icon" src="../assets/imgs/mail_icon.png"/>
        <div class="mail-verification-form">
            <h4 id="">Check your email</h4>
            <small class="text-mail-vc">An email with a verification code was sent to johndoe@gmail.com</small>
            
            <div class="code-container">
                <div class="form-group otp-code">
                    <!-- <input type="email" class="form-control code-input" placeholder="" required>
                    <input type="email" class="form-control code-input" placeholder="" required>
                    <input type="email" class="form-control code-input" placeholder="" required>
                    <input type="email" class="form-control code-input" placeholder="" required> -->
                    <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                        <input class="m-2 text-center form-control rounded" type="text" id="input1" v-on:keyup="inputenter(1)" maxlength="1" />
                        <input class="m-2 text-center form-control rounded" v-on:keyup="inputenter(2)" type="text" id="input2" maxlength="1" />
                        <input class="m-2 text-center form-control rounded" v-on:keyup="inputenter(3)" type="text" id="input3" maxlength="1" />
                        <input class="m-2 text-center form-control rounded" v-on:keyup="inputenter(4)" type="text" id="input4" maxlength="1" />
                    </div>
                    <div class="invalid-feedback">
                        Invalid code. Please try again!
                    </div>
                </div>
                
            </div>
            
            <small class="text-resend"><a href="#">RESEND CODE</a></small>
            
            <button @click="emailVerifiedForm" type="submit" class="btn btn-primary">Verify email</button>
            <small @click="goToSignInForm" class="text-return"><img class="sm-icons" src="../assets/imgs/arrow_left.png"/>&nbsp;&nbsp;Back to Sign in</small>
        </div>
    </form>
</template>

<script>
export default {
    name: 'EmailOtpCodeView',
    methods: {
        goToSignInForm() {
            this.$router.push('/login');
        },
        emailVerifiedForm() {
            this.$router.push('/registered');
        },

        inputenter() {

            const inputs = document.querySelectorAll('#otp > *[id]');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener('keydown', function(event) {
                    if (event.key === "Backspace") {
                        inputs[i].value = '';
                        if (i !== 0) inputs[i - 1].focus();
                    } else {
                        if (i === inputs.length - 1 && inputs[i].value !== '') {
                            return true;
                        } else if (event.keyCode > 47 && event.keyCode < 58) {
                            inputs[i].value = event.key;
                            if (i !== inputs.length - 1) inputs[i + 1].focus();
                            event.preventDefault();
                        } else if (event.keyCode > 64 && event.keyCode < 91) {
                            inputs[i].value = String.fromCharCode(event.keyCode);
                            if (i !== inputs.length - 1) inputs[i + 1].focus();
                            event.preventDefault();
                        }
                    }
                });
            }

        }
    }
}
</script>

<style scoped>
.otp-code {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.form-control {
    width: 45px;
    font-size: 30px;
    color: #4754679e;
}

.not-valid {
    border-color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.not-invalid {
    border-color: #198754;;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

/* invalid input */
/* .form-group input:focus {
    box-shadow: 0 0 10px #dc3545;;
} */

/* valid input */
/* .form-group input:focus {
    box-shadow: 0 0 10px #198754;;
} */
</style>

