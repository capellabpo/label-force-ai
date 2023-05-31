<template>
    <div class="container">
        <div id="brand-col">
            <div class="app-title">
                <img class="label-force-logo" src="../assets/imgs/Lb_logo.png"/>
            </div>
            <div class="app-branding">
                <img class="branding-img" src="../assets/imgs/Lb_gfx.png"/>
            </div>
        </div>

        
        <div class="divider"></div>

        <div id="sign-in-col">
            <!-- Login Form -->
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
                    <small class="form-text text-muted"><a href="#" id="sign-in-fpwd">Forgot password</a></small>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="remember-checkbox">
                    <label class="form-check-label" for="remember-checkbox">Remember me</label>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
                <small class="text-signup">Don't have an account?<a href="#" id="sign-up">&nbsp;Sign up</a></small>
            </form>
            <!-- End of Login Form -->
            
            <!-- Forgot Password Form -->
            <!-- <form>
                <img class="forgot-pwd-icon" src="../assets/imgs/Featured_icon.png"/>
                <div class="forgot-pwd-form">
                    <h4 id="">Forgot password?</h4>
                    <small class="text-forgot-pwd">No worries! we'll send you reset instructions.</small>

                    <div class="form-group">
                        <label class="form-label" for="email-input">Email <span class="required">*</span></label>
                        <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter our email" required>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Reset password</button>
                    <small class="text-return"><img class="sm-icons" src="../assets/imgs/arrow_left.png"/>&nbsp;&nbsp;Don't have an account?</small>
                </div>
            </form> -->
            <!-- End of Password Form -->

            <!-- New Password Form -->
            <!-- <form>
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
            </form> -->
            <!-- End of New Password Form -->

            <!-- Email Verified Form -->
            <!-- <form>
                <img class="forgot-pwd-icon" src="../assets/imgs/check_icon.png"/>
                <div class="mail-verification-form">
                    <h4 id="">Email verified</h4>
                    <small class="text-mail-vfd">Your password has been succesfullt reset. Click below to log in</small>

                    <button type="submit" class="btn btn-primary">Continue</button>
                    <small class="text-return"><img class="sm-icons" src="../assets/imgs/arrow_left.png"/>&nbsp;&nbsp;Back to Sign in</small>
                </div>
            </form> -->
            <!-- End of Email Verified Form -->

            <!-- Create Account Form -->
            <!-- <form class="sign-in-form">
                <h5 id="">Create an account</h5>
                <div class="form-group">
                    <label class="form-label" for="name-input">Name <span class="required">*</span></label>
                    <input type="name" class="form-control" id="name-input" aria-describedby="emailHelp" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label class="form-label" for="email-input">Email <span class="required">*</span></label>
                    <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter your email">
                </div>
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
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="remember-checkbox">
                    <label class="form-check-label" for="remember-checkbox">I agree to the <a href="#">&nbsp;Terms and Privacy Policy</a></label>
                </div>
                <button type="submit" class="btn btn-primary">Sign up</button>
                <a class="btn btn-sm btn-google btn-block btn-outline" href="#"><img class="md-icons" src="https://img.icons8.com/color/16/000000/google-logo.png">&nbsp;&nbsp;Sign up with Google</a>
                <small class="text-signup">Already have an account?<a href="#" id="sign-up">&nbsp;Sign in</a></small>
            </form> -->
            <!-- End of Create Form -->

            <!-- Check Email Form -->
            <!-- <form>
                <img class="forgot-pwd-icon" src="../assets/imgs/mail_icon.png"/>
                <div class="mail-verification-form">
                    <h4 id="">Check your email</h4>
                    <small class="text-mail-vc">An email with a verification code was sent to johndoe@gmail.com</small>

                    <button type="submit" class="btn btn-primary">Enter code manually</button>
                    <small class="text-return"><img class="sm-icons" src="../assets/imgs/arrow_left.png"/>&nbsp;&nbsp;Back to Sign in</small>
                </div>
            </form> -->
            <!-- End of Check Email Form -->

            <!-- Check Email Form -->
            <!-- <form>
                <img class="forgot-pwd-icon" src="../assets/imgs/mail_icon.png"/>
                <div class="mail-verification-form">
                    <h4 id="">Check your email</h4>
                    <small class="text-mail-vc">An email with a verification code was sent to johndoe@gmail.com</small>
                    
                    <div class="code-container">
                        <div class="form-group">
                            <input type="email" class="form-control code-input" placeholder="" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control code-input" placeholder="" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control code-input" placeholder="" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control code-input" placeholder="" required>
                        </div>
                    </div>
                    <small class="text-resend"><a href="#">RESEND CODE</a></small>
                    
                    <button type="submit" class="btn btn-primary">Verify email</button>
                    <small class="text-return"><img class="sm-icons" src="../assets/imgs/arrow_left.png"/>&nbsp;&nbsp;Back to Sign in</small>
                </div>
            </form> -->
            <!-- End of Check Email Form -->

            <!-- Email Verified Form -->
            <!-- <form>
                <img class="forgot-pwd-icon" src="../assets/imgs/check_icon.png"/>
                <div class="mail-verification-form">
                    <h4 id="">Email verified</h4>
                    <small class="text-mail-vfd">Your email was successfully verified. You can now sign in with your new account.</small>

                    <button type="submit" class="btn btn-primary">Back to Sign in</button>
                </div>
            </form> -->
            <!-- End of Email Verified Form -->
        </div>
        
    </div>
