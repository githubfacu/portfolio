
const $mobileToggle = document.getElementById('mobile-toggle');
const $desktopToggle = document.getElementById('desktop-toggle')

const SVG_MOON = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>';
const SVG_SUN  = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';

function isDark() {
    return document.documentElement.classList.contains('dark');
}

function setToggleIcon() {
    const icon = isDark() ? SVG_MOON : SVG_SUN;
    if ($desktopToggle) $desktopToggle.innerHTML = icon;
}

function saveTheme(dark) {
    try {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {
    console.warn('No se pudo guardar theme en localStorage:', e);
    }
}

function toggleTheme() {
    const nowDark = document.documentElement.classList.toggle('dark');

    if (nowDark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');

    saveTheme(nowDark);
    setToggleIcon();
}

[$desktopToggle, $mobileToggle].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', toggleTheme);
    btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
    }
    });
});

setToggleIcon();

if (isDark()) document.body.classList.add('dark');
else document.body.classList.remove('dark');