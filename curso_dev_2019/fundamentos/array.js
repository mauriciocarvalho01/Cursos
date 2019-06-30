
const valores = [7.7,8.9,8.2,6.6]//array de tamanho 4
console.log(valores[0],valores[3])


console.log(valores[4])
//quando não há elementos, será undefined

valores[4] = 10 //adicionar valores a partir do indice

console.log(valores.length)//acessar tamnho do array com o length(tamanho)

valores.push({id: 3}, false, null, 'teste')
//Podemos colocar varios tipos de dados dentro de um array
//'{id: 3}' é um objeto, será estudado mais pra frente...
console.log(valores)

delete valores[3]
valores.pop() // exlcui o ultimo valor

console.log(valores)

console.log(typeof valores)