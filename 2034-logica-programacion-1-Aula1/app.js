
let limite = 100;
let numeroSecreto = Math.floor(Math.random() * limite) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 4;

console.log(numeroSecreto);

while (numeroSecreto != numeroUsuario) { 
    numeroUsuario = parseInt(prompt(`!Adivina el número que estoy pensando del 1 al ${limite}!`));

    console.log(typeof(numeroUsuario));

    // codigo de comparacion 
    if (numeroUsuario == numeroSecreto) {   
            alert(`Acertaste, el numero es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
                alert('El número es menor');
        } else {
                alert('El número es mayor');
        }
        //incremento del contador cuando no acierta
        intentos++;
        if (intentos > maximosIntentos) {
            alert(`Se acabaron tus ${maximosIntentos} intentos`);
            break;    
        }
            }
}

