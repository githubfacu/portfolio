import "../../header.js";
import "../../scrollTop.js";
import "../../subMenu.js";

import { renderCourses } from "../../courses.js";

const accesibilidadFile = '../../Material/courses/accesibilidad-courses.json';
const anexoFile = '../../Material/courses/anexo-courses-data.json';

// --- Request Accesibilidad ---
const requestAcc = new XMLHttpRequest();
requestAcc.overrideMimeType('application/json');
requestAcc.open('GET', accesibilidadFile);
requestAcc.onload = function () {
    const data = JSON.parse(this.responseText);
    renderCourses(data);
};
requestAcc.onerror = (err) => console.error(err);
requestAcc.send();

// --- Request Anexo ---
const requestAnexo = new XMLHttpRequest();
requestAnexo.overrideMimeType('application/json');
requestAnexo.open('GET', anexoFile);
requestAnexo.onload = function () {
    const data = JSON.parse(this.responseText);
    renderCourses(data);
};
requestAnexo.onerror = (err) => console.error(err);
requestAnexo.send();
