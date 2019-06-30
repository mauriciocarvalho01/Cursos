//ES2015


//objeto
const pessoa = {
    nome:'Mauricio',
    idade:27,
    endereco:{
        logradouro:'Rua guaporé',
        numero:418
    }
}


const {nome,idade} = pessoa//acessando a variavel dentro do objeto com '{}'
console.log(nome,idade)

const {nome:n,idade:i} = pessoa//trocando  nome das variaveis
console.log(n,i)

const {sobreNome,bemHumorada = 'Ok'} = pessoa
// receber valor por padrão quando não tiver no objeto
//Se não, fica 'Undefined'
console.log(sobreNome,bemHumorada)

const {endereco:{logradouro,numero}} = pessoa 
//pegando vaiaveis de dentro de objeto, que esta dentro de outro objeto
console.log(logradouro,numero)



