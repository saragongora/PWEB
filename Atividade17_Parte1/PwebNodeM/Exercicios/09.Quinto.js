var eventos = require('events');

//atribuição da classe EventEmitter a uma variavel
var EmissorEventos = eventos.EventEmitter;

//criação de uma instância do EventEmittervariável
var ee = new EmissorEventos();

//ou criando direto sem a variavel intermidiária:
// var ee = new eventos.EventEmitter();
// mas da forma anterior é uma boa prática

// É registrado um ouvinte (listener) para o evento 'dados'.

ee.on('dados', function(fecha){
    console.log(fecha);
});

//emissão do evento a cada 500 milissegundos:
setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);