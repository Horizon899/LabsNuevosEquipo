// Modulo http
const http = require('http');


//File system
const fs = require("fs");


// Ruteo
const path = require("path");


// Direccion IP del server
const hostname = '127.0.0.1';


//Puerto donde recibe datos
const port = 3000;


//Crea el server (claramente) conocido como callback
const server = http.createServer((req, res) => {
    //Ruta al HTML
    const rutahtml = path.join(__dirname, "main_page.html");
    //Leer HTML
    fs.readFile(rutahtml, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            // Envia esta respuesta y termina la conexion
            res.end("error en el server")
        }
        else {
            //Indica que la respuesta es exitosa
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
});


//hace que escuche el puerto y empieza a funcionar para imprimir el msj
server.listen(port, hostname, () => {
    console.log(`El servidor está corriendo en http://${hostname}:${port}/`);


});