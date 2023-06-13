<!-- <template>
    <div>
      <h1>Chat</h1>
      <div v-for="message in messages" :key="message.id">
        {{ message.text }}
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
    </div>
  </template>
  
  <script>
  import VueSocketIO from 'vue-socket.io';
  
  export default {
    data() {
      return {
        messages: [],
        newMessage: '',
      };
    },
    created() {
      // Connect to the WebSocket server
      this.$socket = new VueSocketIO({
        debug: true,
        connection: 'http://localhost:3000', // Replace with your server's WebSocket URL
      });
      // Listen for the 'message' event from the server
      this.$socket.on('message', (message) => {
        this.messages.push(message);
      });
    },
    methods: {
      sendMessage() {
        if (this.newMessage) {
          // Emit the 'message' event to the server
          this.$socket.emit('message', { text: this.newMessage });
          this.newMessage = '';
        }
      },
    },
  };
  </script>
   -->