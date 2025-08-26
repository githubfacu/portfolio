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
                <ul class="navUl">
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
                <ul class="social-iconos">
                    <li>
                        <a href="https://www.linkedin.com/in/facundo-elorz/" target="_blank" id="fa-linkedin" aria-label="Ir al perfil de LinkedIn de Facu Elorz en una nueva pestaña" title="ir a in/facundo-elorz">
                            <i class="fa-brands fa-linkedin fa-2xl" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/githubfacu" target="_blank" id="fa-github" aria-label="Ir al perfil de GitHub de Facu Elorz en una nueva pestaña" title="ir a github.com/githubfacu">
                            <i class="fa-brands fa-github fa-2xl"></i>
                        </a>
                    </li>
                    <li>
                        <span tabindex="0" title="elorzfacundo@gmail.com">
                            <i class="fa-regular fa-envelope fa-2xl" aria-label="Copiar en portapapeles la dirección de correo electrónico de Facundo Elorz" aria-hidden="true"></i>
                        </span>
                    </li>
                </ul>
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
const $desktopToggle = document.querySelectorAll('.desktop-nav #toggle')
const $openMenu = document.querySelector('.open-menu');
const $mobileMenuContent = document.querySelector('.mobile-menu-content');
const $navItems = document.querySelectorAll('.desktop-nav a')

function setToggleIcon() {
    const isDark = $body.classList.contains('dark');
    $desktopToggle.forEach(btn => {
        btn.innerHTML = isDark 
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
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
    $desktopToggle.forEach(btn => {
        btn.classList.add('icon-transition');
    });

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