document.addEventListener('DOMContentLoaded', () => {

    // ========================================================
    // 1. NAVEGAÇÃO: Botão "Saiba Mais" da Hero Section
    // ========================================================
    const btnConhecer = document.getElementById('btn-conhecer');
    const secaoPilares = document.getElementById('pilares');

    if (btnConhecer && secaoPilares) {
        btnConhecer.addEventListener('click', () => {
            secaoPilares.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ========================================================
    // 2. INTERATIVIDADE: Cards de Pilares Sustentáveis
    // ========================================================
    const cards = document.querySelectorAll('.card');
    const painelDetalhes = document.getElementById('painel-detalhes');
    const textoDetalhe = document.getElementById('texto-detalhe');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Captura o dado contido no atributo customizado data-info
            const informacao = card.getAttribute('data-info');
            
            // Injeta o texto dinamicamente no painel
            textoDetalhe.textContent = informacao;
            
            // Remove a classe hidden para exibir o painel
            painelDetalhes.classList.remove('hidden');
            
            // Feedback visual suave de rolagem até o painel
            painelDetalhes.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });

    // ========================================================
    // 3. LÓGICA DE PROGRAMAÇÃO: Simulador de Economia Hídrica
    // ========================================================
    const btnCalcular = document.getElementById('btn-calcular');
    const inputGastoAgua = document.getElementById('gasto-agua');
    const resultadoCalc = document.getElementById('resultado-calc');

    if (btnCalcular && inputGastoAgua && resultadoCalc) {
        btnCalcular.addEventListener('click', () => {
            const consumoAtual = parseFloat(inputGastoAgua.value);

            // Validação para garantir que o usuário digitou um número válido
            if (isNaN(consumoAtual) || consumoAtual <= 0) {
                resultadoCalc.innerHTML = "Por favor, insira um valor de consumo válido maior que zero.";
                resultadoCalc.classList.remove('hidden');
                resultadoCalc.style.color = "#ff4d4d"; // Destaca o erro em vermelho
                return;
            }

            // Regra de negócio: Média de 30% de economia
            const economiaEstimada = consumoAtual * 0.30;
            const novoConsumo = consumoAtual - economiaEstimada;

            // Exibe o resultado formatado
            resultadoCalc.innerHTML = `
                <strong>Análise Concluída!</strong><br>
                Adotando a irrigação inteligente, sua economia estimada é de 
                <strong>${economiaEstimada.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} litros/mês</strong>.<br>
                Seu consumo estimado cairia para ${novoConsumo.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} litros/mês. 🌱
            `;
            
            resultadoCalc.style.color = ""; // Reseta para a cor padrão do CSS
            resultadoCalc.classList.remove('hidden');
        });
    }

    // ========================================================
    // 4. VALIDAÇÃO: Formulário de Contato (novalidate)
    // ========================================================
    const formContato = document.getElementById('form-contato');
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const sucessoEnvio = document.getElementById('sucesso-envio');

    if (formContato) {
        formContato.addEventListener('submit', (event) => {
            // Impede o recarregamento padrão da página
            event.preventDefault(); 
            
            let formularioValido = true;

            // Validação do campo Nome (Mínimo 3 caracteres baseado no minlength="3")
            if (inputNome.value.trim().length < 3) {
                erroNome.textContent = "O nome deve conter pelo menos 3 caracteres.";
                inputNome.classList.add('invalid'); // Opcional: para estilização CSS
                formularioValido = false;
            } else {
                erroNome.textContent = "";
                inputNome.classList.remove('invalid');
            }

            // Validação do campo E-mail (Regex básico para formato de email)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(inputEmail.value.trim())) {
                erroEmail.textContent = "Por favor, insira um e-mail válido.";
                inputEmail.classList.add('invalid');
                formularioValido = false;
            } else {
                erroEmail.textContent = "";
                inputEmail.classList.remove('invalid');
            }

            // Se todas as validações passarem
            if (formularioValido) {
                sucessoEnvio.classList.remove('hidden');
                formContato.reset(); // Limpa os campos do formulário
                
                // Opcional: Oculta a mensagem de sucesso após 6 segundos
                setTimeout(() => {
                    sucessoEnvio.classList.add('hidden');
                }, 6000);
            } else {
                sucessoEnvio.classList.add('hidden');
            }
        });
    }
});
