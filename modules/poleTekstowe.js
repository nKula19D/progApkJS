const dodajPoleTekstowe = document.querySelector('#dodajPoleTekstowe');
let iloscPol = 0;

dodajPoleTekstowe.addEventListener('click', dodajTekstowe);
menuButton.addEventListener('click', showTekstowe);


function dodajTekstowe() {
    let pole = document.createElement('div');
    let textArea = document.createElement('textarea');
    textArea.className = "textAreaPole";
    pole.className = "poleTekstowe";
    pole.appendChild(textArea);
    content.appendChild(pole);
    let poleMenu = pole.cloneNode(true);
    menuContent.appendChild(poleMenu);
    iloscPol++;


}

function showTekstowe() {
    if (hideOrShow == 0) {
        for (let i = 0; i < iloscPol; i++) {
            let pole = document.querySelectorAll('.poleTekstowe')[i];
            pole.style.resize = 'none';
        }
    }
    else {
        for (let i = 0; i < iloscPol; i++) {
            let pole = document.querySelectorAll('.poleTekstowe')[i];
            pole.style.resize = 'both';
        }
    }
}

