//Nos permite acceder a las variables de entorno donde se esta ejecutando el proceso.
// http
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
// Obteniendo información del entorno
// De ejecucióñla configuracion del modulo de configuracion
var PORT = config.PORT;
var IP = config.IP;
if(IP == '127.0.0.1'){
    console.log("> -----Ejecutando de modo local-----");
}
// Crear un servidor basico
var server = http.createServer(function(req, res){
    // Armar la respuesta http
    // Armar un encabezado http
    res.writeHead(200,{
        "Content-Type" : "text/html",
        "Server" : "ITGAM@4.2.4"
    });
//lectura del archivo a servir, con tres parm la ruta, y el collback
fs.readFile('./static/index.html','utf8',function(err,content){
    if(err){
        res.end("<h1> ERROR DE LECTURA</H1>");
    }else{
        res.end(content);
    }
});
    // borramos la respuesta
    //--res.write("<h1>Janice Rodriguez Olvera Server</h1>");
    // Cerrar la conexion
    //--res.end();
});
// Poner a trabjar al server
server.listen(PORT,IP,function(){
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
});