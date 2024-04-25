//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './Components/Pages/DataContext';
import Login from './Components/Pages/Login';
import {CreateUser} from './Components/Pages/CreateUser';
import {UpdateUser} from './Components/Pages/UpdateUser';
import {CreateClass} from './Components/Pages/CreateClass';
import {AssignClass} from './Components/Pages/AssignClass';
import {PaginaInicio} from './Components/Pages/PaginaInicio';
import {PaginaNoticias} from './Components/Pages/PaginaNoticias';
import {PaginaTutoriales} from './Components/Pages/PaginaTutoriales';
import {PaginaBancoRecursos} from './Components/Pages/PaginaBancoRecursos';
import {Paginadirectorio} from './Components/Pages/PaginaDirectorio';
import {PaginaSoporte} from './Components/Pages/PaginaSoporte';
import {PaginaTablon} from './Components/Pages/PaginaTablon';
import {AdminHome} from './Components/Pages/AdminHome';
import { HomeworkPage } from './Components/Pages/HomeworkPage';
import { AssignmentPage } from './Components/Pages/AssignmentPage';
import { AdminHomeworkPage } from './Components/Pages/AdminHomeworkPage';
import { AdminPaginaTablon } from './Components/Pages/AdminPaginaTablon';
import { AdminPaginaNoticias } from './Components/Pages/AdminPaginaNoticias';
import { AdminPaginaCalendario } from './Components/Pages/AdminPaginaCalendario';
import { AdminPaginaTutoriales } from './Components/Pages/AdminPaginaTutoriales';
import { AdminPaginaBancoRecursos } from './Components/Pages/AdminPaginaBancoRecursos';
import { AdminPaginaDirectorio } from './Components/Pages/AdminPaginaDirectorio';
import { ProfilePage } from './Components/Pages/ProfilePage';
import { AdminProfilePage } from './Components/Pages/AdminProfilePage';
import { ZoomLink } from './Components/Pages/Zoomlink';
import { ExcelTable } from './Components/Pages/ExcelTable';
import { UploadExcel } from './Components/Pages/UploadExcel';
import { Directorio } from './Components/Pages/Directorio';
import AssignmentPagePDF from './Components/Pages/AssignmentPagePDF';
import GradeHomework from './Components/Pages/GradeHomework';
import CalendarPage from './Components/Pages/CalendarPage';
import CalendarPageStudent from './Components/Pages/CalenderPageStudent';
import { DirectorioStudent } from './Components/Pages/DirectorioStudent';
import ZoomPage from './Components/Pages/ZoomPage';
import AdminZoomPage from './Components/Pages/AdminZoomPage';
import { AdminPaginaContenido } from './Components/Pages/AdminPaginaContenido';
import { PaginaContenido } from './Components/Pages/PaginaContenido';

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pagina-inicio" element={<PaginaInicio />} />
          <Route path="/pagina-noticias" element={<PaginaNoticias />} />
          <Route path="/calendar-page" element={<CalendarPage />} />
          <Route path="/calendar-page-s" element={<CalendarPageStudent />} />
          <Route path="/pagina-tutoriales" element={<PaginaTutoriales />} />
          <Route path="/pagina-bancoRecursos" element={<PaginaBancoRecursos />} />
          <Route path="/pagina-directorio" element={<Paginadirectorio />} />
          <Route path="/pagina-soporte" element={<PaginaSoporte />} />
          <Route path="/pagina-tablon" element={<PaginaTablon/>} />
          <Route path="/pagina-zoom" element={<ZoomPage/>} />
          <Route path="/pagina-contenido" element={<PaginaContenido/>} />
          <Route path="/a-pagina-zoom" element={<AdminZoomPage/>} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/create-class" element={<CreateClass />} />
          <Route path="/assign-class" element={<AssignClass />} />
          <Route path="/zoom-link" element={<ZoomLink />} />
          <Route path="/upload-excel" element={<UploadExcel />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/excel-table" element={<ExcelTable />} />
          <Route path="/pagina-tareas" element={<HomeworkPage />} />
          <Route path="/pagina-entregables" element={<AssignmentPage />} />
          <Route path="/pagina-entregables-pdf" element={<AssignmentPagePDF />} />
          <Route path="/a-pagina-tareas" element={<AdminHomeworkPage />} />
          <Route path="/a-pagina-tablon" element={<AdminPaginaTablon />} />
          <Route path="/a-pagina-noticias" element={<AdminPaginaNoticias />} />
          <Route path="/a-pagina-calendario" element={<AdminPaginaCalendario />} />
          <Route path="/a-pagina-tutoriales" element={<AdminPaginaTutoriales />} />
          <Route path="/a-pagina-bancoRecursos" element={<AdminPaginaBancoRecursos />} />
          <Route path="/a-pagina-directorio" element={<AdminPaginaDirectorio />} />
          <Route path="/a-pagina-contenido" element={<AdminPaginaContenido />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/a-profile-page" element={<AdminProfilePage />} />
          <Route path="/directory" element={<Directorio />} />
          <Route path="/directory-s" element={<DirectorioStudent />} />
          <Route path="/grade-homework" element={< GradeHomework/>} />
        </Routes> 
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;