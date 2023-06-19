/* 
    Higher Order Functions ou Funções de Ordem Superior (também conhecida como HOF). São definidas como funções que aceitam funções como parâmetro e
     retorna a função como saida.
*/
const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

/*
 Na linha 10 foi criado uma variável que recebe uma Arrow Function. As Arrow Function são funcões anônimas. Quando nos referimos a uma função como "anônima", significa
  que ela não tem um nome especificado em sua definição. Nas Arrow Functions, o nome é omitido porque a própria sintaxe da Arrow Function já indica a função e
   seu comportamento.
*/

/*
const callBack = (element) => { 
    return element > 50;  
}
*/

// Função declarada com nome callBack Que retorna um número maior que 50
function callBack(element) {
    return element > 30
};

/* O metodo find retorna o valor do primeiro elemento do array que atender a função de teste fornecida como argumento, e caso não encontre nenhum resultado o valor retornado é undefined.
    Portanto, o valor que será impresso no console é 60.
*/
console.log(maiorQueCinquenta);
const maiorQueCinquenta = array.find(callBack);

