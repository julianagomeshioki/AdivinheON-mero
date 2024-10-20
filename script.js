var numberToFind = 0;
var attempts = 0;
var maxAttempts = 10; 

function refresh() {
    attempts = 0; 
    numberToFind = Math.floor(Math.random() * 101); 
    console.log(numberToFind); 
}

function verifyNumber() {
    var bet = document.getElementById("bet").value; 
    bet = parseInt(bet);


    if (bet > 100 || bet < 0) {
        alert('Aposta Inválida'); 
        return;
    }
    
    attempts++; 

    if (bet > numberToFind) {
        alert('O Número a ser encontrado é menor');
    } else if (bet < numberToFind) {
        alert('O Número a ser encontrado é maior');
    } else {
        alert('PARABÉNS, VOCÊ ACERTOU!');
        refresh(); // Reinicia o jogo
        return;
    }

    
    if (attempts >= maxAttempts) {
        alert(`Você esgotou suas tentativas! O número era ${numberToFind}.`);
        refresh(); 
    } else {
        alert(`Você ainda tem ${maxAttempts - attempts} tentativas restantes.`);
    }
}

refresh(); 
