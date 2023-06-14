<template>
    <div class="container">
        <div class="row clearfix">
            <div class="col-lg-12">
                <div class="card chat-app">
                    <!-- <div id="plist" class="people-list">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-search"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Search...">
                </div>
                <ul class="list-unstyled chat-list mt-2 mb-0">
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar">
                        <div class="about">
                            <div class="name">Vincent Porter</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                        </div>
                    </li>
                    <li class="clearfix active">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
                        <div class="about">
                            <div class="name">Aiden Chavez</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar">
                        <div class="about">
                            <div class="name">Mike Thomas</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>                                    
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                        <div class="about">
                            <div class="name">Christian Kelly</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">
                        <div class="about">
                            <div class="name">Monica Ward</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar">
                        <div class="about">
                            <div class="name">Dean Henry</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                        </div>
                    </li>
                </ul>
            </div> -->
                    <div class="chat">
                        <!-- <div class="chat-header clearfix">
                    <div class="row">
                        <div class="col-lg-6">
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
                            </a>
                            <div class="chat-about">
                                <h6 class="m-b-0">Aiden Chavez</h6>
                                <small>Last seen: 2 hours ago</small>
                            </div>
                        </div>
                        <div class="col-lg-6 hidden-sm text-right">
                            <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                        </div>
                    </div>
                </div> -->
                        <div class="chat-history">
                            <ul class="m-b-0">

                                <li class="clearfix" v-for="message in messages" :key="message">
                                    
                                    <div class="message-data float-right">
                                        <span class="message-data-time">{{ message.by }}</span>
                                    </div>
                                    <div class="message other-message float-right"> {{ message.message }} </div>
                                    
                                </li>
                               
                            </ul>
                        </div>
                        <small v-if="typing" class="text-white">
                            <i>{{ typing }} is typing</i>
                        </small>
                        <hr>
                        <form class="chat-message clearfix" @submit.prevent="send">
                            <input type="text" class="form-control" placeholder="Message" v-model="newmessage">
                            <button @click.prevent="send" type="button" class="btn btn-primary">
                                <i class="fa fa-paper-plane-o fa-lg" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script>
  import io from 'socket.io-client';
  
  export default {
    data() {
      return {
        newmessage: null,
        messages: [],
        typing: false,
        online: [],
        name: null,
        ready: false,
        info: [],
        connectionCount: 0,
        // socket: null,
      };
    },
    methods: {
      send() {
        this.socket.emit('chat-message', { message: this.newmessage, user: this.name });
        this.messages.push({ message: this.newmessage, type: 0, by: 'Me' });
        this.newmessage = null;
      },
      isTyping() {
        this.socket.emit('typing', this.name);
      },
    //   setName() {
    //     this.socket.emit('joined', this.name);
    //     this.ready = true;
    //   },
    },
    mounted() {
      this.socket = io();
  
    //   window.onbeforeunload = () => {
    //     this.socket.emit('leaved', this.name);
    //   };
  
    //   this.socket.on('noOfConnections', (count) => {
    //     this.connectionCount = count;
    //   });
  
      this.socket.on('chat-message', (data) => {
        this.messages.push({ message: data.message, type: 1, by: data.user });
        this.typing = false;
      });
  
      this.socket.on('typing', (data) => {
        this.typing = data;
      });
  
      this.socket.on('stoptyping', () => {
        this.typing = false;
      });
  
    //   this.socket.on('leaved', (name) => {
    //     this.online.splice(this.online.indexOf(name));
    //     this.info.push({ name: name, type: 'Leaved' });
    //     setTimeout(() => {
    //       this.info = [];
    //     }, 5000);
    //   });
  
    //   this.socket.on('joined', (name) => {
    //     this.online.push(name);
    //     this.info.push({ name: name, type: 'Joined' });
    //     setTimeout(() => {
    //       this.info = [];
    //     }, 5000);
    //   });
    },
    watch: {
      newmessage(value) {
        value ? this.socket.emit('typing', this.name) : this.socket.emit('stoptyping');
      },
    },
    beforeUnmount() {
      if (this.socket) {
        this.socket.disconnect();
      }
    },
  };
</script>
  
<style scoped>
 body {
    background-color: #F9FAFB;
    margin-top: 20px;
}

.card {
    background: #F9FAFB;
    transition: .5s;
    border: 0;
    margin-bottom: 30px;
    border-radius: .55rem;
    position: relative;
    width: 100%;
    /* box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%); */
}

.chat {
    width: 1080px;
}

.chat-app .people-list {
    width: 280px;
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    z-index: 7
}

.people-list {
    -moz-transition: .5s;
    -o-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s
}

