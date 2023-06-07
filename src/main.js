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

// Client Dashboard
import ClientDashoard from "./views/client/ClientDashboard.vue";

// New Project
import NewProject from "./views/client/NewProject/AddNewProject.vue";
import FileUpload from "./views/client/NewProject/UploadFiles.vue";
import LabellingOverview from "./views/client/NewProject/LabellingOverview.vue";
import LabellingHours from "./views/client/NewProject/LabellingHours.vue";
import ReviewPayment from "./views/client/NewProject/ReviewPayment.vue";

// Manage
import ManageProject from "./views/client/Manage/ManageProject.vue";

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

    // start of new project routes 
    {
        path: "/mydashboard/newproject",
        component: NewProject,
    },
    {
        path: "/mydashboard/uploadfiles",
        component: FileUpload,
    },
    {
        path: "/mydashboard/labellingoverview",
        component: LabellingOverview,
    },
    {
        path: "/mydashboard/labellinghours",
        component: LabellingHours,
    },
    {
        path: "/mydashboard/payment",
        component: ReviewPayment,
    },
    // end of new project routes

    // start of manage routes
    {
        path: "/mydashboard/manageproject",
        component: ManageProject,
    },
  ],
});

app.use(router);
app.mount('#app')
