//manejadores de rutas virtuales,
var fechaDeNac = new Date (1987,4,29,7,30);
//los manejadores encapsulados en un objeto{} del metodo
module.exports = {
    "/edad/Janice-Rodriguez" : function (req, res) {
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Calculo la edad actual
        var hoy = new Date();
        var age = Math.ceil((hoy - fechaDeNac)/(1000*3600*24*365))
        //armando el json
        var objetoRespuesta = {
            "edad" : age
        };
        var jsonResponse = JSON.stringify(objetoRespuesta);
        //Envio la respuesta al cliente
        res.end(jsonResponse);
    },
    //estamos llamando a otra funcion
    "/getfortune" : function (req, res) {
        //contestar con un json, y se obtiene mensaje de la fortuna
        var fortunePaper = {
            "mensaje" :
            "La honestidad es un regalo muy caro, no lo esperes de gente barata"
        };
        // se configura el contenido de respuesta HTTP
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // parseando a string el objetoRespuesta de respuesta
        var jsonResponse = JSON.stringify(fortunePaper);
        // responde el Objeto
        res.end(jsonResponse);
    }
};