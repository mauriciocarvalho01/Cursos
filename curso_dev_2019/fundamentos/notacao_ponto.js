
console.log(Math.ceil(6.1))//acessar atraves do pontot(.)

const Objt1 = {}

Objt1.nome = 'bola'
//any['nome'] = 'bola2'
console.log(Objt1.nome)

function Obj(nome){
    this.nome = nome// tornar visivel fora função
    this.exec = function(){
        //criar uma função em uma variavel dentro da funcao e chamar com o ponto fora
        console.log('Exec...')
    }
}

const Obj2 = new Obj('Cadeira')
const Obj3 = new Obj('Mesa')

console.log(Obj2.nome)
console.log(Obj3.nome)
Obj2.exec()//funcao foi chamanda aqui