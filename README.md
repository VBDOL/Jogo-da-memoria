# Jogo da Memória

<img src ="./src/imagens/memory.JPG">

Bem-vindo ao **Jogo da Memória**! Este é um simples e divertido jogo desenvolvido usando HTML, CSS e JavaScript. O objetivo do jogo é encontrar todos os pares de emojis ocultos no menor tempo possível.

## 🎮 Como Jogar

- O jogo começa mostrando todos os emojis no tabuleiro por **3 segundos**.
- Após esses 3 segundos, os emojis serão ocultados.
- Clique em duas cartas para revelar os emojis. Se os dois emojis forem iguais, eles permanecerão visíveis.
- Caso os emojis não correspondam, eles serão ocultados novamente após um curto intervalo.
- Continue jogando até encontrar todos os pares. Ao completar o jogo, uma mensagem de vitória será exibida.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Para a estrutura básica do jogo.
- **CSS**: Para estilização do jogo e animações de transição ao revelar e esconder as cartas.
- **JavaScript**: Para a lógica do jogo, incluindo o embaralhamento dos emojis, a comparação entre pares, e a exibição/ocultação dinâmica das cartas.

## 🚀 Como Executar o Jogo

1. Clone este repositório:

   ```bash
   git clone [https:](https://github.com/VBDOL/Jogo-da-memoria)

   Navegue até o diretório do projeto:

bash
Copiar código
cd jogo-da-memoria
Abra o arquivo index.html diretamente no seu navegador, ou use um servidor local (por exemplo, através da extensão "Live Server" no VSCode).

🖼️ Imagens e Estilo
O jogo possui um tabuleiro com 16 cartas (4x4).
Cada carta oculta um emoji aleatório que é embaralhado no início do jogo.
As animações foram implementadas para uma experiência visual fluida ao virar as cartas.
📝 Funcionalidades
Embaralhamento aleatório dos emojis a cada reinício do jogo.
Temporizador que revela os emojis no início por 3 segundos e depois os oculta.
Verificação automática de pares ao selecionar duas cartas.
Exibição de uma mensagem ao completar todos os pares.
📋 Requisitos
Este jogo é completamente client-side e não requer instalação de pacotes ou dependências externas. Basta abrir o arquivo index.html no navegador.
