import Pokeball from './Pokeball'
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { userContext } from '../app'
import { useContext } from 'react'
const Header = () => {
  const { user, handleLogout } = useContext(userContext)
  return (
    <nav className='sticky top-0 w-full px-5 flex items-center justify-between bg-base h-14 z-40'>
      <ul className='flex gap-5'>
        <m.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to='/'
            className='flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors'
          >
            <Pokeball /> Inicio
          </Link>
        </m.li>
      </ul>
      <ul className='flex gap-5 text-xs'>
        {user ? (
          <>
            <li>
              Bienvenido <strong className='text-red-500'>{user.name}</strong>
            </li>
            <li>
              <button onClick={handleLogout}>salir</button>
            </li>
          </>
        ) : (
          <>
            <m.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to='/login'
                className='flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors'
              >
                Iniciar Sesión
              </Link>
            </m.li>
            <m.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to='/sign-in'
                className='flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors'
              >
                Registrarse
              </Link>
            </m.li>
          </>
        )}
      </ul>
    </nav>
  )
}
export default Header
