console.log(7/0)//gera 'infinity' pois o javascript tem esse tipo de dado

console.log("Epa" / 2)
//gera 'not a number' (NaN) não é um numero


console.log("10" / 2)
//funciona pois o javascript verifica qual tipo de dado antes de executar

console.log("10" + 2)
//concatena pois a string  tem preferência

console.log("10" - 2)
//não concatena pois não faz sentido na string

console.log(0.1 + 0.7)
// gera uma imprecisao resultado esperado = 0.8 ---- resultado obtido = 0.7999999999999999

//console.log(10.toString())
//não funciona
console.log((10.8974).toString())//funciona com '()'
console.log((10.586).toFixed(2))//funciona com '()'
