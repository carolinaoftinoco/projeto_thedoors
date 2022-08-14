btnAvancar = document.getElementById("btn-avancar");

discos = document.querySelectorAll("disco");

discoAtual = 0;

function esconderDiscoSelecionado(){
const discoSelecionado = document.querySelector(".selecionado");

discoSelecionado.classList.remove("selecionado");
}

function mostrarDisco(indiceDisco){

discos[indiceDisco].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function (){

if(discoAtual === discos.length - 1) return; 

esconderDiscoSelecionado();

discoAtual++;

mostrarDisco(discoAtual);

});

btnAvancar = document.getElementById("btn-avancar");

btnVoltar = document.getElementById("btn-voltar");

discos = document.querySelectorAll(".disco");

discoAtual = 0;

btnVoltar.addEventListener("click", function (){

if(discoAtual === 0) return;

esconderDiscoSelecionado();

discoAtual--;

mostrarDisco(discoAtual);

});