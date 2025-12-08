const pagesMobileNav = document.querySelector('.pages-nav');

const htmlContent = `
    <div class="mobile-menu">
        <button class="open-menu" tabindex="0" id="openMenu" aria-label="Menu" aria-expanded="false" aria-haspopup="menu">
        </button>
        <div class="mobile-menu-content">
            <div class="fadetop"></div>
            <div class="onScroll">
                <nav aria-label="Navegación principal">
                    <ul id="mobileNavUl" class="navUl">
                        <li>
                            <a href="../index.html">Inicio</a>
                        </li>
                        <li>
                            <a href="./estudios.html">Estudios</a>
                        </li>
                        <li>
                            <a href="./vibecode.html">Vibe Code</a>
                        </li>
                        <li>
                            <a href="./presentaciones.html">Presentaciones</a>
                        </li>
                        <li>
                            <a href="./libros.html">Libros</a>
                        </li>
                    </ul>
                </nav>
                <button class="mobile-toggle" id="mobile-toggle" aria-label="Cambiar entre modo claro y oscuro">
                    Cambiar tema
                </button>
                <nav aria-label="Redes sociales">
                    <ul class="social-iconos">
                        <li>
                            <a href="https://www.linkedin.com/in/facundo-elorz/" id="fa-linkedin" aria-label="Visita mi perfil de LinkedIn">
                                <i class="fa-brands fa-linkedin fa-2xl" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/githubfacu" id="fa-github" aria-label="Visita mi perfil de GitHub">
                                <i class="fa-brands fa-github fa-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <span tabindex="0" title="elorzfacundo@gmail.com">
                                <i class="fa-regular fa-envelope fa-2xl" aria-label="Copiar en portapapeles la dirección de correo electrónico" aria-hidden="true"></i>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="desktop-nav">
        <nav aria-label="Navegación principal">
            <ul>
                <li>
                    <a href="../index.html">Inicio</a>
                </li>
                <li>
                    <a href="./estudios.html">Estudios</a>
                </li>
                <li class="submenu">
                    <button 
                        class="submenu-btn"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-controls="submenu-anexo"
                    >
                        Anexo <span class="expanded-icon" aria-hidden="true"><i class="fa-solid fa-angle-down"></i></span>
                    </button>

                    <ul id="submenu-anexo" class="submenu-anexo" aria-hidden="true">
                        <li><a href="./vibecode.html">Vibe Code</a></li>
                        <li><a href="./presentaciones.html">Presentaciones</a></li>
                        <li><a href="./libros.html">Libros</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <button class="desktop-toggle" id="desktop-toggle" aria-label="Cambiar entre modo claro y oscuro">
        </button>            
    </div>
`;

if (pagesMobileNav) {
    pagesMobileNav.innerHTML = htmlContent
}

const $openMenu = document.querySelector('.open-menu');
const $mobileMenuContent = document.querySelector('.mobile-menu-content');
const $navItemsMobileMenuContent = document.querySelectorAll('#mobileNavUl a');
const $navItems = document.querySelectorAll('.desktop-nav a')

if ($openMenu) {
  $openMenu.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
  `;
}

$openMenu.addEventListener('click', () => {
  const isOpen = $mobileMenuContent.classList.contains('open');

  $mobileMenuContent.classList.toggle('open');
  $openMenu.setAttribute('aria-expanded', String(!isOpen));

  $openMenu.innerHTML = !isOpen
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`;
});

const currentUrl = window.location.href;

function setActiveNavItem() {
    $navItems.forEach(item => {
        const itemUrl = item.href;

        if (currentUrl === itemUrl) {
            item.setAttribute('aria-current', 'page');
        } else {
            item.removeAttribute('aria-current')
        }
    });
    
    $navItemsMobileMenuContent.forEach(item => {
        const itemUrl = item.href;

        if (currentUrl === itemUrl) {
            item.setAttribute('aria-current', 'page');
        } else {
            item.removeAttribute('aria-current')
        }
    });
}

setActiveNavItem()