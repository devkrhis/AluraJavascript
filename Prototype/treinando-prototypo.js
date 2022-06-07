function aluno(nome, serie, sala, idade, notaFinal){
    this.nome = nome;
    this.serie = serie;
    this.sala = sala;
    this.idade = idade;
    this.notaFinal = notaFinal;
    this.nota = function(valor){
        this.notaFinal += valor
    }
    this.media = function(mediaFinal){
        if(this.notaFinal > mediaFinal){
            console.log(`Parabéns você passou de ano sua nota final é ${this.notaFinal}`)
        } else {
            console.log(`Infelizmente você reprovou, sua nota final é ${this.notaFinal}`)
        }
    }
    
}

const krhistopher = new aluno("Krhistopner", "5 - Série", "8", "15 anos", 0)

krhistopher.nota(5)
console.log(krhistopher.notaFinal)


krhistopher.media(6)
