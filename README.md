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
