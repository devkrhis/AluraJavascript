const nomes = ["Ana", "Ju", "Leo", "Paula"]

nomes.forEach(ImprimeNomes) // foreach recebe como parametro uma function e pode estar fora da function e a function chamado ela

function ImprimeNomes(nome){
    console.log(nome)
}

const numeros = [9, 4, 7, 5]

numeros.forEach(recebeNumeros) 

function recebeNumeros(numero){
    console.log(numero)
}