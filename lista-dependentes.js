const cliente = { // objeto no javascript é composto de chave valor
    //chave nome com o valor andre 
    nome: "Andre",
    idade:36,
    cpf:"12345670912",
    email:"krhistopher@email.com",
    fones:["41995925911", "041998125057"], // quando precisa colocar uma lista de valores é necessário utilizar dessa forma.
    dependentes: [{ // transformando em um array
        nome: "Sara",
        parestenco: "Filha",
        dataNasci: "20/03/2003"
    }]
}

cliente.dependentes.push({ // adicionando itens no final do array, dentro do objeto.
    nome: "Samia Maria",
    parestenco: "filha",
    dataNasci: "04/01/2014"
})

console.log(cliente)

// como trazer a filha mais nova de dependentes, como realizar esse filtro?

// criado uma variavel para receber o filtro do array que está dentro de um objeto que foi realizado em cima da data de nascimento
const filhaMaisNova = cliente.dependentes.filter(dependente =>  dependente.dataNasci==="04/01/2014")

// mostrando na tela o resultado do filtro, acessando a posição 0 do nome.
console.log(filhaMaisNova[0].nome)

