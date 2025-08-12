const $divIcons = document.querySelector('.social-iconos-on-desktop')
const $divIconsMobile = document.querySelector('.social-iconos')

const $mailIcon = document.querySelector('.social-iconos-on-desktop span')
const $mailIconMobile = document.querySelector('.social-iconos span')

const miMail = document.createElement('h5')
const copiedMessage = document.createElement('h4')

miMail.innerText='elorzfacundo@gmail.com'
miMail.style.display='none'

copiedMessage.innerText='Copiado en portapapeles'
copiedMessage.style.display='none'

$divIcons.appendChild(copiedMessage)
$divIconsMobile.appendChild(copiedMessage)

$mailIcon.addEventListener('click', function() {
    navigator.clipboard.writeText(miMail.innerText)

    copiedMessage.style.display='block'

    const timer = setTimeout(() => {
        copiedMessage.style.display='none'
    }, 2000);

    return () => clearTimeout(timer)
})

$mailIconMobile.addEventListener('click', function() {
    navigator.clipboard.writeText(miMail.innerText)

    copiedMessage.style.display='block'

    const timer = setTimeout(() => {
        copiedMessage.style.display='none'
    }, 2000);

    return () => clearTimeout(timer)
})

$mailIcon.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        navigator.clipboard.writeText(miMail.innerText)

        copiedMessage.style.display='block'

        const timer = setTimeout(() => {
            copiedMessage.style.display='none'
        }, 2000);

        return () => clearTimeout(timer)        
    }
})