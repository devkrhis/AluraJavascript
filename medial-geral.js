const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPythons = [7, 3.5, 8, 9.5]

function mediaSala (notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
    atual + acum,0)
    return somaDasNotas/notasDaSala.length
}
console.log(`Média da sala de Javascript ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Pythoon ${mediaSala(salaPythons)}`)

// metodo reduce, reduz o valor dde todo o array para um unico valor e sempre tem que ter 2 parametros igual está ali.
// o valor atual é o que vai fazer o loop, sendo assim percorrer todos os valores do array.
// o acumulador é o que vai receber a quantidade dos valores, sendo assim declarei que quero que começe com 0, sendo assim vai fazer 0 + 7 + 8 e assim vai.
// e depois vai ser dividido pela quantidade de vezes que foi pelo loop no return.

//Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.


const notas = [10, 6.5, 8, 7]
const media = notas.reduce((acum, atual) => atual + acum,0) / notas.length

console.log(media)