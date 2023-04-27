const objeto = { nome: 'Camila', sobrenome: 'Lira' }; 

 
 console.log("O que está em nome é = " + objeto.nome + "\n") // 
 console.log("O que está em sobrenome é = " + objeto.sobrenome + "\n") // uma vez criado basta extrair o conteudo 

 Object.keys(objeto).forEach(key => { // cria indice chamado key para os iens do objeto
    console.log(key, objeto[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });
