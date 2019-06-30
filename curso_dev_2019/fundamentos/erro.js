
function tratarErro(erro){
  //throw new Error('Ocorreu um erro')
  //throw 10
  //throw true
  //throw 'mensagem'

  throw{
      nome: erro.name, 
      msg: erro.message,
      date: new Date
  }
}
function imprimirNomegritando(obj){
//função para imprimir nome com um objeto como parametro
    try{
        console.log(obj.name.toUpperCase() + '!!!')//tentativa 'try' de executar o código
    } catch(e){//
        tratarErro(e) // se Houver erro pegar 'catch' a função tratarErro(e)
    } finally{//finalmente
        console.log('Final')// mesmo com sucesso no 'try' é executado
    }
  
}

const obj = {name:'Roberto'} // objeto
imprimirNomegritando(obj) //função com o objeto