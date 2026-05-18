import "../../theme.js";
import "../../scrollTop.js";
import "../../nested-nav-menu.js";

import { renderCourses } from "../../courses.js";

const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

const BASE_PATH = isLocal
    ? ''
    : '/portfolio';

const accesibilidadFile = `${BASE_PATH}/courses-data/courses/accesibilidad-courses.json`
const anexoFile = `${BASE_PATH}/courses-data/courses/anexo-courses-data.json`
const frontendFile =`${BASE_PATH}/courses-data/courses/frontend-courses-data.json`

fetch(anexoFile)
    .then(res => res.json())
    .then(renderCourses)
    .catch(console.error);

fetch(frontendFile)
    .then(res => res.json())
    .then(renderCourses)
    .catch(console.error);

fetch(accesibilidadFile)
    .then(res => res.json())
    .then(renderCourses)
    .catch(console.error);


