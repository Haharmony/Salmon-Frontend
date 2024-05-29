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
import { TeacherHome } from './Components/Pages/TeacherHome';
import TeacherCalendar from './Components/Pages/TeacherCalendar';
import { TeacherTutorials } from './Components/Pages/TeacherTutorials';
import { TeacherDirectory } from './Components/Pages/TeacherDirectory';
import { TeacherAssignment } from './Components/Pages/TeacherAssignment';
import TeacherAssignmentPDF from './Components/Pages/TeacherAssignmentPDF';
import { TeacherProfile } from './Components/Pages/TeacherProfile';
import { TeacherTablon } from './Components/Pages/TeacherTablon';
import { TeacherContent } from './Components/Pages/TeacherContent';
import { TeacherHomework } from './Components/Pages/TeacherHomework';
import TeacherGradeHomework from './Components/Pages/TeacherGradeHomework';
import TeacherZoom from './Components/Pages/TeacherZoom';
import { MonitorHome } from './Components/Pages/MonitorHome';
import MonitorCalendar from './Components/Pages/MonitorCalendar';
import { MonitorProfile } from './Components/Pages/MonitorProfile';
import MonitorAssignmentPDF from './Components/Pages/MonitorAssignmentPDF';
import { MonitorDirectory } from './Components/Pages/MonitorDirectory';
import MonitorGradeHomework from './Components/Pages/MonitorGradeHomework';
import { MonitorTablon } from './Components/Pages/MonitorTablon';
import { MonitorHomework } from './Components/Pages/MonitorHomework';
import { MonitorTutorials } from './Components/Pages/MonitorTutorials';
import { MonitorContent } from './Components/Pages/MonitorContent';
import { PaginaCertificado } from './Components/Pages/PaginaCertificado';
import { CrearCertificado } from './Components/Pages/CrearCertificado';
import AdminFormF from './Components/Pages/AdminFormF';
import AdminForm from './Components/Pages/AdminForm';
import TeacherForm from './Components/Pages/TeacherForm';
import TeacherFormF from './Components/Pages/TeacherFormF';
import StudentForm from './Components/Pages/StudentForm';
import StudentFormF from './Components/Pages/StudentFormF';
import MonitorForm from './Components/Pages/MonitorForm';
import MonitorFormF from './Components/Pages/MonitorFormF';
import { AdminDeleteCourse } from './Components/Pages/AdminDeleteCourse';

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
          <Route path="/pagina-content" element={<PaginaContenido/>} />
          <Route path="/a-pagina-zoom" element={<AdminZoomPage/>} />
          <Route path="/pagina-constancia" element={<PaginaCertificado/>} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/create-class" element={<CreateClass />} />
          <Route path="/assign-class" element={<AssignClass />} />
          <Route path="/zoom-link" element={<ZoomLink />} />
          <Route path="/upload-excel" element={<UploadExcel />} />
          <Route path="/create-cert" element={<CrearCertificado />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/excel-table" element={<ExcelTable />} />
          <Route path="/pagina-tareas" element={<HomeworkPage />} />
          <Route path="/pagina-entregables" element={<AssignmentPage />} />
          <Route path="/pagina-entregables-pdf" element={<AssignmentPagePDF />} />
          <Route path="/a-pagina-tareas" element={<AdminHomeworkPage />} />
          <Route path="/a-pagina-tablon" element={<AdminPaginaTablon />} />
          <Route path="/a-pagina-noticias" element={<AdminPaginaNoticias />} />
          <Route path="/a-pagina-tutoriales" element={<AdminPaginaTutoriales />} />
          <Route path="/a-pagina-bancoRecursos" element={<AdminPaginaBancoRecursos />} />
          <Route path="/a-pagina-directorio" element={<AdminPaginaDirectorio />} />
          <Route path="/a-pagina-content" element={<AdminPaginaContenido />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/a-profile-page" element={<AdminProfilePage />} />
          <Route path="/directory" element={<Directorio />} />
          <Route path="/directory-s" element={<DirectorioStudent />} />
          <Route path="/grade-homework" element={< GradeHomework/>} />
          <Route path="/teacher-home" element={< TeacherHome/>} />
          <Route path="/t-calendar-page" element={< TeacherCalendar/>} />
          <Route path="/t-pagina-tutoriales" element={< TeacherTutorials/>} />
          <Route path="/t-directory" element={< TeacherDirectory/>} />
          <Route path="/t-pagina-entregables" element={< TeacherAssignment/>} />
          <Route path="/t-pagina-entregables-pdf" element={< TeacherAssignmentPDF/>} />
          <Route path="/t-profile-page" element={< TeacherProfile/>} />
          <Route path="/t-pagina-tablon" element={< TeacherTablon/>} />
          <Route path="/t-pagina-content" element={< TeacherContent/>} />
          <Route path="/t-pagina-tareas" element={< TeacherHomework/>} />
          <Route path="/t-grade-homework" element={< TeacherGradeHomework/>} />
          <Route path="/t-pagina-zoom" element={< TeacherZoom/>} />
          <Route path="/monitor-home" element={< MonitorHome/>} />
          <Route path="/m-calendar-page" element={< MonitorCalendar/>} />
          <Route path="/m-profile-page" element={< MonitorProfile/>} />
          <Route path="/m-pagina-entregables-pdf" element={< MonitorAssignmentPDF/>} />
          <Route path="/m-directory" element={< MonitorDirectory/>} />
          <Route path="/m-pagina-tablon" element={< MonitorTablon/>} />
          <Route path="/m-grade-homework" element={< MonitorGradeHomework/>} />
          <Route path="/m-pagina-tareas" element={< MonitorHomework/>} />
          <Route path="/m-pagina-tutoriales" element={< MonitorTutorials/>} />
          <Route path="/m-pagina-content" element={< MonitorContent/>} />
          <Route path="/a-pagina-evaluacion" element={< AdminFormF/>} />
          <Route path="/a-pagina-evaluacionfi" element={< AdminForm/>} />
          <Route path="/t-pagina-evaluacion" element={< TeacherForm/>} />
          <Route path="/t-pagina-evaluacionfi" element={< TeacherFormF/>} />
          <Route path="/pagina-evaluacion" element={< StudentForm/>} />
          <Route path="/pagina-evaluacionfi" element={< StudentFormF/>} />
          <Route path="/m-pagina-evaluacion" element={< MonitorForm/>} />
          <Route path="/m-pagina-evaluacionfi" element={< MonitorFormF/>} />
          <Route path="/a-delete-course" element={< AdminDeleteCourse/>} />
        </Routes> 
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;