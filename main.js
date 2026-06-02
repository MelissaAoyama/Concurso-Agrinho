document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // INTERATIVIDADE: Cards de Pilares Sustentáveis
    // ==========================================
    const cards = document.querySelectorAll('.card');
    const painelDetalhes = document.getElementById('painel-detalhes');
    const textoDetalhe = document.getElementById('texto-detalhe');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Captura o dado contido no atributo customizado data-info
            const informacao = card.getAttribute('data-info');
            
            // Injeta o texto dinamicamente no painel
            textoDetalhe.textContent = informacao;
            
            // Remove a classe hidden para exibir o painel com animação
            painelDetalhes.classList.remove('hidden');
            
            // Feedback visual suave de rolagem até o painel
            painelDetalhes.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });

    // ==========================================
    // LÓGICA DE PROGRAMAÇÃO: Simulador de Impacto
    // =
