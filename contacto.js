const footer = document.querySelector('footer')

const divIcons = document.querySelector('.iconos')
const mailIcon = document.querySelector('.iconos span')
const githubIcon = document.getElementById('fa-github')
const linkedinIcon = document.getElementById('fa-linkedin')

githubIcon.setAttribute('title', 'ir a github.com/githubfacu')
linkedinIcon.setAttribute('title', 'ir a in/facundo-elorz')

const vinculos = document.createElement('h5')
const miMail = document.createElement('h5')
const copiedMessage = document.createElement('h4')

vinculos.style.display='none'

miMail.innerText='elorzfacundo@gmail.com'
miMail.style.display='none'

copiedMessage.innerText='COPIADO'
copiedMessage.style.display='none'

// divIcons.appendChild(miMail)
divIcons.appendChild(copiedMessage)
divIcons.appendChild(vinculos)

// mailIcon.addEventListener('mouseover', function() {
//     miMail.style.display='flex'
//     miMail.style.opacity='1'
// })

// mailIcon.addEventListener('focus', function() {
//     miMail.style.display='flex'
//     miMail.style.opacity='1'
// })

// mailIcon.addEventListener('mouseout', function() {
//     miMail.style.opacity='0'
//     miMail.style.display='none'
// })

// mailIcon.addEventListener('focusout', function() {
//     miMail.style.opacity='0'
//     miMail.style.display='none'
// })

mailIcon.addEventListener('click', function() {
    navigator.clipboard.writeText(miMail.innerText)

    copiedMessage.style.display='block'

    const timer = setTimeout(() => {
        copiedMessage.style.display='none'
    }, 2000);

    return () => clearTimeout(timer)
})

mailIcon.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        navigator.clipboard.writeText(miMail.innerText)

        copiedMessage.style.display='block'
        copiedMessage.style.width='90px'
        copiedMessage.style.textAlign='center'

        const timer = setTimeout(() => {
            copiedMessage.style.display='none'
        }, 2000);

        return () => clearTimeout(timer)        
    }
})