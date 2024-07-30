document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btAumentar').addEventListener('click', aumentar);
    document.getElementById('resetar').addEventListener('click', resetar);
});

function aumentar() {
    document.body.style.fontSize = 'larger';
}

function resetar() {
    document.body.style.fontSize = 'medium';
}