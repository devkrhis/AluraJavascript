const cliente = { // objeto no javascript é composto de chave valor
    //chave nome com o valor andre 
    nome: "Andre",
    idade:36,
    cpf:"12345670912",
    email:"krhistopher@email.com"
}

console.log(cliente.nome) // sendo assim eu passo que eu quero que traga meu dado do nome: que vai ser andre
console.log(`Meu nome é: ${cliente.nome} e tenho ${cliente.idade} anos`)

console.log(cliente.cpf.substring(0,3)) // depois de eu acessar o dado eu posso utilizar qualquer metodo do javascript, neste metodo eu só vou mostrar os 3 primeiros digitos do cpt