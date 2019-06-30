 function rand([min = 0, max = 1000]){

    if(min > max) [min, max] = [max, min]// se min maior que max [destructuring] =  [max , min]
    const valor =  Math.random() * (max - min) + min

    return Math.floor(valor)
 }

 console.log(rand([50,40])) //passando array com max > min caiu no if na linha 3
 console.log(rand([635])) //passando array com somente indice 0
 console.log(rand([ , 10])) //passando array com somente indice 1
 console.log(rand([]))//passando array vazio
 //console.log(rand())  vai destruturar algo que não existe---- saida Undefined


  