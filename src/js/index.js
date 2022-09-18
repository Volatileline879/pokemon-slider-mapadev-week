//Fake data base
var listaNomes = [
	"Pikachu",
	"Charizard",
	"Mewtwo",
];

var listaHp = [
	"HP 300",
	"HP 800",
	"HP 1200",
];

var listaImagems = [
	"src/imagens/pikachu.png",
	"src/imagens/charizard.png",
	"src/imagens/mewtwo.png",
];

var listaDescricao = [
	"Pikachu é um tipo de Pokémon elétrico: os bolsos em suas bochechas, identificado por discos vermelhos que decoram, são capazes de gerar choques elétricos de intensidade variável, chegando até o nível de poder de um raio. Eles também o usam para se defender.",
	"Charizard é um Pokémon dracônico e bípede . É principalmente laranja com uma parte inferior creme do peito até a ponta da cauda. Tem um pescoço longo, pequenos olhos azuis, narinas ligeiramente levantadas e duas estruturas semelhantes a chifres saindo da parte de trás de sua cabeça retangular.",
	"Mewtwo é uma criatura com uma postura humanóide, mas tem algumas características felinas. O corpo de Mewtwo é cinzento-roxo e uma cauda longa totalmente da cor roxa. Mewtwo tem três dígitos circulares em cada apêndice.",
];
//End of fake data base



criarCartao();

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0; 

function esconderCartaoSelecionado(){
  const cartaoSelecionado = document.querySelector('.selecionado');
  cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
  cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function (){
  if (cartaoAtual === cartoes.length - 1) cartaoAtual = -1;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function (){
  if (cartaoAtual === 0) cartaoAtual = cartoes.length;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

function criarCartao() {
	const quantiaDeCartoes = listaNomes.length
	const elementoLugarCartao = document.getElementById('lista-pokemons');
	for (var i = 0; i < quantiaDeCartoes; i++) {
		var numeroCartao = i + 1;
		var elementoCartao =
			'<li class=cartao id=cartao-'+numeroCartao+'>' +
				'<div class=informacoes>' +
					'<h2 class=nome>' + listaNomes[i] + '</h2>' +
					'<p class=vida>' + listaHp[i] + '</p>' +
				'</div>' +
				'<div class=container-imagem>' +
					'<img class=imagem-pokemon src= ' + listaImagems[i] + ' alt= ' + listaNomes[i] + ' />' +
				'</div>' +
				'<div class=descricao>' +
					'<h3 class=titulo>Descrição</h3>' +
					'<p class=texto>' + listaDescricao[i] + '</p>' +
				'</div>' +
			'</li>';
		
		elementoLugarCartao.innerHTML = elementoLugarCartao.innerHTML + elementoCartao;

		var elementoLista = document.getElementById('cartao-' + numeroCartao);
		elementoLista.classList.add('fundo-' + numeroCartao);	
		
		if (i == 0) {
			elementoLista.classList.add('selecionado');
		}
	}
}






