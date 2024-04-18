//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './Components/Pages/DataContext';
import {Login} from './Components/Pages/Login';
import { HomeTest } from './Components/Pages/HomeTest'; //REPLACE
import {CreateUser} from './Components/Pages/CreateUser';
import {UpdateUser} from './Components/Pages/UpdateUser';
import {CreateClass} from './Components/Pages/CreateClass';
import {PaginaInicio} from './Components/Pages/PaginaInicio';
import {PaginaNoticias} from './Components/Pages/PaginaNoticias';
import {PaginaCalendario} from './Components/Pages/PaginaCalendario';
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

function App() {

  return (
    <DataProvider>
      <BrowserRouter basename='Salmon-Frontend'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pagina-inicio" element={<PaginaInicio />} />
          <Route path="/pagina-noticias" element={<PaginaNoticias />} />
          <Route path="/pagina-calendario" element={<PaginaCalendario />} />
          <Route path="/pagina-tutoriales" element={<PaginaTutoriales />} />
          <Route path="/pagina-bancoRecursos" element={<PaginaBancoRecursos />} />
          <Route path="/pagina-directorio" element={<Paginadirectorio />} />
          <Route path="/pagina-soporte" element={<PaginaSoporte />} />
          <Route path="/pagina-tablon" element={<PaginaTablon/>} />
          <Route path="/home-page" element={<HomeTest />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/create-class" element={<CreateClass />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/pagina-tareas" element={<HomeworkPage />} />
          <Route path="/pagina-entregables" element={<AssignmentPage />} />
          <Route path="/a-pagina-tareas" element={<AdminHomeworkPage />} />
          <Route path="/a-pagina-tablon" element={<AdminPaginaTablon />} />
          <Route path="/a-pagina-noticias" element={<AdminPaginaNoticias />} />
          <Route path="/a-pagina-calendario" element={<AdminPaginaCalendario />} />
          <Route path="/a-pagina-tutoriales" element={<AdminPaginaTutoriales />} />
          <Route path="/a-pagina-bancoRecursos" element={<AdminPaginaBancoRecursos />} />
          <Route path="/a-pagina-directorio" element={<AdminPaginaDirectorio />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/a-profile-page" element={<AdminProfilePage />} />
        </Routes> 
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;