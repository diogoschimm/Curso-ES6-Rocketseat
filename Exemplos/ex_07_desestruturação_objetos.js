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