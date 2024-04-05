//import logo from './logo.svg';
import './App.css';
import {Login} from './Components/Pages/Login';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicio from './Components/Pages/PaginaInicio';
import PaginaNoticias from './Components/Pages/PaginaNotiacias';
import PaginaCalendario from './Components/Pages/PaginaCalendario';
import PaginaTutoriales from './Components/Pages/PaginaTutoriales';
import PaginaBancoRecursos from './Components/Pages/PaginaBancoRecursos';
import Paginadirectorio from './Components/Pages/PaginaDirectorio';
import PaginaSoporte from './Components/Pages/PaginaSoporte';
import PaginaTablon from './Components/Pages/PaginaTablon';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Login />} />
          <Route path="pagina-inicio" element={<PaginaInicio />} />
          <Route path="pagina-noticias" element={<PaginaNoticias />} />
          <Route path="pagina-calendario" element={<PaginaCalendario />} />
          <Route path="pagina-tutoriales" element={<PaginaTutoriales />} />
          <Route path="pagina-bancoRecursos" element={<PaginaBancoRecursos />} />
          <Route path="pagina-directorio" element={<Paginadirectorio />} />
          <Route path="pagina-soporte" element={<PaginaSoporte />} />
          <Route path="pagina-tablon" element={<PaginaTablon/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;