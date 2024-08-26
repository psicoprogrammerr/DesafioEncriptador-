// defino primero las Variables y las enruto al html con queryselector
const botonEncriptar = document.querySelector(".boton_encriptar");
const textoEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto_exclamacion");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".respuesta_contenedor");
const botonCopiar = document.querySelector(".boton_copiar");
const botonDesencriptar = document.querySelector(".boton_desencriptar");

// Función para mostrar avisos
function mostrarAviso(mensaje, peso = "900") {
  aviso.style.background = "#04fd55";
  aviso.style.color = "#000000";
  aviso.style.fontWeight = peso;
  aviso.textContent = mensaje;

  setTimeout(() => {
    aviso.removeAttribute("style");
  }, 1500);
}

// funcion para encriptar
botonEncriptar.addEventListener("click", e => {
  e.preventDefault();
  let texto = textoEncriptar.value;
  let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (texto === "") {
    mostrarAviso("Por favor escribe algo para encriptar");
  } else if (texto !== txt) {
    mostrarAviso("solo se admiten palabras sin caracteres especiales", "800");
  } else if (texto !== texto.toLowerCase()) {
    mostrarAviso("El texto debe ser todo en minúscula");
  } else {
    texto = texto.replace(/e/mg, "enter").replace(/i/mg, "imes").replace(/a/mg, "ai")
                 .replace(/o/mg, "ober").replace(/u/mg, "ufat");

    respuesta.innerHTML = texto;
    botonCopiar.style.visibility = "inherit";
    contenido.remove();

    textoEncriptar.value = "";
  }
});

// funcion para Desencriptar
botonDesencriptar.addEventListener("click", e => {
  e.preventDefault();
  let texto = textoEncriptar.value;
  let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (texto === "") {
    mostrarAviso("El campo de texto no debe estar vacio");
  } else if (texto !== txt) {
    mostrarAviso("No debe tener acentos y caracteres especiales");
  } else if (texto !== texto.toLowerCase()) {
    mostrarAviso("El texto debe ser todo en minúscula");
  } else {
    texto = texto.replace(/enter/mg, "e").replace(/imes/mg, "i").replace(/ai/mg, "a")
                 .replace(/ober/mg, "o").replace(/ufat/mg, "u");

    respuesta.innerHTML = texto;
    botonCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

// funcion para Copiar
botonCopiar.addEventListener("click", e => {
  e.preventDefault();
  let copiar = respuesta;
  copiar.select();
  document.execCommand("copy");
  alert("se ha copiado el texto encriptado")
});
