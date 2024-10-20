var numberToFind = 0;
var attempts = 0;
var maxAttempts = 10; // Define o número máximo de tentativas

function refresh() {
    attempts = 0; // Reseta as tentativas
    numberToFind = Math.floor(Math.random() * 101); 
    console.log(numberToFind); 
}

function verifyNumber() {
    var bet = document.getElementById("bet").value; 
    bet = parseInt(bet);

    // Verifica se a aposta é válida
    if (bet > 100 || bet < 0) {
        alert('Aposta Inválida'); 
        return;
    }
    
    attempts++; // Incrementa o número de tentativas

    if (bet > numberToFind) {
        alert('O Número a ser encontrado é menor');
    } else if (bet < numberToFind) {
        alert('O Número a ser encontrado é maior');
    } else {
        alert('PARABÉNS, VOCÊ ACERTOU!');
        refresh(); // Reinicia o jogo
        return;
    }

    // Verifica se o número máximo de tentativas foi atingido
    if (attempts >= maxAttempts) {
        alert(`Você esgotou suas tentativas! O número era ${numberToFind}.`);
        refresh(); // Reinicia o jogo
    } else {
        alert(`Você ainda tem ${maxAttempts - attempts} tentativas restantes.`);
    }
}

refresh(); // Inicia o jogo
