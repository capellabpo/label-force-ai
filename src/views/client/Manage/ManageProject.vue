<template>
    <div class="container-fluid">
        <side-navigation-bar></side-navigation-bar>

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
                        <small id="helpId" class="form-text text-muted">The project will require creating an annotation tool
                            or utilizing existing tools to annotate the images <br>
                            with bounding boxes, polygons, or keypoints.</small>
                    </div>
                </div>

                <div class="btn-container">
                    <button type="button" class="btn btn-primary"><i class="fa fa-bar-chart" aria-hidden="true"></i>
                        Overview</button>
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
                        <div class="col-progress col-sm-6">
                            <half-circle-progress></half-circle-progress>
                            <div class="row hours-count">
                                <div class="col col-sm-4 hours-purchased">
                                    <i class="fa fa-clock-o fa-2xl" aria-hidden="true"></i>
                                    <div>
                                        <h3>20 hrs</h3>
                                        <small id="helpId" class="form-text text-muted">Hours Purchased</small>
                                    </div>

                                </div>
                                <div class="col col-sm-4 hours-remaining">
                                    <i class="fa fa-hourglass-end fa-2xl" aria-hidden="true"></i>
                                    <div>
                                        <h3>20 hrs</h3>
                                        <small id="helpId" class="form-text text-muted">Hours Remaining</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-3">
                            <div class="total-hours">
                                <h5>$100.00</h5>
                                <small id="helpId" class="form-text text-muted">Project Total Hours</small>
                                <h5>$10.00</h5>
                                <small id="helpId" class="form-text text-muted">Additional Hours</small>
                                <h5>$100.00</h5>
                                <small id="helpId" class="form-text text-muted">Subtotal</small>
                            </div>
                            <div>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#buy-hours-modal">
                                    Buy Hours
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="buy-hours-modal" tabindex="-1"
                                    aria-labelledby="buy-hours-modal-label" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content" style="width: 85%;">
                                            <div class="modal-header">
                                                <div style="display: flex;
                                                flex-direction: column;
                                                align-items: flex-start;">
                                                    <div style="display: flex;
                                                    flex-direction: row;
                                                    justify-content: center;
                                                    align-items: center;
                                                    margin: 0px 0px 15px 0px;">
                                                        <i class="fa fa-clock-o fa-xl" aria-hidden="true" style="padding: 18px 8px 16px 8px;
                                                        border: 1px solid #2BC78F;
                                                        border-radius: 18px;
                                                        background-color: #2BC78F;
                                                        color: #FFFFFF;"></i>
                                                        <h5 class="modal-title" id="buy-hours-modal-label" style="margin: 0px 12rem 0px 10px;
                                                        padding: 0px;">Labelling Hours</h5>
                                                    </div>

                                                    <small id="helpId" class="form-text text-muted">Please let us know the
                                                        number of hours you would like to purchase</small>
                                                </div>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close" style="
                                                position: relative;
                                                bottom: 55px;
                                            ">
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div style="display: flex;
                                                flex-direction: row;
                                                flex-wrap: nowrap;
                                                justify-content: center;">
                                                    <button @click.prevent="decrement" type="button" class="btn btn-light"
                                                        style="width: 12%;
                                                    height: 50px;
                                                    margin: 0px 1rem 0px 0px;
                                                    border-radius: 10px;">
                                                        <span class="fa fa-minus"></span>
                                                    </button>
                                                    <input type="text" name="quant[1]" class="form-control input-number"
                                                        v-model="hourcount" min="1" max="11"
                                                        :class="(hourcount >= 10) ? 'is-invalid' : ''" style="width: 18%;">
                                                    <button @click.prevent="increment" type="button" class="btn btn-light"
                                                        :class="(hourcount >= 10) ? 'disabled' : ''" style="width: 12%;
                                                    height: 50px;
                                                    margin: 0px 0px 0px 1rem;
                                                    border-radius: 10px;">
                                                        <span class="fa fa-plus"></span>
                                                    </button>
                                                    <!-- <div class="invalid-feedback">
                                                    The minimum is 10 hours.
                                                </div> -->
                                                </div>
                                                <hr>
                                                <div class="row" style="margin: 0px 2rem 0px 2rem;">
                                                    <div class="col">
                                                        <h6 style="color: #A1A2A4">Subtotal</h6>
                                                        <h6>Total</h6>
                                                    </div>
                                                    <div class="col" style="display: flex;
                                                    flex-direction: column;
                                                    align-content: flex-end;
                                                    align-items: flex-end;">
                                                        <h6 style="color: #A1A2A4">$5.00</h6>
                                                        <h6>$15.00</h6>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="modal-footer" style="display: flex;
                                            flex-wrap: wrap;
                                            flex-direction: row;
                                            justify-content: center;">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                                    style="width: 45%;
                                                    margin-top: 10px;
                                                    border-radius: 8px;
                                                    padding: 10px;">Cancel</button>
                                                <button @click="redirectToPaymentForm" type="button" class="btn btn-primary" style="width: 45%;
                                                    margin-top: 10px;
                                                    border-radius: 8px;
                                                    padding: 10px;">Proceed to payment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="billing-history-container">
                    <h5 class="table-title">Billing History</h5>
                    <billing-history></billing-history>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNavigationBar from '../../../components/SideNavigationBar.vue'
