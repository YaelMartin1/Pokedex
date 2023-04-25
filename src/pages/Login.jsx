import { collection, where, getDocs, query } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../app'
import ArcadeButton from '../components/ArcadeButton'
import Pokeball from '../components/Pokeball'
import firebase from '../config/firebase'

const Login = () => {
  const [logInForm, setLogInForm] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const { handleLogin } = useContext(userContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(logInForm.email, logInForm.password)
      if (response.user.uid) {
        const q = query(
          firebase
            .firestore()
            .collection('usuarios')
            .where('userId', '==', response.user.uid)
        )

        const doc = await getDocs(q)
        handleLogin(doc.docs[0].data())
        navigate('/')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setLogInForm((current) => ({ ...current, [name]: value }))
  }
  return (
    <main className='w-screen h-screen flex items-center justify-center'>
      <section className='bg-base rounded p-16 min-w-[50vw] border-2 border-black'>
        <form
          onSubmit={handleSubmit}
          className='font-arcade flex flex-col h-full w-full gap-10'
        >
          {/* Name */}
          <div className='relative flex items-center border-2 rounded-lg ml-3 pl-12'>
            <div className='absolute -left-6'>
              <Pokeball size={5.2} />
            </div>
            <div className='flex flex-col relative  rounded-lg px-5 py-2 w-full'>
              <label htmlFor='name' className='select-none'>
                ¿Cuál es tu correo electrónico?
              </label>
              <input
                type='text'
                value={logInForm.email}
                onChange={handleChange}
                name='email'
                className='border text-sm p-1.5 rounded-md ring-0 w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white '
              />
            </div>
          </div>

          {/* Password */}
          <div className='relative flex items-center border-2 rounded-lg mr-3 pr-12'>
            <div className='absolute -right-6'>
              <Pokeball size={5.2} />
            </div>
            <div className='flex flex-col relative  rounded-lg px-5 py-2 w-full'>
              <label htmlFor='name' className='select-none'>
                ¿Cuál es tu contraseña?
              </label>
              <input
                type='password'
                value={logInForm.password}
                onChange={handleChange}
                name='password'
                placeholder='****'
                className='border text-sm p-1.5 rounded-md ring-0 w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white '
              />
            </div>
          </div>

          {/* SignIn */}
          <div>
            <p>
              ¿No sabes quien sos? has{' '}
              <Link to='/sign-in' className='text-blue-400 hover:text-blue-500'>
                click aquí
              </Link>{' '}
              para registrarte...
            </p>
          </div>
          <div className='flex gap-5'>
            <ArcadeButton color='blue'>
              <Link to='/'>
                <p className='p-5 px-2'>Volver</p>
              </Link>
            </ArcadeButton>
            <ArcadeButton color='red'>
              <p className='p-5 px-2'>Enviar</p>
            </ArcadeButton>
          </div>
        </form>
      </section>
    </main>
  )
}
export default Login
