/* Llaves utilizadas de encriptado

e= enter
i= imes
a= ai
o= ober
u= ufat
*/

// Declarar Variables---
var input_encriptar    = document.querySelector("#input-encriptar");
var encriptarBtn       = document.querySelector("#encriptar-btn");
var desencriptarBtn    = document.querySelector("#desencriptar-btn");
var answer             = document.querySelector("#answer");
var copyBtn            = document.querySelector("#copyBtn");
var pasteBtn           = document.querySelector("#paste-btn");
const error_message    = document.querySelector("#error_message"); // Error message
const success          = document.querySelector("#successful_message"); // successful  message



// Crear el escuchador del evento btn encriptar
encriptarBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let inputEncriptar = document.getElementById("input-encriptar").value;
    document.getElementById("input-encriptar").value = '';
    encriptandoMsg(inputEncriptar);
});

// Crear el escuchador del evento btn desencriptar
    desencriptarBtn.addEventListener("click", function (event){
    event.preventDefault();
    let inputEncriptar= document.getElementById('input-encriptar').value;
    desencriptandoMsg(inputEncriptar);

});
// Crear el escuchador del evento btn copiar
    copyBtn.addEventListener("click", function (event) {
    event.preventDefault();
    rowscopy();
    document.getElementById("answer").value = '';
});




//create listening btn paste

pasteBtn.addEventListener("click", function (event) {
  event.preventDefault();
  rowspaste();
  document.getElementById("pasteBtn").value;
});





// Funcion para el encriptado 
function encriptandoMsg (inputEncriptar){
    let encriptar = inputEncriptar.replace (/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    document.getElementById("answer").value = encriptar
}
// funcion boton copiar
function rowscopy() {
    let inputEncriptar = document.getElementById('answer');
    inputEncriptar.select();
    document.execCommand('copy');

    if(inputEncriptar.length == 0){
      showErrorMessage("Empty field ");
    }else{
      showSuccesMessage("Copied.... ");
  
    }
}

// funtion botton Paste
function rowspaste() {
  let pasteText = document.getElementById('pasteBtn');
  pasteText.focus();
  document.execCommand('paste');
  
  
}

// show boton
function mostrar(){
  document.getElementById('pasteBtn').style.visibility = 'visible';
  }



// Funcion para el desencriptado 
function desencriptandoMsg (inputEncriptar){
    let deseencriptar = inputEncriptar.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/gi, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    document.getElementById("answer").value = deseencriptar

}


//validar caracteres
const validateInput = (input_encriptar) => {
    let regex = /[A-ZÁÉÍÓÚáéíóúñÑ{}/+*123456780.!"#$%&/()]/g;
    let valor;
  
    if (regex.test(input_encriptar) || input_encriptar.length == 0) {
      valor = true;
    } else {
      valor = false;
    }
  
    if (valor && input_encriptar.length > 0) {
      showErrorMessage(
        "¡ALERT!!! No accents or special characters are allowed, the text must be in lower case"
        
      );
    } else if (input_encriptar.length==0 || input_encriptar.replace(" ", "").length == 0) {

      showErrorMessage("Input a text ");

    }else {
      hideErrorMessage();
    }


    return valor;
  };

  input_encriptar.addEventListener("keyup", () => {
    if (input_encriptar.value.length > 0) {
      validateInput(input_encriptar.value);
    } else {
      hideErrorMessage();
    }
  });
  
  const showSuccesMessage = (answer) => {
    // Mostrar mensaje del exito
    success.style.display = "block";
    success.innerHTML = answer;

  };

  const showErrorMessage = (input_encriptar) => {
    // Mostrar mensaje del error
    error_message.style.display = "block";
    error_message.innerHTML = input_encriptar;
  };
  

  const hideErrorMessage = () => {
    error_message.style.display = "none";
    success.style.display = "none";
  };
  

