document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btAlterar").addEventListener("click", alterarTexto);
    document.getElementById("btLimpar").addEventListener("click", limparTexto);
});

function alterarTexto() {
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.textContent = "O texto deste parágrafo foi alterado!";
}

function limparTexto() {
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.textContent = ' ';
}