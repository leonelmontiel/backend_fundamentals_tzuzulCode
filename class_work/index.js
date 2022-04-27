const express = require("express");

const app = express();

app.use(express.text()); //utilizando el mimddleware para conversión de datos: texto
app.use(express.json());

// "/": indica que estamos visitando el home, inicio o raiz.
app.get("/", function(request,answer){
    answer.send("GET method");
})

// "/usuarios": es la ruta que indica que estamos visitando la sección de usuarios.
// indica que estamos creando el recurso de la ruta 
app.post("/usuarios", function(request, answer) { // (en teoría, esta ruta se usa para crear un usuario)
    const user = request.body; //String
    answer.send(`POST method: ${user}`);
})

app.post("/json", function(request, answer) {
    const user_data = request.body;
    answer.send(`Hello ${user_data.nombre}`);
})

app.put("/", function(request, answer) {
    answer.send("PUT method");
})

app.delete("/", function(request, answer) {
    answer.send("DELETE method");
})

app.listen(4000, ()=> {
    console.log("listen: http://localhost:4000");
})

//para ver los puertos ocupados, en cmd: netstat -an