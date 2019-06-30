 const  subirDescricaoItens = () => {
            //let letras = document.querySelector('valorInicial');
          document.getElementById('inicial').classList.add('focus');
          document.getElementById('vmes').classList.add('focus');
        document.getElementById('mes').classList.add('focus');
          document.getElementById('tsjuros').classList.add('focus');  
          document.getElementById('tcjuros').classList.add('focus');
          document.getElementById('jmes').classList.add('focus'); 
          document.getElementById('juros').classList.add('focus');   
   }
     
  const  mostraResultado = () => {
            document.getElementById('btn').classList.add('cresceu');
            document.getElementById('result').classList.add('mostraResultado');
            document.getElementById('btnn').classList.add('btn');
            /*document.getElementById('resultado').classList.add('resultado');*/
            document.getElementById('form').style.display = 'none';
            document.getElementById('form').style.transition = '.5';       
  }

  const escondeResultado = () => {
            document.getElementById('result').classList.remove('mostraResultado');
            document.getElementById('btn').classList.remove('cresceu');
            document.getElementById('form').style.display = 'block';
            document.getElementById('form').style.transition = '.5';
  }

  
 





  /*const escondeOpc2 = () => {
    document.getElementById('form').style.transition = '.9';
    document.getElementById('inicial').classList.add('focus');
    document.getElementById('opc2').style.display = 'none';
    document.getElementById('opc1').style.paddingBottom = '30px';
    document.getElementsByClassName('jurosSimples')[0].style.color = '#03a9f4';
    document.getElementsByClassName('jusmes')[0].style.display= 'none';
  }*/
  /*const escondeOpc1 = () => {
    document.getElementById('form').style.transition = '.9';
    document.getElementById('inicial').classList.add('focus');
     document.getElementById('opc1').style.display = 'none';
  

  }*/

  
 

 

  


        
        
    
      