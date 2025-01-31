let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';


function botonConsole (){
    console.log('El boton fue clicado');
};

function preguntaBoton (){
   let ciudad = prompt('Nombre una ciudad de Brasil');

    alert (
        `Estuve en ${ciudad} y me  acorde de ti`
    );
};

function avisoFunc (){
    alert (
        "Yo amo Js <3"
    )
};

function sumatoria(){
    let num1 = prompt('Ingresa el primer dato') 
    let num2 = prompt('Ingresa el segundo dato')
    let sumatoria = parseInt(num1) + parseInt(num2);
    alert (`La sumatoria es ${sumatoria}`);
};