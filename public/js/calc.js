const displayvaloranterior = document.getElementById("valor-anterior");
const displayvaloractual = document.getElementById("valor-actual");
const botonesnumeros = document.querySelectorAll(".numero");
const botonesoperadores = document.querySelectorAll(".operador");



const display = new Display(displayvaloranterior, displayvaloractual);

botonesnumeros.forEach(boton =>{
    boton.addEventListener("click", ()=> display.agregarnumero(boton.innerHTML));
});

botonesoperadores.forEach(boton =>{
    boton.addEventListener("click", ()=> display.computar(boton.value));
})


