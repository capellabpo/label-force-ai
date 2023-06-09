<template>
    <div id="side-nav-bar"
        class="bg-transparent col-auto col-md-3 col-md-3 min-vh-100 d-flex flex-column justify-content-between">
        <div class="bg-transparent p-2">
            <a href="#" class="d-flex mt-1 align-items-center text-white" id="logo-item">
                <img class="nav-logo" src="../assets/imgs/dashboard/labelforce_icon.png" />
                <span class="fs-4 ms-3 d-none d-sm-inline" style="margin: auto;">
                    LABEL<span style="font-weight: 300;">FORCE</span> AI
                </span>
            </a>
            <ul class="nav nav-pills flex-column mt-4">
                <li class="nav-item py-2 py-sm-0">
                    <a href="#" class="nav-link text-white" style="background-color: #101828;">
                        <img class="profile-icon" src="../assets/imgs/dashboard/Avatar.png" />
                        <span class="fs-4 ms-3 d-none d-sm-inline">
                            <span style="font-size: 18px; font-weight: 500;">Olivia Rhye</span>
                            <br><span
                                style="font-size: 14px; font-weight: 300; display: block;">olivia@untitledui.com</span>
                        </span>
                    </a>
                </li>
                <li class="nav-item py-2 py-sm-0">
                    <a href="#" class="nav-link text-white">
                        <img src="../assets/imgs/dashboard/Icon.png" />
                        <span class="fs-5 ms-3 d-none d-sm-inline">Projects</span>
                    </a>
                </li>
                <li class="nav-item py-2 py-sm-0">
                    <a href="#" class="nav-link text-white">
                        <img src="../assets/imgs/dashboard/inbox_icon.png" />
                        <span class="fs-5 ms-3 d-none d-sm-inline">Inbox</span>
                        <span class="inbox-count">10</span>
                    </a>
                </li>
                <li class="nav-item py-2 py-sm-0">
                    <a href="#" class="nav-link text-white">
                        <img src="../assets/imgs/dashboard/invoices_icon.png" />
                        <span class="fs-5 ms-3 d-none d-sm-inline">Billing History</span>
                    </a>
                </li>
                <li class="nav-item py-2 py-sm-0">
                    <a href="#" class="nav-link text-white">
                        <img src="../assets/imgs/dashboard/account_icon.png" />
                        <span class="fs-5 ms-3 d-none d-sm-inline">Account</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="bg-transparent p-2" id="sidenav-lower-links">
            <ul class="nav nav-pills flex-column mt-4">
                <li class="nav-item py-2 py-sm-0">
                    <a href="#" class="nav-link text-white">
                        <img src="../assets/imgs/dashboard/support_icon.png" />
                        <span class="fs-5 ms-3 d-none d-sm-inline">Support</span>
                    </a>
                </li>
                <hr id="side-nav-divider">
                <li class="nav-item py-2 py-sm-0">
                    <a href="#" class="nav-link text-white">
                        <img src="../assets/imgs/dashboard/logout_icon.png" />
                        <span class="fs-5 ms-3 d-none d-sm-inline">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
#side-nav-bar {
    max-width: 240px;
    color: #101828;

    #logo-item {
        text-decoration: none;
    }

    .nav-pills li a:hover {
        background-color: rgba(31, 90, 250, 0.37);
    }

    .nav-logo {
        margin: auto;
    }

    .nav-link {
        display: flex;
        /* align-content: center; */
        align-items: center;

        .inbox-count {
            background-color: #264DDB;
            padding: 2px 3px;
            border-radius: 16px;
            width: 36px;
            margin: 0px 0px 0px auto;
            text-align: -webkit-center;
            height: 25px;
            font-size: 14px;
        }
    }

    #sidenav-lower-links {
        #side-nav-divider {
            border-width: 2px;
            color: #264DDB;
        }
    }
}
</style>