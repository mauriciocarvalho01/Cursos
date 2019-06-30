const pessoa = {
    name: 'Mauricio',
    age: 28,
    weight: 79,
}

console.log(Object.keys(pessoa));//Valor da chave
console.log(Object.values(pessoa));//Valores
console.log(Object.entries(pessoa));//array com chave e valor

Object.defineProperty(pessoa, 'dataNascimento',{//define as propriedades
    enumerable:true,//enumera e aparece no array
    writable:false,//não pode modificar 
    value:'22/03/1991'//valor da chave 'dataNascimento' linha 11
});

console.log(Object.keys(pessoa));

console.log('-----------------------------');

//Object.assign(ECMAscript 2015)

const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
const obj = Object.assign(dest,o1,o2);//coloca varios objetos me um só, sobscrevendo as chaves e valores

Object.freeze(obj);//congela o objeto
obj.c = 20;
console.log(Object.keys(obj));
console.log(Object.values(obj));