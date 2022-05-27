// const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
// const notas = [7, 4.5, 8, 7.5];

// const reprovados = nomes.filter( (aluno,indice) => notas [indice] < 5 ) // dentro dos parenteses eu coloco o que eu desejo que faça no codigo, sendo assim no nomes.filter eu vou trazer o nome da pessoa que está na posição que a nota for menor que 5, pois colocamos um arrow function de notas[indice]

// console.log(`Reprovados ${reprovados}`)



const jogadores = ["Neymar", "Pogba", "Drogba", "Rafael", "Pelé"]
const carros = ["Ferrari", "Lamborghini", "Porsch", "Pollo", "BMW"]
const notas = [10, 8, 9, 3, 6,]

const trazendoResultado = jogadores.filter( (_,indice) => notas[indice] < 6)
const trazendoCarro = carros.filter((_,indice) => notas[indice] <6)

console.log(`Seu nome é: ${trazendoResultado} e seu carro é: ${trazendoCarro}`)

if (trazendoCarro == "Pollo"){
    console.log("Você é uma bichona")
}



