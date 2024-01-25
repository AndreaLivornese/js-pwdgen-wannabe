
function generatePass(){
let fullname = document.getElementById("nome").innerHTML;
let surname = document.getElementById("cognome").innerHTML;
let color = document.getElementById("colore").innerHTML;


let pass =  fullname+surname+color;

document.getElementById("passGenerate").innerHTML = pass;

}