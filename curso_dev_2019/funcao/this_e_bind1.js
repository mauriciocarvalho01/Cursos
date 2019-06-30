const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
    
}

pessoa.falar()
const falar = pessoa.falar
falar()//Conflito entre paradgmas entre funcional e Orientação Objeto
//O this não aponta mais para o objeto pessoa

//'pessoa.falar' é o objeto pessoa e 'falar' é a funcao falar dentro do objeto
const falarDepessoa = pessoa.falar.bind(pessoa)//Objeto pessoa da linha 1
// O método bind() faz o  'this' voltar a acessar o objeto pessoa
falarDepessoa() 

