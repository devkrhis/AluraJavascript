const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   delete objPersonagem.aliado // deletando a chave aliado e os valores dentro dela
   console.log(objPersonagem.aliado)

   // também é possível deletar com a notação de colchetes:

   delete objPersonagem.aliado // deletando a chave aliado e os valores dentro dela
   delete objPersonagem["status"] // deletando a chave status e os valores dentro dela

   console.log(objPersonagem.aliado)
   console.log(objPersonagem.status)