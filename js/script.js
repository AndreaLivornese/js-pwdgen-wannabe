

    let fullname = prompt("inserisci il tuo nome");
    let surname = prompt("inserisci il tuo cognome");
    let color = prompt("inserisci il tuo colore preferito");

    let pass = fullname+surname+color+"23784";
    
    document.getElementById("passGenerate").innerHTML+=pass;
    
