# curso-es6-rocketseat
Curso de ecma script 6 do rocketseat, dentro da pasta Exemplos estão todos os códigos utilizados


## 1. Trabalhando com classes, construtores, métodos e herança

```js
class List {  
    constructor(){  
        this.data = [];  
    }  
    add(data){  
        this.data.push(data);  
        console.log(this.data);  
    }  
}  
class TodoList extends List {   
    constructor(){  
        super();  
        this.usuario = 'Diogo';  
    }  
    mostraUsuario(){  
        console.log(this.usuario);  
    }  
 }  
  
var MinhaLita = new TodoList();  
  
document.getElementById('novotodo').onclick = function(){  
    MinhaLita.add('Novo Todo');  
}  
  
MinhaLita.mostraUsuario();  
```

## 2. Métodos Estáticos com JS

```js  
class Matematica {
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 3));
```

## 3. Constantes, Mutação de Objetos e Scopo de Váriaveis no JS

```js
/// Constantes
const a = 2;

a = 3; // retornar erro, porque a constante não pode ser reatribuid

const usuario = { nome: 'Diogo'};
usuario.nome = 'Gelson'; /// não retorna erro, porque é permitido mutar

/// Scopo de Variárives
function teste(x){
    let y = 2;

    if (x > 5){
        let y = 4;
        console.log(x, y);
    }
}

teste(10);
```

## 4. Funções com Vetores, Map, Reduce, Filter, Find

```js
/// Funcionalidade em vetores
const arr = [1, 3, 4, 5, 8, 9];

//// map (Percorrer o Array e Retornar)
const newArr = arr.map(function(item, index){
    return item * index;
})
console.log(newArr);

/// reduce (Percorre o array e Retorna somente um item)
const sum = arr.reduce(function(prev, current){
    return prev + current;
})
console.log(sum);

/// Filter (Somente valores pares)
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

/// Find
const find = arr.find(function(item, index){
    return item = 4;
});
console.log(find);
```

## 5. Arrow Functions

```js
/// Arrow Function (utilizado em _callback)
const arr = [1, 3, 4, 5, 7, 8, 9];

const newArr = arr.map((item, index) => item * index);
const newArr2 = arr.map(item => item * 2);

console.log(newArr);

const teste = () => { return 'teste'; }
console.log(teste);

const teste2 = () => [1, 3, 5];
const teste3 = () => 'Diogoschimm';
const teste4 = () => ({id: 1, nome: 'Diogo'});
const teste5 = () => 1;
console.log(teste2, teste3, teste4, teste5);
```

## 6. Valores padrões para parâmetros de funções

```js
/// Valores padrões para functions
function soma(a = 3, b = 6){
    return a + b;
}
console.log(soma(1));
console.log(soma());

/// Valor padrão para Arrow Function
const soma2 = (a = 3, b = 6) => a + b;
```

## 7. Desestruturação de Objetos

```js
/// Desestruturação de Objeto
const usuario = {
    nome: 'diogo',
    idade: 29,
    endereco :{
        cidade: 'Cuiabá',
        estado: 'MT'
    }
};

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

// Desestruturação
const {nome, idade, endereco:{cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);
```

## 8. Operador REST e SPREAD

```js
// REST (Resto das propridades)

const usuario = {
    nome: 'Diogo',
    idade: 29,
    empresa: 'MinhaEmpresa'
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
    empresa: 'MinhaEmpresa'
}

const usuario2 = { ...usuario, nome = 'Gelson'};

console.log(usuario);
console.log(usuario2);
```

## 9. Template Literals (Interpolação de Strings)

```js
// Template Literals

const nome = "diogoschimm";
const idade = 29;

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');

console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
```

## 10. Sintaxe Curta de Objetos

```js
/// SINTAXE CURTA DE OBJETO
/// Quando o nome da variavel for o mesmo nome da propriedade do objeto
/// Ele já sabe que tem que preencher o objeto.propridade com a variavel

const nome = 'Diogo';
const idade = 29;

const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'MinhaEmpresa'
}

const usuario2 = {
    nome,
    idade,
    empresa: 'MinhaEmpresa2'
}

console.log(usuario);
console.log(usuario2);
```

## 11. Funções (Import e Export)

```js
export function soma(a, b){
    return a + b;
}

export function sub(a, b){
    return a - b;
}

export function mult(a, b){
    return a * b;
}

export function div(a, b){
    return a / b;
}
```

## 12. Funções (Export Default)

```js
export default function soma(a,b){
    return a + b;
}
```

## 13. Funções (Import)

```js
// import { soma as somaFunction, sub, mult, div } from './functions';

import * as functions from './functions';
import  somaAdd from './soma';

console.log(functions);

console.log(functions.somaFunction(1, 3));
console.log(functions.sub(1, 3));
console.log(functions.mult(1, 3));
console.log(functions.div(1, 3));

console.log(somaAdd(1, 3));
```