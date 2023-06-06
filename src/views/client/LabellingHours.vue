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
        </div>

        <div class="p-3 content">
            
            <div class="container">

                <div class="row">
                    <div class="col-lg-3 left-column">
                        <div class="current-page-container">
                            <img src="../../assets/imgs/dashboard/home_icon.png" />
                            <img src="../../assets/imgs/dashboard/caret_right_icon.png" />
                            <button type="button" class="btn btn-light">New Project</button>
                        </div>
                        <div class="progress-tracker">
                            <div class="step">
                                <div class="circle active"></div>
                                <div class="line active"></div>
                                <div class="tracker-details active">
                                    <span>New Project</span>
                                    <span>Please provide the details of your project</span>
                                </div>
                            </div>
                            <div class="step">
                                <div class="circle active"></div>
                                <div class="line active"></div>
                                <div class="tracker-details active">
                                    <span>Upload Files</span>
                                    <span>Upload necessary files (max 150mb)</span>
                                </div>
                            </div>
                            <div class="step">
                                <div class="circle active"></div>
                                <div class="line active"></div>
                                <div class="tracker-details active">
                                    <span>Labelling Overview</span>
                                    <span>Please provide a brief description of your project</span>
                                </div>
                            </div>
                            <div class="step">
                                <div class="circle active"></div>
                                <div class="line"></div>
                                <div class="tracker-details active">
                                    <span>Labelling Hours</span>
                                    <span>Please type the number of hours you wish to purchase</span>
                                </div>
                            </div>
                            <div class="step">
                                <div class="circle"></div>
                                <div class="line"></div>
                                <div class="tracker-details">
                                    <span>Review & Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-9 right-column">
                        <form id="add-new-projects-form" action="">
                            <div class="mb-3">
                                <label for="" class="form-label">Labelling Hours</label>
                                <p class="form-text text-muted">
                                    Please let us know the number of hours you would like to purchase. Our team is committed to providing the necessary support to ensure the successful completion of your project within the specified timeframe.
                                </p>
                                <!-- <textarea class="form-control" name="" id="" rows="3"></textarea> -->
                            </div>
                            <div class="label-hours">
                                <button @click.prevent="decrement" type="button" class="btn btn-light">
                                    <span class="fa fa-minus"></span>
                                </button>
                                <input type="text" name="quant[1]" class="form-control input-number" v-model="hourcount" min="1" max="11"
                                :class = "(hourcount >= 11) ? 'is-invalid' : ''"
                                
                                >
                                <button @click.prevent="increment" type="button" class="btn btn-light"
                                :class = "(hourcount >= 11) ? 'disabled' : ''">
                                    <span class="fa fa-plus"></span>
                                </button>
                                <div class="invalid-feedback">
                                    The minimum is 10 hours.
                                </div>
                            </div>
                            
                            <!-- <div class="col-sm-2">
                                <div class="input-group">
                                    <span class="input-group-prepend">
                                        <button type="button" class="btn btn-outline-secondary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                            <span class="fa fa-minus"></span>
                                        </button>
                                    </span>
                                    <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10">
                                    <span class="input-group-append">
                                        <button type="button" class="btn btn-outline-secondary btn-number" data-type="plus" data-field="quant[1]">
                                            <span class="fa fa-plus"></span>
                                        </button>
                                    </span>
                                </div>
                            </div> -->
                            <div class="price-summary-cont">
                                <label for="" class="form-label" style="font-size: 20px;">Price Summary</label>
                                <hr>
                                <div class="price-summary">
                                    <div class="row">
                                        <div class="col">
                                            <span>$ per hour</span>
                                            <span>Purchased Hours</span>
                                        </div>
                                        <div class="col">
                                            <span>$5.00</span>
                                            <span>00 hrs</span>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col">
                                        <h1>Total</h1>
                                        <span>for 0 hours</span>
                                    </div>
                                    <div class="col">
                                        <h1>$0.00</h1>
                                    </div>
                                </div>

                            </div>
                            
                            <div class="form-pagination form-item">
                                <!-- cancel button transitions to back -->
                                <button @click="goPaymentForm" type="button" class="btn btn-light">Proceed to Payment &rarr;</button>
                                <button @click="goToLabelOverviewForm" type="button" class="btn btn-light">&larr; Back</button>
                            </div>
                        </form>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LabellingHoursForm",
    data() {
        return {
            hourcount: 1
        }
    },
    methods: {
        goToLabelOverviewForm() {
            this.$router.push("/labellingoverview");
        },

        goPaymentForm() {
            this.$router.push("/payment");
        },

        increment () {
            this.hourcount++;
        },
        decrement () {
            if(this.hourcount > 1) {
                this.hourcount-- ;
            }
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
                margin: 1rem 2.5rem;
            }

            .left-column .current-page-container {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 11rem;
            }


            .left-column .progress-tracker {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                align-items: flex-start;
                margin: 5rem 0px 15px 0px;
                
                .step {
                    display: flex;
                    margin-bottom: 20px;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: flex-start;
                }

                .step .circle {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #ccc;
                    margin-right: 10px;
                }

                .step .circle.active {
                    background-color: #007bff;
                }

                .step .tracker-details.active {
                    color: #007bff;
                }

                .tracker-details {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    align-items: flex-start;
                    width: 220px;
                }

                .step .line {
                    width: 2px;
                    flex-grow: 1;
                    background-color: #ccc;
                    margin-left: 9px;
                }

                .step .line.active {
                    height: 51px;
                    border: 1px solid #007bff;
                    position: absolute;
                    margin-top: 25px;
                    opacity: .7;
                }

            }
                
            .right-column {
                color: #344054;

                #add-new-projects-form {
                    background: #FFFFFF;
                    margin: 7rem 10px;
                    box-shadow: -4px 4px 20px rgba(0, 0, 0, 0.05);
                    border-radius: 20px;
                    padding: 1.5rem 2.5rem;
                    border: 1px solid white;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    align-content: stretch;
                    align-items: stretch;
                    justify-content: space-between;

                        .btn-light {
                            --bs-btn-hover-color: #FFFFFF;
                            --bs-btn-hover-bg: #1F5AFA;
                            --bs-btn-hover-border-color: #1F5AFA;
                        }

                        > div {
                            margin-bottom: 2rem;
                        }

                        .form-item {
                            margin: 15px 0px;
                        }

                        .form-label {
                            color: #344054;
                            font-weight: 500;
                            font-size: 16px;
                        }

                        .form-text {
                            margin: 6px 1rem 0px 1rem;
                        }

                        .label-hours {
                            display: flex;
                            flex-wrap: nowrap;
                            flex-direction: row;
                            width: 14%;
                            margin-left: auto;

                            .invalid-feedback {
                                position: absolute;
                                margin-top: 2.5rem;
                            }
                        }

                        .price-summary-cont {
                            border: 1px solid #EAECF0;
                            border-radius: 8px;
                            padding: 1.5rem;

                            > hr {
                                border-color: grey;
                                opacity: .1;
                            }

                            .price-summary .row {
                                .col {
                                    font-size: 18px;
                                    display: grid;
                                    justify-content: start;
                                    align-content: center;

                                    > span:first-child {
                                        color: #A1A2A4;
                                        margin: 0px 1rem 3rem 0px;
                                    }
                                }
                            }
                        }

                        


                        .form-pagination {
                            display: flex;
                            flex-direction: row-reverse;
                            flex-wrap: wrap;
                            justify-content: flex-start;
                            align-items: center;

                            > button {
                                margin: 0px 10px;
                                border-radius: 20px;
                                border: 1px solid #D0D5DD;
                                font-size: 14px;
                                font-weight: 600;
                            }
                        }
                }
                
            }

            /* .current-page-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                flex-direction: row;
                width: 175px;
                margin: 15px 0px 0px 30px;
            } */


        }
    }
}



</style>