const express = require('express');
const app = express();
const path= require("path")
const port = 3000;

//Rutas
const routes = require("./routes/main_page.routes");
const { main_page } = require('./controllers/main_page.controller');

app.use(routes)

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"public/404.html"))
})

// archivos estaticos
app.use(express.static(path.join(__dirname,"../public")))

// Inicia el servidor
app.listen(port, () => {
    console.log(`El servidor está corriendo en http://localhost:${port}/`);
});
