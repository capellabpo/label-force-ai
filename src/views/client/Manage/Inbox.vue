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
                
                <div class="inbox-container">
                    <chat-box></chat-box>
                    <index-chat></index-chat>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNavigationBar from '../../../components/SideNavigationBar.vue'
import ChatBox from '../../../components/ChatBox.vue';

export default {
    name: "InboxManagement",
    components: {
        SideNavigationBar,
        ChatBox
    },
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

            .inbox-container {
                margin: auto;
            }

        }
    }
}
</style>