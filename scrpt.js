let $ancho= window.screen.width;
console.log($ancho);

const $menu = document.querySelector("#icono-menu");

const $lista= document.querySelector('#optiones');

$lista.style.transition="all .5s ease";

if($ancho<800){
    $lista.style.transform= "translate(110%)";
    // se remove la imagen para posicionar el slider
    let removeImage = document.querySelector("#mainImage");
    removeImage.remove();

    let Slider= document.querySelector("#sliderCarousel");

    let img_slider=["foto-tlf/alistas.png","foto-tlf/alitas1.png","foto-tlf/camaroncitos.png","foto-tlf/pechuga_rellenas.png","foto-tlf/pollo.png"]
    setInterval(() => {
        let i=0;
        
        Slider.src=img_slider[3];

        i++;
        
        if (i==img_slider.length){i=0;}
    }, 2000);
}

$menu.addEventListener('click', () =>{

    
    if ($lista.classList.toggle("visibility")==true){

        $lista.style.visibility= "visible";
        $lista.style.transform= "translate(0%)";
        console.log("visible");
        
    }else{
        
        $lista.style.transform= "translate(110%)";
        $lista.style.visibility= "hidden";

    }
});