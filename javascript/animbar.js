let bar = document.querySelector(".bar");
//let barnone = document.querySelector;
let anim = document.querySelector(".bar2");
//let anim2 = document.querySelector(".bar3");

/*var mediaqueryList = window.matchMedia("(max-width: 550px)");
mediaqueryList.addListener( function(EventoMediaQueryList) {
    console.log('Ejecutado el listener', EventoMediaQueryList);

    //bar = document.querySelector(".bar");

    barnone = document.querySelector(".bar2");

    anim = document.querySelector(".barmobile");
    //anim2 = document.querySelector(".bar3");
    
});*/

/*var mediaqueryList2 = window.matchMedia("(min-width: 550px)");
mediaqueryList2.addListener( function(EventoMediaQueryList) {
    console.log('Ejecutado el listener', EventoMediaQueryList);

    //bar = document.querySelector(".bar");

    barnone = document.querySelector(".barmobile");
  
    anim = document.querySelector(".bar2");
    //anim2 = document.querySelector(".bar3"); 

    
});*/
// function responsiveWidth(){
//     if (window.matchMedia("(min-width: 550px)").matches) {
//         barnone = document.querySelector(".barmobile");
      
//         anim = document.querySelector(".bar2");
//         console.log("mas de 550px");
//     } else {
//         barnone = document.querySelector(".bar2");
    
//         anim = document.querySelector(".barmobile");
//         console.log("menos de 550px");
//     }
// }


function ocultarMostrar(){
    let scrollTop = document.documentElement.scrollTop;
    let altura = bar.offsetTop;

    console.log(scrollTop);
    console.log(altura);

    //barnone.style.display = "none";

    if(scrollTop > altura){
        anim.style.display = "block";
        anim.style.position = "fixed";
        anim.style.top = "0px";
        anim.style.width = "99%";

        
        //barnone.style.display = "none";

        //anim2.style.display = "block";
        //anim2.style.position = "fixed";
        //anim2.style.top = "0px";
        //anim2.style.width = "auto";
    }

    if(scrollTop <= altura){
        anim.style.display = "none";

        //barnone.style.display = "none";

        //anim2.style.display = "none";
    }

    
	
 
    //console.log(altura);
    

}

//window.addEventListener('resize', responsiveWidth);
window.addEventListener('scroll', ocultarMostrar);