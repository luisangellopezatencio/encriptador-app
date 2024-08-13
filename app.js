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

function validar(texto) {
  const re = /[A-ZÁÉÍÓÚÜáéíóúü]/g;
  return re.test(texto);
}

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
  if (validar(texto)) {
    alert("Solo se permiten letras minusculas y sin tilde");
    texto.value = "";
    return;
  } else {
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
    return textoEncriptado;
  }
}

function desencriptar(texto) {
  if (validar(texto)) {
    alert("Solo se permiten letras minusculas y sin tilde");
    texto.value = "";
    return;
  } else {
    const re = new RegExp(/ai|enter|imes|ober|ufat/, "gi");
    var textoDesencriptado = "";
    textoDesencriptado = texto.replace(re, (match) => {
      switch (match) {
        case "ai":
          return "a";
        case "enter":
          return "e";
        case "imes":
          return "i";
        case "ober":
          return "o";
        case "ufat":
          return "u";
      }
    });
    return textoDesencriptado;
  }
}

function copiarAlPortapapeles(texto) {
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      alert("Error al copiar al portapapeles: ", err);
    });
}

botonEncriptar.addEventListener("click", () => {
  const textoEncriptado = encriptar(textoEntrada.value);
  textoSalida.textContent = textoEncriptado;
  textoEntrada.focus();
  if (contador == 0) {
    mostrarOcultarContenido();
  }
  contador++;
});

botonDesencriptar.addEventListener("click", () => {
  const textoDesencriptado = desencriptar(textoEntrada.value);
  textoSalida.textContent = textoDesencriptado;
  textoEntrada.focus();
  if (contador == 0) {
    mostrarOcultarContenido();
  }
  contador++;
});

btnCopiar.addEventListener("click", () => {
  copiarAlPortapapeles(textoSalida.innerHTML);
  console.log(textoSalida.textContent);
});
const borrarTexto = () => {
  textoEntrada.value = "";
};

textoEntrada.addEventListener("blur", () => {
  setTimeout(borrarTexto, 1000);
});
