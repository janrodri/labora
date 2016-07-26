
var fortunePaper = {
    "mensaje" : "La honestidad es un regalo muy caro, no lo esperes de gente barata"
};
//vamos a exportar un objeto
module.exports ={
    "getFortune" : function (cb) {
        // convirtiendo el fortunePaper de objeto a su version en string 
        fortunePaperResponse = JSON.stringify(fortunePaper);
        //Ejecuto el callback (cb) pasandole
        // como parametro el fortunePaper string
        cb(fortunePaperResponse);
    }
};