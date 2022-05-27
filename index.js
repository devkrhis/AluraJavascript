const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num){
    return num * 10
}

//const arraySomada = arrayNums.map(multiplicaPorDez) // não passamos nada aqui porque o javascript já entende como é para realizar.
 const arraySomada = arrayNums.map(num => num * 10) // aqui passa um parametro num, que representa o que cada um dos elementos do array que será iterado pelo map, e ai é realizado a conta utilizando um arrow function.
// ambos os casos de uso são validas
console.log(arraySomada)