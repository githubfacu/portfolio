import "../../header.js";
import "../../scrollTop.js";
import "../../subMenu.js";

import { renderCourses } from "../../courses.js";
import { anexoCourses } from "../../Material/courses/anexo-courses-data.js";
import { accesibilidadCourses } from '../../Material/courses/accesibilidad-courses.js'

document.addEventListener("DOMContentLoaded", () => {
    renderCourses(anexoCourses);
    renderCourses(accesibilidadCourses)
});