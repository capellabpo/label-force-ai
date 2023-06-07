<template>
    <div class="container-fluid">
        <div id="side-nav-bar" class="bg-transparent col-auto col-md-3 col-md-3 min-vh-100 d-flex flex-column justify-content-between">
            <div class="bg-transparent p-2">
                <a href="#" class="d-flex mt-1 align-items-center text-white" id="logo-item">
                    <img class="nav-logo" src="../../../assets/imgs/dashboard/labelforce_icon.png" />
                    <span class="fs-4 ms-3 d-none d-sm-inline" style="margin: auto;">
                        LABEL<span style="font-weight: 300;">FORCE</span> AI
                    </span>
                </a>
                <ul class="nav nav-pills flex-column mt-4">
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white" style="background-color: #101828;">
                            <img class="profile-icon" src="../../../assets/imgs/dashboard/Avatar.png" />
                            <span class="fs-4 ms-3 d-none d-sm-inline">
                                <span style="font-size: 18px; font-weight: 500;">Olivia Rhye</span>
                                <br><span style="font-size: 14px; font-weight: 300; display: block;">olivia@untitledui.com</span>
                            </span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../../assets/imgs/dashboard/Icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Projects</span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../../assets/imgs/dashboard/inbox_icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Inbox</span>
                            <span class="inbox-count">10</span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../../assets/imgs/dashboard/invoices_icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Invoices</span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../../assets/imgs/dashboard/account_icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Account</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="bg-transparent p-2" id="sidenav-lower-links">
                <ul class="nav nav-pills flex-column mt-4">
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../../assets/imgs/dashboard/support_icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Support</span>
                        </a>
                    </li>
                    <hr id="side-nav-divider">
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../../assets/imgs/dashboard/logout_icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="p-3 content">
            <div class="container">
                <div class="current-page-container">
                    <img src="../../../assets/imgs/dashboard/home_icon.png" />
                    <img src="../../../assets/imgs/dashboard/caret_right_icon.png" />
                    <button type="button" class="btn btn-light">Manage</button>
                </div>

                <div class="manage-header">
                    <div class="title">
                        <h5 for="" class="form-label">Labelling Objects and Road Features</h5>
                        <span><i class="fa fa-circle fa-2xs" aria-hidden="true"></i> Ongoing</span>
                    </div>
                    <div class="description">
                        <small id="helpId" class="form-text text-muted">The project will require creating an annotation tool or utilizing existing tools to annotate the images <br>
                            with bounding boxes, polygons, or keypoints.</small>
                    </div>
                </div>
                
                <div class="btn-container">
                    <button type="button" class="btn btn-primary"><i class="fa fa-bar-chart" aria-hidden="true"></i> Overview</button>
                    <button type="button" class="btn btn-primary">Inbox <span class="inbox-count">10</span></button>
                    <button type="button" class="btn btn-primary">Files</button>
                </div>

                <hr class="divider">

                <div class="project-details">
                    <div class="card">
                        <div class="card-body">
                            <span>
                                <img src="../../../assets/imgs/dashboard/Icon.png" />
                                <img src="../../../assets/imgs/dashboard/Icon.png" />
                            </span>
                            <p class="card-text">Data Type</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">Classification</h6>
                            <p class="card-text">Label Type</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">Label Box</h6>
                            <p class="card-text">Labelling Software</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">MM DD, YYYY</h6>
                            <p class="card-text">Project Creation Date</p>
                        </div>
                    </div>
                </div>

                <div class="project-hrs-kpi">
                    <h5>Project Hours</h5>
                    <small id="helpId" class="form-text text-muted">Monitor and track the progress of your project.</small>
                
                    <div class="row">
                        <div class="col-progress col-sm-8">
                            <half-circle-progress></half-circle-progress>
                        </div>
                        <div class="col col-sm-2">
                            <div class="total-hours">
                                <h5>$100.00</h5>
                                <small id="helpId" class="form-text text-muted">Project Total Hours</small>
                                <h5>$10.00</h5>
                                <small id="helpId" class="form-text text-muted">Additional Hours</small>
                                <h5>$100.00</h5>
                                <small id="helpId" class="form-text text-muted">Subtotal</small>
                            </div>
                            <button class="btn btn-primary" >
                                    Buy Hours
                            </button>
                        </div>
                    </div>
                </div>

                <div class="billing-history">
                    <h5>Billing History</h5>
                    <div class="filter-btn-container">
                        <button type="button" class="btn btn-primary"><i class="fa fa-bar-chart" aria-hidden="true"></i> View All</button>
                        <button type="button" class="btn btn-primary">June</button>
                    </div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Transactional ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Hours</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Receipt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">ID: 00023219</th>
                                <td>
                                    <span class="date">5/26/23</span><br>
                                    <small id="helpId" class="form-text text-muted">At 1:00pm</small>
                                </td>
                                <td class="hours">+20 hrs</td>
                                <td class="amount">-$100.00</td>
                                <td>
                                    <a href="#">View/Download</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">ID: 00023218</th>
                                <td>
                                    <span class="date">5/26/23</span><br>
                                    <small id="helpId" class="form-text text-muted">At 1:00pm</small>
                                </td>
                                <td class="hours">+15 hrs</td>
                                <td class="amount">-$75.00</td>
                                <td>
                                    <a href="#">View/Download</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">ID: 00023217</th>
                                <td>
                                    <span class="date">5/26/23</span><br>
                                    <small id="helpId" class="form-text text-muted">At 1:00pm</small>
                                </td>
                                <td class="hours">-$50.00</td>
                                <td class="amount">-$50.00</td>
                                <td>
                                    <a href="#">View/Download</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HalfCircleProgress from '../../../components/HalfCircleProgress.vue';

