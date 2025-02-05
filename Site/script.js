const messages = [
    "T'es sur?",
    "Vraiiiiment sur??",
    "Relis bien la question",
    "Yasmina...",
    "Prend le temps de reflechir!",
    "Penses-y mieux...",
    "Je serais vraiment triste...",
    "Vraaaaaaaaaiment triste...",
    "Ok j'arrete de forcer...",
    "T'as trop cru, juste dis oui! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "Oui.html";
}