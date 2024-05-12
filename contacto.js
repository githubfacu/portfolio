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

copiedMessage.innerText='✔ Copied'
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

    const timer = setTimeout(() => {
        copiedMessage.style.display='none'
    }, 3000);

    return () => clearTimeout(timer)
})

/************************ [Linkedin Github Over] **************************/

// githubIcon.addEventListener('mouseover', function() {
//     vinculos.innerText='/githubfacu'
//     vinculos.style.display='flex'
//     vinculos.style.opacity='1'
//     vinculos.style.left='-26px'
//     vinculos.style.width='70px'
// })

// githubIcon.addEventListener('mouseout', function() {
//     vinculos.style.opacity='0'
//     vinculos.style.display='none'
// })

// linkedinIcon.addEventListener('mouseover', function() {
//     vinculos.innerText='/in/facundo-elorz'
//     vinculos.style.display='flex'
//     vinculos.style.opacity='1'
//     vinculos.style.left='26px'
//     vinculos.style.width='105px'
// })

// linkedinIcon.addEventListener('mouseout', function() {
//     vinculos.style.opacity='0'
//     vinculos.style.display='none'
// })


/************************ [Funciones del Formulario] **************************/

const formulario = document.querySelector('form')

function capturaValues(){

    const objetoMail = {
        asunto: '',
        mail: '',
        mensaje: ''
    }

    const nombreInput = document.getElementById('asunto')
    const emailInput = document.getElementById('email')
    const textareaMessage = document.querySelector('textarea')

    objetoMail.asunto = nombreInput.value
    objetoMail.mail = emailInput.value
    objetoMail.mensaje = textareaMessage.value

    return objetoMail
}

function validar(values){

    let objetoValidaciones = {
        asunto: false,
        mail: false,
        mensaje: false
    }

    if (values.asunto === '') {
        objetoValidaciones.asunto = true
    }
    if (values.mail === '') {
        objetoValidaciones.mail = true
    }
    if (values.mensaje === '') {
        objetoValidaciones.mensaje = true
    }

    return objetoValidaciones;
}

function confirmarEnvio(validaciones) {

    if (validaciones.mensaje) {
        return alert('El campo Mensaje es obligatorio')
    }
    if (validaciones.mail || validaciones.mensaje) {
        if (confirm('¿Confirma envío del Mensaje aunque haya campos incompletos?')){
            alert('Mensaje enviado')
        }
        else{
            return null
        }
    }
    else{
        return alert('Mensaje enviado')
    }
    
}


formulario.addEventListener('submit', function(event){
    event.preventDefault()

    return alert('Envio de mensajes en mantenimiento, discupe las molestias.')

    confirmarEnvio(validar(capturaValues()))

})

