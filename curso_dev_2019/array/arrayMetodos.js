const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa'];

pilotos.pop();//exclui da ultima
console.log(pilotos);

pilotos.shift()//exclui da primeira
console.log(pilotos)

pilotos.unshift('Senna')//adiciona na primeira
console.log(pilotos)


pilotos.push('Vestappen');
console.log(pilotos);


//splice adiciona ou remover

pilotos.splice(2, 0 , 'Bottas', 'Massa');
console.log(pilotos);

pilotos.splice(3,1);
console.log(pilotos);


//slice retorna um novo array

const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(2,4);
console.log(algunsPilotos2);




