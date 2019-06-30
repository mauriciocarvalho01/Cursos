const peso1 = 1.0
const peso2 = Number('2.1')//Transorma uma string em numeral

console.log(peso1,peso2)

console.log(Number.isInteger(peso1))
//  Number.isInteger verifica se o numeral é inteiro, retornou true pois é '1.0'

console.log(Number.isInteger(peso2))
//  Number.isInteger verifica se o numeral é inteiro, retornou false pois é '2.1'

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

console.log(media.toFixed(2))//toFixed regula a quantidade de casas decimais

console.log(media.toString())// 'toString()' tranforma o valor em string
console.log(media.toString(2))// 'toString(2)' tranforma o valor em string e em binario

console.log(typeof media)//'typeof' verifica o tipo do dado
console.log(typeof Number)//'typeof' verifica o tipo do dado, Number é uma função


