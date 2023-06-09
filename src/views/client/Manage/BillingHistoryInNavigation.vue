<template>
    <div class="container-fluid">
        

        <side-navigation-bar></side-navigation-bar>

        <div class="p-3 content">
            <div class="container">
                <div class="current-page-container">
                    <img src="../../../assets/imgs/dashboard/home_icon.png" />
                    <img src="../../../assets/imgs/dashboard/caret_right_icon.png" />
                    <button type="button" class="btn btn-light">Inbox</button>
                </div>
                
                <div class="row">
                    <div class="col col-lg-4 billing-history-projects-container">
                        <div class="left-col-header">
                            <h5>Projects</h5>
                            <div class="filters">
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <i class="fa fa-filter" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="project-cards">
                            <ul class="list-unstyled">
                                <li>
                                    <div class="project-card-item">
                                        <div class="project-title-files">
                                            <h6>Labeling Objects and Road Features</h6>
                                            <div class="project-icons-container">
                                                <img class="table-project-icons"
                                                    src="../../../assets/imgs/dashboard/table_icons/image_icon.png" />
                                                <img class="table-project-icons"
                                                    src="../../../assets/imgs/dashboard/table_icons/video_camera_icon.png" />
                                            </div>
                                        </div>
                                        <span class="inbox-count">10</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-lg-8 billing-history-container">
                        <div class="left-col-header">
                            <h5>Billing History</h5>
                        </div>
                        <billing-history></billing-history>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNavigationBar from '../../../components/SideNavigationBar.vue'
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

            .row {
                
                .billing-history-projects-container {
                    .left-col-header {
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;

                        > h5 {
                            margin-left: 0px;
                        }
                    }

                    .project-cards {
                        .project-card-item {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            flex-direction: row;
                            padding: 12px;
                            background-color: #F9FAFB;
                            border: 1px solid #F9FAFB;
                            border-radius: 6px;
                            margin-bottom: 1rem;
                        }
                    }
                }

                .project-cards .table-project-icons {
                    padding: 4px;
                    margin: 2px;
                    width: 18px;
                    height: 18px;
                    background: #EAF7FD;
                    border-radius: 8px;
                }

                .inbox-count {
                    background-color: #EFF8FF;
                    color: #175CD3;
                    font-weight: 500;
                    font-size: 12px;
                    padding: 3px 6px;
                    border-radius: 16px;
                    width: 36px;
                    margin: 0px 0px 0px auto;
                    text-align: -webkit-center;
                    height: 25px;
                }
            }

            .table-title {
                display: none;
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
        }
    }
}
</style>