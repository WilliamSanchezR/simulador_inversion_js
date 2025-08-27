

function simulador (){
    
    const contPre = document.getElementById("pre-simulation");
    const contPost = document.getElementById("post-simulation");

    contPost.classList.remove('disabled');

    contPre.classList.add('disabled');

    // Variables que capturan los valores de los campos

    let cNombre = document.getElementById("nombre").value;
    let cTelefono = document.getElementById("telefono").value;
    let cEmail = document.getElementById("email").value;
    let cMonto = document.getElementById("monto").value;
    let cTiempo = document.getElementById("tiempo").value;

    // Constantes que capturan las etiquetas span en las que muestran los valores por eso la s de Show (mostrar)

    const sTiempo = document.getElementById("sTiempo");
    const sInteres = document.getElementById("sInteres");
    const sTotal = document.getElementById("sTotal");
    const sGanancia = document.getElementById("sGanancia");
    const sNombre = document.getElementById("sNombre");
    const sEmail = document.getElementById("sEmail");

    // variables para realizar los calculos 

    let ganancia = 0
    let total = 0

    switch (cTiempo) {

        // en este case realizaremos el calculo si el tiempo corresponde a un año
        case '1':
            ganancia = (cMonto * 0.008)*12;
            total = parseInt(ganancia) + parseInt(cMonto);
            sInteres.textContent= '0,8';
            sTiempo.textContent= '12 MESES';
            break;

        case '2':
            ganancia = (cMonto * 0.013)*24;
            total = parseInt(ganancia) + parseInt(cMonto)
            sInteres.textContent= '1,3';
            sTiempo.textContent= '24 MESES';
            break;

        case '3':
            ganancia = (cMonto * 0.017)*36;
            total = parseInt(ganancia) + parseInt(cMonto)
            sInteres.textContent= '1,7';
            sTiempo.textContent= '36 MESES';
            break;
        default:
            break;
    }
        sTotal.textContent= total;
        sGanancia.textContent= ganancia;
        sNombre.textContent= cNombre;
        sEmail.textContent= cEmail;
}


document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("calcular").addEventListener("click", simulador);
});