const colecionador = {
    nome: "Krhistopher",
    figurinhas: "3",
    data: "22/01/1998",
    EstadoDasFigurinhas: "Conservado",
    utilizadores: [{
        nomeUtilizadores: ["Gabriel", "Jonathan", "Fidalgo", "Joatham"],
        quantidade: 4
    }],
    dinheiroEmConta: 300,
    guardandoDinheiro:function(valor){
        this.dinheiroEmConta += valor;
    },

}

colecionador.nomeUtilizadores.forEach(buscandoUtilizador => console.log(buscandoUtilizador))

console.log(colecionador[0])