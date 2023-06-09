<template>
    <div class="container-fluid">
        <side-navigation-bar></side-navigation-bar>

        <div class="p-3 content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 left-column">
                        <div class="current-page-container">
                            <img src="../../../assets/imgs/dashboard/home_icon.png" />
                            <img src="../../../assets/imgs/dashboard/caret_right_icon.png" />
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
                                <div class="line active"></div>
                                <div class="tracker-details active">
                                    <span>Labelling Hours</span>
                                    <span>Please type the number of hours you wish to purchase</span>
                                </div>
                            </div>
                            <div class="step">
                                <div class="circle active"></div>
                                <div class="line"></div>
                                <div class="tracker-details active">
                                    <span>Review & Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-9 right-column">
                        <form id="add-new-projects-form" action="">
                            <div class="mb-3">
                                <label for="" class="form-label">Review & Payment</label>
                                <!-- <textarea class="form-control" name="" id="" rows="3"></textarea> -->
                            </div>

                            <div class="row">
                                <div class="col-sm-7 payment-column">
                                    <label for="" class="form-label">Project Details</label>
                                    <hr>
                                    <ul>
                                        <li>Data Type: <span>Image, Video</span></li>
                                        <li>Label Type: <span>Bounding Box, Classification</span></li>
                                        <li>Labelling Software: <span>Labelbox</span></li>
                                        <li>Uploaded Files: <span>Completed</span></li>
                                        <li>Uploaded Documents: <span>Completed</span></li>
                                    </ul>
                                </div>
                                <div class="col-sm-4 payment-summary">
                                    <div class="payment-sum-header">
                                        <label for="" class="form-label">Payment Summary</label>
                                        <a href="#">Edit</a>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col">
                                            <span>$ per hour</span>
                                            <span>Purchased Hours</span>
                                        </div>
                                        <div class="col">
                                            <span>$5.00</span>
                                            <span>10 hrs</span>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col">
                                            <h3>Total</h3>
                                            <span>for 10 hours</span>
                                        </div>
                                        <div class="col">
                                            <h3>$50.00</h3>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-primary">Pay Now</button>
                                </div>
                            </div>

                            <div class="form-pagination form-item">
                                <!-- cancel button transitions to back -->
                                <button @click="goToStripePayment" type="button" class="btn btn-light">Next &rarr;</button>
                                <button @click="goToLabelHoursForm" type="button" class="btn btn-light">&larr; Back</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import SideNavigationBar from '../../../components/SideNavigationBar.vue'

export default {
    name: "PaymentForm",
    components: {
        SideNavigationBar
    },
    methods: {
        goToLabelHoursForm() {
            this.$router.push("/mydashboard/labellinghours");
        },

        goToStripePayment() {
            // Opens a new window that re-directs to Stripe payment page
        }
    }
}
</script>

<style scoped>
.container-fluid {
    background-color: #101828;
    display: flex;
    padding: 0;

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

                    >div {
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

                    .row {

                        >div:first-child {
                            margin-right: 1rem;
                        }

                        .payment-column {
                            border: 1px solid #EAECF0;
                            border-radius: 8px;
                            padding: 1rem;

                            >hr {
                                border-color: grey;
                                opacity: .1;
                            }

                            >ul li {
                                margin-bottom: 1rem;

                                >span {
                                    color: #475467;
                                    font-weight: 600;
                                }
                            }
                        }

                        .payment-summary {
                            border: 1px solid #EAECF0;
                            border-radius: 8px;
                            padding: 1rem;

                            .payment-sum-header {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                            }

                            .row .col {
                                font-size: 14px;
                                display: grid;
                                /* justify-content: start;
                                    align-content: center; */

                                >span:first-child {
                                    color: #A1A2A4;
                                    margin: 0px 1rem 1rem 0px;
                                }
                            }

                            .btn-primary {
                                width: 100%;
                                border-radius: 20px;
                                font-size: 18px;
                                margin-top: 10px;
                            }
                        }

                    }




                    .form-pagination {
                        display: flex;
                        flex-direction: row-reverse;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        margin-left: 71%;

                        >button {
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