<template>
    <div class="container-fluid">
        <div id="side-nav-bar" class="bg-transparent col-auto col-md-10 col-lg-8 min-vh-100 d-flex flex-column justify-content-between">
            <div class="bg-transparent p-2">
                <a href="#" class="d-flex mt-1 align-items-center text-white" id="logo-item">
                    <img class="nav-logo" src="../../assets/imgs/dashboard/labelforce_icon.png" />
                    <span class="fs-4 ms-3 d-none d-sm-inline" style="margin: auto;">
                        LABEL<span style="font-weight: 300;">FORCE</span> AI
                    </span>
                </a>
                <ul class="nav nav-pills flex-column mt-4">
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
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
                            <span class="fs-4 ms-3 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../assets/imgs/dashboard/inbox_icon.png" />
                            <span class="fs-4 ms-3 d-none d-sm-inline">Inbox</span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../assets/imgs/dashboard/invoices_icon.png" />
                            <span class="fs-4 ms-3 d-none d-sm-inline">Invoices</span>
                        </a>
                    </li>
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../assets/imgs/dashboard/account_icon.png" />
                            <span class="fs-4 ms-3 d-none d-sm-inline">Account</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="bg-transparent p-2" id="sidenav-lower-links">
                <ul class="nav nav-pills flex-column mt-4">
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <i class="fs-5 fa fa-table-list"></i>
                            <img src="../../assets/imgs/dashboard/support_icon.png" />
                            <span class="fs-4 ms-3 d-none d-sm-inline">Support</span>
                        </a>
                    </li>
                    <hr id="side-nav-divider">
                    <li class="nav-item py-2 py-sm-0">
                        <a href="#" class="nav-link text-white">
                            <img src="../../assets/imgs/dashboard/logout_icon.png" />
                            <span class="fs-4 ms-3 d-none d-sm-inline">Logout</span>
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
                    <div class="col-xxl-8">
                        <h3>Welcome back, Olivia!</h3>
                        <div class="table-container">
                            <div class="projects">
                                <h4>My Projects</h4>
                                <span>Keep track and manage multiple projects at once.</span>
                            </div>
                            <div class="projects project-btns">
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="&#128269; Search" aria-label="Search">
                                    <button class="btn btn-light" type="submit"><img src="../../assets/imgs/dashboard/filter_icon.png" />&nbsp;Filters</button>
                                </form>
                                <button class="btn btn-primary" type="submit"><img src="../../assets/imgs/dashboard/new_icon.png" />&nbsp;New Project</button>
                            </div>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Right Column content -->
                    <div class="col-xxl-4">
                        <div class="table-container">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
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
        }

        #sidenav-lower-links {
            #side-nav-divider {
                color: #264DDB;
            }
        }
    }

    .content {
        width: 100%;
        background: linear-gradient(64.66deg, #101828 48.38%, #264DDB 102.45%);
        padding: 1rem 0px 0px 1rem !important;

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

                        .btn, .form-control {
                            border-radius: 20px;
                            display: flex;
                            align-items: center;
                        }
                    }
                }
            }
        }
    }
        
}
</style>