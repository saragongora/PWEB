//Função para imprimir a primeira parte
function Parte1(){
    for(var i=1; i<=10; i++){
        console.log('Primeira Parte: ' + i);
    }
}

setTimeout(Parte1, 2000); //para atrasar
const fs = require('fs');
fs.readFile('cidades.txt', (err, data) => {
    if (err) throw err;
    const registros = data.toString().split('\n');
    registros.forEach((registro, index) => {
        console.log("Segunda Parte: " + registro);
    });
});