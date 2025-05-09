const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

const perguntas = document.querySelectorAll(".perguntas button");

function exibirPergunta(event) {
  const pergunta = event.target;
  const controls = pergunta.getAttribute("aria-controls");
  const reposta = document.getElementById(controls);

  reposta.classList.toggle("ativa");

  const ativa = reposta.classList.contains("ativa");
  reposta.setAttribute("aria-expanded", ativa);
}

function perguntaEventos(pergunta) {
  pergunta.addEventListener("click", exibirPergunta);
}

perguntas.forEach(perguntaEventos);

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const imagem = event.target;
  const media = matchMedia("(width > 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(imagem);
  }
}

function galeriaEventos(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(galeriaEventos);
