// Cargar los datos de los juegos desde el archivo JSON
let juegosClasicos = [];
fetch("games.json")
  .then(response => response.json())
  .then(data => {
    juegosClasicos = data;
    mostrarJuegos();
  });

// Función para mostrar los juegos
function mostrarJuegos() {
  let juegosHTML = "";
  juegosClasicos.forEach(function(juego) {
    juegosHTML += "<li>" + juego.nombre + "zelda" + juego.consola + "</li>";
  });
  document.getElementById("juegos").innerHTML = juegosHTML;
}

// Función para buscar juegos
function buscarJuegos() {
  let inputBusqueda = document.getElementById("busqueda").value.toLowerCase();
  let juegosHTML = "";
  juegosClasicos.forEach(function(juego) {
    let nombreJuego = juego.nombre.toLowerCase();
    if (nombreJuego.includes(inputBusqueda)) {
      juegosHTML += "<li>" + juego.nombre + "zelda" + juego.consola + "</li>";
    }
  });
  document.getElementById("juegos").innerHTML = juegosHTML;
}
