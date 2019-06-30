var a = 3


global.b = 123

this.c = 456
this.d = 'teste'
this.e = false
console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


//criando uma variavel maluca: 

abc = 3 // Nunca faça isso, pois va para o global!!!
console.log(global.abc)


//module.exports = {e: 456, f: false, g: 'teste'}
