const menuDodajButton = document.querySelector('#dodaj');
const menuUsunButton = document.querySelector('#usun');
const menuPinButton = document.querySelector('#pin');
const menuDodajContent = document.querySelector('#menuDodajContent');
const menuButton = document.querySelector('#menuButton');
const menuWrapper = document.querySelector('#menuWrapper');
const menu = document.querySelector('#menu');
const menuContent = document.querySelector('#menuContent');
let content = document.querySelector('#content');
const navLiLastChild = document.querySelector('nav li:last-child');
let hideOrShow = 0;
let settingsShow = 1;

menuButton.addEventListener('click', menuShowHide);
menuDodajButton.addEventListener('click', addSettings);

function menuShowHide()
{
    if (hideOrShow == 0) {
        menuDodajButton.style.display = 'inline';
        menuUsunButton.style.display = 'inline';
        menuPinButton.style.display = 'inline';
        menuWrapper.style.width = '70%';//dodac media query
        menu.style.display = 'block';
        menuButton.style.transform = 'rotate(180deg)';
        navLiLastChild.style.borderRadius = '0px 15px 0px 0px';
        menuContent.insertAdjacentElement('afterbegin', content);
        hideOrShow = 1;
    }
    else {
        menuDodajButton.style.display = 'none';
        menuUsunButton.style.display = 'none';
        menuPinButton.style.display = 'none';
        content.style.display = 'flex';
        menuWrapper.style.width = '100%';
        menu.style.display = 'none';
        menuButton.style.transform = 'rotate(0deg)';
        navLiLastChild.style.borderRadius = '0';
        menuWrapper.insertAdjacentElement('afterend', content);

        hideOrShow = 0;
    }
    
}

function addSettings() {
    if (settingsShow == 1) {
        menuDodajContent.style.display = 'flex';
        menuContent.style.display = 'none';

        settingsShow = 0;
    }
    else {
        menuDodajContent.style.display = 'none';
        menuContent.style.display = 'flex';
        settingsShow = 1;
    }
}
