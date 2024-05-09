// constants.js
export const apiUrl = 'https://gdpcursa.grupoderechoyprogreso.com/abogadosprogreso';
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
export const getAllLinks = `${apiUrl}/api/zoom/getAllLinks`;
export const getLinkTeacher = `${apiUrl}/api/zoom/getUltimoLinkZoomMaestro`;
export const getLinksDate = `${apiUrl}/api/zoom/getAllLinksByDate`;
export const setComment = `${apiUrl}/api/tablon_datos/insertar`;
export const getComment = `${apiUrl}/api/tablon_datos/todos`;
export const getClases = `${apiUrl}/api/clases/ClasesMaestroAdmin`;
export const getCommentMatricula = `${apiUrl}/api/tablon_datos/todosMatricula`;
export const postContent = `${apiUrl}/api/contenido_clases/subirContenido`;
export const downlodContent = `${apiUrl}/api/contenido_clases/descargarContenido`;
export const showContent = `${apiUrl}/api/contenido_clases/mostrarContenido`;

