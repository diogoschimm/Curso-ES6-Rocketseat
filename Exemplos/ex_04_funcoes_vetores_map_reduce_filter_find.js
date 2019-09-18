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