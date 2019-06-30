

/*const subs = {
    substantivos: ["dinheiro","estudo","carros","respeito"],
   
}

const palavras = {
    verbos: ["vou","estou","fui","andei","joguei","ganhar"],
    __proto__: subs
}

const carros = {
   carro: ["ferrari", "dodge", "bugatti"],
    __proto__:palavras
}

let din = '';
for(carros.substantivos in carros){
    din = carros.substantivos;
}

console.log(`Meu nome é Mauricio`);
console.log(`Eu vou ser rico, ${palavras.substantivos[1]} para ${carros.verbos[5]} muito ${palavras.substantivos[0]} e comprar ${carros.carro[0]}'s`);
*/


const carro = {
    velAtual: 0,
    velMax: 250,

    aceleraMais(vel){
        if(this.velAtual + vel <= this.velMax){
            this.velAtual += vel;
        }else{
            this.velAtual = this.velMax;
        }
    },

    status(){
        return `Você está a ${this.velAtual}km/h de ${this.velMax}`
    }

}


const ferrari = {
    modelo: 'f50',
    velMax: 324
}

const volvo = {
    modelo:'v40',
    status(){
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);



ferrari.aceleraMais(100);
volvo.aceleraMais(400);
console.log(ferrari.status());
console.log(volvo.status())
    
    



