const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

let users = {};

io.on('connection', socket => {

  socket.on('join', username => {
    users[socket.id] = username;
    socket.broadcast.emit('message', {
      user: 'system',
      text: `✨ ${username} انضم إلى الشات`
    });
  });

  socket.on('chatMessage', msg => {
    const user = users[socket.id];
    io.emit('message', {
      user: user,
      text: msg
    });
  });

  socket.on('disconnect', () => {
    const user = users[socket.id];
    if (user) {
      socket.broadcast.emit('message', {
        user: 'system',
        text: `🚪 ${user} خرج من الشات`
      });
      delete users[socket.id];
    }
  });
});

http.listen(3000, () => {
  console.log('🚀 Server working on: http://localhost:3000');
});
