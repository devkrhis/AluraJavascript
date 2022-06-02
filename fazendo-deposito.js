const cliente = { // objeto no javascript é composto de chave valor
    //chave nome com o valor andre 
    nome: "Andre",
    idade:36,
    cpf:"12345670912",
    email:"krhistopher@email.com",
    fones:["41995925911", "041998125057"], // quando precisa colocar uma lista de valores é necessário utilizar dessa forma.
    dependentes: [
        {
         // transformando em um array
            nome: "Sara",
            parestenco: "Filha",
            dataNasci: "20/03/2003" },  
        {
            nome: "Samia Maria",
            parestenco: "filha",
            dataNasci: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar:function(valor){ // aqui eu criei uma função/metodo para sempre que necessário chamar ela para aumentar o valor do saldo
        this.saldo += valor // this.algo = significa isto é, é uma palavra reservada do javascript que serve para instancia meu objeto.
    }
}

console.log(cliente.saldo)
cliente.depositar(35) // aqui eu estou colocando o valor na function que ira aumentar o valor do saudo, sendo assim ele vai resolver o codigo que está dentro da function
console.log(cliente.saldo)

console.log(cliente)