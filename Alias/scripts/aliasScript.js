'use strict';

const ruleTabs = document.querySelectorAll('.rules_body__nav-btn'),
    rulesContent = document.querySelectorAll('.rules_body__content-item'),
    ruleTabsParent = document.querySelector('.rules_body__nav');

function hideRules() {
    rulesContent.forEach(item => {
        item.classList.add('hidden');
    });
    ruleTabs.forEach(item => {
        item.classList.remove('rules_body__nav-btn_active');
    });
}

function showRule(i = 0) {
    rulesContent[i].classList.remove('hidden');
    rulesContent[i].classList.add('active');
    ruleTabs[i].classList.add('rules_body__nav-btn_active');
}

hideRules();
showRule();
ruleTabsParent.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn && btn.classList.contains('rules_body__nav-btn')) {
        ruleTabs.forEach((item, i) => {
            if (btn == item) {
                hideRules();
                showRule(i);
            }
        });
    }
});