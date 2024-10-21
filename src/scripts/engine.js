const emojis = [
    "😊", "😊", "🐱", "🐱", "🎃", "🎃", "🐶", "🐶",
    "🍎", "🍎", "🌵", "🌵", "🚗", "🚗", "🎈", "🎈"
];

let openCards = [];
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));

// Criar os elementos do jogo e exibir temporariamente
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

// Exibir os emojis visivelmente por 3 segundos antes de escondê-los
setTimeout(() => {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.classList.add("hide"); // Adiciona uma classe para esconder os itens
    });
}, 3000); // 3000 milissegundos = 3 segundos

function handleClick() {
    if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
        this.classList.remove("hide"); // Revela o emoji ao clicar
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.add("hide");
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.add("hide");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você Venceu!!!");
    }
}
