function usuario() {
    console.log(this.nome);
   }

let aluno = {
    nome: 'Assis'
   }

let usuarioAluno = usuario.bind(aluno);

usuarioAluno(); // => "Assis"