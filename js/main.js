

function simulador (){
    
    const contPre = document.getElementById("pre-simulation");
    const contPost = document.getElementById("post-simulation");

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

    // Variables para hacer calculos 

    let ganancia = 0;
    let total = 0;

    // Agregamos condicionales para que no queden espacios vacios em el formulario de inversion

    if (cNombre =="" || cEmail == "" || cTelefono == "" || cMonto == "" || cTiempo == "") {

        alert("Llene todos los campos porfavor");
    } else {
    contPost.classList.remove('disabled');

    contPre.classList.add('disabled');
    }
    switch (cTiempo) {
        case "1":
            //EN ESTE CASE REALIZAREMOS EL CALCULO SI EL TIEMPO CORRESPONDE A 1 AÑO
            ganancia = (cMonto * 0.008) * 12;
            total = parseInt(cMonto) + parseInt(ganancia);

            sTotal.textContent = total;
            sGanancia.textContent = ganancia;

            sInteres.textContent = "0.8%";
            sTiempo.textContent = "12 MESES";

            sNombre.textContent = cNombre;
            sEmail.textContent = cEmail;

            break;

        case "2":
            //EN ESTE CASE REALIZAREMOS EL CALCULO SI EL TIEMPO CORRESPONDE A 2 AÑOS
            ganancia = (cMonto * 0.013) * 24;
            total = parseInt(cMonto) + parseInt(ganancia);

            sTotal.textContent = total;
            sGanancia.textContent = ganancia;

            sInteres.textContent = "1.3%";
            sTiempo.textContent = "24 MESES";

            sNombre.textContent = cNombre;
            sEmail.textContent = cEmail;
            break;

        case "3":
            //EN ESTE CASE REALIZAREMOS EL CALCULO SI EL TIEMPO CORRESPONDE A 3 AÑO
            ganancia = (cMonto * 0.017) * 36;
            total = parseInt(cMonto) + parseInt(ganancia);

            sTotal.textContent = total;
            sGanancia.textContent = ganancia;

            sInteres.textContent = "1.7%";
            sTiempo.textContent = "36 MESES";

            sNombre.textContent = cNombre;
            sEmail.textContent = cEmail;
            break;

        }


    }



document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("calcular").addEventListener("click", simulador);
});