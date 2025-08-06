const $body = document.body;
const $toggle = document.querySelectorAll('#toggle');
const $openMenu = document.querySelector('.open-menu');
const $mobileMenuContent = document.querySelector('.mobile-menu-content');

const theme = localStorage.getItem('tema');
if (theme === 'light') {
    $body.classList.remove('dark');
    $body.classList.add('light');
} else if (theme === 'dark') {
    $body.classList.remove('light');
    $body.classList.add('dark');
} else {
    $body.classList.add('dark');
}

function toggleTema() {
    if ($body.classList.contains('dark')) {
        $body.classList.replace('dark', 'light');
        localStorage.setItem('tema', 'light');
    } else {
        $body.classList.replace('light', 'dark');
        localStorage.setItem('tema', 'dark');
    }
}

$toggle.forEach(btn => {
    btn.addEventListener('click', toggleTema);
    btn.addEventListener('keypress', e => {
        if (e.key === 'Enter' || e.key === ' ') toggleTema();
    });
});

$openMenu.addEventListener('click', () => {
    const isOpen = $mobileMenuContent.classList.contains('open');
    $openMenu.classList.toggle('x-icon', !isOpen);
    $mobileMenuContent.classList.toggle('open');
});
