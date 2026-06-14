import "../../theme.js";
import "../../scrollTop.js";
import "../../nested-nav-menu.js";

import { renderCourses } from "../../courses.js";

import accesibilidadFile from "../../courses-data/courses/accesibilidad-courses.json" with { type: 'json' };
import anexoFile from "../../courses-data/courses/anexo-courses-data.json" with { type: 'json' };
import frontendFile from "../../courses-data/courses/frontend-courses-data.json" with { type: 'json' };

renderCourses(accesibilidadFile)
renderCourses(anexoFile)
renderCourses(frontendFile)
