const colecionador = {
    nome: "Krhistopher",
    figurinhas: "3",
    data: "22/01/1998",
    EstadoDasFigurinhas: ["Conservadas","Depreciadas","Estragadas","Invalidas"],
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


console.log(`Quanto valia as figurinhas R$${colecionador.dinheiroEmConta}`)
colecionador.guardandoDinheiro(100)

console.log(`Atualmente as figurinhas estão: ${colecionador.EstadoDasFigurinhas[0]}`)
console.log(`Quanto está valendo as figurinhas atualmente R$${colecionador.dinheiroEmConta}`)

