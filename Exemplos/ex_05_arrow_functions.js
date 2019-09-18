/// Arrow Function (utilizado em _callback)
const arr = [1, 3, 4, 5, 7, 8, 9];

const newArr = arr.map((item, index) => item * index);
const newArr2 = arr.map(item => item * 2);

console.log(newArr);

const teste = () => { return 'teste'; }
console.log(teste);

const teste2 = () => [1, 3, 5];
const teste3 = () => 'Diogo Rodrigo';
const teste4 = () => ({id: 1, nome: 'diogo'});
const teste5 = () => 1;
console.log(teste2, teste3, teste4, teste5);
 