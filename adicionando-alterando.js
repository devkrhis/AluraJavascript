const cliente = { // objeto no javascript é composto de chave valor
    //chave nome com o valor andre 
    nome: "Andre",
    idade:36,
    cpf:"12345670912",
    email:"krhistopher@email.com"
}
cliente.fone ="998775054" // adicionando o valor para dentro do cliente com o nome fone.
console.log(cliente);

cliente.fone = "875254554"; // caso queira alterar, pode realizar dessa forma também, que ele vai alterar o valor.
console.log(cliente)