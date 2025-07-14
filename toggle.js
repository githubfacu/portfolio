const $body = document.querySelector('body')
const $toggle = document.getElementById('toggle')
const $headerAncla = document.querySelector('header a')

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

$toggle.addEventListener('click', function(){
    toggleTema()
})

$headerAncla.addEventListener('mouseover', function(e){
    e.stopPropagation()
})

$headerAncla.addEventListener('click', function(e){
    e.stopPropagation()
})