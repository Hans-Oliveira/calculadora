function insert(num) {
    let numero = document.calcular.display.value;
    document.calcular.display.value = numero + num;
}
function reset () {
    document.calcular.display.value = "";
}
function del () {
    let resultado = document.calcular.display.value;
    document.calcular.display.value = resultado.substring(0, resultado.length -1);
}
function equal () {
    let resultado = document.calcular.display.value;
    if(resultado){
        document.calcular.display.value = eval (resultado)
    }
    else {
        document.calcular.display.value = "Error 404!"
    }
}
