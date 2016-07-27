//Nos permite acceder a las variables de entorno donde se esta ejecutando el proceso.
// http
var http = require("http"),
    fs = require('fs'),
    config = require("./config/config.js"),
    staticServer = require('./internals/static-server'),
    colors = require('colors');
var handlers = require('./internals/handlers');

// Obteniendo información del entorno
// De ejecucióñla configuracion del modulo de configuracion
var PORT = config.PORT,
    IP = config.IP;
if (IP == '127.0.0.1') {
    console.log("> -----Ejecutando de modo local-----");
}
// Crear un servidor basico
var server = http.createServer(function (req, res) {
    // obtener la url del archivo de la peticion le asigno una variable url
    var url = req.url;
    if (url == "/") {
        // el slash nos--- sirve el eindex ---
        // forso al sistema a que eslash sea index
        url = "/index.html";
    }
    console.log(`> URL Solicitada: ${url}...`.green);
    // sirvo la url con mi server statico
    //staticServer.serve(url, res);
    // verificando que la peticion del cliente sera una ruta virtual
    if (typeof (handlers[url]) === 'function') {
        //Si entro aqui, significa que existe un manejador para la url
        //que se esta solicitando por lo tanto la ejecuto
        handlers[url](req, res)
    } else {
        console.log('> URL Solicitada: ${url} ...'.yellow);
        //sirvo la url con mi servidor estatico
        staticServer.serve(url, res);
    }
});
// Poner a trabjar al server
server.listen(PORT, IP, function () {
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
});