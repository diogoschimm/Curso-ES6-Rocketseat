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
