import { NAV_MENU } from "./pages/components/nav-menu.js";

const pagesMobileNav = document.querySelector('.pages-nav');

if (pagesMobileNav) {
    pagesMobileNav.innerHTML = NAV_MENU
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