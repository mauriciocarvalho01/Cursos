let dobro = function(a){
    return 2 * a
}
//A função arrow é sempre uma função anônima
dobro = (a) => {
    return 2 * a
}
//Usado em uma única linha, com apenas um parâmetro
dobro = a => 2 * a


console.log(Math.floor(dobro(Math.PI)))


let Ola = function ( ){
    return 'Ola'
}

Ola = () => 'Ola'//Sem parâmetros
Ola = _ => 'Ola'//Existe um parâmetro mas foi ignorado na linha 21
console.log(Ola())