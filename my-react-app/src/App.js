//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from './Components/Pages/Login';
import { HomeTest } from './Components/Pages/HomeTest'; //REPLACE
import {CreateUser} from './Components/Pages/CreateUser';
import {UpdateUser} from './Components/Pages/UpdateUser';
import {PaginaInicio} from './Components/Pages/PaginaInicio';
import {PaginaNoticias} from './Components/Pages/PaginaNotiacias';
import {PaginaCalendario} from './Components/Pages/PaginaCalendario';
import {PaginaTutoriales} from './Components/Pages/PaginaTutoriales';
import {PaginaBancoRecursos} from './Components/Pages/PaginaBancoRecursos';
import {Paginadirectorio} from './Components/Pages/PaginaDirectorio';
import {PaginaSoporte} from './Components/Pages/PaginaSoporte';
import {PaginaTablon} from './Components/Pages/PaginaTablon';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="Salmon-Frontend/" element={<Login />} />
          <Route path="Salmon-Frontend/pagina-inicio" element={<PaginaInicio />} />
          <Route path="Salmon-Frontend/pagina-noticias" element={<PaginaNoticias />} />
          <Route path="Salmon-Frontend/pagina-calendario" element={<PaginaCalendario />} />
          <Route path="Salmon-Frontend/pagina-tutoriales" element={<PaginaTutoriales />} />
          <Route path="Salmon-Frontend/pagina-bancoRecursos" element={<PaginaBancoRecursos />} />
          <Route path="Salmon-Frontend/pagina-directorio" element={<Paginadirectorio />} />
          <Route path="Salmon-Frontend/pagina-soporte" element={<PaginaSoporte />} />
          <Route path="Salmon-Frontend/pagina-tablon" element={<PaginaTablon/>} />
          <Route path="Salmon-Frontend/home-page" element={<HomeTest />} />
          <Route path="Salmon-Frontend/create-user" element={<CreateUser />} />
          <Route path="Salmon-Frontend/update-user" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;