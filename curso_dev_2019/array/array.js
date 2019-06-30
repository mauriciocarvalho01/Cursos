 /*console.log(typeof Array, typeof new Array, typeof []);


let aprovados = new Array('Bia', 'julia', 'João','Paulo')
console.log(aprovados)

aprovados = ['Bia', 'julia', 'João','Paulo']
console.log(aprovados[0]);

aprovados[4] = 'Jose';

console.log(aprovados);
aprovados.push('Carlos');
console.log(aprovados);
console.log(aprovados.length);

aprovados[9] = 'Sergio';
console.log(aprovados[8] == undefined);
console.log(aprovados[7] == undefined);
console.log(aprovados[6] == undefined);
console.log(aprovados[5] == undefined);
console.log(aprovados[5])
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1]) 
console.log(aprovados[2])*/


let aprovados = ['Bia', 'julia', 'João','Paulo'];
aprovados.splice(1,2, 'Elemento1', 'Elemento2');
aprovados.sort();
console.log(aprovados)
aprovados.pop()
aprovados.pop()
console.log(aprovados)