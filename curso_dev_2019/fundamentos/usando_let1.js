let numero = 1

{
    let numero2 = 2

    console.log('dentro = ',numero)
    //ele pequena primeiro o escopo menor, se não tiver 
    //ele procura no escopo maior
}

console.log('fora = ',numero)