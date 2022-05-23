// const alunos = ['João', 'Juliana', 'Caio', 'Ana']
// const mediasDosAlunos = [10,7,9,6]

// let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

// const exibeNomeNota = (nomeDoAluno) => {
//     if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){ // Aqui estou verificando se existe o que eu passar no console.log lá em baixo, exemplo se existe ANA
//         let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // Se existir Ana eu guardo na variável indice a posição de Ana
//         return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice] // Aqui eu trago um retorno da lista "Alunos" com a posição da Ana que está no variavel indice, depois na media eu acesso a lista de mediaDosAlunos e trago a posição da Ana só que dentro da lista mediaDos alunos.
//     } else {
//         return "Aluno não está cadastrado" // Caso não tenha o aluno ira cair nessa condição.
//     }
// }

// console.log(exibeNomeNota("Ana"))


// const listaDeCarros = ["Ford", "Volkswagem", "Fiat", "BMW", "Jaguar"]
// const listaDeCompradores = ["Krhistopher", "Lucas", "Flavio", "Dagoberto", "Lucia"]
// const listaDeNotas = [10, 6, 9, 2, 0]

// let listaGeral = [listaDeCarros, listaDeCompradores, listaDeNotas]

// let exibeDados = (qualCarro) => {
//     if (listaGeral[0].includes(qualCarro)){
//         let posicao = listaGeral[0].indexOf(qualCarro)
//         return 'seu carro é: ' + listaGeral[0][posicao] + ', Parabéns pela sua aquisição ' + listaGeral[1][posicao] + ', A nota dele é: ' + listaGeral[2][posicao];
//     } else {
//         return "Não encontramos seu carro: " + qualCarro
//     }
// }

// console.log(exibeDados("UNO"))

const nomes = ["Krhistopher", "Ana", "Carol", "Lucas", "Dagoshow"]
const segundoNome = ["Kauling", "Silva", "Almeida", "Gonçalves", "Docker"]
const terceiroNome = ["Novak", "Moura", "Aparecida", "Nunes", "Container"]

let nomeCompleto = [nomes, segundoNome, terceiroNome];

let exibeNomes = (qualSeuNome) => {
    if (nomeCompleto[0].includes(qualSeuNome)){
        let posicao = nomeCompleto[0].indexOf(qualSeuNome)
        return 'O seu nome completo é: ' + nomeCompleto[0][posicao] +' '+ nomeCompleto[1][posicao] +' '+ nomeCompleto[2][posicao] 
    } else {
        return 'O nome digitado foi ' + qualSeuNome + " Não se encontra em nossa base de dados."
    }
}

console.log(exibeNomes("Romario"))