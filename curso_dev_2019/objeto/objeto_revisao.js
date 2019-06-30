//Coleção dinamica de pares chave / valor

const produto = new Object;

produto.nome  = 'Cadeira';
produto.preco = 2.00;

//Dessa forma o identificador por ter espaços, começar com 0 etc...
produto['marca do produto'] = 'legal';

console.log(produto);
//Excluir identificador no objeto
delete produto.marca;
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Mauricio',
        idade:27,
        endereco: {
            rua: 'Guaporé',
            numero: 418,
        }
    },
    condutores:[{
        nome: 'Marcos',
        idade: 29,
    },{
        nome:'Vanessa',
        idade: 23,
    }],

    imprimir:function(){
        console.log(carro.condutores)
    }
        
}

carro.proprietario.endereco.numero = 419
carro['proprietario']['endereco']['rua'] = 'Al. SCS'

//delete carro.condutores.idade
delete carro.condutores
delete carro.imprimir
console.log(carro)
//console.log(carro.condutores.idade)
console.log(carro.condutores)