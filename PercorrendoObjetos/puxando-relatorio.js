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

let relatorio = "";

 // para cada info é uma das informações do cliente, para cada condição que o for classico usa a gente precisa passar apenas o in e o objeto
for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){ //typeof ele me diz qual o tipo de dado de uma função, sendo assim fiz uma condição em cima disso para me trazer tudo que não for object e nem function.
        continue
    } else {
        relatorio += ` 
        // cliente[info] aqui ele ta percorrendo tudo, como não tem como colocarr cliente.nome/cliente.email a gente coloca cliente[info] para percorrer o array e trazer o valor.
        ${info} ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)