let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)


const obj = {}
comparaComThis = comparaComThis.bind(obj)//mudou o 'this' com o 'bind'
comparaComThis(global)
comparaComThis(obj)

//Mudou o modulo do this
comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//Não mudou o 'this' com o 'bind'

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
