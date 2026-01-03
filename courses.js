
export function renderCourses(coursesData) {
    const lists = document.querySelectorAll(".lista-cursos[data-category]");

    lists.forEach(list => {
        const category = list.dataset.category;
        const courses = coursesData[category];
        if (!courses) return;

        list.innerHTML = "";
        courses.forEach(course => {
            const li = document.createElement("li");
            li.className = "curso";

            li.innerHTML = `
                <div class="curso-content">
                    <div class="curso-definition">
                        <span class="curso-titulo">${course.title}</span>
                        <p class="curso-institucion">${course.institution}</p>
                    </div>
                    <a href="${course.pdf}" target="_blank" rel="noopener noreferrer" class="certificado-link" aria-label="${course.aria}">
                        Ver certificado
                        <i class="fa-solid fa-arrow-up-right-from-square fa-sm" aria-hidden="true"></i>
                    </a>
                </div>

            `;

            list.appendChild(li);
        });
    });
}
