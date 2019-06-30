let contaLetras = (frase) => {

    let qtd = 0;

        for(let k = 0 ; k <= frase.length -1 ; k++){
            if(frase.charAt(k) == 'B'){
                qtd++;
          } 
        }
        return console.log(qtd);
}

contaLetras('BBBBBBbbbBBbbbB');

let contaLetras2 = (frase, letra) => {
    let qtd = 0;
    for (let i = 0 ; i <= frase.length ; i++ ){
        if(frase.charAt(i) == letra){
            qtd++;
        }
    }

    console.log(qtd);
}

contaLetras2('Helllllllo Word', 'l');