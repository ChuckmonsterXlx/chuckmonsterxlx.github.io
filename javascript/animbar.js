let bar = document.querySelector(".bar");

let anim = document.querySelector(".bar2");

let x = 339;

function ocultarMostrar(){
    let scrollTop = document.documentElement.scrollTop;
    let altura = x;

    console.log(scrollTop);
    console.log(altura);

    if(scrollTop > altura){
        bar.style.position = "fixed";
        bar.style.top = "0px";
    }

    if(scrollTop <= altura){
        bar.style.position = "";
        bar.style.top = x + "px";
    }

    //console.log(altura);
    
}

window.addEventListener('scroll', ocultarMostrar);