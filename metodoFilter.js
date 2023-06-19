/*
    Um das formas de retorna todos os elementos de um array que seja maior que outro elemento é com o método Filter();;
*/

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const maiorQueVinte = array.filter((element) => element > 50);

/*
    A linha 7 pode ser lida da seguinte forma: "Percorra cada elemento do array e retorne todos os elementos maiores que vinte".
        Portanto, na linha 14, o valor impresso no console vai ser 60, 70, 80, 90, 100.
*/

// console.log(maiorQueVinte);

/*
    Outra ótima aplicação do método filter é para remover elementos indesejados de um array, por exemplo:
*/

// Agora queremos que todos os elementos do array inicial exceto o 30.

const diferentesDeTrinta = array.filter((elemento) => elemento !== 20)
    console.log(diferentesDeTrinta);

/*
    Utilizando o filter e fornecendo a arrow function com a expressão de teste elemento !== 20, a função irá nos retornar um array com todos os elementos
         iniciais e irá excluir o 20 do resultado. Lembrando que o filter não altera o array original, ele gera um novo array como resultado.
*/