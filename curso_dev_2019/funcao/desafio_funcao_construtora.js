function Pessoa(nome){
    //this.nome = nome
    //sem acesso a variavel nome na linha 9
    this.falar = () => console.log(`Olá meu nome é ${/*this.*/nome}`)
}

const falei = new Pessoa("Mauricio")
falei.falar()
console.log(falei.nome)