const nestedMenuBtn = document.querySelector('.nested-menu-btn');
const nestedMenu = document.getElementById('nested-menu-anexo');
const nestedMenuWrapper = nestedMenuBtn.closest('.nested-menu');

function openNestedMenu() {
    nestedMenuBtn.setAttribute('aria-expanded', 'true');
    nestedMenu.setAttribute('aria-hidden', 'false');
}

function closeNestedMenu() {
    nestedMenuBtn.setAttribute('aria-expanded', 'false');
    nestedMenu.setAttribute('aria-hidden', 'true');
}

nestedMenuBtn.addEventListener('click', () => {
    const expanded = nestedMenuBtn.getAttribute('aria-expanded') === 'true';
    expanded ? closeNestedMenu() : openNestedMenu();
});

document.addEventListener('click', (e) => {
    if (!nestedMenuWrapper.contains(e.target)) {
        closeNestedMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (nestedMenuBtn.getAttribute('aria-expanded') === 'true') {
            closeNestedMenu();
            nestedMenuBtn.focus();
        }
    }
});

nestedMenu.addEventListener('focusout', (e) => {

    setTimeout(() => {
        const active = document.activeElement;
        if (!nestedMenuWrapper.contains(active)) {
            closeNestedMenu();
        }
    }, 0);
});
