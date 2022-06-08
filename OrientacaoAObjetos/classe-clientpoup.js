class Cliente { // sempre nome da classe com letra maiscula.
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    
    depositar(valor){ // quando tá dentro de classe não precisa colocar o function()
         this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca("Andre", "andre@email.com", "2255887744", 100, 200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(50)

console.log(andre.saldo)
console.log(andre.saldoPoupanca)