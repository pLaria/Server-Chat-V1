# Server-Chat-V1

Este es un proyecto de chat en tiempo real usando Node.js, Express y Socket.IO. Permite a los usuarios enviar mensajes en tiempo real y ver el historial de mensajes en la misma interfaz.

## Características

- Mensajes en tiempo real utilizando Socket.IO
- Historial de mensajes que se muestra en la interfaz
- Implementado con Node.js y Express

## Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (o [yarn](https://yarnpkg.com/) como alternativa)

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/pLaria/Server-Chat-V1.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd Server-Chat-V1
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia el servidor:

    ```bash
    npm start
    ```

    El servidor se ejecutará en `http://localhost:3000`.

## Uso

- Abre `http://localhost:3000` en tu navegador para acceder a la interfaz de chat.
- Introduce un nombre de usuario y un mensaje, y haz clic en "Enviar" para enviar un mensaje.
- Puedes usar la tecla Enter para enviar mensajes también.

## Despliegue

El proyecto está desplegado en [Render](https://render.com/). Puedes acceder a la aplicación en el siguiente enlace:

[Servidor en Render](https://server-chat-v1.onrender.com/)

## Estructura del Proyecto

- `server.js`: El archivo principal del servidor que configura Express y Socket.IO.
- `public/`: Carpeta que contiene los archivos estáticos de la interfaz de usuario.
  - `index.html`: La página HTML principal.
  - `codigo.js`: El archivo JavaScript que maneja la lógica del cliente.
  - `estilos.css`: El archivo CSS que define el estilo de la interfaz.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o encuentras un problema, no dudes en abrir un [issue](https://github.com/pLaria/Server-Chat-V1/issues) o enviar un [pull request](https://github.com/pLaria/Server-Chat-V1/pulls).

## Licencia

Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Puedes contactar al autor a través de [GitHub](https://github.com/pLaria).
