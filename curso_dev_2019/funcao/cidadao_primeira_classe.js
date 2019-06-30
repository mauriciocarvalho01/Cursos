//Função em js é First-Class Object (Citizens)
//Higher-Order function


//Criar de forma literal

function func1(){}

//Armazenar em uma variavel
const func2 = function(){}

//Armazenar em um array

const array = [function (a,b){ return a + b},func1, func2]

console.log(array[0](2,3))

//Armazenar como atributo de um objeto

const obj = {}
    obj.falar = function(){return 'Opa' }

    console.log(obj.falar())



//Passar uma função comoparametro

function Run(func){
    func()
}

Run(function(){console.log('Executando...')})

//Uma função pode retornar uma função/ também pode conter uma função dentro

function execut(){
    return function(c){
        console.log('Executanado função dentro de função')
    }
}

execut()()
//outro exemplo
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(3)
//outra forma de chamar
const cincoMais = soma(2,3)
cincoMais(4)