let iloscPol = 0;
let showTekstowePin = 1;

let listaPol = {};
let przycisk = document.createElement('button');
przycisk.id = 'dodajPoleTekstowe';
przycisk.innerText = "Dodaj pole tekstowe";
menuDodajContent.appendChild(przycisk);

let przycisk2 = document.createElement('button');
przycisk2.id = 'usunPoleTekstowe';
przycisk2.innerText = "Usun pole tekstowe";
menuUsunContent.appendChild(przycisk2);

const dodajPoleTekstowe = document.querySelector('#dodajPoleTekstowe');
const usunPoleTekstowe = document.querySelector('#usunPoleTekstowe');



dodajPoleTekstowe.addEventListener('click', dodajTekstowe);
usunPoleTekstowe.addEventListener('click', usunTekstowe);
menuPinButton.addEventListener('click', showTekstowe);



function dodajTekstowe() {
    let pole = document.createElement('div');
    let textArea = document.createElement('textarea');
    textArea.className = "textAreaPole";
    pole.className = "poleTekstowe";
    pole.appendChild(textArea);
    content.appendChild(pole);
    iloscPol++;
}

function usunTekstowe() {
    let pole = content.querySelectorAll(".poleTekstowe");
    content.removeChild(pole[iloscPol - 1]);
    iloscPol--;
}


function showTekstowe() {
    
    const pole = document.querySelectorAll('.poleTekstowe');
    if (showTekstowePin == 0) {
        
        for (let i = 0; i < iloscPol; i++) {
            pole[i].style.resize = 'none';
        }
        showTekstowePin = 1;
    }
    else {
        for (let i = 0; i < iloscPol; i++) {
            
            pole[i].style.resize = 'both';
        }
        showTekstowePin = 0;
    }
}



