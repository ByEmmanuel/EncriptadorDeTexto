
var nombre = ("Emma");

console.log(nombre);

console.log(typeof nombre); //ver el tipo de variable en la consola

var numero = 1000;

function saltarlinea(salto){
    document.write("<br>")
    document.write("<br>")

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