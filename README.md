# AgroSustentável — Agro Forte, Futuro Sustentável 🚜🌱💧

Uma página web interativa e responsiva dedicada a promover a conscientização sobre as boas práticas e tecnologias que transformam o agronegócio em uma força verde para o futuro do planeta. O projeto simula uma plataforma de conscientização e ferramentas práticas para o produtor rural.

---

## 🎯 Objetivos do Projeto

* **Conscientização:** Apresentar de forma clara os pilares da agricultura sustentável (Tecnologia, Manejo de Solo e Gestão Hídrica).
* **Ferramenta Prática:** Oferecer um simulador funcional para estimar a economia de água na propriedade rural através de irrigação inteligente.
* **Engajamento:** Disponibilizar um canal de comunicação validado para interessados entrarem em contato.

---

## 🚀 Funcionalidades Mapeadas no HTML

O arquivo `index.html` já está estruturado com os ganchos necessários (`id`, `class` e `data-attributes`) para suportar as seguintes interações:

### 1. Cards Interativos (Nossos Pilares)
* **Elemento:** `.card`
* **Gatilho:** Clique do usuário.
* **Lógica:** O JavaScript lê o atributo customizado `data-info` (ex: *"Uso de drones e IA para otimizar..."*) e injeta o texto dinamicamente dentro do elemento `#texto-detalhe`, além de exibir o painel removendo a classe `.hidden`.

### 2. Simulador de Economia Hídrica
* **Elemento:** `#calculadora`
* **Gatilho:** Clique no botão `#btn-calcular`.
* **Lógica:** Captura o valor numérico digitado no input `#gasto-agua`, calcula a **redução estimada de 30%** no consumo mensal de água e exibe o resultado formatado dentro da caixa `#resultado-calc`.

### 3. Formulário de Contato com Validação
* **Elemento:** `#form-contato`
* **Campos:** Nome (mínimo de 3 caracteres) e E-mail (formato válido).
* **Lógica:** O atributo `novalidate` no formulário indica que a validação será feita via JavaScript. Os spans `.error-message` exibem os erros em tempo real e, se tudo estiver correto, a div `#sucesso-envio` é exibida.

---

## 📁 Estrutura de Arquivos Recomendada

```text
├── index.html        # Estrutura semântica da página (Fornecido)
├── style.css         # Estilização, layout (Flexbox/Grid) e classes de estado (.hidden)
└── script.js         # Lógica dos cards, da calculadora (30% de economia) e validação
