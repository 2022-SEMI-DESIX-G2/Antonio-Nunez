
function validar (){
    
    dato= document.getElementById("dato").value;
    var img = document.createElement("img");
    img.src = "img_avatar.png";
    img.width = "100";
    img.height ="100";
    var div = document.getElementById("carta");
    
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= dato; i++) {

nextTerm = n1 + n2;
n1 = n2;
n2 = nextTerm;
var arreglo = new Array(dato).fill(n1);
arrayLength = arreglo.length;
    console.log(arreglo);

    for (var c in arreglo) {
        var newElement = document.createElement('div');
        newElement.id = arreglo[c]; newElement.className = "carta";
        newElement.innerHTML = arreglo[c];
        document.body.appendChild(newElement);   
        
    }



}
    resultado = document.getElementById("resultado");
    if (dato == ""){
        resultado.innerText = "Sin numero para calcular. \nPresiona para limpiar" ;
        
     
    }
    else{
        if (esNumero (dato)){
           

            resultado.innerText = ("La secuencia fibonacci del numero: " + parseInt(dato) +  "\nPresiona para limpiar");
        

        }
        else{
            resultado.innerText = ("La cadena de caracteres NO es un numero positivo. \nPresiona para limpiar");
        }
    }
}
function esNumero (dato){
    /*Definición de los valores aceptados*/
    var valoresAceptados = /^[1-9]+$/;
    if (dato.indexOf(".") === -1 ){
        if (dato.match(valoresAceptados)){
           return true;
        }else{
           return false;
        }
    }else{
        
        var particion = dato.split(".");
       
        if (particion[0].match(valoresAceptados) || particion[0]==""){
            if (particion[1].match(valoresAceptados)){
                return true;
            }else {
                return false;
            }
        }else{
            return false;
        }
    }
}

function limpiarResultado(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

  
