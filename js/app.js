let pontosCruzeiro = 0;
let pontosFlamengo = 0;

let btVitoriaCruzeiro = document.querySelector ("#vitoria-cruzeiro");
let btEmpateCruzeiro = document.querySelector ("#empate-cruzeiro");
let btDerrotaCruzeiro = document.querySelector ("#derrota-cruzeiro");

let btVitoriaFlamengo = document.querySelector ("#vitoria-flamengo");
let btEmpateFlamengo = document.querySelector ("#empate-flamengo");
let btDerrotaFlamengo = document.querySelector ("#derrota-flamengo");







btVitoriaCruzeiro.onclick = function() {
    pontosCruzeiro += CalcularPontos("vitoria");
    AtualizaTabelaPontos("cruzeiro");
};
btEmpateCruzeiro.onclick = function() {
    pontosCruzeiro += CalcularPontos("empate");
    AtualizaTabelaPontos("cruzeiro");
};
btDerrotaCruzeiro.onclick = function() {
    pontosCruzeiro += CalcularPontos("derrota");
    AtualizaTabelaPontos("cruzeiro");
};



btVitoriaFlamengo.onclick = function() {
    pontosFlamengo += CalcularPontos("vitoria");
    AtualizaTabelaPontos("flamengo");
};
btEmpateFlamengo.onclick = function() {
    pontosFlamengo += CalcularPontos("empate");
    AtualizaTabelaPontos("flamengo");
};
btDerrotaFlamengo.onclick = function() {
    pontosFlamengo += CalcularPontos("derrota");
    AtualizaTabelaPontos("flamengo");
};


function CalcularPontos(resultado){
    if(resultado == "vitoria"){
        return 3;
    }else if(resultado == "empate"){
        return 1;
    }else{
        return 0;
    }
}

function AtualizaTabelaPontos(time){
    if(time == "cruzeiro"){
        document.querySelector(".pontos-cruzeiro").innerText =
        pontosCruzeiro;
    }else if(time == "flamengo"){
        document.querySelector(".pontos-flamengo").innerText =
        pontosFlamengo;
    }
}



