import "../../header.js";
import "../../theme.js";
import "../../scrollTop.js";
import "../../subMenu.js";

import { renderCourses } from "../../courses.js";

const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

const BASE_PATH = isLocal
    ? ''
    : '/portfolio';

const accesibilidadFile = `${BASE_PATH}/Material/courses/accesibilidad-courses.json`;
const anexoFile = `${BASE_PATH}/Material/courses/anexo-courses-data.json`;

fetch(accesibilidadFile)
    .then(res => res.json())
    .then(renderCourses)
    .catch(console.error);

fetch(anexoFile)
    .then(res => res.json())
    .then(renderCourses)
    .catch(console.error);
