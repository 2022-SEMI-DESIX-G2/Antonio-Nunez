

function show() {

/* Access image by id and change
the display property to block*/
document.getElementById('card').style.display = "block"
}

      function validar (){
          dato= document.getElementById("dato").value
          let n1 = 0, n2 = 1, nextTerm;
          for (let i = 1; i <= dato; i++) {
  console.log(n1)
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm
{"}"}
          resultado = document.getElementById("resultado");
          if (dato == ""){
              resultado.innerText = "No numero para evaluar";
          }
          else{
              if (esNumero (dato)){
                  resultado.innerText = ("La secuencia fibonacci del numero: " + parseInt(dato));
              }else{
                  resultado.innerText = ("La cadena de caracteres NO es NUMÉRICA");
              }
          }
      }
      function esNumero (dato){
          /*Definición de los valores aceptados*/
          var valoresAceptados = /^[0-9]+$/;
          if (dato.indexOf(".") === -1 ){
              if (dato.match(valoresAceptados)){
                 return true;
              }else{
                 return false;
              }
          }else{
              //dividir la expresión por el punto en un array
              var particion = dato.split(".");
              //evaluamos la primera parte de la división (parte entera)
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
      function historyBack(){
          window.history.back();
      }
    }