.people-list .chat-list li {
    padding: 10px 15px;
    list-style: none;
    border-radius: 3px
}

.people-list .chat-list li:hover {
    background: #efefef;
    cursor: pointer
}

.people-list .chat-list li.active {
    background: #efefef
}

.people-list .chat-list li .name {
    font-size: 15px
}

.people-list .chat-list img {
    width: 45px;
    border-radius: 50%
}

.people-list img {
    float: left;
    border-radius: 50%
}

.people-list .about {
    float: left;
    padding-left: 8px
}

.people-list .status {
    color: #999;
    font-size: 13px
}

.chat .chat-header {
    padding: 15px 20px;
    border-bottom: 2px solid #f4f7f6
}

.chat .chat-header img {
    float: left;
    border-radius: 40px;
    width: 40px
}

.chat .chat-header .chat-about {
    float: left;
    padding-left: 10px
}

.chat .chat-history {
    padding: 20px;
    /* border-bottom: 2px solid #fff */
}

.chat .chat-history ul {
    padding: 0
}

.chat .chat-history ul li {
    list-style: none;
    margin-bottom: 30px
}

.chat .chat-history ul li:last-child {
    margin-bottom: 0px
}

.chat .chat-history .message-data {
    margin-bottom: 15px
}

.chat .chat-history .message-data img {
    border-radius: 40px;
    width: 40px
}

.chat .chat-history .message-data-time {
    color: #434651;
    padding-left: 6px
}

.chat .chat-history .other-message-data {
    margin-bottom: 15px
}

.chat .chat-history .other-message-data img {
    border-radius: 40px;
    width: 40px;
}

.chat .chat-history .other-message-data-time {
    color: #434651;
    padding-left: 6px;
    margin-bottom: 1rem;
}

.chat .chat-history .other-message-data-time {
    color: #6ECBF6;
    margin-bottom: 1rem;
    /* padding-left: 6px; */
    float: right;
}

.chat .chat-history .message {
    color: #444;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 16px;
    border-radius: 7px 0px 7px 7px;
    display: inline-block;
    position: relative
}

.chat .chat-history .message:after {
    bottom: 100%;
    left: 7%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    /* border-bottom-color: #fff; */
    border-width: 10px;
    margin-left: -10px
}

.chat .chat-history .my-message-data {
    margin-bottom: 15px
}

.chat .chat-history .my-message-data img {
    border-radius: 40px;
    width: 40px
}

.chat .chat-history .my-message-data-time {
    color: #434651;
    float: right;
    /* padding-left: 6px */
}

.chat .chat-history .my-message {
    color: #444;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 16px;
    border-radius: 0px 7px 7px 7px;
    display: inline-block;
    position: relative
}

.chat .chat-history .my-message:after {
    bottom: 100%;
    left: 7%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #fff;
    border-width: 10px;
    margin-left: -10px
}

.chat .chat-history .my-message {
    background: #efefef
}

.chat .chat-history .my-message:after {
    bottom: 100%;
    /* left: 30px; */
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    /* border-bottom-color: #efefef; */
    /* border-width: 10px; */
    /* margin-left: -10px */
}

.chat .chat-history .other-message {
    background: #6ECBF6;
    text-align: right
}

.chat .chat-history .other-message:after {
    /* border-bottom-color: #e8f1f3; */
    left: 93%
}

.chat .chat-message {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

    .btn {
        margin-left: 10px;
    }
}

.online,
.offline,
.me {
    margin-right: 2px;
    font-size: 8px;
    vertical-align: middle
}

.online {
    color: #86c541
}

.offline {
    color: #e47297
}

.me {
    color: #1d8ecd
}

.float-right {
    float: right
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0
}

@media only screen and (max-width: 767px) {
    .chat {
        width: 250px;
    }

    .chat-app .people-list {
        height: 465px;
        width: 100%;
        overflow-x: auto;
        background: #fff;
        left: -400px;
        display: none
    }

    .chat-app .people-list.open {
        left: 0
    }

    .chat-app .chat {
        margin: 0
    }

    .chat-app .chat .chat-header {
        border-radius: 0.55rem 0.55rem 0 0
    }

    .chat-app .chat-history {
        height: 300px;
        overflow-x: auto
    }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .chat {
        width: 500px;
    }

    .chat-app .chat-list {
        height: 650px;
        overflow-x: auto
    }

    .chat-app .chat-history {
        height: 600px;
        overflow-x: auto
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
    .chat-app .chat-list {
        height: 480px;
        overflow-x: auto
    }

    .chat-app .chat-history {
        height: calc(100vh - 350px);
        overflow-x: auto
    }
}
</style>
  