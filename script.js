const root = document.documentElement;
const menuDodajButton = document.querySelector('#dodaj');
const menuUsunButton = document.querySelector('#usun');
const menuPinButton = document.querySelector('#pin');
const menuPaletaButton = document.querySelector('#paleta');
const inputs = document.querySelectorAll('input[type=color]');
const zast = document.querySelector('#zast');


const paletaChange = document.querySelector('#paletaChange');
const menuDodajContent = document.querySelector('#menuDodajContent');
const menuUsunContent = document.querySelector('#menuUsunContent');
const menuButton = document.querySelector('#menuButton');
const menuWrapper = document.querySelector('#menuWrapper');
const menu = document.querySelector('#menu');
const menuContent = document.querySelector('#menuContent');
let content = document.querySelector('#content');
const navLiLastChild = document.querySelector('nav li:last-child');
let hideOrShow = 0;
let settingsShow = 1;

zast.addEventListener('click', zastosuj);
menuButton.addEventListener('click', menuShowHide);
menuDodajButton.addEventListener('click', addSettings);
menuUsunButton.addEventListener('click', removeSettings)
menuPaletaButton.addEventListener('click', paletaSettings);


function menuShowHide()
{
    if (hideOrShow == 0) {
        menuDodajButton.style.display = 'inline';
        menuUsunButton.style.display = 'inline';
        menuPaletaButton.style.display = 'inline';
        menuPinButton.style.display = 'inline';
        menuPaletaButton.style.display = 'inline';
        menuWrapper.style.width = '70%';
        menu.style.display = 'block';
        menuButton.style.transform = 'rotate(180deg)';
        navLiLastChild.style.borderRadius = '0px 15px 0px 0px';
        menuContent.insertAdjacentElement('afterbegin', content);
        hideOrShow = 1;
    }
    else {
        menuDodajButton.style.display = 'none';
        menuUsunButton.style.display = 'none';
        menuPaletaButton.style.display = 'none';
        menuPinButton.style.display = 'none';
        menuPaletaButton.style.display = 'none';
        content.style.display = 'flex';
        menuWrapper.style.width = '100%';
        menu.style.display = 'none';
        menuButton.style.transform = 'rotate(0deg)';
        navLiLastChild.style.borderRadius = '0';
        menuWrapper.insertAdjacentElement('afterend', content);

        hideOrShow = 0;
    }
    
}
/*skrocic do jednej funkcji \/*/ 
function addSettings() {
    if (settingsShow == 1) {
        menuDodajContent.style.display = 'flex';
        menuContent.style.display = 'none';
        menuUsunButton.style.display = 'none';
        menuPaletaButton.style.display = 'none';
        menuPinButton.style.display = 'none';

        settingsShow = 0;
    }
    else {
        menuDodajContent.style.display = 'none';
        menuContent.style.display = 'flex';
        menuUsunButton.style.display = 'inline';
        menuPaletaButton.style.display = 'inline';
        menuPinButton.style.display = 'inline';

        settingsShow = 1;
    }
}
function removeSettings() {
    if (settingsShow == 1) {
        menuUsunContent.style.display = 'flex';
        menuContent.style.display = 'none';
        menuDodajButton.style.display = 'none';
        menuPaletaButton.style.display = 'none';
        menuPinButton.style.display = 'none';

        settingsShow = 0;
    }
    else {
        menuUsunContent.style.display = 'none';
        menuContent.style.display = 'flex';
        menuDodajButton.style.display = 'inline';
        menuPaletaButton.style.display = 'inline';
        menuPinButton.style.display = 'inline';

        settingsShow = 1;
    }
}
function paletaSettings() {
    if (settingsShow == 1) {
        paletaChange.style.display = 'flex';
        content.style.display = 'none';
        menuUsunButton.style.display = 'none';
        menuDodajButton.style.display = 'none';
        menuPinButton.style.display = 'none';

        settingsShow = 0;
    }
    else {
        paletaChange.style.display = 'none';
        content.style.display = 'flex';
        menuUsunButton.style.display = 'inline';
        menuDodajButton.style.display = 'inline';
        menuPinButton.style.display = 'inline';

        settingsShow = 1;
    }
}

function zastosuj() {
    root.style.setProperty('--bg-color', inputs[0].value);
    root.style.setProperty('--first-color', inputs[1].value);
    root.style.setProperty('--second-color', inputs[2].value);
    root.style.setProperty('--third-color', inputs[3].value);
    root.style.setProperty('--fourth-color', inputs[4].value);
    root.style.setProperty('--fifth-color', inputs[5].value);
    root.style.setProperty('--sixth-color', inputs[6].value);
}