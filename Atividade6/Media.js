function calcularMedia() {
    var nomeAluno = prompt("Digite o nome do aluno:");
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
    var nota3 = parseFloat(prompt("Digite a terceira nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1<0 || nota1>10||nota2<0 || nota2>10 || nota3<0 || nota3>10){
        alert("Por favor, digite notas válidas.");
        return;
    }

    var media = (nota1 + nota2 + nota3) / 3;

    alert("Aluno: " + nomeAluno + "\nMédia: " + media.toFixed(2));
}

document.getElementById("botao").addEventListener("click", calcularMedia);