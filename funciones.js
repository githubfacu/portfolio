const material = [
    {
        id: 7,
        titulo: '<span>Next.js <h4>+TypeScript +Tailwind CSS</h4> | Digital House</span>',
        fecha: 'Abril 2024',
        enCurso: true,
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://github.com/githubfacu/Red_Social_Next.js',
                anclaTexto: 'RedSocial',
                img: './Imagenes/capturas/fondo_negro.png',
                descripcion: 'WebApp dictada. Next.js + TypeScript + Tailwind CSS.',
                personal: false,
                typescript: true
            },
            {
                proyectoId: 2,
                ruta: 'https://lector-transcripcion-de-llamadas.vercel.app/',
                anclaTexto: 'LectorTrancripcion',
                img: './Imagenes/capturas/Captura_lector-transcripcion-de-llamadas.vercel.app.jpeg',
                descripcion: 'Prueba técnica. Next.js + TypeScript + Tailwind CSS.',
                personal: false,
                typescript: true
            }
        ]
    },
    {
        id: 6,
        titulo: 'Simulación Laboral | No Country',
        fecha: 'Abril 2024',
        enCurso: false,
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://gestion-de-recursos-humanos-en-la-nube-facundodevs-projects.vercel.app',
                anclaTexto: 'RRHH-WebAppMobile',
                img: './Imagenes/capturas/Captura_rrhh.jpeg',
                descripcion: '4 sprints, 4 semanas, 10 integrantes. Frontend QA. React + Tailwind.',
                personal: false
            }
        ]
    },
    {
        id: 5,
        titulo: 'Proyecto Integrador | Digital House',
        fecha: 'Febrero 2024',
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://gitlab.com/mtimoxenko/integrador',
                anclaTexto: 'BookingApp',
                img: './Imagenes/capturas/Captura-CarRental2.jpeg',
                descripcion: 'Proyecto fin de curso, 8 integrantes. Frontend junto a Amy y Mateo.',
                personal: false
            }
        ]
    },
    {
        id: 4,
        titulo: '< / >',
        fecha: 'Enero 2024',
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://arcade-game-vercel.vercel.app',
                anclaTexto: 'ArcadeGame',
                img: './Imagenes/capturas/Captura_arcade-game-vercel.vercel.app.jpeg',
                descripcion: 'Práctica de React. Responsive.',
                personal: true
            },
            {
                proyectoId: 2,
                ruta: 'https://api-football-omega.vercel.app',
                anclaTexto: 'API-FOOTBALL',
                img: './Imagenes/capturas/Captura_api-football-omega.vercel.app.jpeg',
                descripcion: 'Peticiones... React.',
                personal: true
            }            
        ]
    },
    {
        id: 3,
        titulo: 'React',
        fecha: 'Octubre 2023',
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://githubfacu.github.io/f1_temporada_23/',
                anclaTexto: 'F1-2023',
                img: './Imagenes/capturas/Captura_f1.jpeg',
                descripcion: 'Probando ECMAScript6. API-Fetch 1.',
                personal: true
            },
            {
                proyectoId: 2,
                ruta: 'https://psycho-pass.vercel.app',
                anclaTexto: 'TrabajoPráctico',
                img: './Imagenes/capturas/Captura_psycho-pass.vercel.app.jpeg',
                descripcion: 'Trabajo práctico en dupla. React.',
                personal: false
            }            
        ]
    },
    {
        id: 2,
        titulo: 'JavaScript',
        fecha: 'Abril 2023',
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://githubfacu.github.io/reproductor_de_musica_js/',
                anclaTexto: 'ReproductorDeMúsica',
                img: './Imagenes/capturas/Captura_reproductor_musica.jpeg',
                descripcion: 'Primer práctica personal, JavaScript vanilla.',
                personal: true
            },
            {
                proyectoId: 2,
                ruta: 'https://githubfacu.github.io/interactive_magazine/',
                anclaTexto: 'InteractiveMagazine',
                img: './Imagenes/capturas/Captura_magazine.jpeg',
                descripcion: 'Interactive Magazine, JavaScript vanilla.',
                personal: true
            }
        ]
    },
    {
        id: 1,
        titulo: 'HTML | CSS',
        fecha: 'Agosto 2022',
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://githubfacu.github.io/frontend_uno_page/',
                anclaTexto: 'TrabajoPráctico',
                img: './Imagenes/capturas/Captura_maquetacion_front1.jpeg',
                descripcion: 'Maquetación básica sin funciones.',
                personal: false
            }
        ]
    }
]

const $lineadetiempo = document.getElementById('lineaDeTiempo')

agregarSeccion()
agregarMaterial()
agregarProyectos()
hoverMsj()
clasificarXIndex()


function agregarSeccion(){

    material.forEach(materia => {
        return $lineadetiempo.innerHTML+=`
        <section id='${materia.id}'></section>`
    })
}

