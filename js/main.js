

function simulador (){
    
    const contPre = document.getElementById("pre-simulation");
    const contPost = document.getElementById("post-simulation");

    contPost.classList.remove('disabled');

    contPre.classList.add('disabled');

    let nombre = document.getElementById(nombre).value;
    let telefono = document.getElementById(telefono).value;
    let email = document.getElementById(email).value;
    let monto = document.getElementById(monto).value;
    let tiempo = document.getElementById(tiempo).value;


}


document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("calcular").addEventListener("click", simulador);
});