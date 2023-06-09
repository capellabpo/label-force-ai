<template>
    <div class="container-fluid">
        <side-navigation-bar></side-navigation-bar>

        <div class="p-3 content">
            <div class="container">
                <div class="current-page-container">
                    <img src="../../../assets/imgs/dashboard/home_icon.png" />
                    <img src="../../../assets/imgs/dashboard/caret_right_icon.png" />
                    <button type="button" class="btn btn-light">Profile</button>
                </div>

                <div class="manage-header">
                    <div class="title">
                        <h5 for="" class="form-label">My Account</h5>
                    </div>
                    <div class="description">
                        <small id="helpId" class="form-text text-muted">Update your photo and personal details here.</small>
                    </div>
                </div>

                <div class="btn-container">
                    <button type="button" class="btn btn-primary"><i class="fa fa-user" aria-hidden="true"></i>
                        Profile</button>
                    <button type="button" class="btn btn-primary">Plan</button>
                    <button type="button" class="btn btn-primary">Notifications</button>
                </div>

                <hr class="divider">

                <div class="user-profile-container">
                    <div class="container">
                        <form class="user-info">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col">
                                        <label for="name" class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Olivia" disabled>
                                    </div>
                                    <div class="col">
                                        <label for="name" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Rhye" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="olivia@untitledui.com" disabled>
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <input type="address" class="form-control" id="address" placeholder="68 Garden Place Richmond Plains Victoria">
                            </div>
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col">
                                        <label for="country" class="form-label">Country <span><small id="helpId" class="form-text text-muted">(optional)</small></span></label>
                                        <select id="country" class="form-select">
                                            <option selected>Country...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="country" class="form-label">Timezone <span><small id="helpId" class="form-text text-muted">(optional)</small></span></label>
                                        <select id="country" class="form-select">
                                            <option selected>PST...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col">
                                        <label for="contact-number" class="form-label">Contact Number <span><small id="helpId" class="form-text text-muted">(optional)</small></span></label>
                                        <input type="text" class="form-control" id="contact-number" placeholder="##########">
                                    </div>
                                    <div class="col">
                                        <label for="zip-code" class="form-label">Zip Code <span><small id="helpId" class="form-text text-muted">(optional)</small></span></label>
                                        <input type="text" class="form-control" id="zip-code" placeholder="####">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col">
                                        <h6><small id="helpId" class="form-text text-muted">Your Photo</small></h6>
                                        <small id="helpId" class="form-text text-muted">This will be displayed on your profile</small>
                                    </div>
                                    <div class="col">
                                        <img src="../../../assets/imgs/dashboard/Avatar.png">
                                        <span>Delete</span>
                                        <span>Update</span>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="button-container">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <button type="submit" class="btn btn-light">Cancel</button>
                            </div>
                        </form>

                        <form class="user-password">
                            <div class="manage-header">
                                <div class="title">
                                    <h6 for="" class="form-label">My Account</h6>
                                </div>
                                <div class="description">
                                    <small id="helpId" class="form-text text-muted">Update your photo and personal details here.</small>
                                </div>
                            </div>
                            <hr>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;" disabled>
                            </div>
                            <div class="button-container">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <button type="submit" class="btn btn-light">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNavigationBar from '@/components/SideNavigationBar.vue';

export default {
    name: "FileUploadManagement",
    components: {
        SideNavigationBar
    },
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

            .user-profile-container {
                width: 70%;
                margin: auto;

                .user-info,
                .user-password {
                    width: -webkit-fill-available;
                }

                .button-container {
                    display: flex;
                    flex-direction: row-reverse;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    align-items: center;

                    .btn {
                        margin: 5px;
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

            .upload-form-container {
                width: 75%;
                margin: auto;
            }
        }
    }
}
</style>