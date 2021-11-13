const menuButton = document.querySelector('#menuButton');
const menuWrapper = document.querySelector('#menuWrapper');
const menu = document.querySelector('#menu');
let content = document.querySelector('#content');
const navLiLastChild = document.querySelector('nav li:last-child');
const dodajPoleTekstowe = document.querySelector('#dodajPoleTekstowe');
let hideOrShow = 0;

menuButton.addEventListener('click', menuShowHide);
dodajPoleTekstowe.addEventListener('click', dodajTekstowe);

function menuShowHide()
{
    if (hideOrShow == 0) {
        content.style.display = 'none';
        menuWrapper.style.width = '70%';
        menuWrapper.style.height = '100%';
        menu.style.display = 'block';
        menuButton.style.transform = 'rotate(180deg)';
        navLiLastChild.style.borderRadius = '0px 15px 0px 0px';
        hideOrShow = 1;
    }
    else {
        content.style.display = 'block';
        menuWrapper.style.width = '100%';
        menuWrapper.style.height = '8%';
        menu.style.display = 'none';
        menuButton.style.transform = 'rotate(0deg)';
        navLiLastChild.style.borderRadius = '0';
        hideOrShow = 0;
    }
    
}

function dodajTekstowe() {
    let pole = document.createElement('div');
    let textArea = document.createElement('textarea');
    textArea.className = "textAreaPole";
    pole.className = "poleTekstowe";
    pole.appendChild(textArea);
    content.appendChild(pole);
    
    
}
