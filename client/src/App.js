import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './DataContext'; // Importa el proveedor de contexto
import PaginaInicioAdmin from './01_AdminHome';
import PaginaActualizarUsuarios from './01_ActualizarUsuarios';
import PaginaCrearClases from './01_CrearClases';
import PaginaInsertarAlumnos from './01_AsignarClases';
import PaginaLinkZoom from './01_ZoomLink';
import CreateUsuarios from './01_CrearUsuariosAdmin';
import TablaArchivoExcel from './01_TablaArchivoExcel';
import FormularioSubirExcel from './01_FormularioSubirExcel ';
import PaginaInicioMaestro from './02_MaestroHome';
import FileUploadForm from './02_FileUploadForm';
import TareasCalificar from './02_CalificarTareas';
import PaginaInicioEstudiante from './03_EstudianteHome';
import ClasesAlumno from './03_claseAlumno';
import TareasTable from './03_TareasTable';
import SubirTareasAlumno from './03_SubirTareasAlumno';
import LoginForm from './LoginForm';
import DirectorioPage from './directorio';

function App() {
  return (
    <DataProvider> {/* Envuelve toda la aplicación con el proveedor de contexto */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/01_AdminHome" element={<PaginaInicioAdmin />} />
          <Route path="/01_CrearUsuariosAdmin" element={<CreateUsuarios />} />
          <Route path="/01_ActualizarUsuarios" element={<PaginaActualizarUsuarios />} />
          <Route path="/01_AsignarClases" element={<PaginaInsertarAlumnos/>}/>
          <Route path="/01_ZoomLink" element={<PaginaLinkZoom/>}/>
          <Route path="/01_TablaArchivoExcel" element={<TablaArchivoExcel/>}/>
          <Route path="/01_FormularioSubirExcel" element={<FormularioSubirExcel/>}/>
          <Route path="/01_CrearClases" element={<PaginaCrearClases/>}/>
          <Route path="/02_MaestroHome" element={<PaginaInicioMaestro />} />
          <Route path="/02_FileUploadForm" element={<FileUploadForm/>}/>
          <Route path="/02_CalificarTareas" element={<TareasCalificar/>}/>
          <Route path="/03_EstudianteHome" element={<PaginaInicioEstudiante />} />
          <Route path="/03_claseAlumno" element={<ClasesAlumno/>}/>
          <Route path="/directorio" element={<DirectorioPage />} />
          <Route path="/03_TareasTable" element={<TareasTable/>}/>
          <Route path="/03_SubirTareasAlumno" element={<SubirTareasAlumno/>}/>
          
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;

