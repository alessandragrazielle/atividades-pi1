document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btAdicionar').addEventListener('click', adicionar);
});

function adicionar() {
    var item = document.getElementById('caixaItem').value;

    if (item.trim() != '') {
        var novoItem = document.createElement('li');
        novoItem.textContent = item;

        document.getElementById('lista').appendChild(novoItem);

        document.getElementById('caixaItem').value = '';
    } else {
        alert('Digite um item');
    }
}