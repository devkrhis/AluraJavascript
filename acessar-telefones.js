const cliente = { // objeto no javascript é composto de chave valor
    //chave nome com o valor andre 
    nome: "Andre",
    idade:36,
    cpf:"12345670912",
    email:"krhistopher@email.com",
    fones:["41995925911", "041998125057"] // quando precisa colocar uma lista de valores é necessário utilizar dessa forma.
}

cliente.fones.forEach(fone => console.log(fone))// aqui dentro do objeto clientes, estou fazendo um for dentro da chave fones, passando o fone como metodo de callback.
