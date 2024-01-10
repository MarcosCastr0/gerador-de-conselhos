const botaoUpdate = document.getElementById("dice")
const numeroConselho = document.getElementById("advice-id")
const textoConselho = document.querySelector(".advice-cont")

async function gerarConselho() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const conselhoPromessa = await resposta.json();
    const conselhoId = `ADVICE #${conselhoPromessa.slip.id}`;
    const conselho = `"${conselhoPromessa.slip.advice}"`;

    numeroConselho.innerHTML = conselhoId;
    textoConselho.innerHTML = conselho;
}

botaoUpdate.addEventListener("click", gerarConselho);

gerarConselho();