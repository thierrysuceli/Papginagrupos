// Função para gerar número aleatório entre min e max (inclusive)
function getRandomVagas(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para atualizar o número de vagas
function updateVagas() {
    const vagasElement = document.getElementById('vagas');
    const numeroVagas = getRandomVagas(13, 19);
    vagasElement.textContent = `${numeroVagas} VAGAS`;
}

// Atualiza as vagas quando a página carrega
updateVagas();

// Atualiza as vagas a cada 5 segundos para criar senso de urgência
setInterval(updateVagas, 5000);

// Adiciona animação suave ao botão
document.querySelector('.btn-enter').addEventListener('click', function(e) {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
});
