"use strict";

const teamDiv = document.querySelector('.addteam_menu_items'),
    addForm = document.querySelector('.form_add');
let teamsArray = document.querySelectorAll('.addteam_menu_items-item');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (teamsArray.length < 4) {
        let value = addForm.querySelector('input').value;
        teamDiv.insertAdjacentHTML('beforeend', `<div class="addteam_menu_items-item">
    <p>
      Команда ${value}<button class="addteam_menu_items-item-remove">X</button>
    </p>
  </div>`);
        addForm.reset();
        teamsArray = document.querySelectorAll('.addteam_menu_items-item');
    } else {
        alert('Достигнут максимум команд');
    }
});

teamDiv.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn && btn.matches('button.addteam_menu_items-item-remove'))
    // if (btn && btn.classList.contains('team__container-remove')) 
    {
        btn.parentElement.parentElement.remove();
        teamsArray = document.querySelectorAll('.addteam_menu_items-item');
    }
});


// let i,
//     teamsArray = document.querySelectorAll('.addteam_menu_items-item');
// addTeam.addEventListener('click', (e) => {
//     if (teamsArray.length < 4) {
//         i = teamsArray.length + 1;
//         teamDiv.insertAdjacentHTML('beforeend', `<div class="addteam_menu_items-item" data-number=${i}>
//     <p>
//       Команда ${i}<button class="addteam_menu_items-item-remove">X</button>
//     </p>
//   </div>`);
//         i++;
//         teamsArray = document.querySelectorAll('.addteam_menu_items-item');
//         console.log(teamsArray);
//     } else {
//         alert('Достигнут максимум команд');
//     }
// });

// teamDiv.addEventListener('click', (e) => {
//     const btn = e.target;
//     if (btn && btn.matches('button.addteam_menu_items-item-remove'))
//     // if (btn && btn.classList.contains('team__container-remove')) 
//     {
//         const teamNumber = +btn.parentElement.parentElement.dataset.number;
//         console.log(teamNumber);
//         btn.parentElement.parentElement.remove();
//         teamsArray = document.querySelectorAll('.addteam_menu_items-item');
//         i = teamNumber;
//         console.log(teamsArray);
//     }
// });