const menuButton = document.querySelector('#menuButton');
const menuWrapper = document.querySelector('#menuWrapper');
const menu = document.querySelector('#menu');
const content = document.querySelector('#content');
const navLiLastChild = document.querySelector('nav li:last-child');
let hideOrShow = 0;

menuButton.addEventListener('click', menuShowHide);


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
        menuWrapper.style.height = '10%';
        menu.style.display = 'none';
        menuButton.style.transform = 'rotate(0deg)';
        navLiLastChild.style.borderRadius = '0';
        hideOrShow = 0;
    }
    
}
