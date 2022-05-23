const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0; //Aqui vai estar guardando o valor toda vez que rodar o "For" laço de repetição.

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]; // somaDasNotas += é igual fazer "somaDasNotas = somaDasNotas + notas[i]" sendo assim vai percorrer o notas com a posição de I e ir adicionando a nota no somaDasNotas
}

let media = somaDasNotas/notas.length

console.log(media)


