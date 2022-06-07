function Cliente(nome,cpf,email,saldo){ // função construtora
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor
    }
    this.saque = function (valor){
        if (this.saldo > valor){
            this.saldo -= valor     
        } else {
            console.log(`Não é possível retirar o dinheiro pois seu saldo é de ${this.saldo}`)
        }
        
    }
}



const andre = new Cliente("André","1254359542","andre@email.com",100) // new é uma palavra reservada, sendo assim toda vez que eu utilizar new cliente, estou criando um novo cliente é uma nova instancia de cliente, e entre parenteses eu passo os parâmetros do cliente.

console.log(andre)

const gustavo = new Cliente("Gustavo", "123123123123", "gustavo@gmail.com", 500)

console.log(gustavo)
gustavo.depositar(300);
console.log(gustavo.saldo)

gustavo.saque(0.10);
console.log(gustavo.saldo)

