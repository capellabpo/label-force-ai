<template>
    <div class="container">
        <div id="sign-in-col">
            <form class="sign-in-form">
                <h5 id="">Sign in to your account</h5>
                <a class="btn btn-sm btn-google btn-block btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png">&nbsp;Sign in with Google</a>
                <hr class="divider">
                <div class="form-group">
                    <label class="form-label" for="email-input">Email <span class="required">*</span></label>
                    <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label class="form-label" for="password-input">Password <span class="required">*</span></label>
                    <input type="password" class="form-control" id="password-input" placeholder="Password">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                    <small class="form-text text-muted"><a href="#" id="sign-in-fpwd">Forgot password</a></small>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="remember-checkbox">
                    <label class="form-check-label" for="remember-checkbox">Remember me</label>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
                <small class="text-signup">Don't have an account?<a href="#" id="sign-up">&nbsp;Sign up</a></small>
            </form>
        </div>
        <div id="brand-col">
            <div class="app-title">
                <i>icon</i><h5 id="label-force-ai">LABEL<span id="force-font">FORCE</span> AI</h5>
            </div>
            <div class="app-branding">
                <div class="row">
                    <div class="col-6 col-md-4">IMG 1</div>
                    <div class="col-6 col-md-4">IMG 2</div>
                    <div class="col-6 col-md-4">IMG 3</div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-8">
                        PROGRESS BAR
                    </div>
                    <div class="col-6 col-md-4">OVERLAP IMG</div>
                </div>
                <div class="row">
                    <div class="col-6 col-md-4">IMG 4</div>
                    <div class="col-12 col-md-8">IMG 5</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
body {
    background: linear-gradient(119deg, rgba(55, 112, 163, 0.6),
    rgba(85, 99, 112, 0.6)) fixed;
    /* overflow-x: hidden; */
    /* font-family: 'Inter';
    font-style: normal; */
}

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 100vh;
    margin: 0px;

    .sign-in-form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: stretch;
    }

}

.container h5 {
    font-weight: 600;
    margin: auto;
    padding-bottom: 1rem;
}

#sign-in-col {
    padding: 2rem;
    margin: auto;
    background: #FFFFFF;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    width: 395px;

    .btn-google {
        color: #545454;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 1px #ddd;
        padding: 6px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
    }

    .divider {
        color: #556370;
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

        .bi-eye {
            color: #A1A2A4;
            float: right;
            position: relative;
            top: -1.8rem;
            right: 14px;
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
    }
}

#sign-in-col a {
    text-decoration: none;
    float: right;
}

#brand-col {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    /* height: 100vh; */
    /* position: relative; */

    .app-title {
        color: #FFFFFF;
        margin-top: 4rem;

        #force-font {
            font-weight: 300;
        }
        
        #label-force-ai {
            font-size: 40px;
        }
    }

    .app-branding {
        background-color: #292C33;
        color: #FFFFFF;
        border-radius: 20px 0px 0px 0px;
        padding: 2rem;
        margin: auto;
        margin-top: 70px;
        /* flex-grow: 1; */
        /* right: 0px; */
        /* left: 105%; */
        /* position: relative; */
    }
}
</style>