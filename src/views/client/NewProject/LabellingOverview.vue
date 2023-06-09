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
                                <div class="line"></div>
                                <div class="tracker-details active">
                                    <span>Labelling Overview</span>
                                    <span>Please provide a brief description of your project</span>
                                </div>
                            </div>
                            <div class="step">
                                <div class="circle"></div>
                                <div class="line"></div>
                                <div class="tracker-details">
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
                                <label for="" class="form-label">Labelling Overview</label>
                                <textarea class="form-control" name="" id="" rows="3"></textarea>
                            </div>
                            <div class="line-divider">
                                <hr class="divider">
                                <small class="form-text text-muted">or</small>
                                <hr class="divider">
                            </div>
                            <div class="form-group files">
                                <label for="" class="form-label">Upload Files</label>
                                <input type="file" class="form-control" multiple="">
                            </div>
                            <!-- <div class="mb-3 form-item">
                              <label for="" class="form-label">Provide a link that allows our team to access your files.</label>
                              <input type="text" name="" id="" class="form-control" placeholder="Provide your link" aria-describedby="helpId">
                            </div> -->

                            <div class="form-pagination form-item">
                                <!-- cancel button transitions to back -->
                                <button @click="goToLabelHoursForm" type="button" class="btn btn-light">Next &rarr;</button>
                                <button @click="goToLabelHoursForm" type="button" class="btn btn-light">Skip</button>
                                <button @click="goToUploadFileForm" type="button" class="btn btn-light">&larr; Back</button>
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
    name: "LabellingOverviewForm",
    components: {
        SideNavigationBar
    },
    methods: {
        goToUploadFileForm() {
            this.$router.push("/mydashboard/uploadfiles");
        },

        goToLabelHoursForm() {
            this.$router.push("/mydashboard/labellinghours");
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

                    .form-item {
                        margin: 15px 0px;
                    }

                    .form-label {
                        color: #344054;
                        font-weight: 500;
                        font-size: 16px;
                    }

                    .files input {
                        -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
                        transition: outline-offset .15s ease-in-out, background-color .15s linear;
                        padding: 50px 0px 90px 25%;
                        text-align: center !important;
                        margin: 0;
                        width: 100% !important;
                    }

                    .files {
                        position: relative
                    }

                    .files:before {
                        position: absolute;
                        bottom: 10px;
                        left: 0;
                        pointer-events: none;
                        width: 100%;
                        right: 0;
                        height: 57px;
                        content: "Drag and drop files here";
                        display: block;
                        margin: 0 auto;
                        color: #053CD3;
                        font-weight: 600;
                        text-transform: capitalize;
                        text-align: center;
                    }


                    .line-divider {
                        display: flex;
                        justify-content: center;
                        flex-direction: row;
                        flex-wrap: wrap;
                        align-items: stretch;
                        font-weight: 700;
                        padding: 2rem 0px 2rem 0px;

                        .divider {
                            color: #556370;
                            opacity: .125;
                            width: 250px;
                            font-weight: 600;
                        }

                        @media screen and (max-width: 1253px) {
                            .divider {
                                color: #556370;
                                opacity: .125;
                                width: 100px;
                                font-weight: 600;
                            }
                        }

                        .form-text {
                            margin: 6px 1rem 0px 1rem;
                        }
                    }



                    .form-pagination {
                        display: flex;
                        flex-direction: row-reverse;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        align-items: center;

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