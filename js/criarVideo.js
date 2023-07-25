import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";

    } catch(e) {
        const mensagem = document.querySelector("[data-formulario]");
        mensagem.innerHTML = `<h2 class="formulario__titulo">Erro ao enviar vídeo. Tente Novamente. </h2> `
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));