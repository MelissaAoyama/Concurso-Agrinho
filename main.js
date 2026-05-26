function mostrarMensagem(){
    alert("O futuro do agro depende do equilíbrio entre tecnologia e preservação ambiental!");
}

let numero = document.getElementById("numero");
let contador = 0;

let intervalo = setInterval(() => {

    contador++;

    numero.innerHTML = contador + "%";

    if(contador >= 100){
        clearInterval(intervalo);
    }

}, 40);