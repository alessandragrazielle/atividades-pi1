document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btAddTarefa').addEventListener('click', adicionar);
});

function adicionar() {
    var texto = document.getElementById('caixaTarefas').value;

    //verifica se o valor nao esta vazio
    if (texto.trim() !== '') {
        var novaTarefa = document.createElement('li') // cria uma nova tarefa (li)
        novaTarefa.textContent = texto; // atribui o texto digitado a li

        document.getElementById('listaTarefa').appendChild(novaTarefa); // 'appendChild' é utilizado para adicionar um novo nó (elemento) como um filho de um nó existente
         
        document.getElementById('caixaTarefas').value = ''; // limpa a caixa de texto após adicionar o item

        // conta o número de tarefas na lista
        var quantidade = document.getElementById('listaTarefa').getElementsByTagName('li').length;
        document.getElementById('resultado').innerText = quantidade;        
    } else {
        alert('Por favor, digite um item!')
    }
}