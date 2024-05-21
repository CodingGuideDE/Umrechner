const textField = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", onClick);

function onClick(){
    let inputText = textField.value;
    inputText = inputText.toUpperCase();
    textField.value = "";
    if(inputText.lenght < 7 || inputText.lenght > 7){
        window.alert("Geben sie genau 7 Stellen ein");
    }else{
    let Ergebnis = "";
    for(let i of inputText){
        let toAscii = toASCII(i);
        Ergebnis += String(toAscii) + ", ";
    }
    Ergebnis = Ergebnis.slice(0, -2);
    window.alert(Ergebnis);
    }
}

function toASCII(char){
    try{
        return(char.charCodeAt(0).toString(16).toUpperCase());
    }
    catch(error){
        console.error(error);
    }
}
