const material = [
    {
        id: 7,
        titulo: 'Next.js | Tailwind CSS',
        fecha: 'Abril 2024',
        enCurso: true,
        proyectos: [
        ]
    },
    {
        id: 6,
        titulo: 'Simulación Laboral | No Country',
        fecha: 'Abril 2024',
        enCurso: true,
        proyectos: [
            {
                proyectoId: 1,
                ruta: '',
                anclaTexto: 'RecursosHumanosWebApp',
                img: './Imagenes/capturas/Captura_rrhh.jpeg',
                descripcion: '4 sprints, 4 semanas, 10 integrantes. Rol Frontend QA React + Tailwind',
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
                descripcion: 'Proyecto fin de curso, 8 integrantes. Rol Frontend junto a Amy y Mateo.',
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
                descripcion: 'Primera práctica con chatGPT. React.',
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
                anclaTexto: 'F1-Temporada2023',
                img: './Imagenes/capturas/Captura_f1.jpeg',
                descripcion: 'Probando ECMAScript6. API-Fetch 1',
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
                titulo.innerText=`${materia.titulo}`

                if(materia.enCurso){
                    tituloCard.appendChild(enCursoIndice)
                    tituloCard.appendChild(enCursoMsj)
                    titulo.classList.add('tituloMargin')
                }

                tituloCard.appendChild(titulo)

                sectionHTML.appendChild(tituloCard)

                return sectionHTML.innerHTML+=`
                <h4>${materia.fecha}</h4>
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
                        ancla.id = proyecto.proyectoId
                        ancla.href = proyecto.ruta
                        ancla.target = '_blank'
                        ancla.textContent = proyecto.anclaTexto

                        if (!proyecto.personal) {
                            ancla.style.backgroundColor='rgb(255, 230, 0)'
                        }

                        linksDivHTML.appendChild(ancla)

                        const practicaDiv = document.createElement('div')
                        const practicaDescripcion = document.createElement('p')
                        const practicaImg = document.createElement('img')

                        practicaDescripcion.innerText= proyecto.descripcion
                        practicaImg.setAttribute('src', proyecto.img)
                        practicaDiv.appendChild(practicaImg)                        
                        practicaDiv.appendChild(practicaDescripcion)

                        practicaDiv.id = proyecto.proyectoId
                        practicaDiv.classList.add('practicaDiv')
                        practicaDiv.style.display='none'

                        ancla.addEventListener('mouseover',function(){
                            practicaDiv.style.display='flex'
                        })
                        ancla.addEventListener('mouseout',function(){
                            practicaDiv.style.display='none'
                        })

                        return linksDivHTML.appendChild(practicaDiv)
                    })
                }
            }
        })           
    })
}