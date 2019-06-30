    //se não tiver definida dentro do objeto na linha 7, faça com esses valores 
    //min = 0, max = 1000
function rand({min = 0, max = 1000}){
    //O destructuring como parâmetro
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {min: 40, max: 50}//objeto
console.log(rand(obj))
console.log(rand({min: 955}))//usar o valor padrão de max =  1000 na linha 3
console.log(rand())