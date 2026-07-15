let numero = 100;
let resultado = "";
while (numero >= 1) {
    resultado += numero + "<br>";
    numero--;
}
document.getElementById("resultado").innerHTML = resultado;
