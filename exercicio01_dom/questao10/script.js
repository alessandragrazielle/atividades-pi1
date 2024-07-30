document.addEventListener("DOMContentLoaded", function() {
   document.getElementById('calcular').addEventListener('click', calcular);
});

function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    // verifica qual operacao foi selecionada com checked
    var operacao = document.querySelector('input[name="operacao"]:checked');

    if (operacao) { // verifica se esta vazio 
        if (operacao.value == 'soma') {
            resultado = num1 + num2;
        }

        if (operacao.value == 'subtracao') {
            resultado = num1 - num2;
        }

        if (operacao.value == 'multiplicacao') {
            resultado = num1 * num2;
        }

        if (operacao.value == 'divisao') {
            if (num2 != 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Não é possível dividir por 0'
            }
        }

        document.getElementById('resultado').innerHTML = resultado;
    } else {
        document.getElementById('resultado').innerHTML = 'Selecione uma operação'
    }
}