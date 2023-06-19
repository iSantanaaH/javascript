const array = ['Micael', 'Wyck', 'Judicael', 'Lucia'];

const [pessoa1, pessoa2, ...pessoa3] = array;

// console.log(pessoa3);

const usuario = { nome: 'Micael', idade: 22, profissao: 'Programador'};
const { nome, idade, profissao } = usuario;
console.log(`${nome}, ${idade} anos, ${profissao}`);

