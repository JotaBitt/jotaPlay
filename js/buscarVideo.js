import { conectaApi } from "./conectaApi.js";
import montaCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        montaCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

        if (busca.length == 0) {
            lista.innerHTML = `<h2 class="mensagem__titulo"> Não existem vídeos com esse título! </h2>`
        }
}

const botaoPesquisa = document.querySelector("[data-pesquisa-botao]");
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));