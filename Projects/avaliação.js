 /*
     OBJETIVO --> DESENVOLVER UM ALGORITMO CAPAZ DE CALCULAR E AVALIAR SE O ALUNO FOI APROVADO NA PRIMEIRA ETAPA DA PROVA.
    */

    //primeiro declaramos a função responsável para calcular e analisar a situação do aluno
    function PrimeiraEtapa(acertos, semestres){ //aqui estamos informando ao nosso algoritmo os parâmetros para essa função funcionar

// declarando variáveis
// declarando em CONST pois serão sempre constantes e não serão atualizadas fora de seu bloco
    const questoes = 20; // o total de questões da prova
    const nota_minima = 0.5; // a nota mínima da prova
    const semestre_minimo = 3; // Total de semestre minimo que o aluno precisa ter para ser aprovado

//declarando a variável nota
    const nota = acertos/questoes // nota -> acertos divide pelo numero de questões da prova

    // estrutura de condição, para observar se o aluno foi aprovado ou não
    if((nota >= nota_minima) && /*(AND)*/ (semestres >= semestre_minimo)){
        return "aprovado " + nota + " questões acertadas " + acertos;
    } else{
        return "reprovado " + nota + " questões acertadas " + acertos;
    }
      /*
        REGRA -> SE A (NOTA FOR MAIOR OU IGUAL (>=) A NOTA MINIMA) E (&&) (SEMESTRES MAIOR OU IGUAL (>=) A SEMESTRE MINIMO){
         RETORNA "APROVADO"
         APROVADO ==[IGUAL] TRUE (VERDADEIRO)
        } SENÃO{
         RETORNA "REPROVADO"
         APROVADO == [IGUAL] FALSE (FALSO)
        }
    */
 }
  console.log(PrimeiraEtapa(10,3)) //INFORMO AQUI O VALOR DOS PARÂMETROS [ACERTOS] [SEMESTRES]
