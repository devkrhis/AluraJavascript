const cliente = { // objeto no javascript é composto de chave valor
    //chave nome com o valor andre 
    nome: "Andre",
    idade:36,
    cpf:"12345670912",
    email:"krhistopher@email.com",
    fones:["41995925911", "041998125057"] // quando precisa colocar uma lista de valores é necessário utilizar dessa forma.
}

cliente.dependentes = {
    nome: "Sara",
    parestenco: "Filha",
    dataNasci: "20/03/2003"
}

console.log(cliente)

// caso eu queira alterar um objeto dentro de outro objeto como fazemos? da seguinte maneira:

cliente.dependentes.nome = "Sara Silva Sauro"; // aqui eu estou acessando o objeto cliente, ai acessando o objeto depentende, acessando o objeto nome e mudando o valor dele

console.log(cliente)