import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './assets/css/custom.css';

import LoginView from "./views/LoginView.vue";
import ForgotPasswordView from "./views/ForgotPasswordView.vue";
import RegisterView from "./views/RegisterView.vue";
import EmailVerificationView from "./views/EmailVerificationView.vue";
import EmailOtpCodeView from "./views/EmailOtpCodeView.vue";
import AccountCreated from "./views/AccountCreated.vue";
import PasswordResetView from "./views/PasswordResetView.vue";

import ClientDashoard from "./views/client/ClientDashboard.vue";
import NewProject from "./views/client/AddNewProject.vue";
import FileUpload from "./views/client/UploadFiles.vue";
import LabellingOverview from "./views/client/LabellingOverview.vue";
import LabellingHours from "./views/client/LabellingHours.vue";
import ReviewPayment from "./views/client/ReviewPayment.vue";

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
    },

    // Client Dashboard
    {
        path: "/client/mydashboard",
        component: ClientDashoard,
    },
    {
        path: "/newproject",
        component: NewProject,
    },
    {
        path: "/uploadfiles",
        component: FileUpload,
    },
    {
        path: "/labellingoverview",
        component: LabellingOverview,
    },
    {
        path: "/labellinghours",
        component: LabellingHours,
    },
    {
        path: "/payment",
        component: ReviewPayment,
    },
  ],
});

app.use(router);
app.mount('#app')
