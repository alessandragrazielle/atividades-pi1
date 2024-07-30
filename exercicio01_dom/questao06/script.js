document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btSubitulo').addEventListener('click', alterarTitulo);
    document.getElementById('btParagrafo').addEventListener('click', alterarParagrafo);
});

function alterarParagrafo() {
    document.getElementById('paragrafo').style.backgroundColor = '#a8dadc';
}

function alterarTitulo() {
    var subtitulos = document.getElementsByTagName('h2')
    for (var i = 0; i < subtitulos.length; i++) {
        subtitulos[i].style.color = '#1d3557';
    }
}