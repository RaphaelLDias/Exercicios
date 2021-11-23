function validaPrimo(){
    var numero = document.getElementById('numero').value
    var resultado = document.getElementById('resultado')
    var calculo = 0
    
    for (var count = 1; count <= numero; count ++)

    if (numero % count == 0)
        calculo++
        
        if (calculo ==2) {
        resultado.innerHTML = `O número digitado: ${numero} é um número primo `
    } else {
        resultado.innerHTML = `O número digitado: ${numero} não é um número primo`
    }
}