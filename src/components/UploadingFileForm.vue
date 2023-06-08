<template>
    <form id="add-files-form" action="">
        <div class="form-group files">
            <label for="" class="form-label">Upload Files</label>
            <input @change="changeBoolValue" @input="handleFileUpload" type="file" class="form-control" id="inputFile"
                multiple="">
        </div>
        <div class="upload-list">
            <label for="" class="form-label" v-show="displayElement">Uploaded Files:</label>
            <div class="list-container" v-for="file in uploadedFiles" :key="file.name">
                <img src="../assets/imgs/dashboard/file_upload_icons/file_icon.png" />
                <div class="file-details">
                    <span class="file-name">{{ file.name }}</span>
                    <br><span class="file-size">{{ file.size }} KB</span>
                </div>
            </div>
        </div>
        <div class="line-divider">
            <hr class="divider">
            <small class="form-text text-muted">or</small>
            <hr class="divider">
        </div>
        <div class="mb-3 form-item">
            <label for="" class="form-label">Provide a link that allows our team to access your files.</label>
            <input type="text" name="" id="" class="form-control" placeholder="Provide your link" aria-describedby="helpId">
        </div>
    </form>
</template>

<script>
export default {
    name: "UploadFileForm",
    data() {
        return {
            uploadedFiles: [],
            displayElement: false
        }
    },
    methods: {
        handleFileUpload(event) {
            const files = event.target.files;
            this.uploadedFiles = Array.from(files);
        },

        changeBoolValue() {
            this.displayElement = true;
        }
    }
}
</script>

<style>
#add-files-form {
    width: 100%;
}

.files input {
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear;
    padding: 120px 0px 85px 35%;
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

.upload-list {
    padding: 0.5rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;

    .list-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid #1F5AFA;
        border-radius: 12px;
        padding: 10px;
        margin: 0px 0px 1rem 0px;
        width: 100%;

        >img {
            margin: 0px 10px 0px 5px;
        }

        .file-name {
            color: #344054;
            font-weight: 500;
        }

        .file-size {
            color: #344054;
            font-size: 12px;
        }
    }
}

.line-divider {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    font-weight: 700;
    padding: 0px 0px 2rem 0px;

    .divider {
        color: #556370;
        opacity: .125;
        width: 500px;
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
</style>