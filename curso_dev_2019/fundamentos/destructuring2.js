//const [a] = [10]


const[n1, ,n3, ,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)


const [ , [ , nota] ]  = [ [ 3, 89 , 89 ] , [ 5, 6 , 8 ] ]
//ignora o primeiro array
//ignora o indice 0 do segundo array, e pega o indice 1

console.log(nota)