class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Mauricio")
p1.falar()

const criarPessoa = nome => {
    return  {
        falar:() => console.log(`Olá meu nome é ${nome}`)
    }
}

const p2 =  criarPessoa("Mauricio")
p2.falar()