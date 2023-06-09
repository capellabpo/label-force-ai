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
                                <div class="line"></div>
                                <div class="tracker-details active">
                                    <span>New Project</span>
                                    <span>Please provide the details of your project</span>
                                </div>
                            </div>
                            <div class="step">
                                <div class="circle"></div>
                                <div class="line"></div>
                                <div class="tracker-details">
                                    <span>Upload Files</span>
                                    <span>Upload necessary files (max 150mb)</span>
                                </div>
                            </div>
                            <div class="step">
                                <div class="circle"></div>
                                <div class="line"></div>
                                <div class="tracker-details">
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
                            <div class="mb-3 form-item">
                                <label for="" class="form-label">Project Name</label>
                                <input type="text" name="" id="" class="form-control" placeholder="Enter Project Name"
                                    aria-describedby="helpId" required>
                            </div>

                            <div class="mb-3 form-item">
                                <label for="" class="form-label">Data Type</label>
                                <div class="datatype-btns">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="button"
                                        aria-pressed="false" autocomplete="off">
                                        <img class="datatype-icons"
                                            src="../../../assets/imgs/dashboard/table_icons/image_icon.png" /> Image
                                    </button>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="button"
                                        aria-pressed="false" autocomplete="off">
                                        <img class="datatype-icons"
                                            src="../../../assets/imgs/dashboard/table_icons/video_camera_icon.png" /> Video
                                    </button>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="button"
                                        aria-pressed="false" autocomplete="off">
                                        <img class="datatype-icons"
                                            src="../../../assets/imgs/dashboard/table_icons/underlined_letter_icon.png" />
                                        Text
                                    </button>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="button"
                                        aria-pressed="false" autocomplete="off">
                                        <img class="datatype-icons"
                                            src="../../../assets/imgs/dashboard/table_icons/file_icone.png" /> Document
                                    </button>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="button"
                                        aria-pressed="false" autocomplete="off">
                                        <img class="datatype-icons"
                                            src="../../../assets/imgs/dashboard/table_icons/suitcase_icon.png" />
                                        Dicom/Medical
                                    </button>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="button"
                                        aria-pressed="false" autocomplete="off">
                                        <img class="datatype-icons"
                                            src="../../../assets/imgs/dashboard/table_icons/tripledot_icon.png" /> Others
                                    </button>
                                </div>
                            </div>

                            <div class="label-type-cont form-item">
                                <label for="" class="form-label">Label Type</label>
                                <select class="form-select" aria-label="Default select example" required>
                                    <option selected>Select Label Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <small id="helpId" class="form-text text-muted">Select all label types based on the specific
                                    requirements of your project.</small>
                            </div>

                            <div class="label-soft-cont form-item">
                                <label for="" class="form-label">Labelling Software</label>
                                <select class="form-select" aria-label="Default select example" required>
                                    <option selected>Select a Labelling Software</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="form-pagination form-item">
                                <!-- cancel button transitions to back -->
                                <button @click="goToUploadFileForm" type="button" class="btn btn-light">Next &rarr;</button>
                                <button @click="goBackToDashboard" type="button" class="btn btn-light">&larr;
                                    Cancel</button>
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
    name: "NewPoject",
    components: {
        SideNavigationBar
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

            >label,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                color: #101828;
            }

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

                    .datatype-btns {
                        display: grid;
                        grid-auto-rows: 1fr;
                        grid-template-columns: 1fr 1fr 1fr;

                        .btn-primary {
                            --bs-btn-color: #344054;
                            --bs-btn-bg: #FFFFFF;
                            --bs-btn-border-color: #D0D5DD;
                        }

                        .datatype-icons {
                            width: 18px;
                            height: 18px;
                            border: 1px solid #EAF7FD;
                            border-radius: 8px;
                            border-width: 4px;
                            background-color: #EAF7FD;
                        }
                    }

                    .datatype-btns>* {
                        padding: 15px;
                        margin: 15px 10px;
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
}</style>