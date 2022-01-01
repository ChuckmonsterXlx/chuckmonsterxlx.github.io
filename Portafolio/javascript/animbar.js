let anim = document.querySelector(".bar2");
let anim2 = document.querySelector(".bar3");

function ocultarMostrar(){
    let scrollTop = document.documentElement.scrollTop;
    let altura = anim.offsetTop;

    console.log(scrollTop);

    if(scrollTop > 345){
        anim.style.display = "block";
        anim.style.position = "fixed";
        anim.style.top = "0px";
        anim.style.width = "99%";

        anim2.style.display = "block";
        anim2.style.position = "fixed";
        anim2.style.top = "0px";
        anim2.style.width = "auto";
    }

    if(scrollTop <= 345){
        anim.style.display = "none";
        anim2.style.display = "none";
    }
    

}

window.addEventListener('scroll', ocultarMostrar);