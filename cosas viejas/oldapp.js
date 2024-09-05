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
    const rutahtml = path.join(__dirname, "main_page.html");
    //Leer HTML
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');

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
    `;

    if (req.url == "/login" && req.method == "GET") {
        res.write(`
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
        );
        res.end();;
    }

    else if (req.url == "/infstrat" && req.method == "GET") {
        res.write(`
        ${html_header}
        <div class="box column">
            <figure class="image is-128x128">
                <img src="https://media.sweetwater.com/m/products/image/9311ad5adcD1xJJg9QhKSEhEublqaLTXLtT1ePWN.png?quality=82&height=750&ha=9311ad5adc9663f2" alt="Fender Stratocaster Amarilla">
            </figure>
            <p class="has-text-centered is-size-3">Fender Stratocaster Amarilla: 
                <ul>
                    <li>Basswood Body</li>
                    <li>6-Saddle Vintage-Style Synchronized Tremolo Bridge</li>
                    <li>intage-Style Single-Coil Strat Pickups</li>
                    <li>Fender Vintage "F" Stamped Tuners</li>
                    <li>3-Bolt Neck Plate with Micro-Tilt</li>
                    <li>9.5" Radius Maple or Rosewood with Medium Jumbo Frets</li>
                </ul>
            </p>
        </div>
        </body>
        </html>
        `)
    }

    else if (req.url == "/" && req.method == "GET") {
        res.write(`
        <h1 class="title is-size-1">Guitarras</h1>

        <div class="box column button has-background-black-ter">
            <figure class="image is-96x96">
                <img src="https://media.sweetwater.com/m/products/image/9311ad5adcD1xJJg9QhKSEhEublqaLTXLtT1ePWN.png?quality=82&height=750&ha=9311ad5adc9663f2" alt="Fender stratocaster">
            </figure>
            <p class="has-text-centered is-size-3">Fender Stratocaster Amarilla</p>  
        </div>
    
        <div class="box column button has-background-black-ter">
            <figure class="image is-64x64">
                <img  class="image-fit" src="https://camposmusicusa.com/cdn/shop/files/GD38CE-Takamine.png?v=1702573931" alt="Docerola">
            </figure>
            <p class="has-text-centered is-size-3">Takamine 12 cuerdas</p>  
        </div>
        <div class="box column button has-background-black-ter">
            <figure class="image is-96x96">
                <img  class="image-fit" src="https://images.ctfassets.net/m8onsx4mm13s/QTBJgyljrfxbfN2a91qtR/2282a6d6b00f983b8d78326ca6ed8acb/SGSP00EBCH1_front.png" alt="Gibson SG Ebony">
            </figure>
            <p class="has-text-centered is-size-3">Gibson SG Ebony</p>  
        </div>
        </body>
        </html>

        `
        );
        res.end();
    }

    else {
        res.statusCode = 404;

        res.write(`
        ${html_header}
        <header>
        <h1 class="title">404 No hay chilaquiles</h1>
        </header>
        <br>
        <p class="block">
            Lo sentimos, pagina no encontrada
        </p>
        `);
        res.end()
    }

}
);


//hace que escuche el puerto y empieza a funcionar para imprimir el msj
server.listen(port, hostname, () => {
    console.log(`El servidor está corriendo en http://${hostname}:${port}/`);


});