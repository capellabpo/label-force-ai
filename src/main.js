import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap';
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
import PageFiller from "./views/client/PageFiller.vue"

// New Project
import NewProject from "./views/client/NewProject/AddNewProject.vue";
import FileUpload from "./views/client/NewProject/UploadFiles.vue";
import LabellingOverview from "./views/client/NewProject/LabellingOverview.vue";
import LabellingHours from "./views/client/NewProject/LabellingHours.vue";
import ReviewPayment from "./views/client/NewProject/ReviewPayment.vue";

// Manage
import ManageProject from "./views/client/Manage/ManageProject.vue";
import Inbox from "./views/client/Manage/Inbox.vue";
import ProjectFiles from "./views/client/Manage/ProjectFileUpload.vue";
import BilingHistoryInNavigation from "./views/client/Manage/BillingHistoryInNavigation.vue";
import TestComponent from "./views/client/Manage/TestComponent.vue";

// Account
import UserAccount from "./views/client/AccountSettings/MyProfile.vue";

// Placeholder
// import PaymentSuccess from "./views/client/PlaceholderPages/PaymentSuccess.vue";

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
        path: "/client/notify",
        component: PageFiller,
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
    {
        path: "/mydashboard/inbox",
        component: Inbox,
    },
    {
        path: "/mydashboard/files",
        component: ProjectFiles,
    },
    {
        path: "/mydashboard/billinghistory",
        component: BilingHistoryInNavigation,
    },
    {
        path: "/mydashboard/test",
        component: TestComponent,
    },
    // end of manage routes

    // start of user account routes
    {
        path: "/mydashboard/myaccount",
        component: UserAccount,
    },

    // end of user account routes

    // start of place holder pages
    // {
    //     path: "/mydashboard/payment/success",
    //     component: PaymentSuccess,
    // },
  ],
});

app.use(router);
app.mount('#app');
