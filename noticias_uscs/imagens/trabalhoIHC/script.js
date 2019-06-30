for(let i = 1 ; i < 7 ; i++)   {

    const mouseOver = () => {
     document.getElementsByTagName("span")[i-1].style.display = "block";
     
    }

    const mouseOut = () => {
     document.getElementsByTagName("span")[i-1].style.display = "none"
    }

    document.getElementsByTagName("LI")[i].addEventListener("mouseover", mouseOver);
    document.getElementsByTagName("LI")[i].addEventListener("mouseout", mouseOut);

} 


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
        text: 'Bruna Beatriz - 5525522',
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
        text: 'Andre Michelli - 7025252',
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
        text: 'Enzo Não Sei - 7025252',
        imageUrl: 'imagens/enzo.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        animation: true
      })
      document.getElementById("enzo").classList.add("pular");
}

document.getElementById("enzo").addEventListener("click", mostrarCriadores4);


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
            items:2,
            nav:false
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

$(window).leng





    const sumirFrase = () =>{
        document.getElementById("frase").classList.add("frase");
        return true;
    }  
    const aparecerFrase = () =>{
        document.getElementById("frase").classList.remove("frase");   
    }

    const sumirFrase2 = () =>{
        setInterval(sumirFrase,5000);
        return true;
    }
    

    if(sumirFrase2() == true){
        setInterval(aparecerFrase,3000);
    }


 
    
   


























