
function passGenerate(){
    let fullname = document.getElementById("nome").value;
    let surname = document.getElementById("cognome").value;
    let color = document.getElementById("colore").value;

    let pass = fullname+surname+color+"23784";
    
    document.getElementById("passGenerate").innerHTML+=pass;
    document.getElementById("button").disabled=true;
    document.getElementById("nome").disabled=true;
    document.getElementById("cognome").disabled=true;
    document.getElementById("colore").disabled=true;

}