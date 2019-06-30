/*MOSTRAR CRIADORES*/

const mostrarCriadores1 = () =>{
    Swal.fire({
        title: 'Aluno(a)',
        text: 'Mauricio C Pinheiro - 7020738',
        imageUrl: '../imagens/mauricio.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      });
      document.getElementById("mauricio").classList.add("pular");
}

const mostrarCriadores2 = () =>{
    Swal.fire({
        title: 'Aluno(a)',
        text: 'Bruna Beatriz N Costa - 7109911',
        imageUrl: '../imagens/bruna.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      })
      document.getElementById("bruna").classList.add("pular");
}
const mostrarCriadores3 = () =>{
    Swal.fire({
        title: 'Aluno(a)',
        text: 'Andre P. Michelli - 7103344',
        imageUrl: '../imagens/andre.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      })
      document.getElementById("andre").classList.add("pular");
}



const mostrarCriadores4 = () =>{
    Swal.fire({
        title: 'Aluno(a)',
        text: 'Enzo A. Batrov - 799328',
        imageUrl: '../imagens/enzo.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      })
      document.getElementById("enzo").classList.add("pular");
}



const mostrarCriadores5 = () =>{
    Swal.fire({
        title: 'Aluno(a)',
        text: 'Allyson - 7099005',
        imageUrl: '../imagens/ft7.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      })
      document.getElementById("allyson").classList.add("pular");
}





const mostrarCriadores0 = () =>{
    document.getElementById("alunos").classList.toggle("aparecerAlunos");
    document.getElementById("criadores").classList.toggle("criadores");
}



window.onload = function(){
    document.getElementById("criadores").addEventListener("click", mostrarCriadores0);
    document.getElementById("mauricio").addEventListener("click", mostrarCriadores1); 
    document.getElementById("bruna").addEventListener("click", mostrarCriadores2);
    document.getElementById("andre").addEventListener("click", mostrarCriadores3);
    document.getElementById("enzo").addEventListener("click", mostrarCriadores4);
    document.getElementById("allyson").addEventListener("click", mostrarCriadores5);
    

}


/*FIM MOSTRAR CRIADORES*/


/*CLOSE MENU / SHOW MENU*/

$(document).ready(function(){
 
  $(".locali").css("margin-left","90px");
  $(".page-wrapper").removeClass("toggled");
  $(function(){
    $(".container-fluid").click(function(){
      $(".page-wrapper").removeClass("toggled");
    });
  })
  $(function ($) {
    const tamanho = $(window).width();
        $(".sidebar-dropdown > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if (
        $(this)
          .parent()
          .hasClass("active")
        ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
        } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
        }
        });
        
        $("#close-sidebar").click(function() {
          $(".locali").css("margin-left","90px");
          $(".page-wrapper").removeClass("toggled");
        if(tamanho < 768){
          $("#logo").removeClass("iconUSCS");
          $("#logo").addClass("iconeUSCS");  
        }else{
          $("#formbuscar").toggle(100);
        }
          
    
        });
        $("#show-sidebar").click(function() {
          $(".locali").css("margin-left","250px");
        $(".page-wrapper").addClass("toggled");
        if(tamanho < 768){
          $("#logo").removeClass("iconeUSCS");
          $("#logo").addClass("iconUSCS");
          
        }else{
          $("#formbuscar").toggle(100);
        }
        });
        });
        
        $(function(){
        $('.panel').hover(function(){
                $(this).find('.panel-footer').slideDown(250);
            },function(){
                $(this).find('.panel-footer').slideUp(250); //.fadeOut(205)
            });
        })

});



    /* FIM CLOSE MENU / SHOW MENU*/


    /*USCSTUBE*/

    function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 10,
            order: "viewCount",
            publishedAfter: "2005-01-01T00:00:00Z"
           
       }); 
       // execute the request
      request.execute(function(response) {
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("../html/item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });
    
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
    
}

function init() {
    gapi.client.setApiKey("AIzaSyC6N2U-23MGz6VXqBOyUGHD-bJfHXd5JhU");
    gapi.client.load("youtube", "v3", function() {
    });
}




    /*GAME*/

function MakeArray(n) {
  this.length = n;
  for (var i = 1; i <=n; i++) {
    this[i] = 0;
  }
}

//inciar dias de aniversario
days = new MakeArray(7);
days[0] = "Domingo"
days[1] = "Segunda"
days[2] = "Terça"
days[3] = "Quarta"
days[4] = "Quinta"
days[5] = "Sexta"
days[6] = "Sábado"


months = new MakeArray(12);
months[1] = "Janeiro" 
months[2] = "Fevereiro" 
months[3] = "Março" 
months[4] = "Abril" 
months[5] = "Maio" 
months[6] = "Junho" 
months[7] = "Julho" 
months[8] = "Agosto"
months[9] = "Setembro" 
months[10] = "Outubro"
months[11] = "Novembro"
months[12] = "Dezembro"

function compute(form) {
  var val1 = parseInt(form.day.value, 10)
  if ((val1 < 0) || (val1 > 31)) {
    Swal.fire({
      title: 'Não existe esse dia no mês!',
      text: 'Coloca um dia válido ai parça.',
      imageUrl: '../imagens/duvida.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      animation: true
    })
  }
  var val2 = parseInt(form.month.value, 10)
  if ((val2 < 0) || (val2 > 12)) {
    Swal.fire({
      title: 'Não existe esse mês no ano!',
      text: 'Coloca um mês válido ai parça.',
      imageUrl: '../imagens/duvida.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      animation: true
    })
  }  
  var val2x = parseInt(form.month.value, 10)
  var val3 = parseInt(form.year.value, 10)
  if (val3 < 1900) {
    Swal.fire({
      title: 'Caraca um ansião por aqui!',
      text: 'Coloca um ano válido ai parça.',
      imageUrl: '../imagens/velho.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      animation: true
    })
    let x = form.year.value = "?"
  }

    if(val3 > 2019){
      Swal.fire({
        title: 'Temos aqui um viajante do tempo!',
        text: 'Coloca um ano válido ai parça, ou volta para o futuro.',
        imageUrl: '../imagens/viajante.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      })
      let x = form.year.value = "?"
    }


  if (val2 == 1) {
     val2x = 13;
     val3 = val3-1
  }
  if (val2 == 2) {
     val2x = 14;
     val3 = val3-1
  }
  var val4 = parseInt(((val2x+1)*3)/5, 10)
  var val5 = parseInt(val3/4, 10)
  var val6 = parseInt(val3/100, 10)
  var val7 = parseInt(val3/400, 10)
  var val8 = val1+(val2x*2)+val4+val3+val5-val6+val7+2
  var val9 = parseInt(val8/7, 10)
  var val0 = val8-(val9*7)
  form.result1.value =form.day.value +" "+ months[val2]+", "+form.year.value
  form.result2.value = days[val0]
}   

    
window.onload = function(){
  document.getElementById("novo").addEventListener("click", clicar1);
  document.getElementById("run").addEventListener("click", clicar2);
}

const clicar1 = () =>{
  document.getElementById("novo").classList.add("pular");
 
}
const clicar2 = () =>{
document.getElementById("run").classList.add("pular");
}

