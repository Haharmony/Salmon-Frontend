// constants.js
export const apiUrl = 'http://jmf.0b1.mytemp.website/abogadosprogreso';
//http://jmf.0b1.mytemp.website/abogadosprogreso

export const routeFindUserByRol = `${apiUrl}/api/users/findByRole`;
export const routeUpdateUser = `${apiUrl}/api/users/update`;
export const routeInsertEstudiante = `${apiUrl}/api/alumnos_clases/insertarAlumnoClase`;
export const routeCreateClase = `${apiUrl}/api/clases/createClaseMaestro`;
export const routeCreateUser = `${apiUrl}/api/users/create`;
export const apiSubirExcel = `${apiUrl}/api/archivosXMLS/subirExcel`;
export const apiMostrarExcel = `${apiUrl}/api/archivosXMLS/mostrarExcel`;
export const apiDescargarExcel = `${apiUrl}/api/archivosXMLS/descargarExcel`;
export const apiEliminarExcel = `${apiUrl}/api/archivosXMLS/eliminarExcel`;
export const routeCreateLink = `${apiUrl}/api/zoom/generarLink`;
export const mostrarTareaApiAlumno = `${apiUrl}/api/archivos_pdf_alumnos/mostrarTareasAlumnos`;
export const descargarPDFApiAlumno = `${apiUrl}/api/archivos_pdf_alumnos/descargarPDFAlumno`;
export const updateCalificacionApiAlumno = `${apiUrl}/api/archivos_pdf_alumnos/updateCalificacion`;
export const postPDFApi = `${apiUrl}/api/archivos_pdf/subirPDF`;
export const getLinks = `${apiUrl}/api/zoom/getUltimoLinkZoom`;
export const postPDFApiAlumno = `${apiUrl}/api/archivos_pdf_alumnos/subirPDFAlumno`;
export const mostrarTareaApi = `${apiUrl}/api/archivos_pdf/mostrarTareas`;
export const descargarPDFApi = `${apiUrl}/api/archivos_pdf/descargarPDF`;
export const getUsuarios = `${apiUrl}/api/users/directory`;
export const apiLogin = `${apiUrl}/api/users/login`;