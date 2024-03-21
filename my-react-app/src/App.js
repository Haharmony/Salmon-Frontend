//import logo from './logo.svg';
import './App.css';
import {Login} from './Components/Pages/Login';
import { HomeTest } from './Components/Pages/HomeTest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Login />} />
          <Route path="home-page" element={<HomeTest />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;