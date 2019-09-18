# curso-es6-rocketseat
Curso de ecma script 6 do rocketseat


## Trabalhando com classes, construtores, métodos e herança

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

