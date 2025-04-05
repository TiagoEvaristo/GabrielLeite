const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('.menu');
const buttonIconOpen = document.querySelector('#menu-button-icon-open');
const buttonIconClose = document.querySelector('#menu-button-icon-close');

// onload hide the menu
menu.classList.add('hidden');
// buttonIconClose.classList.add('hidden');
buttonIconOpen.classList.add('hidden');

menuButton.addEventListener('click', () => {
    // check if the menu is hidden
    if (!menu.classList.contains('hidden')) {
        // hide the menu
        menu.classList.add('hidden');
        buttonIconClose.classList.remove('hidden');
        buttonIconOpen.classList.add('hidden');
        return;
    }else{
        // show the menu
        menu.classList.remove('hidden');
        buttonIconClose.classList.add('hidden');
        buttonIconOpen.classList.remove('hidden');
    }
    // menu.classList.remove('hidden');
});

function sendWhatsAppMessage() {
    defaultPrevented = true;

    const numero = '5511959418981'; // Número com DDI (sem "+" ou espaços)
    const mensagem = 'Olá! Quero saber mais sobre os seus serviços.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}

