// get the data from games.js
var details = sessionStorage.getItem('gameDetails');
// console.log(details);

gameDetailsSection = document.querySelector('.game-details-section');
gameDetailsSection.innerHTML = details;

