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