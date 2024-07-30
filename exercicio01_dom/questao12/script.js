document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btAdicionar').addEventListener('click', adicionar);
});

function adicionar() {
    var opcao = document.getElementById('caixaTexto').value;

    if (opcao.trim() != '') {
        var novaOpcao = document.createElement('option');
        novaOpcao.textContent = opcao;

        document.getElementById('select').appendChild(novaOpcao);

        document.getElementById('caixaTexto').value = '';
    } else {
        alert('Digite uma opção');
    }
}