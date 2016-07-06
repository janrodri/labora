//modulo http 
var http = require("http");
//crear un servidor basico con un colback donde:
//req = request , res= responsive 
var server = http.createServer(function name(req, res) {
    //armando la respuesta http
    // armar un encabezado http
    res.writeHead(200,{
        "content-Type" : "text/plain",
        "Server" : "ITGAM@4.2.4"
    });
    //ENVIAMOS LA RESPUESTA
    res.write("Hola Mundo");
    //serrrar la conexion
    res.end();
});
//Se pone a trabajar al server 
server.listen(3000,'127.0.0.1',function () {
    console.log("> Server listening @http://localhost:3000...");
});