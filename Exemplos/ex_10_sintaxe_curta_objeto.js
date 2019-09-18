/// SINTAXE CURTA DE OBJETO
/// Quando o nome da variavel for o mesmo nome da propriedade do objeto
/// Ele já sabe que tem que preencher o objeto.propridade com a variavel

const nome = 'Diogo';
const idade = 29;

const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'GAC'
}

const usuario2 = {
    nome,
    idade,
    empresa: 'GAC'
}

console.log(usuario);
console.log(usuario2);
