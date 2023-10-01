

const botoes = document.querySelectorAll(".botoes .botao")
const personagens = document.querySelectorAll(".personagens .personagem")
console.log(personagens)
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        if (!botao.classList.contains("selecionado")) {
            document.querySelector(".personagem.selecionado").classList.remove("selecionado")
            document.querySelector(".botoes .botao.selecionado").classList.remove("selecionado")
            personagens[indice].classList.add("selecionado")
            botao.classList.add("selecionado")
        } else {
            const imagens = document.querySelectorAll(".personagens .personagem.selecionado .imagem")
            let next = false
            console.log(imagens)
            imagens.forEach((imagem,indice) => {
                if (imagens[imagens.length-1].classList.contains("selecionado")) {
                    imagens[imagens.length-1].classList.remove("selecionado")
                    imagens[0].classList.add("selecionado")
                } else if (imagem.classList.contains("selecionado")) {
                    imagem.classList.remove("selecionado")
                    next = true
                } else if (next) {
                    imagens[indice].classList.add("selecionado")
                    next = false
                }
            })
        }
    })
})
