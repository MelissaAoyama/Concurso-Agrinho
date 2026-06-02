// ==========================================
    // LÓGICA DE PROGRAMAÇÃO: Simulador de Impacto
    // ==========================================
    const inputQuantidade = document.getElementById('input-quantidade');
    const botaoCalcular = document.getElementById('btn-calcular');
    const resultadoImpacto = document.getElementById('resultado-impacto');

    // Verifica se os elementos do simulador existem na página antes de aplicar a lógica
    if (botaoCalcular && inputQuantidade && resultadoImpacto) {
        botaoCalcular.addEventListener('click', () => {
            const quantidade = parseFloat(inputQuantidade.value);

            // Validação simples para garantir que o usuário digitou um número válido
            if (isNaN(quantidade) || quantidade <= 0) {
                resultadoImpacto.textContent = "Por favor, insira um valor válido maior que zero.";
                resultadoImpacto.style.color = "#ff4d4d"; // Feedback visual de erro
                return;
            }

            // Exemplo de cálculo: Cada unidade reciclada economiza 0.5kg de CO2
            const fatorConversao = 0.5; 
            const impactoTotal = (quantidade * fatorConversao).toFixed(2);

            // Exibe o resultado na tela
            resultadoImpacto.textContent = `Parabéns! Você evitou a emissão de aproximadamente ${impactoTotal} kg de CO₂ na atmosfera.`;
            resultadoImpacto.style.color = "#2e7d32"; // Feedback visual de sucesso (verde)
        });
    }
});
