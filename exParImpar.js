function recebeValor(){
var valorButton = document.getElementById('numero').value

if (valorButton % 2 == 0) {
    window.alert (`O número ${valorButton} é par`)
} else {
    window.alert(`O número ${valorButton} é impar`)
    }
}