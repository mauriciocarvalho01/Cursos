const soma  = function (x,y){
    return x +  y;
}

const imprimirSoma = function ( a,b, operacao = soma){
    return console.log(operacao(a,b))
}

imprimirSoma(3,4)
imprimirSoma(3,4,soma)
imprimirSoma(3,4,function(x,y){
return x-y;
});
imprimirSoma(3,4,(x,y) => x * y)

const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar();