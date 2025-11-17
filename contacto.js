const $divIcons = document.querySelector('.social-iconos-on-desktop')
const $divsIconsMobile = document.querySelectorAll('.social-iconos')

const $mailIcon = document.querySelector('.social-iconos-on-desktop span')
const $mailIconMobile = document.querySelector('.social-iconos span')

const miMail = document.createElement('p')
miMail.innerText = 'elorzfacundo@gmail.com'
miMail.style.display = 'none'

const copiedMessage = document.createElement('p')
copiedMessage.innerText = 'Copiado en portapapeles'
copiedMessage.style.display = 'none'

const copiedMessageMobile = copiedMessage.cloneNode(true)

$divIcons.appendChild(copiedMessage)
$divsIconsMobile.forEach(div =>{
    div.appendChild(copiedMessageMobile)
})

function showCopiedMessage(element) {
    element.style.display = 'block'
    const timer = setTimeout(() => {
        element.style.display = 'none'
    }, 2000)
    return () => clearTimeout(timer)
}

$mailIcon.addEventListener('click', function () {
    navigator.clipboard.writeText(miMail.innerText)
    showCopiedMessage(copiedMessage)
})

$mailIcon.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        navigator.clipboard.writeText(miMail.innerText)
        showCopiedMessage(copiedMessage)
    }
})

$mailIconMobile.addEventListener('click', function () {
    navigator.clipboard.writeText(miMail.innerText)
    showCopiedMessage(copiedMessageMobile)
})