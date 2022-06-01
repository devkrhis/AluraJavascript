const peterParker = {
    nome: "Krhistopher",
    sobrenome: "Novak",
    idade: "24",
    cpf: "103.456.233.102",
aliado : {
    nome: "Homem-aranha",
    sobrenome: "Aranha-movel",
    idade: "55",
},
status: "Empregado"
}

peterParker.data = "01/06/2022"

console.log(peterParker)

delete peterParker.status

console.log(peterParker)

peterParker.viagem = "Moscou"
peterParker.status = "Trabalhando"
console.log(peterParker)

peterParker.status = "Viajando"
peterParker.dataChegada = "06/06/2022"
console.log(peterParker)

peterParker.dataChegada = "30/06/2022"
console.log(peterParker)

