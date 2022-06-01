const cliente = { // objeto no javascript é composto de chave valor
    //chave nome com o valor andre 
    nome: "Andre",
    idade:36,
    cpf:"12345670912",
    email:"krhistopher@email.com"
}

const chaves = ["nome","idade","cpf","email"]
console.log(cliente[chaves[0]]) // aqui eu estou acessando meu cliente, logo depois estou acessando meu array e buscando as informações na posição 0 que é no caso nome

chaves.forEach(info => console.log(cliente[info])) // aqui eu estou percorrendo meu array e trazendo todos os valores de cliente para info, tem que ter o info pois é uma função callback.