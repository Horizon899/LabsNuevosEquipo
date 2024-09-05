const express = require('express');
const app = express();
const port = 3000;

//Rutas
const routes = require("./routes/main_page.routes")

app.use(routes)

// Inicia el servidor
app.listen(port, () => {
    console.log(`El servidor está corriendo en http://localhost:${port}/`);
});
