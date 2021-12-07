function nossoForEach(arr, funcao) {
    for(let i = 0; i < arr.length; i = i + 1) {
        funcao(arr[i], i);
    }
};

nossoForEach ([ 'Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' ], function(nome, indice) {
    console.log(indice, nome)
});