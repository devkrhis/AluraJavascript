const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota) // estou passando os valores de notas para dentro de nota e verificando se nota é igual 10 se for adicicionar no proximo numero a nota + 1 utilizando um operador ternario.

console.log(notasAtualizadas) // aqui ele está chamando o resultado.

// A diferença entre foreach e map
// foreach o metodo em sí não retorna nada, já o map ele retorna tudo para dentro do array.