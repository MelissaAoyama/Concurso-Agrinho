document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. LÓGICA DA CALCULADORA DE ECONOMIA HÍDRICA
    // ==========================================
    const btnCalcular = document.getElementById("btn-calcular");
    const inputAgua = document.getElementById("gasto-agua");
    const resultadoCalc = document.getElementById("resultado-calc");

    if (btnCalcular && inputAgua && resultadoCalc) {
        btnCalcular.addEventListener("click", () => {
            const consumo = parseFloat(inputAgua.value);

            // Valida se o usuário digitou um número válido e maior que zero
            if (isNaN(consumo) || consumo <= 0) {
                resultadoCalc.innerHTML = "❌ Por favor, insira um valor válido de consumo.";
                resultadoCalc.classList.remove("hidden");
                resultadoCalc.style.color = "red";
                return;
            }

            // Calcula 30% de economia
            const economia = consumo * 0.3;
            const novoConsumo = consumo - economia;

            // Exibe o resultado na tela
            resultadoCalc.innerHTML = `
                <p><strong>Resultado da Simulação:</strong></p>
                <p>💧 Economia estimada (30%): <strong>${economia.toLocaleString('pt-BR')} litros/mês</strong>.</p>
                <p>📉 Seu consumo cairia para: <strong>${novoConsumo.toLocaleString('pt-BR')} litros/mês</strong>.</p>
            `;
            
            // Remove a classe hidden para o resultado aparecer
            resultadoCalc.classList.remove("hidden");
