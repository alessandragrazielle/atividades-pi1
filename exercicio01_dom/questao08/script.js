document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btAltoContraste').addEventListener('click', altoContraste);
    document.getElementById('resetar').addEventListener('click', resetar);
});

function altoContraste() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

function resetar() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}