import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navBar/NavBar';
import { AuthProvider } from './contexts/AuthContext';
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTema/FormularioTema';

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              {/* <Route path="/cadastroTema" element={<Cadastro Tema />} />
              <Route path="/editarTema" element={<Cadastro Tema />} />
              <Route path="/deletarTema" element={<Cadastro Tema />} /> 
              */}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
     );
    }
    export default App;