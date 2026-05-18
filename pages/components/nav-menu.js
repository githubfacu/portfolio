export const NAV_MENU = `
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
                            <a href="./studies.html">Estudios</a>
                        </li>
                        <li>
                            <a href="./ia-code.html">Desarrollo con IA</a>
                        </li>
                        <li>
                            <a href="./presentaciones.html">Presentaciones</a>
                        </li>
                        <li>
                            <a href="./lectura.html">Lectura</a>
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
                    <a href="./studies.html">Estudios</a>
                </li>
                <li class="nested-menu">
                    <button 
                        class="nested-menu-btn"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-controls="nested-menu-anexo"
                    >
                        Anexo <span class="expanded-icon" aria-hidden="true"><i class="fa-solid fa-angle-down"></i></span>
                    </button>

                    <ul id="nested-menu-anexo" class="nested-menu-anexo" aria-hidden="true">
                        <li><a href="./ia-code.html">Desarrollo con IA</a></li>
                        <li><a href="./presentaciones.html">Presentaciones</a></li>
                        <li><a href="./lectura.html">Lectura</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <button class="desktop-toggle" id="desktop-toggle" aria-label="Cambiar entre modo claro y oscuro">
        </button>            
    </div>
`;
