function validaNumeroPar(){
    var numeroDigitado = document.getElementById("numero").value;

    
    if (numeroDigitado != ""&& numeroDigitado != 0){
    var resto = numeroDigitado % 2

    if (resto > 0){
        document.getElementById("resultado").innerHTML = 'O número é impar';
    }else{
        document.getElementById("resultado").innerHTML = 'O número é par';
    }
  }
}