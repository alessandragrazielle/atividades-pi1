document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btAlterar').addEventListener('click', alterarTexto);
});

function alterarTexto() {
    var texto = document.getElementById('caixaTexto').value;
    document.getElementById('textoCxAlta').value = texto.toUpperCase();
}