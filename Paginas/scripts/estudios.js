import "../../header.js";
import "../../scrollTop.js";
import "../../subMenu.js";

import { renderCourses } from "../../courses.js";

const accesibilidadFile = '../../Material/courses/accesibilidad-courses.json'
const anexoFile = '../../Material/courses/anexo-courses-data.json'

fetch(anexoFile)
    .then(res => res.json())
    .then(renderCourses)
    .catch(console.error);

fetch(accesibilidadFile)
    .then(res => res.json())
    .then(renderCourses)
    .catch(console.error);