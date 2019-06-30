//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'D';//Evitar fazer isso!
const avo = {
    attr1 : ['a','b']
}

const pai = {
    __proto__:avo,//linha 4
    attr2:'B',
}

const filho = {
    __proto__:pai, //linha 15
    attr3:'C'
}

console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0);
//filho tem attr1?NÃO, 
//O pai tem attr1?NÃO, 
//o avo tem attr1? Sim! 
//foi atribuido ao filho o attr1 do 'avo' linha 3



const objetivos1 = {
    serEfetivado: true,
}

const objetivo2 = {
    ganharBolsa: true,
    __proto__:objetivos1
}

const objetivo3 = {
    Dp: false,
    __proto__:objetivo2
}

const objetivoFinal = {
    ficarRico: true,
    //serEfetivado: false,
    __proto__: objetivo3
}

let x = '';
let y = '';
let z = '';
let b = '';

if( objetivoFinal.serEfetivado == true){
    x = "vou ser efetivado";
}else {
    x = "vou ser um grande programador";
}

if(objetivoFinal.ganharBolsa == true){
    b = "vou ganhar bolsa";
}

if(objetivoFinal.Dp != true){
    y = "sem dp porra";
}


if(objetivoFinal.ficarRico == true){
    z = "sou pica das galaxias";
}

console.log(`Eu ${x} e ${b} por que terminei o ano sem ${y} e assim vou ficar rico por que ${z}`);
