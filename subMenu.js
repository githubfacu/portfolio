const submenuBtn = document.querySelector('.submenu-btn');
const submenu = document.getElementById('submenu-anexo');
const submenuWrapper = submenuBtn.closest('.submenu');

function openSubmenu() {
    submenuBtn.setAttribute('aria-expanded', 'true');
    submenu.setAttribute('aria-hidden', 'false');
}

function closeSubmenu() {
    submenuBtn.setAttribute('aria-expanded', 'false');
    submenu.setAttribute('aria-hidden', 'true');
}

submenuBtn.addEventListener('click', () => {
    const expanded = submenuBtn.getAttribute('aria-expanded') === 'true';
    expanded ? closeSubmenu() : openSubmenu();
});

document.addEventListener('click', (e) => {
    if (!submenuWrapper.contains(e.target)) {
        closeSubmenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (submenuBtn.getAttribute('aria-expanded') === 'true') {
            closeSubmenu();
            submenuBtn.focus();
        }
    }
});

submenu.addEventListener('focusout', (e) => {

    setTimeout(() => {
        const active = document.activeElement;
        if (!submenuWrapper.contains(active)) {
            closeSubmenu();
        }
    }, 0);
});
