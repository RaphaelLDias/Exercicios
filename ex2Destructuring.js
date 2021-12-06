const personagem = {
    nome: "Samwise Gamgee",
    nascimento: "2983 da terceira Era do Sol",
    familia: {
        esposa: "Rosinha Villa",
        melhorAmigo: "Frodo Bolseiro"
    }
};

const historiaDoPersonagem = ({}) => {
    return `Meu nome é ${nome} e sou casado com ${esposa}. Gosto de ir em aventuras com meu melhor amigo ${melhorAmigo}.`
};
historiaDoPersonagem(personagem);