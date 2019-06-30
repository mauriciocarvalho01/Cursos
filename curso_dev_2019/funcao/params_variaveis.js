function soma(){
    let soma = 0
    for(i in arguments) {
            //arguments é um array
            arguments[1] = 1
            soma += arguments[i]
    }

    return soma
}

console.log(soma(5,6,8,9))
console.log(soma())
console.log('opa',8)
console.log(soma(1, ))


function compara(){
    let qtd = 0;
    for (i in arguments){
        for(k in arguments){
            if(arguments[i] == arguments[k]){
                
                console.log("Valores iguais")
                console.log(arguments[i] + "\n" + arguments[k])
                qtd++
            }
            else {
                qtd++;
                console.log("Valores diferentes")
                console.log(arguments[i])
                console.log(arguments[k])
                qtd++
            }
        }
        

    }
    console.log(qtd + " nºs iguais")
    console.log(qtd + " nºs diferentes")
}

compara(1,1,2,3)
