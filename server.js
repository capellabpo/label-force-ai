const express = require('express');
const app = express();
const cors = require('cors');

// Apply CORS middleware
app.use(cors({
  origin: 'http://localhost:8080'
}));

const http = require('http').createServer(app);
// const io = require('socket.io')(http);

// Server logic will go here

const port = 3000; // Change the port number if needed

app.get('/', (req, res) => {
  res.send('Server is running'); // Replace with your desired response
});

// io.on('connection', (socket) => {
//   socket.on('chat-message', (msg) => {
//       socket.broadcast.emit('chat-message', msg)
//   })

//   socket.on('typing', (data) => {
//       socket.broadcast.emit('typing', data)
//   })
//   socket.on('stoptyping', () => {
//       socket.broadcast.emit('stoptyping')
//   })
// });

http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});