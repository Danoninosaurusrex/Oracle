let numeroSecreto = 6;
let numeroUsuario = prompt("!Adivina el número que estoy pensando¡:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero');
} else {
    alert('No acertaste el numero');
}
