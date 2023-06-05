<template>
    <div class="container-fluid">
        <div id="side-nav-bar" class="bg-transparent col-auto col-md-3 col-md-3 min-vh-100 d-flex flex-column justify-content-between">
            <div class="bg-transparent p-2">
                <a href="#" class="d-flex mt-1 align-items-center text-white" id="logo-item">
                    <img class="nav-logo" src="../../assets/imgs/dashboard/labelforce_icon.png" />
                    <span class="fs-4 ms-3 d-none d-sm-inline" style="margin: auto;">
                        LABEL<span style="font-weight: 300;">FORCE</span> AI
                    </span>
                </a>
                <ul class="nav nav-pills flex-column mt-4">
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white" style="background-color: #101828;">
                            <img class="profile-icon" src="../../assets/imgs/dashboard/Avatar.png" />
                            <span class="fs-4 ms-3 d-none d-sm-inline">
                                <span style="font-size: 18px; font-weight: 500;">Olivia Rhye</span>
                                <br><span style="font-size: 14px; font-weight: 300; display: block;">olivia@untitledui.com</span>
                            </span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../assets/imgs/dashboard/Icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Projects</span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../assets/imgs/dashboard/inbox_icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Inbox</span>
                            <span class="inbox-count">10</span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../assets/imgs/dashboard/invoices_icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Invoices</span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../assets/imgs/dashboard/account_icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Account</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="bg-transparent p-2" id="sidenav-lower-links">
                <ul class="nav nav-pills flex-column mt-4">
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../assets/imgs/dashboard/support_icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Support</span>
                        </a>
                    </li>
                    <hr id="side-nav-divider">
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../assets/imgs/dashboard/logout_icon.png" />
                            <span class="fs-5 ms-3 d-none d-sm-inline">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- <div class="dropdown open p-3">
                <button class="btn border-none dropdown-toggle text-white" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <img src="../../assets/imgs/dashboard/Icon.png" /><span class="m-2 d-none d-sm-inline">User</span>
                        </button>
                <div class="dropdown-menu" aria-labelledby="triggerId">
                    <button class="dropdown-item" href="#">Settings</button>
                    <button class="dropdown-item disabled" href="#">Profile</button>
                </div>
            </div>
             -->
            
        </div>

        <div class="p-3 content">
            <div class="container">
                <div class="row">
                    <!-- Left Column content -->
                    <h1>Welcome back, Olivia!</h1>
                    <div class="col-lg-9">
                        <div class="table-container">
                            <div class="projects">
                                <h4>My Projects</h4>
                                <span>Keep track and manage multiple projects at once.</span>
                            </div>
                            <div class="projects project-btns">
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="&#x2315; Search" aria-label="Search">
                                    <button class="btn btn-light" type="submit"><img src="../../assets/imgs/dashboard/filter_icon.png" />&nbsp;Filters</button>
                                </form>
                                <button class="btn btn-primary" type="submit"><img src="../../assets/imgs/dashboard/new_icon.png" />&nbsp;New Project</button>
                            </div>
                            <table class="table">
                            <!-- <table class="table table-hover"> -->
                                <thead>
                                    <tr style="background-color: #EAECF0; border-color: #EAECF0;">
                                        <th class="th-title" scope="col">Project Name</th>
                                        <th class="th-title" scope="col">Label Type</th>
                                        <th class="th-title" scope="col">Status</th>
                                        <th class="th-title" scope="col">Project Hours</th>
                                        <th class="th-title" scope="col">Created</th>
                                        <th class="th-title" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody class="table-body">
                                    <tr>
                                        <td scope="row" class="col-md-2" style="font-weight: 600;">Project7
                                            <div class="project-icons-container">
                                                <img class="table-project-icons" src="../../assets/imgs/dashboard/table_icons/image_icon.png"/>
                                                <img class="table-project-icons" src="../../assets/imgs/dashboard/table_icons/video_camera_icon.png"/>
                                            </div>
                                        </td>
                                        <td>Classification</td>
                                        <td>
                                            <button type="button" class="btn btn-light btn-to-start">&#x2022; To Start</button>
                                        </td>
                                        <!-- progress bar : bar - tracking for admin | <span> purchaseed number of hours ? percentage puchased vs. number of hours -->
                                        <td class="progress-table-data">
                                            <div class="progress-container">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span class="progress-hrs-txt">10</span>
                                            </div>
                                        </td>
                                        <td>5/26/23</td>
                                        <td>
                                            <button type="button" class="btn btn-primary manage-btn">Payment</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Project3
                                            <div class="project-icons-container">
                                                <img class="table-project-icons" src="../../assets/imgs/dashboard/table_icons/underlined_letter_icon.png"/>
                                                <img class="table-project-icons" src="../../assets/imgs/dashboard/table_icons/file_icone.png"/>
                                                <img class="table-project-icons" src="../../assets/imgs/dashboard/table_icons/suitcase_icon.png"/>
                                            </div>
                                        </td>
                                        <td>Bounding Box</td>
                                        <td>
                                            <button type="button" class="btn btn-success btn-ongoing">&#x2022; Ongoing</button>
                                        </td>
                                        <td class="progress-table-data">
                                            <div class="progress-container">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar bg-success" role="progressbar" style="width: 50%; background-color: #1FBB72 !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span class="progress-hrs-txt">15</span>
                                            </div>
                                        </td>
                                        <td>5/25/23</td>
                                        <td>
                                            <button type="button" class="btn btn-primary manage-btn">Manage</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Project5
                                            <div class="project-icons-container">
                                                <img class="table-project-icons" src="../../assets/imgs/dashboard/table_icons/suitcase_icon.png"/>
                                                <img class="table-project-icons" src="../../assets/imgs/dashboard/table_icons/tripledot_icon.png"/>
                                            </div>
                                        </td>
                                        <td>Keypoint</td>
                                        <td>
                                            <button type="button" class="btn btn-danger btn-completed">&#x2022; Completed</button>
                                        </td>
                                        <td class="progress-table-data">
                                            <div class="progress-container">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar" role="progressbar" style="width: 100%; background-color: #F04438!important;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span class="progress-hrs-txt">12</span>
                                            </div>
                                        </td>
                                        <td>4/01/23</td>
                                        <td>
                                            <button type="button" class="btn btn-primary manage-btn">Manage</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="pagination">
                                <div class="page">
                                    <span>Page 1 of 3</span>
                                </div>
                                <div class="pg-btns">
                                    <button type="button" class="btn btn-light">Previous</button>
                                    <button type="button" class="btn btn-light">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column content -->
                    <div class="col-lg-3">
                        <div class="container right-column">
                            <div class="project-stats">
                                <div class="project-stats-content">
                                    <div class="project-stats-content-item">
                                        <span class="project-stats-content-item-title">Total Projects</span>
                                        <span class="project-stats-content-item-value"><img src="../../assets/imgs/dashboard/kpi_icons/stats_icon.png"/> 10</span>
                                    </div>
                                    <div class="project-stats-content-item">
                                        <span class="project-stats-content-item-title">Total Purchased Hours</span>
                                        <span class="project-stats-content-item-value"><img src="../../assets/imgs/dashboard/kpi_icons/hours_icon.png"/> 120 hrs</span>
                                    </div>
                                    <div class="project-stats-content-item">
                                        <span class="project-stats-content-item-title">Total Projects Cost</span>
                                        <span class="project-stats-content-item-value"><img src="../../assets/imgs/dashboard/kpi_icons/dollar_icon.png"/> ***</span>
                                    </div>
                                </div>
                            </div>
                            <div class="recent-activities">
                                <div class="project-stats-title">
                                    <span><h6 style="color: #475467">Recent Activity</h6></span>
                                </div>
                                <div class="project-stats-content">
                                    <div class="project-stats-content-item">
                                        <span class="project-stats-content-item-title">Purchased 5 hrs to Project1.</span>
                                        <span class="project-stats-content-item-value">Just now</span>
                                    </div>
                                    <hr>
                                    <div class="project-stats-content-item">
                                        <span class="project-stats-content-item-title">Project1 has been added.</span>
                                        <span class="project-stats-content-item-value">3 days ago</span>
                                    </div>
                                    <hr>
                                    <div class="project-stats-content-item">
                                        <span class="project-stats-content-item-title">Project5 has been finished.</span>
                                        <span class="project-stats-content-item-value">10 days ago</span>
                                    </div>
                                    <hr>
                                    <div class="project-stats-content-item">
                                        <span class="project-stats-content-item-title">Purchased 10 hrs to Project3.</span>
                                        <span class="project-stats-content-item-value">10 days ago</span>
                                    </div>
                                    <hr>
                                    <div class="project-stats-content-item">
                                        <span class="project-stats-content-item-title">Purchased 10 hrs to Project3.</span>
                                        <span class="project-stats-content-item-value">11 days ago</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    // name: "ClientDashboard"
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
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            align-content: flex-start;
            margin-top: auto;
            max-width: 100%;
            height: 100%;
            border-radius: 40px 0px 0px 0px;
            background-color: #FFFFFF;

            .row {
                width: 100%;
                padding: 3rem 1rem;
                margin: 2rem 0px;

                .projects {
                    padding: 1.5rem;
                    border-style: solid;
                    border-color: #EAECF0;
                    border-top: none;
                    border-right: none;
                    border-left: none;
                    border-width: 1px;
                }

                .table-container {
                    margin-top: 2rem;
                    border-style: solid;
                    border-color: #EAECF0;
                    border-width: 2px;
                    border-radius: 15px;

                    .project-btns {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        flex-direction: row;

                        .btn, .form-control {
                            border-radius: 20px;
                            display: flex;
                            align-items: center;
                        }
                    }

                    .table {
                        > th, td {
                            padding: 1rem 0rem 1rem 10px;
                            margin: 1rem 0px;
                        }

                        > span {
                            color: #344054;
                        }

                        .th-title {
                            color: #475467;
                            font-size: 14px;
                            padding: 1rem 0rem 1rem 10px;
                        }

                        .btn {
                            border-radius: 25px;
                            padding: 2px 12px;
                            height: 30px;
                            font-size: 14px;
                            font-weight: 500;
                        }

                        .table-body {
                            font-size: 14px;
                            color: #475467;

                            
                            
                            .table-project-icons {
                                padding: 4px;
                                margin: 2px;
                                width: 18px;
                                height: 18px;
                                background: #EAF7FD;
                                border-radius: 8px;
                            }

                            .btn-to-start {
                            /* background-color: #F2F2F2; */
                                color: #344054; 
                                background-color: #F2F4F7;
                                border: #F2F4F7;
                            }

                            .btn-ongoing {
                                color: #027A48;
                                background-color: #ECFDF3;
                                border: #ECFDF3;
                            }

                            .btn-completed {
                                color: #B42318;
                                background-color: #FEF3F2;
                                border: #FEF3F2;
                            }

                            .manage-btn {
                                font-weight: 400;
                            }

                            .progress-table-data {

                                .progress-container {
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    flex-direction: row;
                                    flex-wrap: nowrap;

                                    .progress {
                                        color: #EAECF0;
                                        height: 10px;
                                        width: 100px;
                                    }

                                    .progress-hrs-txt {
                                        margin-left: 1rem;
                                        font-size: 12px;
                                        font-weight: 700;
                                    }
                                }
                                
                            }
                            
                        }
                    }
                }

                .pagination {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                    align-content: center;
                    align-items: center;
                    padding: 0rem 1rem 1rem 0rem;

                    .page {
                        font-weight: 500;
                        margin-right: 1rem;
                    }

                    .pg-btns {
                        > button {
                            font-size: 14px;
                            font-weight: 500;
                            border-radius: 25px;
                            margin: 6px;
                        }
                    }
                }
            }

            .right-column {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                align-content: stretch;
                justify-content: flex-start;
                align-items: stretch;
                margin-top: 24px;

                .project-stats, 
                .recent-activities {
                    padding: 14px;
                    margin: 8px;
                    border: solid 2px;
                    border-color: #EAECF0;
                    border-radius: 15px;

                    .project-stats-content-item {
                        color: #475467;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                    }

                    .project-stats-content-item-title {
                        color: #475467;
                        font-size: 14px;
                        font-weight: 500;
                    }
                }

                .project-stats .project-stats-content-item {
                    font-size: 20px;
                    font-weight: 700;
                    /* color: #101828; */
                }

                .recent-activities .project-stats-content-item-value {
                    font-size: 12px;
                    /* color: #101828; */
                }
            }
        }
    }
}
</style>