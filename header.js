const $body = document.querySelector('body')
const $toggle = document.querySelectorAll('#toggle')
const $openMenu = document.querySelector('.open-menu')
const $mobileMenuContent = document.querySelector('.mobile-menu-content')

const theme = localStorage.getItem('tema')
if (theme === 'light') {
    $body.classList.remove('dark')
    $body.classList.add('light')
}   else if (theme === 'dark') {
    $body.classList.remove('light')
    $body.classList.add('dark')
}   else {
    $body.classList.add('dark')
}

function toggleTema(){
    if ($body.classList.contains('dark')) {
        $body.classList.remove('dark')
        $body.classList.add('light')
        return localStorage.setItem('tema', 'light')
    } else {
        $body.classList.remove('light')
        $body.classList.add('dark')
        return localStorage.setItem('tema', 'dark')
    }
}

$toggle.forEach(toggle => {
    toggle.addEventListener('click', function(){
        toggleTema()
    })
    toggle.addEventListener('onkeypress', function(event){
        if (event.key === 'Enter' || event.key === ' ') {
            toggleTema()
        }
    })    
})

$openMenu.addEventListener('click', function (event) {
    const isOpen = $mobileMenuContent.classList.contains('open');

    $openMenu.classList.toggle('x-icon', !isOpen);
    $mobileMenuContent.classList.toggle('open');

    if (event.key === 'Enter' || event.key === ' ') {
        $openMenu.classList.toggle('x-icon', !isOpen);
        $mobileMenuContent.classList.toggle('open');
    }
});

$mobileMenuContent.addEventListener('mouseover', function (event) {
    event.stopPropagation();
});