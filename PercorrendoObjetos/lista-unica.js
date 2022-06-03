const clientes = [
    {
        nome: "André",
        cpf: "12312312312",
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia",
            parentesco: "filha",
            dataNasc: "04/11/2014"
        }],
    },
    {
        nome: "Juliana",
        cpf: "56767887867",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes] // ... ele espalha o conteudo dentro de um array, sendo assim quando eu trago o resultado ele está espalhado.

console.table(listaDependentes)