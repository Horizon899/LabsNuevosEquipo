// Modulo http
const http = require('http');


//File system
const fs = require("fs");


// Ruteo
const path = require("path");
const { response } = require('express');


// Direccion IP del server
const hostname = '127.0.0.1';


//Puerto donde recibe datos
const port = 3000;


//Crea el server (claramente) conocido como callback
const server = http.createServer((req, res) => {
    //Ruta al HTML
    const rutahtml = path.join(__dirname, "Lab 01.html");
    //Leer HTML
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');

    const html_header = `
        <!DOCTYPE html>
        <html data-theme ="dark">
        <head>
            <meta charset="utf-8">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
            <link rel="stylesheet" href="/estilos.css">
        </head>
        <body>
            <div>
            <nav class="navbar  has-background-white">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">
                        <img src="https://cdn.musoscorner.com.au/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/5/3/535f0e2e424a1.png" alt="Guitarra home">
                    </a>
                </div>
        
                <div class="navbar-end">
                <a class="navbar-item">
                    Home
                </a>
                <a class="navbar-item">
                    Nosotros
                </a>
                <a class="navbar-item">
                    Contactanos
                </a>
                </div>
            </nav>
            </div>
        </body>
        </html>
    `;

    if (request.url == "/login") {
        response.write(`
        <!DOCTYPE html>
        <html class="has-background-dark">
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.css">
            <title>Lab 06</title>
        </head>
        <body class="has-background-dark">
            <center>
            <header><h1 class="title is-1">Hola</h1></header><br>
            <h2 id="textito"> Haz click en cualquier lugar </h2>
            Estos son los siguientes requisitos: <br>
            <ul>
                <li>9 o mas caracteres</li>
                <li>Minimo una mayuscula</li>
                <li>Tener un numero</li>
                <li>un caracter especial</li>
            </ul>
            <br>
            <section class="hero is-primary" id="seccionver">
                <div class="container">
                    <label class="label">Contraseña</label>
                    <input type="text" class="input" placeholder="Contraseña" id="contra">
                </div>
                <div class="container">
                    <label class="label">Contraseña</label>
                    <input type="text" class="input" placeholder="Contraseña" id="contraval">
                </div>
                <br>
                <br>
            </section>
            <br>
            <br>
            <a href class="button is-primary" id="boton">Validar</a>
            <footer>
            </footer>
            </center>
            <script src="validarcontra.js"></script>
        </body>
        `
        )
    }
});


//hace que escuche el puerto y empieza a funcionar para imprimir el msj
server.listen(port, hostname, () => {
    console.log(`El servidor está corriendo en http://${hostname}:${port}/`);


});