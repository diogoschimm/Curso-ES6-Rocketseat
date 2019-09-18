// REST (Resto das propridades)

const usuario = {
    nome: 'Diogo',
    idade: 29,
    empresa: 'GAC'
};

const { nome, ...resto } = usuario;

console(nome);
console(resto); /// idade, empresa

const arr = [1, 2, 3, 4];

const [ a, b, ...c] = arr;

console.log(a);
console.log(c);
console.log(c);

function soma(a, b, c){
    return a + b + c;
}
function somaN(...params){
    return params.reduce((prev, cur) => prev + cur);
}

console.log(soma(1, 2));
console.log(somaN(1, 2, 3, 4 ));

/// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario = {
    nome: 'Diogo',
    idade: 29,
    empresa: 'GAC'
}

const usuario2 = { ...usuario, nome = 'Gelson'};

console.log(usuario);
console.log(usuario2);