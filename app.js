// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js
// Obtener elementos del DOM
const inputAmigo = document.getElementById('amigo');
const buttonAdd = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const buttonSortear = document.querySelector('.button-draw');

let amigos = [];

function agregarAmigo() {
    const nombreAmigo = inputAmigo.value.trim(); // Eliminar espacios en blanco al inicio y al final

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return; // Detener la función si el nombre está vacío
    }

    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    inputAmigo.value = ""; // Limpiar el campo de entrada después de agregar el nombre
}

function actualizarListaAmigos() {
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, agregue al menos dos amigos para realizar el sorteo.");
        return; // Detener la función si no hay suficientes amigos
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    mostrarResultadoSorteo(amigoSecreto);
}

function mostrarResultadoSorteo(amigoSecreto) {
    resultado.innerHTML = ""; // Limpiar el resultado anterior
    const li = document.createElement('li');
    li.textContent = "¡Tu amigo secreto es: " + amigoSecreto + "!";
    resultado.appendChild(li);
}