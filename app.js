const botonEncriptar = document.querySelector("#btn-encriptar");
const botonDesencriptar = document.querySelector("#btn-desencriptar");
const textoEntrada = document.querySelector("#texto-entrada");
const textoSalida = document.querySelector("#texto-salida");

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
  console.log(textoEncriptado);
});

const borrarTexto = () => {
  textoEntrada.value = "";
};

textoEntrada.addEventListener("blur", () => {
  setTimeout(borrarTexto, 1000);
});
