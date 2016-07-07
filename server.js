//modulo http 
var http = require("http");
//obteniendo info del entorno de ejecucion
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
    res.write("Hola Mundo      Janice Rodriguez Olvera ");
    //serrrar la conexion
    res.end();
});
//Se pone a trabajar al server 
server.listen(3000,'192.168.1.33',function () {
    console.log("> Server listening @http://192.168.1.33:3000...");
});