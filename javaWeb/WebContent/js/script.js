

        /*FORMULARIO E INPUTS*/
    
        /*Colocar foco nos inputs*/
$(document).ready(function(){
    $('.input').focus(function(e){
        $('capacidade').attr('placeholder','Quantas pessoas na fila?');
       
    });
    $('.input').focus(function(e){
        $(this).parent().addClass('focus');
        $('input').css('font-size','15px');
       

    }).blur(function(e){
        if($(this).val() === ''){
            $('#capacidade').removeAttr('placeholder','Quantas pessoas na fila?');
            /*quando tira o foco do input, remove placeholder*/
            $(this).parent().removeClass('focus');
    
         
        }

    });
    
});



        $('#opc1').click(function(e){
            $("#fila1").toggleClass('client');
            $(".opcao2").toggleClass('sumir');
            $(".opcao3").toggleClass('sumir');
            
            
        });
        $('#opc2').click(function(e){
            $("#fila2").toggleClass('client');
            $(".opcao1").toggleClass('sumir');
            $(".opcao3").toggleClass('sumir');
        });
        $('#opc3').click(function(e){
            $("#fila3").toggleClass('client');
            $(".opcao1").toggleClass('sumir');
            $(".opcao2").toggleClass('sumir');
        });

       
          
        

        
