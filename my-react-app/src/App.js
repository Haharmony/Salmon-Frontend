//import logo from './logo.svg';
import './App.css';
import {Login} from './Components/Pages/Login';
import { HomeTest } from './Components/Pages/HomeTest'; //REPLACE
import {CreateUser} from './Components/Pages/CreateUser';
import {UpdateUser} from './Components/Pages/UpdateUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Login />} />
          <Route path="home-page" element={<HomeTest />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="update-user" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;