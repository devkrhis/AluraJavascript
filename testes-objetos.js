const clientes = {
    nome: "Krhistopher",
    idade: "24",
    Curso: "Javascript e Html/css"
}

clientes.estado = "Paraná"
clientes.cidade = "Colombo"
clientes.empresa = "WeON"

clientes.dependentes = {
    filho: "Não",
    EstadoCivil: "Solteiro",
    Planejamento: "Que planejamento?"
}

console.log(clientes)

delete clientes.dependentes.Planejamento



clientes.cpf = ["10343956969", "10343393393", "109301230123", "12301230123", "123456789011"]

const dados = ["nome", "idade", "curso", "dependentes"]

console.log(clientes)
console.log(clientes.cpf[0])

console.log(clientes[dados[3]])

//clientes.cpf.forEach(buscacpf => console.log(buscacpf))