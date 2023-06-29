//window.confirm ("HOLA!! Bienvenido seas a mi pagina web,  agradeceria mucho tu apoyo y tu feedback que me podrias dejar en la parte de los iconos inferiores")
//window.confirm (" esta actualmente se encuentra actualizandose constantemente, aun no es el proyecto final :)")
 
document.getElementById("btn-ejecutar").addEventListener("click", ejecutar);


function ejecutar() {
  const texto = document.getElementById('escribir_mensaje').value;
  const resultado = document.getElementById('resultado');
  const encriptar = document.getElementById('radio_encriptar');
  const desencriptar = document.getElementById('radio_desencriptar');
  if (encriptar.checked) {
      resultado.value = encriptararea (texto);
      resultado.textContent = encriptar(texto);
    } else if (desencriptar.checked) {
      resultado.value = desencriptararea(texto);
      resultado.textContent = desencriptar(texto);
  }



  function encriptararea(texto){
      if (/([^\S-$\S])|([A-ZÁ-Ú])|([á-ú])|([0-9])|([!-/])|([:-@])|([\[-\\'])|([{-¥])/g.test(texto)) {
          return resultado.textContent = "Solo se permiten letras minúsculas";
      }

      let textoEncriptado = texto
          .replace(/e/gi, "enter")
          .replace(/i/gi, "imes")
          .replace(/a/gi, "ai")
          .replace(/o/gi, "ober")
          .replace(/u/gi, "ufat");

      return textoEncriptado;
  }


  function desencriptararea(textoEncriptado) {
      if (/([A-ZÁ-Ú])|([á-ú])|([0-9])|([!-/])|([:-@])|([\[-\\'])|([{-¥])/g.test(textoEncriptado)) {
        return "Solo se permiten letras minúsculas";
      }
      
      let textoDesencriptado = textoEncriptado
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
      return textoDesencriptado;
    }
    
}

// este archivo esta bien y es el actualizado 29 JUNIO 2023