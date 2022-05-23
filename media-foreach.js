// const notas = [10, 6.5, 8, 7.5]

// let somaDasNotas = 0;
// // para cada nota de um array de notas a gente define algo dentro do bloco, foreach é uma função callback
// notas.forEach(nota => {
//     somaDasNotas += nota
// })

// let media = somaDasNotas/nota.length
// console.log(media)


// const nomes = ["Krhistopher", "Lucas", "Gabriel", "Alfred", "Junior", "Text"]

// nomes.forEach(nome =>{
//     console.log(nome)
// })


// const numeros =  [10, 9, 5, 6, 3]

// let somaDosNomes = 0;

// numeros.forEach(numero => {
//     somaDosNomes -= numero
// })

// console.log(somaDosNomes)

const nomes = ["Krhistopher", "Lucas", "Gabriel", "Alfred", "Junior", "Text"]
const numeros = [0, 1, 2, 3, 4, 5]

const numerosPercorridos = [nomes, numeros]
let somaDosNumeros = 0

// for (let i = 0; i < nomes.length; i++){
//     console.log('Seu nome é: ' + numerosPercorridos[0][i] + ' Sua nota é: ' + numerosPercorridos[1][i])
// }

// numeros.forEach(percorre => {
//     somaDosNumeros += percorre
//     console.log('Seu nome é: ' + numerosPercorridos[0][percorre])
// })

const numero = 2
const table = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somando = 0

table.forEach(item => {
    let total = item*2
    let somando =+ item
    console.log(`${numero} X ${somando} = ${total}`)
    
})