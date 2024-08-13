const botonEncriptar = document.querySelector("#btn-encriptar");
const botonDesencriptar = document.querySelector("#btn-desencriptar");
const textoEntrada = document.querySelector("#texto-entrada");
const textoSalida = document.querySelector("#texto-salida");
const svg = document.querySelector("#svg");
const mensaje = document.querySelector("#mensaje");
const btnCopiar = document.querySelector("#btn-copiar");
const contenidoOutput = document.querySelector(".contenido__output");

let toggle = false;
let contador = 0;


function mostrarOcultarContenido() {
    if (!toggle) {
        mensaje.style.display = "none";
        svg.style.display = "none";
        btnCopiar.style.display = "block";
        contenidoOutput.classList.add("spaceBetween");
        toggle = true;
    } else {
        mensaje.style.display = "block";
        svg.style.display = "block";
        btnCopiar.style.display = "none";
        contenidoOutput.classList.remove("spaceBetween");
        toggle = false;
    }
}

function encriptar(texto) {
  const re = new RegExp(/[aeiou]/, "gi");
  var textoEncriptado = "";
  textoEncriptado = texto.replace(re, (match) => {
    switch (match) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
    }
  });
  console.log(textoEncriptado);
  return textoEncriptado;
}

botonEncriptar.addEventListener("click", () => {
  const textoEncriptado = encriptar(textoEntrada.value);
  textoSalida.textContent = textoEncriptado;
  textoEntrada.focus();
  if (contador == 0){
    mostrarOcultarContenido();
  }
  contador++;
});

const borrarTexto = () => {
  textoEntrada.value = "";
};

textoEntrada.addEventListener("blur", () => {
  setTimeout(borrarTexto, 1000);
});