function agregarMaterial(){

    const $sectionDiv = document.querySelectorAll('#lineaDeTiempo section')

    $sectionDiv.forEach(sectionHTML=>{

        material.forEach(materia => {
            if (parseInt(sectionHTML.id) === materia.id) {

                const tituloCard = document.createElement('div')
                tituloCard.classList.add('tituloCard')

                const enCursoIndice = document.createElement('div')
                enCursoIndice.setAttribute('id', materia.id)
                enCursoIndice.classList.add('enCurso')

                const enCursoMsj = document.createElement('h5')
                enCursoMsj.setAttribute('id', materia.id)
                enCursoMsj.innerText='En curso'

                const titulo = document.createElement('h3')
                titulo.innerHTML=`${materia.titulo}`

                if(materia.enCurso){
                    tituloCard.appendChild(enCursoIndice)
                    tituloCard.appendChild(enCursoMsj)
                    titulo.classList.add('tituloMargin')
                }

                tituloCard.appendChild(titulo)

                sectionHTML.appendChild(tituloCard)

                return sectionHTML.innerHTML+=`
                <h4 class='fecha'>${materia.fecha}</h4>
                <div class='linksDiv' id='${materia.id}'></div>`
            }
        })
    })
}

function hoverMsj(){
    const $msjDiv = document.querySelectorAll('.enCurso')
    const enCursoMsj = document.querySelectorAll('.tituloCard h5')

    $msjDiv.forEach(elemento=>{
        enCursoMsj.forEach(msj=>{
            if(msj.id === elemento.id){
                elemento.addEventListener('mouseover',function(){
                msj.style.opacity='1'
                })
                elemento.addEventListener('mouseout',function(){
                    msj.style.opacity='0'
                })                
            }
        })
    })
}

function agregarProyectos(){

    const $linksDiv = document.querySelectorAll('.linksDiv') 

    $linksDiv.forEach(linksDivHTML=>{

        material.forEach(materia => {

            if (materia.proyectos.length > 0) {
                if (parseInt(linksDivHTML.id) === materia.id) {

                    materia.proyectos.forEach(proyecto=>{

                        const ancla = document.createElement('a')
                        const anclaTextContent = document.createElement('h4')

                        ancla.id = proyecto.proyectoId
                        ancla.href = proyecto.ruta
                        ancla.target = '_blank'
                        anclaTextContent.innerText= proyecto.anclaTexto
                        
                        ancla.appendChild(anclaTextContent)

                        if (!proyecto.personal) {
                            ancla.style.backgroundColor='rgb(255, 230, 0)'
                        }
                        if(proyecto.typescript){
                            ancla.style.backgroundColor='#3178c6'
                        }

                        const spanLink = document.createElement('span')
                        spanLink.innerHTML=`<i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i>`

                        ancla.appendChild(spanLink)

                        linksDivHTML.appendChild(ancla)

                        const practicaDiv = document.createElement('div')
                        const practicaDescripcion = document.createElement('p')
                        const practicaImg = document.createElement('img')

                        practicaDescripcion.innerText= proyecto.descripcion
                        practicaImg.setAttribute('src', proyecto.img)
                        practicaImg.setAttribute('alt', 'vista del proyecto en mini.')
                        practicaDiv.appendChild(practicaImg)                        
                        practicaDiv.appendChild(practicaDescripcion)

                        practicaDiv.id = proyecto.proyectoId
                        practicaDiv.classList.add('practicaDiv')
                        practicaDiv.classList.add('hidden')

                        ancla.addEventListener('mouseover',function(){
                            practicaDiv.classList.remove('hidden')

                            setTimeout(() => {
                                practicaDiv.style.opacity='1'
                            }, 200);
                        })
                        ancla.addEventListener('mouseout',function(){
                            practicaDiv.classList.add('hidden')
                            setTimeout(() => {
                                practicaDiv.style.opacity='0'
                            }, 200);
                        })

                        return linksDivHTML.appendChild(practicaDiv)
                    })
                }
            }
        })           
    })
}

function clasificarXIndex (){

    const $sectionDiv = document.querySelectorAll('#lineaDeTiempo section')
    const $practicaDiv = document.querySelectorAll('#lineaDeTiempo section .practicaDiv')

    if ($sectionDiv.length%2 === 0) {
        $sectionDiv.forEach(((seccion, index) =>{
            if (index % 2 !== 0) {

                const targetElement = seccion.querySelectorAll('.practicaDiv')
                console.log(targetElement);

                targetElement.forEach(div=>{
                    div.classList.add('mobileDiv')
                })
            }
        }))
    }

    if ($sectionDiv.length %2 !== 0) {

        $sectionDiv.forEach(((seccion, index) =>{
            if (index % 2 !== 0) {

                const targetElement = seccion.querySelectorAll('.practicaDiv')

                targetElement.forEach(div=>{
                    div.classList.add('mobileDiv')
                })
            }
        }))
    }
}