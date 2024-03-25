function operacoes() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, digite números válidos.");
        return;
    }

    var soma = num1 + num2;
    var sub = num1 - num2;
    var prod = num1 * num2;
    var div = num1/num2;
    var resto = num1 % num2;

    alert(num1 + " + " + num2 + " = " + soma + "\n" + num1 + " - " + num2 + " = " + sub + "\n" + num1 + " * " + num2 + " = " + prod + "\n" + num1 + " / " + num2 + " = " + div + "\n" + num1 + " % " + num2 + " = " + resto);
}

document.getElementById("botao").addEventListener("click", operacoes);
