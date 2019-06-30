const escola = "Cod3r"

console.log(escola.charAt(4))// charAt busca uma letra dentro da string
console.log(escola.charAt(5))// 'Cod3r' tem tem indice 4--- imprimir o 5 não da nenhum erro
console.log(escola.charCodeAt(3)) // charCodeAt pega o valor da posição na tabela  ASCII
console.log(escola.indexOf('r')) //indexOf pega o elemento e verifica a posição
console.log(escola.substring(2))// substringpega os valores depois do indice 
console.log(escola.substring(0,3)) // substring pega do indice 0 até o indice 3 sem incluir o 3
console.log('escola '.concat(escola).concat("!"))//'.concat' concatena os valores
console.log('escola '+ escola + "!")//'+' também concatena os valores
console.log(escola.replace(3, 'e'))//replace  substitui o indice pela string entre ''
console.log('Ana,Maria,Pedro'.split(','))