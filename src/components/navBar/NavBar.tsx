import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';


function Navbar() {
 let navigate = useNavigate();
  
 const {usuario, handleLogout}= useContext(AuthContext)

 function logout(){
  handleLogout()
  alert("Usuario Deslogado com sucesso")
  navigate('/login')
 }

 let navComponent

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-5'>
          <div className="container flex justify-between text-lg">
            <div className='text-3xl font-bold uppercase'>Blog Pessoal</div>

            <div className='flex gap-5'>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Postagens</div>
              <Link to='/temas' className='hover:underline'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
              <div className='hover:underline'>Perfil</div>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar