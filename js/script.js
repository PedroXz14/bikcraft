const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  const href = link.href;
  const url = location.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
});

const parametros = new URLSearchParams(location.search);

parametros.forEach((parametro) => {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
});

const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", (ativarPergunta) => {
    const pergunta = ativarPergunta.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
    console.log(pergunta);
  });
});

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((imagem) => {
  imagem.addEventListener("click", (img) => {
    const imagemClicada = img.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galeriaContainer.prepend(imagemClicada);
    }
  });
});

if (window.SimpleAnime) {
  new SimpleAnime();
}
