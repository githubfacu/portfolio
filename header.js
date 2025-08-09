const pagesMobileNav = document.querySelector('.pages-nav');

const htmlContent = `
    <div class="mobile-menu">
        <button class="open-menu" tabindex="0" id="openMenu" aria-label="Abrir menú móvil" style="view-transition-name: openMenu;">
            <div></div>
            <div></div>
        </button>
        <div class="mobile-menu-content">
            <div class="fadetop"></div>
            <div class="onScroll">
                <ul>
                    <li>
                        <a href="../index.html" aria-label="Ir a la página de inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="./vibecode.html" aria-label="Ir a Vibe Code">Vibe Code</a>
                    </li>
                    <li>
                        <a href="./presentaciones.html" aria-label="Ir a Presentaciones">Presentaciones</a>
                    </li>
                    <li>
                        <a href="./libros.html" aria-label="Ir a Libros">Libros</a>
                    </li>
                </ul>
                <button class="mobile-toggle" id="toggle" aria-label="Cambiar entre modo claro y oscuro" style="view-transition-name: toggle;">
                    Cambiar tema
                </button>                    
            </div>
        </div>
    </div>
    <div class="desktop-nav">
        <nav>
            <ul>
                <li>
                    <a href="../index.html" aria-label="Ir a la página de inicio">Inicio</a>
                </li>
                <li>
                    <a href="./vibecode.html" aria-label="Ir a Vibe Code">Vibe Code</a>
                </li>
                <li>
                    <a href="./presentaciones.html" aria-label="Ir a Presentaciones">Presentaciones</a>
                </li>
                <li>
                    <a href="./libros.html" aria-label="Ir a Libros">Libros</a>
                </li>
            </ul>
        </nav>
        <button class="desktop-toggle" id="toggle" aria-label="Cambiar entre modo claro y oscuro" style="view-transition-name: toggle;">
        </button>            
    </div>
`;

if (pagesMobileNav) {
    pagesMobileNav.innerHTML = htmlContent
}

const $body = document.body;
const $toggle = document.querySelectorAll('#toggle');
const $openMenu = document.querySelector('.open-menu');
const $mobileMenuContent = document.querySelector('.mobile-menu-content');
const $navItems = document.querySelectorAll('.desktop-nav a')

function setToggleIcon() {
    const isDark = $body.classList.contains('dark');
    $toggle.forEach(btn => {
        btn.classList.add('icon-transition');
        btn.innerHTML = isDark 
            ? '<i class="fa-solid fa-sun fa-lg"></i>' 
            : '<i class="fa-solid fa-moon fa-lg"></i>';
    });
}

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

setToggleIcon();

function toggleTema() {
    if ($body.classList.contains('dark')) {
        $body.classList.replace('dark', 'light');
        localStorage.setItem('tema', 'light');
    } else {
        $body.classList.replace('light', 'dark');
        localStorage.setItem('tema', 'dark');
    }
    setToggleIcon();
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

const currentUrl = window.location.href;

function setActiveNavItem() {
    $navItems.forEach(item => {
        const itemUrl = item.href;

        if (currentUrl === itemUrl) {
            item.classList.add('onActive');
        } else {
            item.classList.remove('onActive');
        }
    });
}

setActiveNavItem()