
const xadrex = (tamanho) => {

    for( k = 0 ; k < tamanho ; k++){
        let linha = '';
            for(i = 0 ; i < tamanho ; i++){
                if((i + k) % 2){//Se a linha for par, adiciona o espaço
                    linha += " "
                }
                else{
                    linha +="#"// Se não for par, continua adicionando #
                }
            }

        console.log(linha)
    }
}

xadrex(15);


