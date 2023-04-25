import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArcadeButton from '../components/ArcadeButton'
import Pokeball from '../components/Pokeball'
import firebase from '../config/firebase'

const SignIn = () => {
  const [signInForm, setSignInForm] = useState({
    name: '',
    email: '',
    password: '',
    rePassword: '',
  })

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(signInForm.email, signInForm.password)
      if (!newUser.user.uid) return
      const document = await firebase.firestore().collection('usuarios').add({
        name: signInForm.name,
        email: signInForm.email,
        userId: newUser.user.uid,
      })
      if (!document) return
      navigate('/login')
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setSignInForm((current) => ({ ...current, [name]: value }))
  }

  return (
    <main className='w-screen h-screen flex items-center justify-center'>
      <section className='bg-base rounded p-10 min-w-[50vw] '>
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
                ¿Cuál es tu nombre?
              </label>
              <input
                type='text'
                value={signInForm.name}
                onChange={handleChange}
                placeholder='Ej: pokefan'
                name='name'
                className='border text-sm p-1.5 rounded-md ring-0 w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white '
              />
            </div>
          </div>

          {/* Email */}
          <div className='relative flex items-center border-2 rounded-lg mr-3 pr-12'>
            <div className='absolute -right-6'>
              <Pokeball size={5.2} />
            </div>
            <div className='flex flex-col relative  rounded-lg px-5 py-2 w-full'>
              <label htmlFor='name' className='select-none'>
                ¿Cuál es tu coreo electrónico?
              </label>
              <input
                type='text'
                value={signInForm.email}
                onChange={handleChange}
                name='email'
                placeholder='Ej: pokefan@gmail.com'
                className='border text-sm p-1.5 rounded-md ring-0 w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white '
              />
            </div>
          </div>

          {/* RePassword */}
          <div className='relative flex items-center border-2 rounded-lg ml-3 pl-12'>
            <div className='absolute -left-6'>
              <Pokeball size={5.2} />
            </div>
            <div className='flex flex-col relative  rounded-lg px-5 py-2 w-full'>
              <label htmlFor='name' className='select-none'>
                ¿Cuál es tu contraseña?
              </label>
              <input
                type='password'
                value={signInForm.password}
                onChange={handleChange}
                name='password'
                placeholder='****'
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
                Confirma tu contraseña
              </label>
              <input
                type='password'
                value={signInForm.rePassword}
                onChange={handleChange}
                name='rePassword'
                placeholder='****'
                className='border text-sm p-1.5 rounded-md ring-0 w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white '
              />
            </div>
          </div>

          <div className='flex gap-5'>
            <ArcadeButton color='blue'>
              <Link to='/'>
                <p className='p-5 px-2'>Volver</p>
              </Link>
            </ArcadeButton>
            <ArcadeButton>
              <p className='p-5 px-2'>Enviar</p>
            </ArcadeButton>
          </div>
        </form>
      </section>
    </main>
  )
}
export default SignIn
