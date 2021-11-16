let iloscPol = 0;

let przycisk = document.createElement('button');
przycisk.id = 'dodajPoleTekstowe';
przycisk.innerText = "Dodaj pole tekstowe";
menuDodajContent.appendChild(przycisk);

const dodajPoleTekstowe = document.querySelector('#dodajPoleTekstowe');


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
    //usunac resize z poltekstowych w menu
    if (hideOrShow == 0) {
        for (let i = 0; i < iloscPol; i++) {
            let pole = document.querySelectorAll('.poleTekstowe')[i];
            pole.style.resize = 'none';
            console.log("wykonano "+i) //poprawic
        }
    }
    else {
        for (let i = 0; i < iloscPol; i++) {
            let pole = document.querySelectorAll('.poleTekstowe')[i];
            pole.style.resize = 'both';
            console.log("wykonano "+i)
        }
    }
}

