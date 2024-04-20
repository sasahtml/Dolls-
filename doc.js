document.addEventListener("DOMContentLoaded", function() {
    const bonecas = document.querySelectorAll(".bonecaselecionada");

    bonecas.forEach(boneca => {
        boneca.addEventListener("click", function() {
            // Verifica se a nova foto está visível
            const novaFoto = boneca.querySelector(".fotojpg");
            const estaVisivel = novaFoto.classList.contains("mostrar");

            // Oculta todas as novas fotos e descrições de bonecas
            const novasFotos = document.querySelectorAll(".fotojpg");
            const nomesBonecas = document.querySelectorAll(".nomeboneca");
            const descrBonecas = document.querySelectorAll(".descrBoneca");
            novasFotos.forEach(foto => {
                foto.classList.remove("mostrar");
            });
            nomesBonecas.forEach(nomeBoneca => {
                nomeBoneca.classList.remove("mostrar");
            });
            descrBonecas.forEach(descrBoneca => {
                descrBoneca.classList.remove("mostrar");
            });

            // Se a nova foto já estiver visível, apenas saia da função
            if (estaVisivel) {
                return;
            }

            // Exibe a nova foto e descrição da boneca clicada
            novaFoto.classList.add("mostrar");
            const nomeBoneca = boneca.querySelector(".nomeboneca");
            const descrBoneca = boneca.querySelector(".descrBoneca");
            nomeBoneca.classList.add("mostrar");
            descrBoneca.classList.add("mostrar");
        });
    });
});
