document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btAddTarefa').addEventListener('click', adicionar);
});

function adicionar() {
    var texto = document.getElementById('caixaTarefas').value;

    if (texto.trim() !== '') {
        var novaTarefa = document.createElement('li') 
        novaTarefa.textContent = texto;
        
        document.getElementById('listaTarefa').appendChild(novaTarefa); // 'appendChild' é utilizado para adicionar um novo nó (elemento) como um filho de um nó existente
         
        document.getElementById('caixaTarefas').value = ''; 

        // conta o número de tarefas na lista
        var quantidade = document.getElementById('listaTarefa').getElementsByTagName('li').length;
        document.getElementById('resultado').innerText = quantidade;        
    } else {
        alert('Por favor, digite um item!')
    }
}
