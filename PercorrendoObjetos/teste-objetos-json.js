const pessoas = {
    nome: "Krhistopher",
    idade: 24,
    mês: "Janeiro",
    dependentes: [{
        nome: "Angela",
        parentesco: "Mãe",
        moraJunto: "Sim"
    },
    {
        nome: "Tarcisio",
        parentesco: "Irmão",
        moraJunto: "Sim"
    },
    {
        nome: "Arlete",
        parentesco: "Tia",
        moraJunto: "Não"
    },
    {
        nome: "Gabi",
        parentesco: "Prima",
        moraJunto: "Não"
    },
    {
        nome: "Cinthia",
        parentesco: "Prima",
        moraJunto: "Não"
    },
    {
        nome: "Alexandre",
        parentesco: "Tio",
        moraJunto: "Não"
    }
]
}

const listaDependentes = [...pessoas.dependentes];

// console.log(listaDependentes);

function buscarMoradores (obj){
    const procurandoMoraJunto = Object.keys(obj);

    if (procurandoMoraJunto.includes("dependentes")){
        console.log(procurandoMoraJunto)
    }

}

buscarMoradores(pessoas)

if (Object.values(pessoas) === "Sim"){
    const transformandoJson = JSON.stringify(pessoas)
}
console.log(Object.values(pessoas))

const transformandoJson = JSON.stringify(pessoas)

console.log(transformandoJson)