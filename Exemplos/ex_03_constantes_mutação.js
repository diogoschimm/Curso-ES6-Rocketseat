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