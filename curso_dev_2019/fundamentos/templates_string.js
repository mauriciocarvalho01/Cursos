
const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"
const template = `
    Olá 
    ${nome}!`//SIMBOLO DA CRASE `` PARA FUNCIONAR O TEMPLATE STRING

console.log(concatenacao,template)

//expressões...

console.log(`1 + 1 = ${1 + 1}`) //Só interpreta dentro do '${...}'

const up = texto => texto.toUpperCase();
//função =  parâmetro = parâmetro.tranformaemmaiuscula() 
console.log(typeof up)

console.log(`Ei...${up('cuidado')}!`)
                 //template string

