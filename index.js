//constante del modulo filesystem
//los modulos son declarados al principio y 
//se puede acceder a los atributos o metodos de dichos modulos
// const fs = require('fs')

// //Funcion para leer archivos en dode
// fs.readFile("./texto.txt", function(err, data){
//     if (err) {
//         console.log(err);
        
//     }
//     console.log(data.toString());
    
// })

// //Crea archivos de forma asincrona 
// fs.writeFile('./texto.txt','Linea 1', function(err){
// if(err){
//     console.log(err);
    
// }
// console.log("Archivo creado");

// });

// console.log("Ultima linea de codigo");

//metodo y modulo para levantar localhost con su puerto 3000
//una vez subido el locl host desde la consola del vs se cancelar con control c
//
// const http = require("http");
// const colors = require("colors");

// http.createServer(function(req, res){
//     /* El codigo dentro de este metodo ejecutado se ejecuta solo al levatar el servidor 
//     se se desea actualizar el h1 se debe cancelar el localhost y volverlo a levantar*/
//     res.write("<h1>Hola Desde Node Httprequest");
//     res.end();
// }).listen(3000);

const handler = function (req, res) {
    
        /* El codigo dentro de este metodo ejecutado se ejecuta solo al levatar el servidor 
        se se desea actualizar el h1 se debe cancelar el localhost y volverlo a levantar*/
        res.write("<h1>Hola Desde Node Httprequest");
        res.end();
}

const http = require("http");
const colors = require("colors");

const server = http.createServer(handler);

server.listen(3000, function () {
    //Green es del npm colors son los equivalentes a los paquetes nugets
    //se lo instala con el comando npm install colors
    console.log("Server 3000".green);
    
})