
// sticky navbar
window.addEventListener('scroll', () => {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});
const homePage = document.querySelector('.main');
const aside = document.getElementsByTagName('aside');
const asideBtn = document.querySelector('#aside-btn');
const asideSpans = document.querySelectorAll('.aside-span');
const asideNoneLinks = document.querySelectorAll('.aside-non-links');
//game-details-section
const gameDetailsSection = document.querySelector('.game-details-section');
// console.log(aside);
// console.log(window.location);

asideBtn.addEventListener('click', () => {
    
    if (asideBtn.innerHTML == '<i class="fa-solid fa-angle-left"></i>'){
    asideBtn.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
    aside[0].classList.remove('show-aside');
    aside[0].classList.add('hide-aside');

    if(window.location.pathname == '/index.html'){
        console.log(homePage)
        homePage.classList.remove('shrink-home-section');
        homePage.classList.add('expand-home-section');
    }

    if(window.location.pathname == "/gameDetails.html"){
    gameDetailsSection.classList.remove('shrink-game-details');
    gameDetailsSection.classList.add('expand-game-details');
    }
    }
    else{
    asideBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i>'
    aside[0].classList.remove('hide-aside');
    aside[0].classList.add('show-aside');


    if(window.location.pathname == "/gameDetails.html"){
    gameDetailsSection.classList.remove('expand-game-details');
    gameDetailsSection.classList.add('shrink-game-details');
    }

    if(window.location.pathname == '/index.html'){
        homePage.classList.remove('expand-home-section');
        homePage.classList.add('shrink-home-section');
    }
   }


    asideSpans.forEach((allE) => {
        // console.log(allE);
        allE.classList.toggle('remove');
    });

    asideNoneLinks.forEach((allE) => {
        allE.classList.toggle('remove');
    });
})