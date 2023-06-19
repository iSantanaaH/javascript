// const array = [1, 2, 3];

// const somaTotal = array.reduce((acumulador, elementoAtual) => {
//   console.log(acumulador, elementoAtual);
//   return acumulador + elementoAtual;
// });

// console.log(somaTotal);

const array = [10, 15, 20, 25, 30];

const doubleNumbers = array.map((element) => element * 2);
const sum = doubleNumbers.reduce((acc, curr) => acc + curr);
const resultSum = [sum];
console.log(resultSum);