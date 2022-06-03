const cliente = { // objeto no javascript é composto de chave valor
    //chave nome com o valor andre 
    nome: "Andre",
    idade:36,
    cpf:"12345670912",
    email:"krhistopher@email.com",
    fones:["41995925911", "041998125057"], // quando precisa colocar uma lista de valores é necessário utilizar dessa forma.
    dependentes: [
        {
         // transformando em um array
            nome: "Sara",
            parestenco: "Filha",
            dataNasci: "20/03/2003" },  
        {
            nome: "Samia Maria",
            parestenco: "filha",
            dataNasci: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar:function(valor){ // aqui eu criei uma função/metodo para sempre que necessário chamar ela para aumentar o valor do saldo
        this.saldo += valor // this.algo = significa isto é, é uma palavra reservada do javascript que serve para instancia meu objeto.
    }
}
// esse object.keys(cliente) ele traz todas as chaves do objeto cliente.
// const propsClientes = Object.keys(cliente);


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    //includes é um metodo que passamos para ele qual o dado queremos verificar, sendo assim queremos verificar para o includes uma string dependentes, esse metodo sempre retorna true or false, sendo assim se a condição for true entra dentro do bloco.
    if(propsClientes.includes("dependentes")){ 
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
} // dentro da função eu passo o que eu quero pegar e depois chamo a função passando o objeto que quero.

console.log(Object.values(cliente)) // object value ele traz um array com os valores.
console.log(Object.entries(cliente)) // object entrie ele traz um array com várias arrays dentro dele.
oferecerSeguro(cliente) // aqui eu passo o dado/array ou objeto para a função.