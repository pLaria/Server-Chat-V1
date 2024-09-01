const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",  // Permite solicitudes desde cualquier origen
    methods: ["GET", "POST"]
  }
});

app.use(express.static(__dirname + '/public'));

let historial = "--------------Historial--------------";
let c = 0;

io.on('connection', (socket) => {
  console.log('Nueva conexión', socket.id);
  socket.on('mensaje', (mensaje) => {
    c++;
    historial = "\n" + historial;
    mensaje = '' + c.toString() + '. ' + mensaje;
    historial = mensaje + historial;
    historial = "\n" + historial;
    historial = "-------------------------------------" + historial;

    console.log(historial);
    io.sockets.emit('historial', historial);
  });
  socket.emit('historial', historial);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
