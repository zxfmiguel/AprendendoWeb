const imagens = [
    "img/fantasia-bleach.webp",
    "img/roupa-brasileira.webp",
    "img/fantasia-vampiro.webp",
    "img/coleira-akatsuki.webp",
    "img/mascara-cachorro-ds.webp",
    "img/cachecol.webp",
    "img/fone.webp",
    "img/colar-de-perolas.webp",
    "img/bandana-vermelha.webp",
    "img/cama.webp",
    "img/andador.webp",
    "img/kit-mordedores.webp"
];

let indice = 0;

const imagem = document.getElementById("imagemCarrossel");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");


if (imagem && anterior && proximo) {

    proximo.addEventListener("click", function () {

        indice++;

        if (indice >= imagens.length) {
            indice = 0;
        }

        imagem.src = imagens[indice];

    });


    anterior.addEventListener("click", function () {

        indice--;

        if (indice < 0) {
            indice = imagens.length - 1;
        }

        imagem.src = imagens[indice];

    });


    setInterval(function () {

        indice++;

        if (indice >= imagens.length) {
            indice = 0;
        }

        imagem.src = imagens[indice];

    }, 1500);

}


const botaoTema = document.getElementById("dark-mode");

if (botaoTema) {

    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("dark");

    });

}


const botaoAlerta = document.getElementById("botaoAlerta");

if (botaoAlerta) {

    botaoAlerta.addEventListener("click", function (event) {

        event.preventDefault();

        alert("Você está comprando a Fantasia Bleach!");

        setTimeout(function () {
            botaoAlerta.form.submit();
        }, 1000);

    });

}