import HalfCircleProgress from '../../../components/HalfCircleProgress.vue';
import BillingHistory from '../../../components/BillingHistory.vue';

export default {
    name: "NewPoject",
    data() {
        return {
            hourcount: 0
        }
    },
    components: {
        SideNavigationBar,
        HalfCircleProgress,
        BillingHistory
    },
    methods: {
        goBackToDashboard() {
            this.$router.push("/client/mydashboard");
        },

        goToUploadFileForm() {
            this.$router.push("/mydashboard/uploadfiles");
        },

        increment() {
            this.hourcount++;
        },

        decrement() {
            if (this.hourcount > 0) {
                this.hourcount--;
            }
        },
        redirectToPaymentForm() {
        // Set the URL of the Stripe payment form
        const paymentFormUrl = 'https://your-stripe-payment-form-url';

        // Redirect the user to the payment form
        window.location.href = paymentFormUrl;
        },
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

                    >span {
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
                width: 100%;
                padding-top: 1.5rem;

                >h5 {
                    font-size: 17px;
                }

                .row {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;

                    .col-progress {
                        .container {
                            display: flex;
                            flex-direction: column;
                            flex-wrap: nowrap;
                            align-content: center;
                            align-items: center;


                        }

                        .hours-count {
                            justify-content: center;

                            .hours-purchased,
                            .hours-remaining {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                flex-direction: row;
                                flex-wrap: wrap;

                                .fa {
                                    margin-right: 15px;

                                    border-radius: 25px;
                                    color: #FFFFFF;
                                }

                                .fa-clock-o {
                                    padding: 23px 10px;
                                    border: 1px solid #2BC78F;
                                    background-color: #2BC78F;

                                }

                                .fa-hourglass-end {
                                    padding: 23px 13px;
                                    border: 1px solid #C12300;
                                    background-color: #C12300;
                                }

                                >div>h3 {
                                    margin-bottom: 0px;
                                }

                            }
                        }
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
                            width: 65%;

                            >h5 {
                                padding: 1rem 0px 0px 0px;
                            }

                            /* .form-text {
                                padding-bottom: 1rem;
                            } */
                        }

                        .btn {
                            margin-top: 10px;
                            width: 65%;
                            border-radius: 18px;
                        }

                    }
                }
            }

            .billing-history-container {
                width: 100%;
                padding-top: 1.5rem;
                .table-title {
                    padding: 0px;
                    font-size: 17px;
                }
            }
                
        }
    }
}
</style>