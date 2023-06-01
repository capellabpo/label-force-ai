import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/custom.css';

import LoginView from "./views/LoginView.vue";
import ForgotPasswordView from "./views/ForgotPasswordView.vue";
import RegisterView from "./views/RegisterView.vue";
import EmailVerificationView from "./views/EmailVerificationView.vue";
import EmailOtpCodeView from "./views/EmailOtpCodeView.vue";
import AccountCreated from "./views/AccountCreated.vue";
import PasswordResetView from "./views/PasswordResetView.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: LoginView,
    },
    {
        path: "/forgotpassword",
        component: ForgotPasswordView,
    },
    {
        path: "/signup",
        component: RegisterView,
    },
    {
        path: "/passwordreset",
        component: PasswordResetView,
    },
    {
        path: "/emailverification",
        component: EmailVerificationView,
    },
    {
        path: "/otpverification",
        component: EmailOtpCodeView,
    },
    {
        path: "/registered",
        component: AccountCreated,
    }
  ],
});

app.use(router);
app.mount('#app')
