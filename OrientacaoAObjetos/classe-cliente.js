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

const andre = new Cliente("Andre", "andre@email.com.br", "112233665544", 100) // instanciei meu objeto.

andre.exibirSaldo() // pedindo para mostrar apenas o saldo, sempre vem o nome da const antes e depois a função.
console.log(andre) // mostrando tudo.