export default {
    name: "NewPoject",
    components: {
        HalfCircleProgress
     },
    methods: {
        goBackToDashboard() {
            this.$router.push("/client/mydashboard");
        },

        goToUploadFileForm() {
            this.$router.push("/mydashboard/uploadfiles");
        }
    }
}
</script>

<style scoped>
.container-fluid {
    /* font-family: 'Inter';
    font-style: normal; */
    background-color: #101828;
    display: flex;
    padding: 0;

    /* .profile-icon {
        width: 5%;
        height: 5%;
    } */

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

    .content {
        font-size: 14px;
        color: #475467;
        width: 100%;
        background: linear-gradient(64.66deg, #101828 48.38%, #264DDB 102.45%);
        padding: 2rem 0px 0px 1rem !important;

        .container {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-content: flex-start;
            margin-top: auto;
            max-width: 100%;
            height: 100%;
            border-radius: 40px 0px 0px 0px;
            background-color: #FFFFFF;
            align-items: flex-start;
            padding: 1.5rem;

            .form-text {
                font-size: 14px;
            }

            .current-page-container {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 11rem;
                margin-left: 1rem;
            }

            .manage-header {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                align-items: flex-start;
                padding: 2rem 0px 1rem 0px;

                .title {
                    display: flex;

                    > span {
                        margin: 0px 0px 13px 1rem;
                        padding: 5px 10px;
                        border: 1px solid #FFFFFF;
                        border-radius: 16px;
                        background-color: #ECFDF3;
                        color: #027A48;
                        font-weight: 500;
                    }
                }
            }

            .btn-container {

                .btn-primary {
                    --bs-btn-color: #344054;
                    --bs-btn-bg: #FFFFFF;
                    --bs-btn-border-color: #FFFFFF;
                    --bs-btn-hover-color: #053CD3;
                    --bs-btn-hover-bg: #F5F8FF;
                    --bs-btn-hover-border-color: #F5F8FF;
                    font-weight: 500;
                }

                .inbox-count {
                    background-color: #F2F4F7;
                    padding: 2px 6px;
                    border-radius: 8px;
                    width: 36px;
                    margin: 0px 0px 0px auto;
                    height: 25px;
                    font-size: 11px;
                }
            }

            .divider {
                color: #556370;
                opacity: .125;
                width: 100%;
                font-weight: 600;
            }

            .project-details {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                width: 100%;
                .card {
                    margin-top: 10px;
                    width: 195px;
                    border-color: #F5F8FF;

                    .card-body {
                        background-color: #F5F8FF;
                        padding: 15px 1.5rem;
                    }
                }
            }

            .project-hrs-kpi {
                width: 85%;
                padding-top: 1.5rem;
                
                > h5 {
                    font-size: 17px;
                }

                .row {
                    .col-progress {
                        /*  */
                    }

                    .col {
                        .total-hours {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            flex-wrap: wrap;
                            padding: 10px 15px 1.3rem 15px;
                            border: 1px solid #FAFAFA;
                            border-radius: 8px;
                            background-color: #FAFAFA;

                            > h5 {
                                padding: 1rem 0px 0px 0px;
                            }

                            /* .form-text {
                                padding-bottom: 1rem;
                            } */
                        }
                        .btn {
                            margin-top: 10px;
                            width: 100%;
                            border-radius: 18px;
                        }

                    }
                }
            }

            .billing-history {
                width: 100%;
                padding-top: 1.5rem;

                > h5 {
                    font-size: 17px;
                }

                .btn-primary {
                    --bs-btn-color: #344054;
                    --bs-btn-bg: #FFFFFF;
                    --bs-btn-border-color: #FFFFFF;
                    --bs-btn-hover-color: #053CD3;
                    --bs-btn-hover-bg: #F5F8FF;
                    --bs-btn-hover-border-color: #F5F8FF;
                    font-weight: 500;
                }

                .table {
                    opacity: .9;
                    --bs-table-hover-bg: #E9F3FB;

                    > tbody {
                        background-color: #F9FAFB;
                    }

                    .date,
                    .hours,
                    .amount {
                        font-weight: 600;
                    }
                }
            }

        }
    }
}



</style>