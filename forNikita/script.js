"use strict";

const teamDiv = document.querySelector('.team__container'),
    addTeam = document.querySelector('.team__container-add');
let i = 1;
addTeam.addEventListener('click', (e) => {
    teamDiv.insertAdjacentHTML('beforeend', `<div class="team__container-item">
    Вот команда ${i}<button class="team__container-remove">-</button>
  </div>`);
    i++;
});

teamDiv.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn && btn.matches('button.team__container-remove'))
    // if (btn && btn.classList.contains('team__container-remove')) 
    {
        btn.parentElement.remove();
    }
});