</template>

<script>
// const showPassword = document.querySelector(".bi-eye");
// console.log(showPassword);
// showPassword.addEventListener("click", () => {
//     console.log("clicked");
// });


export default {
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

            if(this.type === "password") {
                this.type = "text"
            } else {
                this.type = "password"
            }
            
        }

    }
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

// const formControl = document.querySelectorAll(".form-control");
// console.log(formControl);

// const signInBtn = document.querySelector(".btn-primary");
// console.log(signInBtn);

// signInBtn.addEventListener("submit", () => {
//     console.log("clicked");
//     // for (let i = 0; i < formControl.length; i++) {
//     //     if (this.formControl[i].value === "") {
//     //         console.log(true);
//     //     }
//     // }
// });


// Form validation
// 1. Bootstrap component, custom Javascript


</script>

<style>
body {
    background-image: linear-gradient(119deg, rgba(55, 112, 163, 0.6),
    rgba(85, 99, 112, 0.6)
    ), url("../assets/imgs/background_layer.png");
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    overflow: hidden;
    height: 100vh;

    .sm-icons {
        width: 10px;
    }

    .md-icons {
        width: 22px;
    }
}

/* @media screen and (max-width: 1200px) {
    #brand-col {
        z-index: 0;
        
        .app-title {
            position: relative;
            top: 35px;
        }

        .app-branding {
            margin-left: 5rem;
            border-radius: 20px;
        }
    }

    #sign-in-col {
        z-index: 1;
        padding: 2rem;
        margin-top: 10px;
        background: #FFFFFF;
        box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.08);
        border-radius: 20px;
        width: 395px;
        display: block;
        position: absolute;
        top: 240px;
    }
} */

@media screen and (max-width: 1200px) {
    .container{
        max-width: 100%;

            #brand-col {
            z-index: 0;
            top: -125px;
            position: relative;
            
            .app-title {
                position: relative;
                top: 35px;
            }

            .app-branding {
                margin-left: 5rem;
                border-radius: 20px;
            }
        }

        #sign-in-col {
            z-index: 1;
            padding: 2rem;
            margin-top: 10px;
            background: #FFFFFF;
            box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.08);
            border-radius: 20px;
            width: 395px;
            display: block;
            position: absolute;
            top: 240px;
        }
    }
    
}

@media screen and (max-width: 2080px) {
    .container{
        max-width: 100%;

            /* #brand-col {
            z-index: 0;
            top: -125px;
            position: relative;
            
            .app-title {
                position: relative;
                top: 35px;
            }

            .app-branding {
                margin-left: 5rem;
                border-radius: 20px;
            }
        } */

        #sign-in-col {
            z-index: 1;
            padding: 2rem;
            margin-top: 10px;
            background: #FFFFFF;
            box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.08);
            border-radius: 20px;
            width: 395px;
            display: block;
            position: absolute;
            top: 240px;
            left: 50%;


            @media screen and (max-width: 1200px) { 
                left: 25%;
            }
        }
    }
    
}

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: auto;
    max-width: 100%;

    .sign-in-form,
    .forgot-pwd-form,
    .mail-verification-form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: stretch;

        .code-container {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;

            .code-input {
                opacity: .5;
                font-size: 25px;
                width: 40px;
                margin: 10px;
            }
        }
    }
}

.container h5 {
    font-weight: 600;
    margin: auto;
    padding-bottom: 1rem;
}

