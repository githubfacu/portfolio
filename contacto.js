const divIcons = document.querySelector('.iconos')
const mailIcon = document.querySelector('.iconos span')
const githubIcon = document.getElementById('fa-github')
const linkedinIcon = document.getElementById('fa-linkedin')

const vinculos = document.createElement('h5')
const miMail = document.createElement('h5')
const copiedMessage = document.createElement('h4')

vinculos.style.display='none'

miMail.innerText='elorzfacundo@gmail.com'
miMail.style.display='none'

copiedMessage.innerText='✔ Copiado'
copiedMessage.style.display='none'

divIcons.appendChild(miMail)
divIcons.appendChild(copiedMessage)
divIcons.appendChild(vinculos)

mailIcon.addEventListener('mouseover', function() {
    miMail.style.display='flex'
    miMail.style.opacity='1'
})

mailIcon.addEventListener('mouseout', function() {
    miMail.style.opacity='0'
    miMail.style.display='none'
})

mailIcon.addEventListener('click', function() {
    navigator.clipboard.writeText(miMail.innerText)

    copiedMessage.style.display='block'
    copiedMessage.style.width='90px'
    copiedMessage.style.textAlign='center'

    const timer = setTimeout(() => {
        copiedMessage.style.display='none'
    }, 3000);

    return () => clearTimeout(timer)
})