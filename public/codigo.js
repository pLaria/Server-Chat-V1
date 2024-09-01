const socket = io();  // Asegúrate de que esta línea sea la correcta para conectarse al servidor

// Escuchar el historial de mensajes desde el servidor
socket.on('historial', function(data) {
    document.getElementById('idtextarear').innerHTML = data;
});

function mostrar() {
    let usuario = document.getElementById('idusuario').value;
    let mensaje = document.getElementById('idmensaje').value;

    if (usuario !== "" && mensaje !== "") {
        let mensajeCompleto = usuario + ": " + mensaje;
        document.getElementById('idmensaje').value = "";
        document.getElementById('idmensaje').focus();
        
        // Enviar el mensaje al servidor
        socket.emit('mensaje', mensajeCompleto);
        console.log(mensajeCompleto);
    }
}

// Añadir el evento de 'keypress' al campo de mensaje
document.getElementById('idmensaje').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevenir el comportamiento predeterminado de la tecla Enter
        mostrar();
    }
});
