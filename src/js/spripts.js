let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let modal = document.querySelector(".modal")
let informacoes = document.querySelector(".link-info")

botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted = false
}

informacoes.addEventListener("click", mostrarmodal)
modal.addEventListener("click", escondermodal)

function mostrarmodal(){
    modal.style.display = "block"
}

function escondermodal(){
    modal.style.display = "none"
}