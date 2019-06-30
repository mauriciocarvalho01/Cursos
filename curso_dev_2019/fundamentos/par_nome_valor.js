
//par/nome/valor
const saudacao = 'opa' // contexto léxico 1 ---Local físico no código que foi criada a variavel

function exec(){
    const saudacao = 'falaaa' 
    return saudacao
}


//Obejtos são grupos aninhados de pares nome/valor

const Cliente = {
    nome:'Pedro',
    idade:32,
    peso:98,
    endereco:{
        rua:'Guapore',
        numero:418,
        complemento:01
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)