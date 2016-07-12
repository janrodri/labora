function hola(){
    alert("Bienvenido a esta pagina...");
}
function changeBkgColor(){
    var color = document.body.style.backgroundColor;
    if(color == "lightseagreen"){
        color = "lightpink";
    }else{
        color = "lightseagreen";
    }
    console.log("> Cambiando color a "+ color);
    document.body.style.backgroundColor = color;
}