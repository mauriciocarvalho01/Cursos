
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

console.log(!!isAtivo)
 // Uma negação '!' tranforma o 1 em false
 //Duas negações '!!' tranforma o 1 em true


 console.log('Os verdadeiros...')

 console.log(!!3)
 console.log(!!-1)
 console.log(!!' ')
 console.log(!!'texto')
 console.log(!![])
 console.log(!!{})
 console.log(!!Infinity)
 console.log(!!(isAtivo = true))

 console.log('Os falsos...')

 console.log(!!0)
 console.log(!!'')
 console.log(!!null)
 console.log(!!NaN)
 console.log(!!undefined)
 console.log(!!(isAtivo = false))


 console.log('Para finalizar...')

 console.log('' || 0 || null || undefined)
 console.log('' || 0 || null || 'epa')
 console.log('' || 0 || null || 123 || 'epa') // Ele imprime o primeiro valor verdadeiro...

 //A operação '||' serve para dar um padrão para determinada coisa...

 //exemplo

 let nome = ''
//Se uma operação for falsa(false)... ela considera a verdadeira(true)...
 console.log(nome || 'desconhecido')