const colecionador = {
    nome: "Krhistopher",
    figurinhas: "3",
    data: "22/01/1998",
    EstadoDasFigurinhas: ["Conservado","Depreciado","Estragado","Invalido"],
    utilizadores: [{
        nomeUtilizadores: ["Gabriel", "Jonathan", "Fidalgo", "Joatham"],
        quantidade: 4
    }],
    dinheiroEmConta: 300,
    guardandoDinheiro:function(valor){
        this.dinheiroEmConta += valor;
    },

}

colecionador.EstadoDasFigurinhas.forEach(buscandoFigurinhas => console.log(buscandoFigurinhas))

console.log(colecionador.dinheiroEmConta)
colecionador.guardandoDinheiro(100)
console.log(colecionador.dinheiroEmConta)

