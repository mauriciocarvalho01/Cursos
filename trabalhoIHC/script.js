
const mostrarCriadores1 = () =>{
    Swal.fire({
        title: 'Aluno(a)',
        text: 'Mauricio C Pinheiro - 7020738',
        imageUrl: 'imagens/mauricio.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      });
      document.getElementById("mauricio").classList.add("pular");
}

document.getElementById("mauricio").addEventListener("click", mostrarCriadores1);


const mostrarCriadores2 = () =>{
    Swal.fire({
        title: 'Aluno(a)',
        text: 'Bruna Beatriz N Costa - 7109911',
        imageUrl: 'imagens/bruna.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      })
      document.getElementById("bruna").classList.add("pular");
}

document.getElementById("bruna").addEventListener("click", mostrarCriadores2);

const mostrarCriadores3 = () =>{
    Swal.fire({
        title: 'Aluno(a)',
        text: 'Andre P. Michelli - 7103344',
        imageUrl: 'imagens/ft7.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      })
      document.getElementById("andre").classList.add("pular");
}

document.getElementById("andre").addEventListener("click", mostrarCriadores3);

const mostrarCriadores4 = () =>{
    Swal.fire({
        title: 'Aluno(a)',
        text: 'Enzo A. Batrov - 799328',
        imageUrl: 'imagens/enzo.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      })
      document.getElementById("enzo").classList.add("pular");
}

document.getElementById("enzo").addEventListener("click", mostrarCriadores4);

const mostrarCriadores5 = () =>{
    Swal.fire({
        title: 'Aluno(a)',
        text: 'Allyson - 7099005',
        imageUrl: 'imagens/ft7.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      })
      document.getElementById("allyson").classList.add("pular");
}

document.getElementById("allyson").addEventListener("click", mostrarCriadores5);



const mostrarCriadores0 = () =>{
    document.getElementById("alunos").classList.toggle("aparecerAlunos");
    document.getElementById("criadores").classList.toggle("criadores");
}

document.getElementById("criadores").addEventListener("click", mostrarCriadores0);

/*carrocel baixo*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        800:{
            items:2,
            nav:true,
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})



$(function(){
$('.panel').hover(function(){
        $(this).find('.panel-footer').slideDown(250);
    },function(){
        $(this).find('.panel-footer').slideUp(250); //.fadeOut(205)
    });
})



    const sumirFrase = () =>{
        document.getElementById("frase").classList.add("frase");
        return true;
    }  
    const aparecerFrase = () =>{
        document.getElementById("frase").classList.remove("frase");   
    }

    const automatizaFrase = () =>{
        setInterval(sumirFrase,5000);
        return true;
    }
    

    if(automatizaFrase()){
        setInterval(aparecerFrase,0);
        
    }



/*bootstrap menu*/

$(function ($) {

    $(".sidebar-dropdown > a").click( q afunction() {
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
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});


   
   
});
 
    
   


























