/* Objetivo da atividade:
   Cálculo da média de notas de um aluno em duas provas
   Informar se foi aprovado ou reprovado */

var nomeAluno = 'Camila'

var primeiraNota = 10

var segundaNota = 8

let mediadoaluno = (primeiraNota + segundaNota) /2

console.log (
    'Olá ', nomeAluno, ', sua média é ', mediadoaluno
)

if(mediadoaluno >= 7) {
    console.log (
        'Você está aprovado!'
    )
}else {
    console.log (
        'Você está reprovado!'
    )
}