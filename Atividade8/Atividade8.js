const dadosPesquisa = [];

document.getElementById('formPesquisa').addEventListener('submit', function (event) {
    event.preventDefault();

    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const opiniao = parseInt(document.getElementById('opiniao').value);

    adicionarDados(idade, sexo, opiniao);
    exibirResultados();

    document.getElementById('formPesquisa').reset();
});

function adicionarDados(idade, sexo, opiniao) {
    dadosPesquisa.push({ idade, sexo, opiniao });
}

function calcularMediaIdade() {
    const totalIdade = dadosPesquisa.reduce((acc, curr) => acc + curr.idade, 0);
    return totalIdade / dadosPesquisa.length || 0;
}

function encontrarIdadeMaisVelha() {
    return Math.max(...dadosPesquisa.map(item => item.idade), 0);
}

function encontrarIdadeMaisNova() {
    return Math.min(...dadosPesquisa.map(item => item.idade), 0);
}

function contarPessoasPessimo() {
    return dadosPesquisa.filter(item => item.opiniao === 1).length;
}

function calcularPorcentagemOtimoBom() {
    const totalOtimoBom = dadosPesquisa.filter(item => item.opiniao >= 3).length;
    return ((totalOtimoBom / dadosPesquisa.length) * 100).toFixed(2) || 0;
}

function contarGenero() {
    const numMulheres = dadosPesquisa.filter(item => item.sexo === 'F').length;
    const numHomens = dadosPesquisa.filter(item => item.sexo === 'M').length;
    return { numMulheres, numHomens };
}

function exibirResultados() {
    document.getElementById('mediaIdade').textContent = calcularMediaIdade();
    document.getElementById('idadeMaisVelha').textContent = encontrarIdadeMaisVelha();
    document.getElementById('idadeMaisNova').textContent = encontrarIdadeMaisNova();
    document.getElementById('qtdPessimo').textContent = contarPessoasPessimo();
    document.getElementById('porcentagemOtimoBom').textContent = calcularPorcentagemOtimoBom() + '%';
    
    const genero = contarGenero();
    document.getElementById('numMulheres').textContent = genero.numMulheres;
    document.getElementById('numHomens').textContent = genero.numHomens;
}

function abrirPopUp() {
    const mediaIdade = document.getElementById('mediaIdade').textContent;
    const idadeMaisVelha = document.getElementById('idadeMaisVelha').textContent;
    const idadeMaisNova = document.getElementById('idadeMaisNova').textContent;
    const qtdPessimo = document.getElementById('qtdPessimo').textContent;
    const porcentagemOtimoBom = document.getElementById('porcentagemOtimoBom').textContent;
    const numMulheres = document.getElementById('numMulheres').textContent;
    const numHomens = document.getElementById('numHomens').textContent;

    const mensagem =
        `Média de Idade: ${mediaIdade}\n` +
        `Idade da Pessoa Mais Velha: ${idadeMaisVelha}\n` +
        `Idade da Pessoa Mais Nova: ${idadeMaisNova}\n` +
        `Quantidade de Pessoas que Responderam Péssimo: ${qtdPessimo}\n` +
        `Porcentagem de Pessoas que Responderam Ótimo ou Bom: ${porcentagemOtimoBom}%\n` +
        `Número de Mulheres: ${numMulheres}\n` +
        `Número de Homens: ${numHomens}`;

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = mensagem;
    document.body.appendChild(popup);
}
