function Cliente(nome,cpf,email,saldo){ // função construtora
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo) // aqui eu estou indo dentro do cliente e chamando as propriedades que eu quero com o call e logo depois coloco () para passar o que eu quero
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("Ju","55588844477711","ju@email.com",100,200) // aqui eu instanciei e passei os parametros que eu queria.

console.log(ju)

ClientePoupanca.prototype.depositarPoup = function(valor){ // estou acessando o ClientePoupanca, com notação de ponto (.), e com o prototype eu posso passar um novo metodo depositarPoup e atribundo uma function valor a onde aumenta o valor do saldoPoup
    this.saldoPoup += valor
}

ju.depositarPoup(30) // aqui eu adicionei 30 reais

console.log(ju.saldoPoup) // aqui eu imprimi o saldo.