.container h4 {
    font-weight: 600;
    margin: auto;
    margin-bottom: 5px;
}

#sign-in-col {
    padding: 2rem;
    margin-top: 10px;
    background: #FFFFFF;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    width: 395px;

    .btn-google {
        color: #545454;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 1px #ddd;
        padding: 9px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
        font-weight: 500;
    }

    .divider {
        color: #556370;
        opacity: .125;
        width: 140px;
    }

    .line-divider {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
        margin: 4px;
    }

    .required {
        color: #C12300;
    }

    .form-group {
        margin-bottom: 1rem;

        .form-label {
            font-size: 14px;
        }

        .form-control {
            height: 44px;
            border-radius: 8px;
        }

        .password-align {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-start;
        }

        .form-input-icons {
            color: #A1A2A4;
            float: right;
            position: relative;
            top: -1.8rem;
            right: 14px;
            opacity: .5;
        }

        .form-input-icons:hover {
            cursor: pointer;
        }

        .text-muted {
            margin-top: 5px;
            padding-top: 5px;
        }

        #sign-in-fpwd {
            margin-top: 6px;
            padding-top: 6px;
        }
    }
    
    .form-check {
        margin-bottom: 5px;
        padding-bottom: 5px;

        .form-check-label {
            display: flex;
            font-size: 14px;
            margin-bottom: 5px;
            padding-bottom: 5px;
        }
    }

    .text-signup {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
        padding-top: 10px;
    }

    .btn-primary {
        border-radius: 25px;
        height: 44px;
        margin: 5px 0px 15px 0px;
    }

    .forgot-pwd-icon {
        margin: 0.5rem;
        padding: 0.5rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .text-forgot-pwd {
        opacity: .8;
        font-size: 16px;
        width: 235px;
        margin: auto;
        padding: 4px 4px 20px 4px;
        text-align: center;
    }

    .text-new-pwd {
        opacity: .8;
        font-size: 16px;
        width: 280px;
        margin: auto;
        padding: 4px 4px 20px 4px;
        text-align: center;
    }

    .text-mail-vc {
        opacity: .8;
        font-size: 16px;
        width: 240px;
        margin: auto;
        padding: 4px 4px 20px 4px;
        text-align: center;
    }

    .text-mail-vfd {
        opacity: .8;
        font-size: 16px;
        width: 290px;
        margin: auto;
        padding: 4px 4px 20px 4px;
        text-align: center;
    }

    .text-return {
        margin: auto;
        padding: 1rem;
        color: #475467;
    }

    .text-resend {
        font-weight: 500;
        width: auto;

        > a {
            margin: auto 36% 1rem auto;
            width: 92px;
        }
    }
}

#sign-in-col a {
    text-decoration: none;
    float: right;
}

.divider {
    width: 250px;
}

#brand-col {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: -12px;

    .app-title {
        margin: 35px 0px 0px 0px;
        padding: 2rem;

        .label-force-logo {
            width: 40vh;
        }
    }

    .app-branding {
        background-color: #292C33;
        width: 670px;
        border-radius: 0px 50px 0px 0px;
        margin-top: 25px;
        width: 35vw;
        min-width: 395px;
        background-image: linear-gradient(119deg, rgba(55, 112, 163, 0.6),
        rgba(85, 99, 112, 0.6));
        opacity: .65;
     }

    .app-branding .branding-img {
        max-width: 100%;
        max-height: 100%;
        width: 90vh;
        padding: 5px 20px 0px 0px;

        /* vertical-align: middle;
        -webkit-filter: grayscale(100%) contrast(0.9);
        -moz-filter: grayscale(100%) contrast(0.9); */
        filter: grayscale(90%) contrast(90%) sepia(55%) saturate(100%) hue-rotate(168deg) brightness(88%);
        /* filter: grayscale(10) brightness(0) saturate(100%) invert(40%) sepia(15%) saturate(543%) hue-rotate(168deg) brightness(88%) contrast(87%); */
        /* filter: brightness(0) saturate(100%) invert(40%) sepia(15%) saturate(543%) hue-rotate(168deg) brightness(88%) contrast(87%); */
     }

     /* .app-branding .branding-img::before {
        background-image: linear-gradient(45deg, darken(#13abdb,5%), #B10DC9);
     } */

     /* .app-branding::before {
        background-image: linear-gradient(119deg, rgba(55, 112, 163, 0.6),
        rgba(85, 99, 112, 0.6));
     } */
}
</style>