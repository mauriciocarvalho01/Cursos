const notas = [7.7,6.5,5.2,8.9,6.3,7,8]


const notasBaixas1 = [];

//sem callback
function verificaNotas(){

    for(let i in notas){
        if(notas[i] < 7){
            notasBaixas1.push(notas[i]);
        }
    }

    return notasBaixas1;
}

console.log(verificaNotas(notas));

//Com callback
const notasBaixas2 = notas.filter(function(notas){
    return notas < 7;
});

console.log(notasBaixas2);

//Com callback e arrow

const notasBaixas3 = notas.filter(notas => notas < 7);
console.log(notasBaixas3);

