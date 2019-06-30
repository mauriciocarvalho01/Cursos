//Notação literal 

const obj1 = {
}
console.log(obj1)

//A partir de Object

console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)


//Funções construtoras

function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComdesconto = () =>{
        return preco * (1- desc)
    }
}

const p1 = new Produto('Caneta',7.99, 0.15 )
const p2 = new Produto('Notbook',2998.99,0.25)

console.log(p1.getPrecoComdesconto().toFixed(2))
console.log(p2.getPrecoComdesconto().toFixed(2))

//Função Factory

function CriarFuncionario(nome,salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        calcularSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = CriarFuncionario('Mauricio', 1450, 4)
const f2 = CriarFuncionario('Marcos', 4400, 2)
console.log(f1.calcularSalario().toFixed(2))
console.log(f2.calcularSalario().toFixed(2))


//Função famosa que retorn objetos...

const fromJSON = JSON.parse('{"info": "Eu sou um JSON"}')
console.log(fromJSON.info)